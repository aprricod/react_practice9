import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useForm } from "react-hook-form";
import Phone from "./Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SignInPage() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <div>
          <Phone />
        </div>
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
        <div>
          <Button type="submit" variant="contained">
            Войти в личный кабинет
          </Button>
        </div>
      </form>
    </div>
  );
}
