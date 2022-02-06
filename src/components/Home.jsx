import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div  style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', width: '100%' }}>
                Home Page
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => navigate('order-summary')}>Place Order</button>
            </div>
        </>
    );
};

export default Home;