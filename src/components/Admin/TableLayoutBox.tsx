import React from "react";
import { Box } from "@mui/material";
// import useWindowHeight from "./customHooks/useWindowHeight";
import useWindowWidth from "./customHooks/useWindowWidth";

const TableLayoutBox = (props: any) => {
  // const windowHeight = useWindowHeight();
  const windowWidth = useWindowWidth();
  return (
    <Box
      sx={{
        width: { xs: `${windowWidth - 49}px`, lg: "auto" },
        // height: `${windowHeight - 330}px`,
        overflow: "auto",
      }}
    >
      {props.children}
    </Box>
  );
};

export default TableLayoutBox;
