import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    paddingTop: 0,
    paddingRight: 30,
    paddingBottom: 30,
    paddingLeft: 30,
  },
  dashboard: {
    display: "flex",
  },
  dashpro: {
    marginTop: 70,
    marginLeft: 200,
    fontSize: 24,
  },
  dashprop: {
    marginTop: 70,
    marginLeft: 430,
    fontSize: 24,
  },
  profile: {
    minWidth: 350,
    marginTop: 0,
    height: 400,
    marginLeft: 170,
  },
  name: {
    marginTop: 35,
    marginBottom: 20,
  },
  email: {
    marginBottom: 40,
  },
  editbutton: {
    marginLeft: 240,
  },
  proposal: {
    width: 650,
    marginTop: 0,
    height: 400,
    marginLeft: 150,
    marginRight: 40,
  },
  message: {
    marginTop: 140,
  },
  buttonspacing: {
    marginLeft: 195,
  },
  profileimage: {
    display: "flex",
    "& > *": {
      marginLeft: 98,
      marginTop: 5,
      background: "#4054B2",
    },
  },

  large: {
    width: 120,
    height: 120,
  },
}));

export default useStyles;
