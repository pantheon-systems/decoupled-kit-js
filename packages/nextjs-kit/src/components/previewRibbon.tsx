import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';

interface PreviewRibbonProps {
	clearPreviewRoute?: string;
}

const PreviewRibbon: React.FC<PreviewRibbonProps> = ({
	clearPreviewRoute = '/api/clear-preview',
}) => {
	const [show, setShow] = useState(true);

	return (
		<div>
			<div
				className={`ps-flex ps-justify-between ps-items-center ps-min-h-[3.5rem] ps-h-14 ps-px-8 ps-py-2 ps-bg-[#3017A1] ps-text-white ps-transition-all ps-duration-300 ps-w-full ${
					!show
						? 'ps-justify-start ps-translate-x-[calc(100%-5rem)] ps-pl-4'
						: ''
				}`}
			>
				{show && (
					<>
						<span className="ps-mr-auto ps-self-center">
							Preview Mode Enabled
						</span>
						<Link href={clearPreviewRoute}>
							<a className="ps-justify-self-end ps-border ps-text-black ps-border-black ps-w-fit ps-max-w- ps-px-4 ps-py-2 ps-mr-12 ps-bg-yellow-300">
								Exit Preview Mode
							</a>
						</Link>
					</>
				)}
			</div>
			<button
				className={`ps-absolute ps-right-6 ps-top-[.75rem] ps-z-10`}
				onClick={() => {
					setShow(!show);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className={`ps-w-8 ps-h-8 ps-transition-all ${
						show ? 'ps-rotate-180' : ''
					}`}
				>
					<path
						fill="#FFFFFF"
						d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"
					/>
				</svg>
				{/* 
				Remove this if we want to keep the SVG
				*/}
				{/* <Image
					className={`ps-transition-all ${show ? 'ps-rotate-180' : ''}`}
					height={32}
					width={32}
					alt=""
				/> */}
			</button>
		</div>
	);
};

export default PreviewRibbon;
