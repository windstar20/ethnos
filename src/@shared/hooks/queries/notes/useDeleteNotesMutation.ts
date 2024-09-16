import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type Data = {
	id: number;
}

const deleteNote = async (data: Data) => {
	try {
		console.log(`DELETE data = `, data);
		const response = await axios.delete(`/api/notes/${data.id}`);
		console.log(`deleteNote 실행 = `, response.data);
		return response.data;
	} catch (error) {
		console.error('DELETE NOTE Error ', error);
		throw error;
	}
};

export function useDeleteNoteMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteNote,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['notes'] });
		},
	});
}