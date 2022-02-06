import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', width: '100%' }}>
                Page Not Found
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => navigate('/')}>
                    Go to Home
                </button>
            </div>
        </>
    );
};

export default NoMatch;