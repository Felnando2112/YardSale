import React , {useState} from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/NewPassword.css';
import { useUserContext, useUserToggle } from '../context/userProvider';

const NewPassword = () => {
	const email = '';
	const [password,setPassword] = useState('');
	const [newPassword,setNewPassword] = useState('');
	const getPassword = e => {
		setPassword(e.target.value);
		console.log(password);
	}
	const getNewPassword = e => {
		setNewPassword(e.target.value);
		console.log(newPassword);
	}
	const user = useUserContext();
	const cambiaLogin = useUserToggle();
	const handleClick = (mail,passwor) => {
		cambiaLogin(mail,passwor);
		console.log(user);
	}
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for yue account</p>
				<form action="/" className="form">
					<label htmlFor="password" className="label">New Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" value={password} onInput={getPassword}/>
					<label htmlFor="new-password" className="label">Again Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" value={newPassword} onInput={getNewPassword}/>
					<input type="submit" value="Confirm" className="primary-button login-button" onClick={(password,newPassword) => password === newPassword ? handleClick(email,password): alert('la contraseña no coincide')}/>
				</form>
			</div>
		</div>
	);
}

export default NewPassword;
