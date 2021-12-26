import axios from "axios";

export const getSingleCharacters = async (id) => {
	const { data } = await axios.get(
		`https://rickandmortyapi.com/api/character/${id}`
	);
	return data;
};
