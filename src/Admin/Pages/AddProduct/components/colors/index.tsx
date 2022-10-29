import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Autocomplete, {
  AutocompleteCloseReason,
  autocompleteClasses,
} from "@mui/material/Autocomplete";
import { Palette } from "phosphor-react";
import Box from "@mui/material/Box";
import { Button, StyledInput, StyledPopper } from "./style";
import { FC } from "react";
import { useAppDispatch } from "Redux/hooks";
import { useTranslation } from "react-i18next";

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === "light" ? " #eaecef" : "#30363d"
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent",
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));

function PopperComponent(props: PopperComponentProps) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

interface Props {
  onChange: (ev: any, value: any, reason: any) => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  value: string[];
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  pendingValue: string[];
}
export const GitHubLabel: FC<Props> = ({
  onChange,
  handleClick,
  value,
  handleClose,
  anchorEl,
  pendingValue,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const theme = useTheme();

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  return (
    <React.Fragment>
      <Box sx={{ width: 200, marginTop: 3 }}>
        <Button disableRipple aria-describedby={id} onClick={handleClick}>
          <span>{t("Colors")}</span>
          <Palette size={50} color="#30a67f" weight="duotone" />
        </Button>
        {value.map((label, index) => (
          <Box
            key={index}
            sx={{
              mt: "3px",
              height: 20,
              padding: ".15em 4px",
              fontWeight: 600,
              lineHeight: "15px",
              borderRadius: "2px",
            }}
            style={{
              backgroundColor: label,
              color: theme.palette.getContrastText(label),
            }}
          ></Box>
        ))}
      </Box>
      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Autocomplete
              open
              multiple
              onClose={(
                event: React.ChangeEvent<{}>,
                reason: AutocompleteCloseReason
              ) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              value={pendingValue}
              onChange={onChange}
              // (event, newValue, reason) => {
              // if (
              //   event.type === "keydown" &&
              //   (event as React.KeyboardEvent).key === "Backspace" &&
              //   reason === "removeOption"
              // ) {
              //   return;
              // }

              //setPendingValue(newValue);
              // }}
              disableCloseOnSelect
              PopperComponent={PopperComponent}
              renderTags={() => null}
              noOptionsText="No labels"
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Box
                    component={DoneIcon}
                    sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                    style={{
                      visibility: selected ? "visible" : "hidden",
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 14,
                      height: 14,
                      flexShrink: 0,
                      borderRadius: "3px",
                      mr: 1,
                      mt: "2px",
                    }}
                    style={{ backgroundColor: option }}
                  />

                  <Box
                    component={CloseIcon}
                    sx={{ opacity: 0.6, width: 18, height: 18 }}
                    style={{
                      visibility: selected ? "visible" : "hidden",
                    }}
                  />
                </li>
              )}
              options={[...labels].sort((a, b) => {
                // Display the selected labels first.
                let ai = value.indexOf(a);
                ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
                let bi = value.indexOf(b);
                bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
                return ai - bi;
              })}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <StyledInput
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Filter labels"
                  hidden
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </React.Fragment>
  );
};

const labels = [
  "#7057ff",
  "#008672",
  "#b60205",
  "#d93f0b",
  "#0e8a16",
  "#fec1c1",
  "#215cea",
  "#cfd3d7",
  "#fef2c0",
  "#eeeeee",
  "#d73a4a",
  "#d4c5f9",
  "#006b75",
  "#84b6eb",
  "#3e4b9e",
  "#fbca04",
  "#d876e3",
  "#333333",
  "#FFD700",
  "#000000",
  "#00FF00",
  "#FFFFFF",
  "#F8C471",
  "#1ABC9C",
];
