import React, {FC, useEffect} from "react";
import Header from "./components/Header";
import {getAllCountrys} from "./redux/thunk/getAllCountrys";
import {useAppDispatch} from "./hooks/useAppDispatch";
import useRoutes from "./hooks/useRoutes";
import MainContainer from "./components/MainContainer";

const App: FC = () => {
    const routes = useRoutes();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllCountrys());
    }, [dispatch]);

    return (
        <>
            <Header/>
            <MainContainer>
                {routes}
            </MainContainer>
        </>
    );
};

export default App;
