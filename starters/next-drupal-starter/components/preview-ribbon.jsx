import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PreviewRibbon() {
	const [show, setShow] = useState(true);

	return (
		<div>
			<div
				className={`flex justify-between items-center min-h-[3.5rem] h-14 px-8 py-2 bg-[#3017A1] text-white transition-all duration-300 w-full ${
					!show ? 'justify-start translate-x-[calc(100%-5rem)] pl-4' : ''
				}`}
			>
				{show && (
					<>
						<span className="mr-auto self-center">Preview Mode Enabled</span>
						<Link href="/api/clear-preview">
							<a className="justify-self-end border text-black border-black w-fit max-w- px-4 py-2 mr-12 bg-yellow-300">
								Exit Preview Mode
							</a>
						</Link>
					</>
				)}
			</div>
			<button
				className={`absolute right-6 top-[.75rem] z-10`}
				onClick={() => {
					setShow(!show);
				}}
			>
				<Image
					className={`transition-all ${show ? 'rotate-180' : ''}`}
					height={32}
					width={32}
					src="/collapse.svg"
					alt=""
				/>
			</button>
		</div>
	);
}
