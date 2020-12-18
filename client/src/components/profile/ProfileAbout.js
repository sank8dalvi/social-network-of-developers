import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <React.Fragment>
    <div className="profile-about bg-light p-2">
      {bio && (
        <React.Fragment>
          <h2 className="text-primary">{name.trim().split(" ")[0]} Bio</h2>
          <p>{bio}</p>
        </React.Fragment>
      )}
      <div className="line"></div>
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="p-1">
            <i className="fas fa-check"></i>
            {skill}
          </div>
        ))}
      </div>
    </div>
  </React.Fragment>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
