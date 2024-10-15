import { ChangeEvent } from "react";

export default function requiredMsg(
  e: ChangeEvent<HTMLInputElement>,
  state: string,
  field: string,
  fieldName: string,
  message: string
) {
  if (state == "" && field == `${fieldName}`) {
    e.target.setCustomValidity(`${message}`);
    return;
  }
}
