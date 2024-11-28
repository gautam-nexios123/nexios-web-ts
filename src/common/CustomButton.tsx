import { CircularProgress } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  onSubmitButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor: string;
  textColor: string;
  btnWidth: string;
  text: string;
  process?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onSubmitButton,
  bgColor,
  textColor,
  btnWidth,
  text,
  process,
}) => {
  return (
    <button
      onClick={(e) => onSubmitButton(e)}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        width: btnWidth,
        borderRadius: "27px",
      }}
      className={`py-[8px] bg-black font-MuseoSans font-medium text-[15px] shadow-xl`}
    >
      {text}
      {process && (
        <span className="ml-2">
          <CircularProgress style={{ color: textColor }} size={18} />
        </span>
      )}
    </button>
  );
};

export default CustomButton;
