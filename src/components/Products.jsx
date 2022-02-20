import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <div style={{ margin: "1rem" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <input type="search" placeholder="Search products" />
            </div>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Products;