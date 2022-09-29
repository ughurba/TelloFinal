import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AdminLinks } from "../../../Routes/AdminLinks";
import { StyledLinks } from "./style";

export const mainListItems = (
  <React.Fragment>
    <StyledLinks to={AdminLinks.base}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </StyledLinks>

    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <StyledLinks to={AdminLinks.product}>
      <ListItemButton>
        <ListItemIcon>
          <ProductionQuantityLimitsIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
      </ListItemButton>
    </StyledLinks>

    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/*<ListSubheader component="div" inset>*/}
    {/*  Saved reports*/}
    {/*</ListSubheader>*/}
    {/*<ListItemButton>*/}
    {/*  <ListItemIcon>*/}
    {/*    <AssignmentIcon />*/}
    {/*  </ListItemIcon>*/}
    {/*  <ListItemText primary="Current month" />*/}
    {/*</ListItemButton>*/}
    {/*<ListItemButton>*/}
    {/*  <ListItemIcon>*/}
    {/*    <AssignmentIcon />*/}
    {/*  </ListItemIcon>*/}
    {/*  <ListItemText primary="Last quarter" />*/}
    {/*</ListItemButton>*/}
    {/*<ListItemButton>*/}
    {/*  <ListItemIcon>*/}
    {/*    <AssignmentIcon />*/}
    {/*  </ListItemIcon>*/}
    {/*  <ListItemText primary="Year-end sale" />*/}
    {/*</ListItemButton>*/}
  </React.Fragment>
);
