import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
