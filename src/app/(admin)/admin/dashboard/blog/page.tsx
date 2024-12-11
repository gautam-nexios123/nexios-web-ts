"use client"
import { Button } from "@mui/material";
import React, { useState } from "react";
import FullScreenModel from "./FullScreenModel";

const BlogPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Blog Page</h1>
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
            padding: "13px 25px",
            borderRadius: "25px",
            fontSize: { xs: "12px", sm: "13px" },
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          Add Blog
        </Button>
      </div>
      <div>
        <FullScreenModel open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default BlogPage;
