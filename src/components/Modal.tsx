import React, {FC} from 'react';
import {Box, Modal} from "@mui/material";

interface IPropsSimpleModal{
    children: React.ReactChild | React.ReactNode
    handleClose: () => void
    isOpen: boolean
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


const SimpleModal: FC<IPropsSimpleModal> = ({children,handleClose,isOpen}) => {
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    );
};

export default SimpleModal;