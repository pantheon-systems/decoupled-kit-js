import { type TemplateFn } from '@cli/types';

const env: TemplateFn = ({ data, utils }) =>
	`WPGRAPHQL_URL=${utils.wpGraphql(data.cmsEndpoint)}
`;

export default env;
