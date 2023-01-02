import React from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/Login.css';


const Login = () => {

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(document.querySelector("form"));
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleSubmit}>Log in</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;
