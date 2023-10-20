export interface ButtonProps {
	children: React.ReactNode;
}

export const DemoButton = ({ children }: ButtonProps) => {
	return <button className="ps-btn">{children}</button>;
};
