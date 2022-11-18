import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PreviewError() {
	const { query } = useRouter();
	return (
		<div className="flex flex-col mx-auto prose-xl mt-20 w-fit">
			<h2 className="text-center">
				🛑 {query.error ? query.error : 'There was an error on the server'} 🛑
			</h2>
			<Link href="/">
				<a className="underline">Go Home</a>
			</Link>
		</div>
	);
}
