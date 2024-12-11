import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import toast from "react-hot-toast";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("/api/logout");
      if (response.status === 200) {
        toast.success("Logged out successfully!");
        navigate.push("/admin/login");
      }
    } catch (error) {
      toast.error("Something went wrong while logging out!");
    }
  };

  return (
    <div>
      <div
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-4 max-sm:justify-end">
          <div className="">
            <Avatar sx={{ bgcolor: "#37414D" }}>G</Avatar>
          </div>
          <div
            className="font-medium max-sm:hidden"
            style={{ lineHeight: "20px" }}
          >
            <p className="text-[#399EFD] font-medium">Gaurang</p>
            <p className="text-sm text-[#17263A] text-left">Super Admin</p>
          </div>

          <div className="max-sm:hidden">
            <KeyboardArrowDownIcon className="text-[#399EFD] text-[35px]" />
          </div>
        </div>
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleLogout}
          disableRipple
          className="gap-[10px]"
          sx={{
            "&:hover": {
              color: "#399EFD", // Change text color on hover
              "& .MuiSvgIcon-root": {
                color: "#399EFD", // Change icon color on hover
              },
            },
          }}
        >
          <LogoutIcon className="!text-red-600" />
          Sign Out
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
