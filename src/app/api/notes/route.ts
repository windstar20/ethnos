import { prisma } from "@/@shared/lib";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	try {
		const notes = await prisma.notes.findMany();
		console.log('데이터베이스 응답:', notes);

		if (!notes) {
			return NextResponse.json({ message: '노트를 찾을 수 없습니다.' }, { status: 404 });
		}

		return NextResponse.json({ data: notes });

	} catch (error) {
		console.error('노트 조회 중 오류 발생:', error);
		return NextResponse.json({ error: '노트 조회 중 오류 발생' }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}

export async function POST(request: NextRequest) {
	try {
		console.log(`POST request = `, request);
		const body = await request.json();

/*		// 데이터 검증
		const validation = schema.safeParse(body);
		if (!validation.success) {
			return NextResponse.json(validation.error.errors, { status: 404 });
		}*/

		const newNote = await prisma.notes.create({
			data: {
				title: body.title
			},
		});

		if (!body.title) {
			return NextResponse.json({ error: "Title is required" }, { status: 404 });
		}


		return NextResponse.json(newNote, {status: 200});
	} catch (error) {
		console.error('POST 요청 처리 중 오류 발생:', error);
		return NextResponse.json({error: '노트 생성 중 오류 발생'}, {status: 500});
	} finally {
		await prisma.$disconnect();
	}
}
