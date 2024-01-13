import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import ImageDetails from "../components/ImageDetails";

function CustomRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Dashboard /> } />
            <Route path="/dashboard/:id" element={<ImageDetails /> } />
        </Routes>
    )
}

export default CustomRoutes;