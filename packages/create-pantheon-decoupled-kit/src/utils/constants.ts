/**
 * @remarks
 * `env\.[a-z.]*` - matches `.env.*.ts` such as `.env.development.local.ts`
 */
export const TAGGED_TEMPLATE_REGEX =
	/(\.(css|jsx|tsx|ts|js|json|env\.[a-z.]*)\.(js|ts))/;
