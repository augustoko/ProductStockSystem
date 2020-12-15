import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'
import DrawerMenu from './DrawerMenu'

import useStyles from './styles'

function Main() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header {...{
                handleDrawer: handleDrawer,
                open
            }} />
            <DrawerMenu {...{
                handleDrawer: handleDrawer,
                open
            }}  />
        </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}