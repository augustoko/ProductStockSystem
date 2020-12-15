import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import useStyles from './styles'

const MenuButton = (buttonProps) => {
    const classes = useStyles();

    const {open, handleDrawer} = buttonProps

    return(
        <IconButton
            color="inherit"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
            {
                open ? <ChevronLeft /> : <MenuIcon />
            }
        </IconButton>
    )
}

export default MenuButton;