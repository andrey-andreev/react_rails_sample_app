var React = require("react")
var PropTypes = require("prop-types")

const PostStyles = {
  fontFamily: "OpenSans",
  border: "1px solid tomato"
}

class Post extends React.Component {
  render () {
    return (
      <div style={PostStyles}>
        <p>Image path: {this.props.imagePath}</p>
        <img src={this.props.imagePath} alt="powpow"/>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
      </div>
    );
  }
}

Post.propTypes = {
  imagePath: PropTypes.String,
  title: PropTypes.String,
  body: PropTypes.String
};
module.exports = Post
