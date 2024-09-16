import { LayoutNote } from "@/01widgets/notes/ui";
import { AddNoteButton, DeleteNoteButton, UpdateNoteButton } from "@/02features/addNote/ui";
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

