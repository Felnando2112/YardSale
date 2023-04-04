import React, {useState} from 'react';
import '../styles/Login.css';
import { useUserContext,useUserToggle } from '../context/userProvider';



const Login = () => {
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const getEmail = e => {
		setEmail(e.target.value);
		console.log(email);
	}
	const getPassword = e => {
		setPassword(e.target.value);
		console.log(password);
	}
	const user = useUserContext();
	const cambiaLogin = useUserToggle();
	const handleClick = (mail,passwor) => {
		cambiaLogin(mail,passwor);
		console.log(user);
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form">
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" value={email} onInput={getEmail}/>
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" value={password} onInput={getPassword}/>
					<button className="primary-button login-button" onClick={() => handleClick(email,password)}>Log in</button>
					<a href="/new-password">Forgot my password</a>
				</form>
				<a href="/signup" className="secondary-button signup-button">Sign up</a>
			</div>
		</div>
	);
}
export default Login;
