"use client"
import { useNotesQuery } from "@/@shared/hooks/queries/notes";
import React from 'react';

export const LayoutNote = () => {

	const { data: notes, isLoading, error } = useNotesQuery();
	
	console.log(`notes = `, notes);
	if (isLoading) return <div>로딩 중...</div>;
	if (error) return <div>오류가 발생했습니다.</div>

	return (
		<div>
				Layout Note List
		</div>
	);
};