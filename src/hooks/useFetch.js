import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const getUser = async () => {
		setIsLoading(true);
		try {
			const res = await fetch(url);
			const result = await res.json();
			setData(result);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const postData = async (param) => {
		setIsLoading(true);
		try {
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(param),
			});
			await res.json();
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteData = async (_id) => {
		setIsLoading(true);
		try {
			await fetch(`${url}/${_id}`, {
				method: "DELETE",
			});
			getUser();
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const updateData = async (param) => {
		setIsLoading(true);
		const { _id, ...rest } = param;
		try {
			const res = await fetch(`${url}/${_id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(rest),
			});
			const dasa = await res.json();
			setData(dasa);
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	return { data, postData, deleteData, getUser, updateData, isLoading, error };
};

export default useFetch;
