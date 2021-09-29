import React from "react";
import { Container, Grid } from "@material-ui/core";

import Product from "../Product/Product";
// import useStyles from "./styles";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  content: {},
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center"
  },
  options: {
    textAlign: "center",
    marginBottom: "10px",
    marginTop: "50px",
  },
}));

const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  // if (!categories.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      {console.log(categories)}
      <Container className={classes.container} fixed>
        <div className="row">
          {categories &&
            categories.map((category) => {
              return (
                <div className="column">
                  <Product product={category} onAddToCart={onAddToCart} />
                </div>
              );
            })}
        </div>
      </Container>
    </main>
  );
};

//

export default Products;
