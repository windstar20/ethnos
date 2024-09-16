import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type CreateNoteData = {
	title: string;
}

const createNote = async (data: CreateNoteData) => {
	try {
		console.log(`CREATE data = `, data);
		const response = await axios.post('/api/notes', data);
		console.log(`createNote 실행 = `, response.data);
		return response.data;
	} catch (error) {
		console.error('CREATE NOTE Error ', error);
		throw error;
	}
};

export function useCreateNotesMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createNote,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['notes'] });
		},
	});
}