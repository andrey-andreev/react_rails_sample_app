import React from "react"
import PropTypes from "prop-types"

const WelcomeStyles = {
  fontFamily: "OpenSans",
  border: "1px solid black",
  padding: "25px",
  textAlign: "center"
}

class Welcome extends React.Component {
  render () {
    return (
      <div style={WelcomeStyles}>
        <p>Image path: {this.props.imagePath}</p>
        <img src={this.props.imagePath} alt="powpow"/>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
      </div>
    );
  }
}

Welcome.propTypes = {
  imagePath: PropTypes.node,
  title: PropTypes.node,
  body: PropTypes.node
};

export default Welcome

