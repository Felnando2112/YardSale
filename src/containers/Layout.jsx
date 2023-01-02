import React from 'react';
import Header from '/home/fernando/Desktop/React/my-react-app/src/components/Header.jsx';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
