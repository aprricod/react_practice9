import { TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

export default function Password() {
  const { register } = useForm();
  return (
    <div>
      <TextField
        id="outlined-password-input"
        label="Пароль"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        {...register("password")}
      />
    </div>
  );
}
