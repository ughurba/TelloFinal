import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "Redux/hooks";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  extendedUserApi,
  useGetAllRolesQuery,
  useRemoveRoleMutation,
} from "services/adminServices/userServices";
import styled from "styled-components";

const WrapperButton = styled.div`
  margin-top: 10px;
`;
export function RemoveRoleModal() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { data, refetch: getAllRoles, isLoading } = useGetAllRolesQuery();
  const [deleteRole, { isSuccess }] = useRemoveRoleMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Role silindi");
      dispatch(extendedUserApi.util.resetApiState());
      setOpen(false);
    }
    return () => getAllRoles();
  }, [isSuccess]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      Roles: data ? data[0].name : "",
    },

    onSubmit: (values) => {
      deleteRole({ id: values.Roles });
    },
  });

  return (
    <>
      <Button
        startIcon={<RemoveCircleIcon />}
        size="small"
        variant="contained"
        onClick={handleClickOpen}
      >
        Rol silmek
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            onSubmit={formik.handleSubmit}
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="Roles">Roles</InputLabel>
              <Select
                autoFocus
                value={formik.values.Roles}
                onChange={formik.handleChange}
                label="Roles"
                inputProps={{
                  name: "Roles",
                  id: "Roles",
                }}
              >
                {data?.map((role) => (
                  <MenuItem key={role.id} value={role.id}>
                    {role.name}
                  </MenuItem>
                ))}
              </Select>
              <WrapperButton>
                <Button variant="outlined" type="submit">
                  Remove
                </Button>
              </WrapperButton>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
