import React, { Component } from "react";
import {connect} from 'react-redux';

let CartCounter = props => {
    return (
        <i className="badge badge-info">{ props.selectdItems }</i>
    )
}

let mapStateToProps = state => ({
    selectdItems: state.total
})

export default connect(mapStateToProps)(CartCounter)

