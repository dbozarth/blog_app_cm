import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import NoteAdd from 'material-ui/svg-icons/action/note-add';

const styles = {
    button: {
      margin: 12,
    }
};

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
           return (
                <ListGroupItem key={post.id}>
                    <Link to={`/posts/show/${post.id}`}>{post.title}</Link>
                </ListGroupItem>
           ); 
        });
    }

    render() {
        return (
            <div>
                <div className="card givemesomeroom">
                <h4 className="card-header text-white bg-primary align-middle">Posts List</h4>
                </div>
                <div className="container givemesomeroom">
                    <ListGroup>
                        {this.renderPosts()}
                    </ListGroup>
                </div>
                <div className="float-left givemesomeroom2">
                    <Link to="/posts/new">
                        <RaisedButton
                            label="Add Post"
                            labelPosition="before"
                            secondary={true}
                            icon={<NoteAdd />}
                            style={styles.button}
                        />
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);