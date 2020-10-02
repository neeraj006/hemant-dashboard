import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ title, value, icon }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const theme = useTheme();
  const { primary, secondary } = theme.palette;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              className={classes.title}
              variant="h5"
              component="h2"
              color="primary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" component="h2">
              {value}
            </Typography>
          </Box>
          <Box>{icon}</Box>
        </Box>
      </CardContent>
    </Card>
  );
}
