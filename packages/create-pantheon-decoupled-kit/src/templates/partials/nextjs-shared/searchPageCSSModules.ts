export const searchPageCSSModules = () => /* css */ `.altResult {
	display: flex;
	margin: var(--auto);
	margin-top: var(--12);
	font-size: var(--5);
	line-height: var(--7);
	text-align: center;
	flex-direction: column;
}

.section {
	display: flex;
	margin: var(--auto);
	margin-top: var(--10);
	flex-direction: column;
	max-height: 100vh;
}

.container {
	margin: var(--auto);
	max-width: var(--xs);
}

.link {
	text-decoration-line: underline;
}

.listTitle {
	font-weight: 700;
	font-size: var(--7);
	margin-bottom: var(--4);
	margin-top: var(--4);
	justify-items: start;
}

@media (min-width: 1024px) {
	.section {
		min-width: var(--md);
	}
	.container {
		max-width: var(--lg);
	}
}
`;
