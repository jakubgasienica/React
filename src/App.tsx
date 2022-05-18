import React from "react";
import logo from "./logo.svg";
import css from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { Content } from "./components/Content/Content";
import { Form } from "./pages/Form/Form";
import { useState, ChangeEvent } from "react";

function App() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit() {
		console.log(email, password);
	}

	const handleChange = (
		key: keyof typeof formData,
		event: ChangeEvent<HTMLInputElement>
	) => {
		const str = event.target.value;

		setFormData(state => ({
			...state,
			[key]: str,
		}));
	};

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		const str = event.target.value;

		setEmail(str);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		const str = event.target.value;

		setPassword(str);
	};

	return (
		<>
			<Header />
			<div className={css.wrapper}>
				<Input
					placeholder='Wpisz swój mail'
					value={formData.email}
					onChange={event => handleChange("email", event)}
				/>
				<Input
					placeholder='podaj hasło'
					type='password'
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<Button onClick={handleSubmit}>
				Przykład użycia butona z props.children
			</Button>
			<Content></Content>
			<Form></Form>
		</>
	);
}

export default App;
