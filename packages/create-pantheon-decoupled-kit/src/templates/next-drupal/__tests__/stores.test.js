import { makeLocaleStores, getCurrentLocaleStore } from '../lib/stores';

suite('stores', () => {
	describe('makeLocaleStores()', () => {
		it('should make 2 stores if there are 2 locales', () => {
			const locales = ['en', 'es'];
			const stores = makeLocaleStores({ locales });

			expect(stores.length).toEqual(2);
		});
		it('should make a store for each locale', () => {
			const locales = ['en', 'es'];
			const stores = makeLocaleStores({ locales });

			expect(stores[0].defaultLocale).toEqual('en');
			expect(stores[1].defaultLocale).toEqual('es');
		});
		it('should make a store for one locale', () => {
			const locales = ['es'];
			const stores = makeLocaleStores({ locales });

			expect(stores.length).toEqual(1);
		});
		it('should make a store with defaultLocale: undefined for one locale', () => {
			const locales = ['es'];
			const stores = makeLocaleStores({ locales });

			expect(stores.defaultLocale).toBe(undefined);
		});
		it('should make an authenticated store for each locale if given auth credentials', () => {
			const locales = ['en', 'es'];
			const stores = makeLocaleStores({ locales, auth: true });

			expect(stores.every((store) => store.auth)).toBe(true);
		});
	});

	describe('getCurrentLocaleStore()', () => {
		it('should return the store for the current locale', () => {
			const locales = ['en', 'es', 'en-CA'];
			const stores = makeLocaleStores({ locales });
			const currentLocale = 'en';
			const store = getCurrentLocaleStore(currentLocale, stores);

			expect(store.defaultLocale).toEqual('en');
		});
	});
});
