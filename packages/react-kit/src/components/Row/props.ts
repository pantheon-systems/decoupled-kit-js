export interface RowProps {
	children?: React.ReactNode;
	className?: string;
	flexOptions?: {
		direction: 'row' | 'col';
		grow?: boolean;
		reverse?: boolean;
		shrink?: boolean;
		wrap?: boolean;
	};
	type: 'flex' | 'grid';
}
