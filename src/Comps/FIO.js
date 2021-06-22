import { TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

export default function FIO() {
  const { register } = useForm();
  return (
    <div>
      <div>
        <TextField
          id="outlined-surname"
          label="Фамилия"
          variant="outlined"
          {...register("surname")}
        />
      </div>
      <div>
        <TextField
          id="outlined-name"
          label="Имя"
          variant="outlined"
          {...register("name")}
        />
      </div>
      <div>
        <TextField
          id="outlined-patronymic"
          label="Отчество"
          // defaultValue="Default Value"
          helperText="Заполните при наличии"
          variant="outlined"
          {...register("patronymic")}
        />
      </div>
    </div>
  );
}
