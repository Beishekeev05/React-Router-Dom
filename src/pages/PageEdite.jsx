import React, { useEffect, useState } from "react";
import UserForm from "../components/MainPage";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/constants";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
const PageEdite = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	const { data: otherData, updateData } = useFetch(BASE_URL);
	const { _id } = useParams();
	const user = otherData.find((user) => user._id === +_id);

	const handleBackClick = () => {
		navigate(-1);
	};

	function onSubmit(data) {
		updateData({ ...data, _id });
		navigate(-1);
	}

	useEffect(() => {
		if (otherData.length > 0) {
			setIsLoading(false);
		}
	}, [otherData]);

	return (
		<>
			<NavBarContainer>
				<BackButton onClick={handleBackClick}>Назад</BackButton>
				<h1>Edit Page</h1>
			</NavBarContainer>
			{isLoading ? (
				<LoadingBlock>
					<BlockModal>
						<CircularProgress />
					</BlockModal>
				</LoadingBlock>
			) : (
				<UserForm data={user} onSubmit={onSubmit} />
			)}
		</>
	);
};

export default PageEdite;

const NavBarContainer = styled.div`
	width: 100%;
	padding: 10px;
	background-color: #007bff;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	h1 {
		margin-left: 250px;
		color: white;
	}
`;

const LoadingBlock = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.75);
	position: absolute;
	top: 0;
	z-index: 5;
`;
const BlockModal = styled.div`
	width: 200px;
	aspect-ratio: 1/1;
	position: absolute;
	top: 40%;
	left: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translate(-50%, -50%);
`;
const BackButton = styled.button`
	padding: 10px 20px;
	background-color: white;
	color: #007bff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	transition: background-color 0.3s;

	&:hover {
		background-color: #0056b3;
		color: white;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
	}
`;
