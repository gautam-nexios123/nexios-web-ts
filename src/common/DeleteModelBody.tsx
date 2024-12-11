import { Box, Button } from "@mui/material";
import React from "react";

const DeleteModelBody = ({ setOpen, handleDelete , label }: any) => {
  return (
    <div className="bg-white py-4 px-[30px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Delete {label}</h1>
      </div>

      <p className="text-black text-[16px] font-medium">
        Are you sure want to delete ?
      </p>

      <Box className="flex items-center mt-[16px] justify-start gap-[20px] max-sm:flex-col ">
        <Button
          variant="contained"
          sx={{
            background: "#ffffff",
            boxShadow:
              "6.22px 6.22px 15px 0px #0000001A,-6.22px -6.22px 15px 0px #F9FCFF",
            padding: "7px 20px",
            color: "#454545",
            textTransform: "unset",
          }}
          className="max-sm:w-full hover:!bg-transparent"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            padding: "7px 20px",
            textTransform: "unset",
          }}
          className="max-sm:w-full !bg-red-500"
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
      </Box>
    </div>
  );
};

export default DeleteModelBody;
