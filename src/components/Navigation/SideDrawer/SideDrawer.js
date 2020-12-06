import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import Aux from '../../../hoc/Aux';

const sideDrawer = ( props ) => {
	let attachedClasses = [classes.SideDrawer, classes.Close]
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

  return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(" ")}>
				<DrawerToggle show={props.open} clicked={props.closed} />
				<div>MENU</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
  );
};

export default sideDrawer;
