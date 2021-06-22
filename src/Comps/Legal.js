import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

export default function Legal() {
  const { register } = useForm();
  return (
    <div>
      <FormControlLabel
        control={<Checkbox name="checkedC" {...register("legal")} />}
        label="Согласие на обработку персональных данных"
      />
    </div>
  );
}
