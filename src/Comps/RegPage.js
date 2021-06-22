import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useForm } from "react-hook-form";
import BirthDate from "./BirthDate";
import DaData from "./DaData";
import Email from "./Email";
import FIO from "./FIO";
import Gender from "./Gender";
import Legal from "./Legal";
import Password from "./Password";
import Phone from "./Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function RegPage() {
  const classes = useStyles();
  const { handleSubmit } = useForm();

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
          <DaData />
        </div>
        <div>
          <FIO />
        </div>
        <div>
          <BirthDate />
        </div>
        <div>
          <Gender />
        </div>
        <div>
          <Phone />
        </div>
        <div>
          <Email />
        </div>
        <div>
          <Password />
        </div>
        <div>
          <Legal />
        </div>
        <div>
          <Button type="submit" variant="contained">
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  );
}
