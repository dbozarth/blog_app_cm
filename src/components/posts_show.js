import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import GoHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    button: {
      margin: 12,
    }
};

class PostsShow extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { post } = this.props;
        
        // This will allow fetchPost to finish before rendering the content
        // Otherwise you will get undefined error because mapStateToProps has no data
        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div className="card givemesomeroom">
                <h4 className="card-header text-white bg-primary align-middle">Post - {post.id}</h4>           
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-text">{post.categories}</h6>
                    <p className="card-text">{post.content}</p>
                </div>
                <div className="col-sm-12 flexme">
                        <RaisedButton
                            label="Delete Post"
                            labelPosition="before"
                            secondary={true}
                            icon={<DeleteForever />}
                            style={styles.button}
                            onClick={this.onDeleteClick.bind(this)}
                        />
                    
                    <Link to="/">
                        <RaisedButton
                            label="Home"
                            labelPosition="before"
                            secondary={true}
                            icon={<GoHome />}
                            style={styles.button}
                        />
                    </Link>
                </div>
            </div>
        )
    }
}
// ownProps pulls all props headed to this component
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost } )(PostsShow);