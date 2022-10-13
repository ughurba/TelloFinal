import * as React from "react";
import TextField from "@mui/joy/TextField";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import { FC, useEffect, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { Flex } from "Components/shared";

interface Props {
  label: string;
  isCheck?: boolean;
  title: string;
  btnName: string;
  postFn: (value: any) => void;
}
export const BasicModalDialog: FC<Props> = ({
  label,
  postFn,
  title,
  btnName,
  isCheck = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState<any>();
  const [check, setCheck] = useState<boolean>(false);
  const [obj, setObj] = useState<any>();

  useEffect(() => {
    setObj({
      Title: value,
      isActive: check,
    });
  }, [check, value]);
  return (
    <React.Fragment>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => setOpen(true)}
      >
        {btnName}
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
            {title}
          </Typography>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
              if (isCheck) {
                postFn(obj);
              } else {
                postFn(value);
              }
            }}
          >
            <Stack spacing={2}>
              <TextField
                label={label}
                onChange={(e) => setValue(e.target.value)}
                autoFocus
                required
              />
              {isCheck && (
                <Flex AlItems="center">
                  <p>isActive</p>
                  <Checkbox
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                      setCheck(ev.target.checked)
                    }
                  />
                </Flex>
              )}
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
};
