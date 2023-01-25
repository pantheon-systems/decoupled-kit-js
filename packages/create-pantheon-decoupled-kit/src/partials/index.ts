import path from 'path';
import fs from 'fs';

const partials = () => {
	const partialsDir = path.resolve('.');
	console.log(partialsDir);
};

export const hbsPartials = partials();
