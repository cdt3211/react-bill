import { Outlet } from "react-router-dom";

const Layout =() => {
    return (
        <div>
            <Outlet />
            我是layout
        </div>
    )
}

export default Layout;