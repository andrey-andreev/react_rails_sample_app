import React from "react"
import PropTypes from "prop-types"

const HomeStyles = {
  fontFamily: "OpenSans",
  textAlign: "center",
  padding: "25px",
  border: "1px solid black"
}

class Home extends React.Component {
  render () {
    return (
      <div style={HomeStyles}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

Home.propTypes = {
  title: PropTypes.node,
};

export default Home

