import { LayoutNote } from "@/widgets/notes/ui";
import { AddNoteButton, DeleteNoteButton, UpdateNoteButton } from "@/features/addNote/ui";
import React from 'react';

export default function Page() {

	return (
		<div>
			Notes
			<LayoutNote/>
			<AddNoteButton />
			<UpdateNoteButton />
			<DeleteNoteButton />
		</div>

	);
};

