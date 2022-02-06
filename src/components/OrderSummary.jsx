import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', width: '100%' }}>
                Order Confirmed!
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => navigate(-1)}>
                    Go back
                </button>
            </div>
        </>
    );
};

export default OrderSummary;