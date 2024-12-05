"use client";
import { styled } from "@mui/material";
import DrawerBox from "../../../../components/drawer/Index";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function RootLayout({ children }: any) {
  return (
    <div className="min-h-screen">
      <DrawerBox>
        <DrawerHeader />
        <div>{children}</div>
      </DrawerBox>
    </div>
  );
}
