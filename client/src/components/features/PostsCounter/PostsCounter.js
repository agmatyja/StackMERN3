import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
	const { posts } = this.props;  
    return (
      <div>Posts amount: {posts.length == 0 ? "no posts" : posts.length}</div>
    );
  }

};

PostsCounter.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};
export default PostsCounter;