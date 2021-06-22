import { TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

export default function Email() {
  const { register } = useForm();
  return (
    <div>
      <TextField
        id="outlined-mail"
        label="E-mail"
        variant="outlined"
        {...register("mail")}
      />
    </div>
  );
}
