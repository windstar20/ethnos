import { prisma } from "@/@shared/lib";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const requestedId = parseInt(params.id);
		console.log(`requestedId = `, requestedId);

		const res = await prisma.notes.findUnique({
			where: {
				id: requestedId
			}
		});
		console.log('Notes 1개 찾기 데이터베이스 응답:', res);

		if (!res) {
			return NextResponse.json({ message: '노트를 찾을 수 없습니다.' }, { status: 404 });
		}

		const data = {
			id: res.id.toString(),
			title: res.title,
			created_at: res.created_at,
			updated_at: res.updated_at,
		};

		return NextResponse.json({ data: data });

	} catch (error) {
		console.error('노트 조회 중 오류 발생:', error);
		return NextResponse.json({ error: '노트 조회 중 오류 발생' }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string, title: string } }
) {
	console.log(`PUT params = `, params);
	const body = await request.json();
	console.log(`body = `, body);

	const requestedId = parseInt(params.id);

	const note = await prisma.notes.findUnique({
		where: { id: requestedId },
	});

	if (!note) {
		return NextResponse.json({ error: "NOTE NOT FOUND" }, { status: 404 });
	}

	const updatedNotes = await prisma.notes.update({
		where: { id: requestedId },
		data: { title: body.title },
	});

	return NextResponse.json(updatedNotes);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const requestedId = parseInt(params.id);
		console.log(`삭제 요청 ID:`, requestedId);

		const deletedNote = await prisma.notes.delete({
			where: {
				id: requestedId
			}
		});

		console.log('삭제된 노트:', deletedNote);

		return NextResponse.json({ message: '노트가 성공적으로 삭제되었습니다.' }, { status: 200 });

	} catch (error) {
		console.error('노트 삭제 중 오류 발생:', error);
		return NextResponse.json({ error: '노트 삭제 중 오류 발생' }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}