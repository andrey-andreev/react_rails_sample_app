import React from "react"
import PropTypes from "prop-types"

const PostStyles = {
  fontFamily: "OpenSans",
  textAlign: "center"
}

class Home extends React.Component {
  render () {
    return (
      <div style={PostStyles}>
        <div>Title: {this.props.title}</div>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.node,
};

export default Post

