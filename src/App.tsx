// import React, { useState, useContext, createContext, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Offers } from "./pages/Offers/Offers";
import { Form } from "./pages/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import { ConfigContextProvider } from "./components/ConfigContextProvider/ConfigContextProvider";
import { FilterProvider } from "./components/FilterContextProvider/FilterContextProvider";
import { Description } from "./pages/Description/Description";

function App() {
	return (
		<BrowserRouter>
			<FilterProvider>
				<Header />
				<ConfigContextProvider>
					<div className={css.box}>
						<Routes>
							<Route path='/' element={<Offers />} />
							<Route path='form' element={<Form />} />
							<Route path='offer/:id' element={<Description />} />
						</Routes>
					</div>
				</ConfigContextProvider>
			</FilterProvider>
		</BrowserRouter>
	);
}

export default App;
