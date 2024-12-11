import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

export default function SidebarList() {
  const navigate = useRouter(); // Use navigate for programmatic navigation
  const pathName = usePathname(); // Use location to get current pathname

  const handleNavigation = (path) => {
    navigate.push(path); // Navigate when sub-items are clicked
  };

  const getTextColor = (path) => {
    return pathName === path ? "#399EFD" : "inherit"; // Match current pathname to highlight
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", padding: "0 10px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#399EFD" },
          color: getTextColor("/admin/dashboard/clientReview"),
          background:
            pathName === "/admin/dashboard/clientReview"
              ? "#0000000a"
              : "inherit",
        }}
        onClick={() => handleNavigation("/admin/dashboard/clientReview")} // Navigate on click
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          {/* <Dashboard width={"20"} color="grey" /> */}
        </ListItemIcon>
        <ListItemText primary="Client Review" />
      </ListItemButton>
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#399EFD" },
          color: getTextColor("/admin/dashboard/ourTeam"),
          background:
            pathName === "/admin/dashboard/ourTeam" ? "#0000000a" : "inherit",
        }}
        onClick={() => handleNavigation("/admin/dashboard/ourTeam")} // Navigate on click
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          {/* <Dashboard width={"20"} color="grey" /> */}
        </ListItemIcon>
        <ListItemText primary="Our Team" />
      </ListItemButton>
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#399EFD" },
          color: getTextColor("/admin/dashboard/portfolio"),
          background:
            pathName === "/admin/dashboard/portfolio" ? "#0000000a" : "inherit",
        }}
        onClick={() => handleNavigation("/admin/dashboard/portfolio")} // Navigate on click
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          {/* <Dashboard width={"20"} color="grey" /> */}
        </ListItemIcon>
        <ListItemText primary="Portfolio" />
      </ListItemButton>
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#399EFD" },
          color: getTextColor("/admin/dashboard/career"),
          background:
            pathName === "/admin/dashboard/career" ? "#0000000a" : "inherit",
        }}
        onClick={() => handleNavigation("/admin/dashboard/career")} // Navigate on click
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          {/* <Dashboard width={"20"} color="grey" /> */}
        </ListItemIcon>
        <ListItemText primary="Career" />
      </ListItemButton>
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#399EFD" },
          color: getTextColor("/admin/dashboard/blog"),
          background:
            pathName === "/admin/dashboard/blog" ? "#0000000a" : "inherit",
        }}
        onClick={() => handleNavigation("/admin/dashboard/blog")} // Navigate on click
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          {/* <Dashboard width={"20"} color="grey" /> */}
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton>
    </List>
  );
}
