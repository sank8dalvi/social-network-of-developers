import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfileById } from '../../actions/profile'

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match
}) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById])

    return (
        <div>
            Profile
        </div>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth,
})

const mapDispatchToProps = {
    getProfileById
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
