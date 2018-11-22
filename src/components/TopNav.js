import React, { Component } from "react";

import '../css/topnav.css'

class NavBar extends Component {
	render() {
		return (
			<div className="navbar" style={{paddingLeft:'20px', paddingRight:'20px'}}>
				<a href="/#">home</a>
				<a href="/#">user</a>
				<div className="dropdown">
					<button className="dropbtn">team
      					<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<a href="/stories">stories</a>
						<a href="/vote">vote</a>
					</div>
				</div>
				<div className="dropdown">
					<button className="dropbtn">admin
      					<i className="fa fa-caret-down"></i>
					</button>
					<div className="dropdown-content">
						<a href="/admin/users">manage users</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;