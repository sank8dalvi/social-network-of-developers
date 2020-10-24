import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getGithubRepositories } from '../../actions/profile'

const ProfileGithub = ({ username, getGithubRepositories, repos }) => {

    useEffect(() => {
        getGithubRepositories(username)
    }, [])

    return (
        <div>
            Hello
        </div>
    )
}

ProfileGithub.propTypes = {
    getGithubRepositories: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, { getGithubRepositories })(ProfileGithub)
