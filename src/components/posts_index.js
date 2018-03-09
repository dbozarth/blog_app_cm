import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
           return (
               <ListGroupItem key={post.id}>
                {post.title}
               </ListGroupItem>
           ); 
        });
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <h3 className="givemesomeroom">Posts</h3>
                <div className="givemesomeroom">
                <ListGroup>
                    {this.renderPosts()}
                </ListGroup>
                </div>
                <div className="float-left givemesomeroom2">
                    <Link to="/posts/new"><Button color="danger">New Post</Button></Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);