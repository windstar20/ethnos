"use client"
import { useDeleteNoteMutation } from "@/@shared/hooks/queries/notes";
import React from "react";

export const DeleteNoteButton = () => {
	const updateNoteMutation = useDeleteNoteMutation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateNoteMutation.mutate({id: 20})
	}
	return (
		<button
			onClick={handleSubmit}
		>
			Delete Note
		</button>
	);
}