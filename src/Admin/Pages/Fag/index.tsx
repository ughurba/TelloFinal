import DeleteIcon from "@mui/icons-material/Delete";
import {
  Typography,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Flex, Loader } from "Components/shared";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useGetAllFagsQuery,
  useRemoveFagMutation,
} from "services/adminServices/adminFagServices";
import { Wrapper, Title, WrapperTrash } from "./style";
import { Button } from "Admin/Components/Shared/Button";
import { StyledLinks } from "Admin/Components/Shared/ListItems/style";
import { AdminLinks } from "Admin/Routes/AdminLinks";
import { Trash } from "phosphor-react";
import Swal from "sweetalert2";

export const Fag = () => {
  const { data, isLoading } = useGetAllFagsQuery();
  const [removeFag, { isSuccess }] = useRemoveFagMutation();
  const [expanded, setExpanded] = useState<string | false>(false);
  const { t } = useTranslation();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleRemoveFag = (id: number) => {
    Swal.fire({
      title: t("AreYouSure"),
      text: t("YouWontbeAbleToRevertThis"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFag(id);
      }
    });
  };
  useEffect(() => {
    if (isSuccess) {
      Swal.fire(t("SuccsessDelete"), "", "success");
    }
  }, [isSuccess]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          <StyledLinks to={AdminLinks.fagAdd}>
            <Button btnName="Fag elave etmek" />
          </StyledLinks>

          <Flex AlItems="center" JsContent="center" FlexColumn="column">
            <Title>{t("QuickGiveQuestions")}</Title>
            {data?.map((item) => (
              <Accordion
                TransitionProps={{ unmountOnExit: true }}
                expanded={expanded === item.id.toString()}
                onChange={handleChange(item.id.toString())}
                sx={{ width: "80%", flexShrink: 0 }}
                key={item.id}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography>{item.key}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.value}</Typography>
                </AccordionDetails>
                <WrapperTrash onClick={() => handleRemoveFag(item.id)}>
                  <Trash size={20} color="#30a67f" weight="duotone" />
                </WrapperTrash>
              </Accordion>
            ))}
          </Flex>
        </Wrapper>
      )}
    </>
  );
};
