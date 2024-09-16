import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchNotes = async () => {
	const response = await axios.get('/api/notes');
	console.log(`응답 = `, response);
	return response.data;
};

export const useNotesQuery = () => {
  return useQuery({
	  queryKey: ['notes'],
	  queryFn: fetchNotes,
	  enabled: true,
	  retry: false,
	  throwOnError: true,
  });
};