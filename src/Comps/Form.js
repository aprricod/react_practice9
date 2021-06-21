import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PropTypes from "prop-types";
import React from "react";
import SignInPage from "./SignInPage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Form() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="span">
          Личный кабинет клиента
        </Typography>
        <br />
        <Typography gutterBottom variant="overline" component="span">
          Войдите или зарегистрируйтесь в личном кабинете. При регистрации
          укажите действующий номер телефона, на него будет направлен пароль в
          СМС
        </Typography>
      </CardContent>

      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            icon={<ExitToAppIcon />}
            aria-label="phone"
            {...a11yProps(0)}
            label="Вход"
          />
          <Tab
            icon={<PersonAddIcon />}
            aria-label="favorite"
            {...a11yProps(1)}
            label="Регистрация"
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <SignInPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>В разработке</div>
        {/* <FormControlLabel
          control={<Checkbox name="checkedC" {...register("legal")} />}
          label="Согласие на обработку данных"
        /> */}
      </TabPanel>
    </Card>
  );
}
