import { styled } from "@material-ui/system";
import { Tab, Tabs } from "@material-ui/core";
import React from "react";

export const CustomTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#606c38",
  },
});

interface StyledTabProps {
  label: string;
}

export const CustomTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  textTransform: "none",
  color: "#dda15e",
  fontWeight: "normal",

  "&:hover": {
    color: "#eece9f",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#283618",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#d1eaff",
  },
}));
