import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type UpdateNoteData = {
	id: number;
	title: string;
}

const updateNote = async (data: UpdateNoteData) => {
	try {
		console.log(`UPDATE data = `, data);
		const response = await axios.put(`/api/notes/${data.id}`, data);
		console.log(`updateNote 실행 = `, response.data);
		return response.data;
	} catch (error) {
		console.error('UPDATE NOTE Error ', error);
		throw error;
	}
};

export function useUpdateNoteMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateNote,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['notes'] });
		},
	});
}
