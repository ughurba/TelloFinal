import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/joy/TextField";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useCreateRoleMutation } from "services/adminServices/userServices";
import { toast } from "react-toastify";

export function BasicModalDialog() {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");
  const [postRole, { isSuccess }] = useCreateRoleMutation();

  const { t } = useTranslation();
  useEffect(() => {
    if (isSuccess) {
      toast.success(`"${term}"-adli role elave olundu`);
    }
  }, [isSuccess]);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        startIcon={<Add />}
        onClick={() => setOpen(true)}
      >
        {t("AddRole")}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            {t("EnterTheRoll")}
          </Typography>

          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
              postRole({ role: term });
            }}
          >
            <Stack spacing={2}>
              <TextField
                onChange={(e) => setTerm(e.target.value)}
                label="Role Name"
                autoFocus
                required
              />
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
