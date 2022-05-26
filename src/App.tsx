import React from "react";
import { Header } from "./components/Header/Header";
import { Offers } from "./pages/Offers/Offers";
import { Form } from "./pages/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Offers />} />
				<Route path='/offers/:id' element={<Offers />} />
				<Route path='form' element={<Form />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
