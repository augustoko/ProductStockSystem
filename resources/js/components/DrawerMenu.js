import React from 'react';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import useStyles from './styles'

function DrawerMenu(buttonProps) {


	const classes = useStyles(theme);
	const theme = useTheme();

	const {open, handleDrawer, DrawerOptions} = buttonProps

	return (
		<div>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					{DrawerOptions.map((item, index) => (
						<ListItem button key={index} onClick={item.action} >
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
}

export default DrawerMenu;