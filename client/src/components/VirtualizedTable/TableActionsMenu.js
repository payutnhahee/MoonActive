import React, { useState } from "react";
import { MoreVert as MenuIcon } from '@material-ui/icons';
import { Menu, IconButton, MenuItem } from "@material-ui/core";
//import useStyles from "./VirtualizedTable.css";

const TableActionsMenu = ({ onDelete, onDuplicate, onEdit, onEditCancel, onEditSave, rowIndex, isEdited }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAction = (action) => {
        action().then(() => handleClose());
    }

    return (<>
        <IconButton onClick={handleClick}>
            <MenuIcon />
        </IconButton>
        <Menu id="actions-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {isEdited ? 
                [<MenuItem key='save' onClick={() => { handleClose(); onEditSave(); }}>Save</MenuItem>,
                <MenuItem key='cancel' onClick={() => { handleAction(onEditCancel) }}>Cancel</MenuItem>]
            :
                [<MenuItem key='edit' onClick={() => { handleAction(onEdit); }}>Edit</MenuItem>,
                <MenuItem key='duplicate' onClick={() => { handleAction(onDuplicate) }}>Duplicate</MenuItem>,
                <MenuItem key='delete' onClick={() => { handleAction(onDelete); }}>Delete</MenuItem>]
            
            }
        </Menu>
    </>);
}

export default TableActionsMenu;