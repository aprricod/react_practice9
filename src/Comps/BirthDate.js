import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BirthDate() {
  const classes = useStyles();
  const { register } = useForm();
  return (
    <div>
      <TextField
        id="date"
        label="Дта рождения"
        type="date"
        // defaultValue="2017-05-24"
        className={classes.root}
        InputLabelProps={{
          shrink: true,
        }}
        {...register("birthDate")}
      />
    </div>
  );
}
