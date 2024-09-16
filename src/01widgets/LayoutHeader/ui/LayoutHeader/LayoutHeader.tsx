"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react';

export const LayoutHeader = () => {

	const pathName = usePathname();
	
	return (
		<nav>
			<Link href={"/"} className={`link ${pathName === '/' ? 'text-green-500 dark:text-green-300' : 'text-muted-foreground'}`}>
				Home
			</Link>
			<Link href={'/login'} className={`link ${pathName === '/login' ? 'text-purple-500 dark:text-purple-300' : 'text-muted-foreground'}`}>
				Login
			</Link>
			<Link href={'/notes'} className={`link ${pathName === '/notes' ? 'text-purple-500 dark:text-purple-300' : 'text-muted-foreground'}`}>
				Notes
			</Link>
		</nav>
	);
};