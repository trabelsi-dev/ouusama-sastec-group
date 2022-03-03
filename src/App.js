import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import InterfaceOne from './components/InterfaceOne/InterfaceOne'
//import InterfaceOne from './components/InterfaceOne/InterfaceOne';
import InterfaceTwo from './components/InterfaceTwo/InterfaceTwo';
import InterfaceThree from './components/InterfaceThree/InterfaceThree';
import InterfaceFour from './components/InterfaceFour/InterfaceFour';

function App() {
	return (
		<>
			<InterfaceOne />
			<InterfaceTwo />
			<InterfaceThree />
		</>

		/*
				<Router>
					<Routes>
						<Route path="/interfaceOne" element={<InterfaceOne />} />
						<Route path="/interfaceTwo" element={<InterfaceTwo />} />
						<Route path="/interfaceThree" element={<InterfaceThree />} />
						<Route path="/interfaceFour" element={<InterfaceFour />} />
					</Routes>
		
		
				</Router>*/
	);
}

export default App;
