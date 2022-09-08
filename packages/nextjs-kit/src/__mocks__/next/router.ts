import { vi } from 'vitest';
// interface RouterMock {
//     pathname: string,
//     page: string,
// }
export function RouterMock() {
  return vi.mock('next/router', () => ({
    useRouter: () => ({
      locale: 'en',
      pathname: 'test/path',
      push: vi.fn(),
      query: {
        page: '/examples/pagination/[[...page]]',
      },
    }),
  }));
}
