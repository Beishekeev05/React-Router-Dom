import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const BaseLayout = () => {
	return (
		<>
			<Nav>
				<NavList>
					<NavItem>
						<StyledNavLink to="/">Добавить Студента</StyledNavLink>
					</NavItem>
					<NavItem>
						<StyledNavLink to="/about">List Todo</StyledNavLink>
					</NavItem>
				</NavList>
			</Nav>
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default BaseLayout;

const Nav = styled.nav`
	background-color: #333;
	padding: 1em;
`;

const NavList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-around;
	padding: 0;
	margin: 0;
`;

const NavItem = styled.li`
	margin: 0 1em;
`;

const StyledNavLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	font-size: 1.2em;

	&.active {
		font-weight: bold;
		border-bottom: 2px solid white;
	}

	&:hover {
		color: #ddd;
	}
`;
