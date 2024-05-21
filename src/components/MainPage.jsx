import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UserForm = ({ onSubmit, data }) => {
	const [nameValue, setNameValue] = useState("");
	const [surNameValue, setSurNameValue] = useState("");
	const [gender, setGender] = useState("");
	const [city, setCity] = useState("");
	const [birthday, setBirthday] = useState("");
	const navigated = useNavigate();

	useEffect(() => {
		if (data) {
			setNameValue(data.name);
			setSurNameValue(data.surname);
			setGender(data.gender);
			setCity(data.city);
			setBirthday(data.birthday);
		}
	}, [data]);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const param = {
			name: nameValue,
			surname: surNameValue,
			gender: gender,
			city: city,
			birthday: birthday,
		};

		onSubmit(param);
		setBirthday("");
		setCity("");
		setGender("");
		setSurNameValue("");
		setNameValue("");
		navigated("/about");
	};

	return (
		<FormContainer onSubmit={onSubmitHandler}>
			<FormField>
				<Label htmlFor="firstName">First Name:</Label>
				<Input
					value={nameValue}
					onChange={(e) => setNameValue(e.target.value)}
					type="text"
					id="firstName"
					name="firstName"
				/>
			</FormField>
			<FormField>
				<Label htmlFor="lastName">Last Name:</Label>
				<Input
					value={surNameValue}
					onChange={(e) => setSurNameValue(e.target.value)}
					type="text"
					id="lastName"
					name="lastName"
				/>
			</FormField>
			<FormField>
				<Label htmlFor="gender">Gender:</Label>
				<Select
					value={gender}
					onChange={(e) => setGender(e.target.value)}
					id="gender"
					name="gender">
					<option value="">Select</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</Select>
			</FormField>
			<FormField>
				<Label htmlFor="city">City:</Label>
				<Input
					value={city}
					onChange={(e) => setCity(e.target.value)}
					type="text"
					id="city"
					name="city"
				/>
			</FormField>
			<FormField>
				<Label htmlFor="birthYear">Birth Year:</Label>
				<Input
					value={birthday}
					onChange={(e) => setBirthday(e.target.value)}
					type="date"
					id="birthYear"
					name="birthYear"
				/>
			</FormField>
			<Button variant="contained" type="submit">
				Добавит студента
			</Button>
		</FormContainer>
	);
};

const FormContainer = styled.form`
	max-width: 400px;
	margin: 20px auto;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 10px;
`;

const FormField = styled.div`
	margin-bottom: 15px;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
`;

const Input = styled.input`
	width: 100%;
	padding: 8px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

const Select = styled.select`
	width: 100%;
	padding: 8px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 4px;
`;

export default UserForm;
