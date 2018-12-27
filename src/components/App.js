import React, { Component } from "react";
import "./../App.css";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar"
import Modal from "react-modal"

Modal.setAppElement('#root')

class App extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  componentWillMount(){
    fetch('http://localhost:3001/products')
    .then( response => response.json())
    .then( response => {
      this.props.fillProducts(response)
    })
  }

  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Navbar />
            <Modal 
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  contentLabel="Example Modal"
            ></Modal>      
            <ProductList />
          </div> 
        </div>

        
      </div>
    );
  }
}

let mapStateToProps = state => ({
  total: state.total
});

let mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch({ type: "INCREMENT" });
  },
  fillProducts: (products) => dispatch({
    type: 'FETCH_PRODUCTS', products
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
