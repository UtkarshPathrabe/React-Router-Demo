import { useNavigate } from "react-router-dom";
import { useAuth } from "../utilities/auth";

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    };
    return (
        <div style={{ margin: "1rem" }}>
            Welcome {auth.user}!
            <div style={{marginTop: '1rem'}}>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Profile;