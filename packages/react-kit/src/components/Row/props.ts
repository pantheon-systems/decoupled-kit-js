export interface RowProps {
	type: 'flex' | 'grid';
	className?: string;
	flexOptions?: {
		direction: 'row' | 'col';
		wrap: boolean;
	};
	children?: React.ReactNode;
}
