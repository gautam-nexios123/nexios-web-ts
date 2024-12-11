"use client";
import { Dialog, styled } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
     borderRadius: "18px !important"
  },
}));

const DialogueComp = ({ children, open }: any) => {
  return (
    <>
      {/* Dialog */}
      <BootstrapDialog className="" open={open}>
        {children}
      </BootstrapDialog>
    </>
  );
};

export default DialogueComp;
