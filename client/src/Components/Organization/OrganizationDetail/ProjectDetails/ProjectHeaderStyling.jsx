import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  LeftCardContent: {
    textAlign: "left",
    marginLeft: 70,
  },
  RightCardContent: {
    marginRight: 70,
    textAlign: "Right",
  },
  projectname: {
    marginTop: 30,
    fontSize: 48,
  },
  submit: {
    marginTop: 30,
    fontSize: 18,
  },
  orgname: {
    fontSize: 20,
    marginLeft: -7,
    marginTop: -35,
  },
  orglink: {
    fontSize: 15,
    marginTop: -30,
  },
  cap: {
    borderRadius: "30px",

    marginLeft: 10,
    fontSize: 13,
    textTransform: "none",
  },
  tt: {
    fontSize: 18,
    marginTop: 15,
  },
  mentors: {
    fontSize: 18,
  },
  contact: {
    fontSize: 13,
    marginLeft: 10,
  },
}));

export default useStyles;
