import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { AdminLinks } from "../../../Routes/AdminLinks";
import { StyledLinks } from "./style";

import GroupIcon from "@mui/icons-material/Group";

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

      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  return <></>;
};
