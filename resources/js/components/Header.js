import React, { useEffect } from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import MenuButton from './MenuButton'
import useStyles from './styles'

function Header(buttonProps) {
    const classes = useStyles();

    return (
        <AppBar position="fixed"className={clsx(classes.appBar, {
            [classes.appBarShift]: buttonProps.open,
          })}>
            <Toolbar>
                <MenuButton  {...buttonProps} />
                <Typography variant="h6" noWrap>
                    StockSystem
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
