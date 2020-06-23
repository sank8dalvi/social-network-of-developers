import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfileById } from '../../actions/profile'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import ProfileTop from './ProfileTop'

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match
}) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id])

    return (
			<React.Fragment>
				{profile === null || loading ? (
					<Spinner />
				) : (
					<React.Fragment>
						<Link to="/profiles" className="btn btn-light">
							Back to Profiles
						</Link>
						{auth.isAuthenticated &&
							auth.loading === false &&
							auth.user._id === profile.user._id && 
                            <Link to='/edit-profile' className='btn btn-dark'>Edit Profile</Link>}
                            <div className="profile-grid my-1">
                                <ProfileTop profile={profile} />
                            </div>
					</React.Fragment>
				)}
			</React.Fragment>
		);
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
