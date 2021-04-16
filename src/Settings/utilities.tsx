import { Rules } from "../components/Auth/Auth";

export const checkValidation = (value: string, rules: Rules) => {
  let isValid = true;
  if (rules.require) {
    isValid = value.trim() !== "" && isValid;
  }
  if (rules.isDefault) {
    isValid = value !== "Please select delivery method" && isValid;
  }
  if (rules.isDefault) {
    isValid = value !== "" && isValid;
  }
  return isValid;
};
