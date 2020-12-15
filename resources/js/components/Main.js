import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'
import HistoryIcon from '@material-ui/icons/History';
import ListIcon from '@material-ui/icons/List';
import DrawerMenu from './DrawerMenu'
import ProductList from './ProductList'
import HistoryPage from './HistoryPage'

import useStyles from './styles'

function Main() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [route, setRoute] = useState(false);

    const options = [{
		text: "Product Storage",
        icon: (<ListIcon/>),
        action: () => setRoute("Product Storage")
	},
	{
		text: "Product History",
        icon: (<HistoryIcon/>),
        action: () => setRoute("Product History")
    }]
    

    const router = () => {
        switch (route) {
            case "Product Storage":
                return (<ProductList />)
                break;

            case "Product History" :
                return (<HistoryPage />)
                break;
            default:
                return (<ProductList />)
                break;
        }
    } 

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
                DrawerOptions: options,
                handleDrawer: handleDrawer,
                open
            }} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {router()}
            </main>
        </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}