import React, { Component, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";
import PostItem from "./PostItem";

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return loading ? (
        <Spinner />
    ) : (
        <Fragment>
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Welcome to the Community
            </p>
            <PostForm />
            <div className="posts">
                {posts.map((post) => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </Fragment>
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.post,
});

const mapDispatchToProps = {
    getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
