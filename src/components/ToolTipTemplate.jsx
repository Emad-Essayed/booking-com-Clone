import { Grow, styled, Tooltip, tooltipClasses } from "@mui/material";
import React from "react";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip classes={{ popper: className }} {...props} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    opacity: "0.85",
    padding: 10,
    // color: "yellow",
  },
}));

const ToolTipTemplate = ({ title, children, ...props }) => {
  return (
    <>
      <CustomTooltip
        title={title}
        placement="top"
        TransitionComponent={Grow}
        TransitionProps={{ timeout: 400 }}
        {...props}
      >
        {children}
      </CustomTooltip>
    </>
  );
};

export default ToolTipTemplate;
