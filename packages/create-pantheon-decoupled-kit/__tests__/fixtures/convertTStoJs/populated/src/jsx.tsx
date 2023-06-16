export const jsx = (props: { title: string }): JSX.Element => {
	return (
	<>
		<html>
			<body>
				<h1>This is JSX!</h1>
				<h2>{props.title}</h2>
			</body>
		</html>
	</>
	);
};
