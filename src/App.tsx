import React, { useState, useContext, createContext, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Offers } from "./pages/Offers/Offers";
import { Form } from "./pages/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import { ConfigContextProvider } from "./components/ConfigContextProvider/ConfigContextProvider";
import { UsersContext } from "./components/ConfigContextProvider/ConfigContextProvider";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<ConfigContextProvider>
				<div className={css.box}>
					<Routes>
						<Route path='/' element={<Offers />} />
						<Route path='/offers/:id' element={<Offers />} />
						<Route path='form' element={<Form />} />
					</Routes>
				</div>
			</ConfigContextProvider>
		</BrowserRouter>
	);
}

export default App;
