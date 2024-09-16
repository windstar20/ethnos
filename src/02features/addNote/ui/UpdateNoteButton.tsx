"use client"
import { useUpdateNoteMutation } from "@/@shared/hooks/queries/notes/useUpdateNotesMutation";
import React from 'react';

export const UpdateNoteButton = () => {
	// const [title, setTitle] = useState<string>('');
	const updateNoteMutation = useUpdateNoteMutation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateNoteMutation.mutate({id: 18, title: '지수복음'})
	}
	return (
		<button
		onClick={handleSubmit}
		>
			Update Note
		</button>
	);
}