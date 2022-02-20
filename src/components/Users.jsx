import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
    return (
        <div style={{ margin: "1rem" }}>
            <nav style={{ margin: "0 0 1rem 0" }}>
                <Link to='admin'>Admin</Link>
                {Array.from({length: 10}, (_, i) => i + 1).map(i => (<Link key={i} to={`${i}`}>User {i}</Link>))}
            </nav>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing All Users</h2>}
        </div>
    );
};

export default Users;