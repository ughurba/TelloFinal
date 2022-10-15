// import { DropQuestion } from "./components/dropDownQuestion";
//
import { Flex, Container, Loader } from "../../Components/shared";
import { Title, Wrapper } from "./style";
// import { FC } from "react";
// import { useTranslation } from "react-i18next";
//
// export const Question: FC = () => {
//   const { t } = useTranslation();
//   return (
//     <Wrapper>
//       <Container>
//         <Flex FlexColumn={"column"} JsContent={"center"} AlItems={"center"}>
//           <Title>{t("QuickGiveQuestions")}</Title>
//           <DropQuestion />
//           <DropQuestion />
//           <DropQuestion />
//           <DropQuestion />
//           <DropQuestion />
//           <DropQuestion />
//           <DropQuestion />
//           <DropQuestion />
//         </Flex>
//       </Container>
//     </Wrapper>
//   );
// };
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import { useGetAllFagsQuery } from "../../services/baseServices/fagServices";

export const Question = () => {
  const { data, isLoading } = useGetAllFagsQuery();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { t } = useTranslation();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Flex AlItems="center" JsContent="center" FlexColumn="column">
            <Title>{t("QuickGiveQuestions")}</Title>
            {data?.map((item) => (
              <Accordion
                TransitionProps={{ unmountOnExit: true }}
                expanded={expanded === item.id.toString()}
                onChange={handleChange(item.id.toString())}
                sx={{ width: "80%", flexShrink: 0 }}
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
              </Accordion>
            ))}
          </Flex>
        </Wrapper>
      )}
    </>
  );
};
