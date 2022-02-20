import { useParams } from "react-router-dom";

const UserDetails = () => {
    const { userId } = useParams();
    return (
        <div style={{ width: "100%", margin: "1rem" }}>
            Details about user {userId}
        </div>
    );
};

export default UserDetails;
