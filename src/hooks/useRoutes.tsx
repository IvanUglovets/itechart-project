import {useAuth} from "./useAuth";
import {Navigate, Route, Routes} from "react-router-dom";
import {RoutePaths} from "../routes/routes";
import Home from "../pages/Home";
import CountryDetail from "../pages/CountryDetail";
import React from "react";

const useRoutes = () => {
    const {isAuth} = useAuth();
    if (isAuth) {
        return (
            <Routes>
                <Route path={RoutePaths.Home} element={<Home/>}/>
                <Route
                    path={`${RoutePaths.Country}/:name`}
                    element={<CountryDetail/>}
                />
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path={RoutePaths.Home} element={<Home/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )

}

export default useRoutes;