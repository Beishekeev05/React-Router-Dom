import styled from "styled-components";
import TabelList from "./TabelList";
import TableNames from "./TableNames";
import useFetch from "../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";

const Table = () => {
	const { data, deleteData, getUser, isLoading } = useFetch(BASE_URL);

	useEffect(() => {
		getUser();
	}, []);
	if (isLoading) {
		return (
			<LoadingBlock>
				<BlockModal>
					<CircularProgress />
				</BlockModal>
			</LoadingBlock>
		);
	}

	return (
		<TableContainer>
			<TableElement>
				<thead>
					<TableNames />
				</thead>
				<tbody>
					{data.map((item, index) => (
						<TabelList
							key={item._id}
							{...item}
							index={index}
							deleteData={deleteData}
						/>
					))}
				</tbody>
			</TableElement>
		</TableContainer>
	);
};

const TableContainer = styled.div`
	min-width: 600px;
	margin: 20px auto;
	padding: 20px;
	border: 1px solid #ccc;

	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TableElement = styled.table`
	width: 100%;
	border-collapse: collapse;
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

export default Table;
