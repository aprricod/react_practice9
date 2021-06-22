import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import MaskedInput from "react-text-mask";

export default function SignInPage() {
  const TextMaskCustom = (props) => {
    const { inputRef, ...other } = props;

    return (
      <MaskedInput
        {...other}
        mask={[
          "(",
          /[1-9]/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
        placeholderChar={"\u2000"}
        showMask
      />
    );
  };

  const { control } = useForm();

  return (
    <div>
      <Controller
        name="phone"
        control={control}
        rules={{ required: "Phone required" }}
        render={({ field }) => (
          <FormControl>
            <InputLabel htmlFor="my-input">Телефон</InputLabel>

            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) =>
                field.onChange(e.target.value.replace(/^\+7|\D+/g, ""))
              }
              name="textmask"
              inputComponent={TextMaskCustom}
              startAdornment={
                <InputAdornment position="start">+7 </InputAdornment>
              }
            />
            <FormHelperText id="my-helper-text">
              Введите номер телефона
            </FormHelperText>
          </FormControl>
        )}
      />
    </div>
  );
}
