import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import { useStylesSignIn } from '../../pages/SignIn';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visible?: boolean;
    onClose: () => void;
}

const ModalDialog: React.FC<ModalProps> = ({ title, onClose, visible = false, children }: ModalProps): React.ReactElement | null => {
    if (!visible) {
        return null;
    }

    return (
        <div>
            <Dialog open={visible} onClose={onClose}>
                <DialogTitle id="form-dialog-title">
                    <IconButton onClick={onClose}>
                        <CloseIcon style={{ fontSize: 26 }} />
                    </IconButton>
                    {title}
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ModalDialog;
