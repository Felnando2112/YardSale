import '/home/fernando/Desktop/React/my-react-app/src/styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '/home/fernando/Desktop/React/my-react-app/src/pages/Checkout.jsx';
import Orders from '../pages/Orders';
import { UserProvider } from '../context/userProvider';
import AppContext from '../context/AppContext';
import useInitialState from '/home/fernando/Desktop/React/my-react-app/src/hooks/useInitialState.js'
import NotFound from '../pages/NotFound';
import Others from '../pages/Others';
import Clothes from '../pages/Clothes';
import Electronics from '../pages/Electronics';
import Furnitures from '../pages/Furnitures';
import Toys from '../pages/Toys';


function App() {
	const initialState = useInitialState();
  return (
	<UserProvider>
	<AppContext.Provider value={initialState} >
    	<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route exact path="/others" element={<Others/>} />
					<Route exact path="/Clothes" element={<Clothes/>} />
					<Route exact path="/Electronics" element={<Electronics/>} />
					<Route exact path="/Furnitures" element={<Furnitures/>} />
					<Route exact path="/Toys" element={<Toys/>} />
					<Route exact path="/login" element={<Login/>} />
					<Route exact path="/password-recovery" element={<PasswordRecovery/>} />
					<Route exact path="/send-email" element={<SendEmail/>} />
					<Route exact path="/new-password" element={<NewPassword/>} />
					<Route exact path="/account" element={<MyAccount/>} />
					<Route exact path="/signup" element={<CreateAccount/>} />
					<Route exact path="/checkout" element={<Checkout/>} />
					<Route exact path="/orders" element={<Orders/>} />
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</AppContext.Provider>
	</UserProvider>
  );
}

export default App;
