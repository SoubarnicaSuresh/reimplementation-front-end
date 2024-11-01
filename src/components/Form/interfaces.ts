import React, { ElementType, ReactNode } from "react";

/**
 * @author Ankur Mundra on May, 2023
 */
export interface IFormProps {
  name: string;
  label?: string;
  type?: string;
  controlId: string;
  placeholder?: string;
  as?: ElementType;
  md?: number | string;
  disabled?: boolean;
  tooltip?: string;
  tooltipPlacement?: "top" | "right" | "bottom" | "left";
  inputGroupPrepend?: ReactNode;
  inputGroupAppend?: ReactNode;
  rows?: number; // rows would be passed as part of props now
}

export interface IFormOption {
  label: string;
  value: string | number;
}

export interface IFormPropsWithOption extends IFormProps {
  options: IFormOption[];
}

export interface IFormikFieldProps {
  field: any;
  form: any;
}
