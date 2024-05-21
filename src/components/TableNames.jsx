import React from "react";
import styled from "styled-components";
const TableNames = () => {
	return (
		<TableRow>
			<TableHeader>Index</TableHeader>
			<TableHeader>Name 2</TableHeader>
			<TableHeader>SurName 3</TableHeader>
			<TableHeader>City 4</TableHeader>
			<TableHeader>Gender 4</TableHeader>
			<TableHeader>Birthday 4</TableHeader>
			<TableHeader>Edite</TableHeader>
			<TableHeader>Delete</TableHeader>
		</TableRow>
	);
};

export default TableNames;
const TableRow = styled.tr`
	border-bottom: 1px solid #ccc;
`;
const TableHeader = styled.th`
	padding: 10px;
	background-color: #f5f5f5;
	text-align: left;
	font-weight: bold;
`;
