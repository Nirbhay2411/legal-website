import PropTypes from "prop-types";
import { FaEnvelope, FaUser, FaUserTag } from "react-icons/fa";

const ProfileDropdown = ({ firstName, lastName, email, role, onLogout }) => {
  return (
    <div className="profile-dropdown glass">
      <p><FaUser /><strong>Name:</strong> {firstName} {lastName}</p>
      <p><FaEnvelope /><strong>Email:</strong> {email}</p>
      <p><FaUserTag /><strong>Role:</strong> {role}</p>
      <button className="logout" onClick={onLogout}>Logout</button>
    </div>
  );
};

ProfileDropdown.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default ProfileDropdown;
