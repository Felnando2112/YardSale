import React from 'react';
import '../styles/MyAccount.css';
import { useUserContext, useUserToggle } from '../context/userProvider';

const MyAccount = () => {
	const user = useUserContext();
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<p className="value">Fernando Avendaño</p>
						<label for="email" className="label">Email</label>
						<p className="value">{user.email}</p>
						<label for="password" className="label">Password</label>
						<p className="value">{user.password}</p>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;
