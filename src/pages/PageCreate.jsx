import UserForm from "../components/MainPage";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/constants";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

export const CreatePage = () => {
	const { postData, isLoading } = useFetch(BASE_URL);

	const handelSubmit = async (data) => {
		await postData(data);
	};

	return isLoading ? (
		<LoadingBlock>
			<BlockModal>
				<CircularProgress />
			</BlockModal>
		</LoadingBlock>
	) : (
		<UserForm onSubmit={handelSubmit} />
	);
};
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
