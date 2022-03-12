import React, {FC} from 'react';
import Box from "@mui/material/Box";


interface IPropsMainContainer{
    children: React.ReactNode | React.ReactChild | React.ReactChildren
}

const MainContainer:FC<IPropsMainContainer> = ({children}) => {
    return (
        <Box component="section" sx={{maxWidth: "1480px", width: "100%", margin: "0 auto"}}>
            {children}
        </Box>
    );
};

export default MainContainer;