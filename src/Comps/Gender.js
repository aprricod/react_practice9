import { TextField } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import { useForm } from "react-hook-form";

const genders = [
  {
    value: "empty",
    label: "пол не указан",
  },
  {
    value: "male",
    label: "мужской",
  },
  {
    value: "female",
    label: "женский",
  },
];

export default function Gender() {
  const { register } = useForm();

  const [gender, setGender] = React.useState("empty");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <TextField
        id="outlined-select-gender"
        select
        label="Пол"
        value={gender}
        onChange={handleChange}
        // helperText="Укажите пол"
        variant="outlined"
        {...register("gender")}
      >
        {genders.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}
