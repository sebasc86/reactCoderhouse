import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";

let ProductList = (props) => {
  /*selectAll = () => {
    this.setState({ selectAll: !this.state.selectAll });
  };*/

    return (
      <div className="card-columns">
        {props.products.map(product => (
          <Product key={product.id} data={product} selected={false} />
        ))}
      </div>
    );
  
}

let mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductList);
