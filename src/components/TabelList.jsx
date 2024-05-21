import React from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";

const TabelList = ({
	_id,
	name,
	surname,
	birthday,
	gender,
	city,
	index,
	deleteData,
}) => {
	return (
		<TableRow>
			<TableCell>{index + 1}</TableCell>
			<TableCell>{name}</TableCell>
			<TableCell> {surname} </TableCell>
			<TableCell> {city}</TableCell>
			<TableCell> {gender}</TableCell>
			<TableCell>{birthday}</TableCell>
			<TableCell>
				<NavLink to={`/edit/${_id}`}>
					<Fab
						sx={{ width: "40px", height: "40px" }}
						color="success"
						aria-label="edit">
						<EditIcon />
					</Fab>
				</NavLink>
			</TableCell>
			<TableCell>
				<IconButton onClick={() => deleteData(_id)}>
					<DeleteIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	);
};

export default TabelList;
const TableRow = styled.tr`
	border-bottom: 1px solid #ccc;
`;
const TableCell = styled.td`
	padding: 10px;
`;
