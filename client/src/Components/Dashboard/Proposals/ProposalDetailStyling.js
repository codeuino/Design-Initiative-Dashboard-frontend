import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF",
    maxWidth: 700,
    marginBottom: 20,
    marginLeft: 150,
    height: 160,
    display: "block",
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  im: {
    marginLeft: 45,
    marginTop: 15,
    height: 100,
    width: 100,
  },
  content: {
    marginTop: 0,
    marginLeft: 20,
  },

  pos1: {
    marginTop: 0,
    maxWidth: 450,
  },
  pos2: {
    marginTop: 15,
    height: 10,
  },
  btn: {
    marginLeft: 425,
    marginTop: -2,
    height: 23,
    variant: "text",
  },
  cap: {
    marginTop: 0,
    marginLeft: 30,
    borderRadius: "30px",
    height: 23,
    textTransform: "none",
  },
}));

export default useStyles;
