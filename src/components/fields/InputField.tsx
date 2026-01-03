import { TextField, TextFieldProps } from "@mui/material";
import {
  Controller,
  ControllerProps,
  FieldValues,
  FieldPath,
} from "react-hook-form";

export interface InputFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, "render" | "rules"> {
  renderProps?: TextFieldProps;
}

const InputField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  renderProps,
  ...controllerProps
}: InputFieldProps<TFieldValues, TName>) => {
  return (
    <Controller
      {...controllerProps}
      render={({ field, fieldState }) => (
        <TextField error={!!fieldState.error} {...field} {...renderProps} />
      )}
    />
  );
};

export default InputField;
