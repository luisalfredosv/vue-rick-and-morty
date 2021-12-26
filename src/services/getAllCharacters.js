import axios from "axios";

export const getAllCharacters = async (id = 1) => {
	const { data } = await axios.get(
		`https://rickandmortyapi.com/api/character?page=${id}`
	);
	return data;
};
