import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BACKEND_URL } from "../src/helpers";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 400,
    borderRadius: 24,
    background: "rgba( 255, 255, 255, 0.15 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 6px )",
    WebkitBackdropFilter: "blur( 6px )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
});

const ProductCard = ({ name, description, price, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250px"
          width="100%"
          image={`${BACKEND_URL}${image}`}
          style={{ objectFit: "cover", padding: "10px", borderRadius: "24px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {description}
          </Typography>
          <div
            style={{
              display: "flex",
              marginTop: "25px",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" color="textSecondary" component="p">
              ₹ {price}
            </Typography>
            <Button size="small" color="primary" variant="contained">
              View
            </Button>
          </div>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};
export default ProductCard;
