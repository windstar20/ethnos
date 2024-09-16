"use client"
import { useCreateNotesMutation } from "@/@shared/hooks/queries/notes";
import React from 'react';

export const AddNoteButton = () => {
	// const [title, setTitle] = useState<string>('');
	const createNoteMutation = useCreateNotesMutation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		createNoteMutation.mutate({title: '요한복음2'})
	}
	return (
		<button
		onClick={handleSubmit}
		>
			Add Note
		</button>
	);
}