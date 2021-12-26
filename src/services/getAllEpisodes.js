import axios from "axios";

export const getAllEpisodes = async (id = 1) => {
	const { data } = await axios.get(
		`https://rickandmortyapi.com/api/episodes?page=${id}`
	);
	return data;
};
