import { CircularProgress } from "@mui/material";
import React from "react";

const NoDataFound = ({ loading }: any) => {
  return (
    <tr className="w-full text-center">
      <td colSpan={12} className="py-[100px]">
        {loading ? <CircularProgress /> : "No data found"}
      </td>
    </tr>
  );
};

export default NoDataFound;
