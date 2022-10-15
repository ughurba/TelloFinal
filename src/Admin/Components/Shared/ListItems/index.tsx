import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LogoutIcon from "@mui/icons-material/Logout";
import { AdminLinks } from "../../../Routes/AdminLinks";
import { StyledLinks } from "./style";

import GroupIcon from "@mui/icons-material/Group";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const MainListItems = () => {
  return (
    <React.Fragment>
      <StyledLinks to={AdminLinks.base}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </StyledLinks>

      <StyledLinks to={AdminLinks.order}>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
      </StyledLinks>

      <StyledLinks to={AdminLinks.product}>
        <ListItemButton>
          <ListItemIcon>
            <ProductionQuantityLimitsIcon />
          </ListItemIcon>
          <ListItemText primary="Product" />
        </ListItemButton>
      </StyledLinks>
      <StyledLinks to={AdminLinks.user}>
        <ListItemButton>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      </StyledLinks>

      <StyledLinks to={AdminLinks.categoryAndBrand}>
        <ListItemButton>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Category ve Brend" />
        </ListItemButton>
      </StyledLinks>

      <StyledLinks to={AdminLinks.fag}>
        <ListItemButton>
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
          <ListItemText primary="Fag" />
        </ListItemButton>
      </StyledLinks>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClickLogout = () => {
    localStorage.removeItem("userAdminToken");
    navigate(AdminLinks.login);
  };
  return (
    <>
      <ListItemButton onClick={handleClickLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary={t("Logout")} />
      </ListItemButton>
    </>
  );
};
