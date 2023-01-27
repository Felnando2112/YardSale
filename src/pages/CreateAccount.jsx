import React, {useState} from 'react';
import { useUserContext, useUserToggle } from '../context/userProvider';
import '/home/fernando/Desktop/React/my-react-app/src/styles/CreateAccount.css';

const CreateAccount = () => {
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
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">New account</h1>
				<form action="/" className="form">
					<div>
						<label htmlFor="name" className="label">Name</label>
						<input type="text" id="name" placeholder="Teff" className="input input-name" />
						<label htmlFor="email" className="label">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="input input-email" value={email} onInput={getEmail}/>
						<label htmlFor="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" value={password} onInput={getPassword}/>
					</div>
					<input type="submit" value="Create" className="primary-button login-button" onClick={() => handleClick(email,password)}/>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
