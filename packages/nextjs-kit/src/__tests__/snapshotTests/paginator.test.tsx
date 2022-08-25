import { render } from '@testing-library/react';
import Paginator from '../../components/paginator';
import examplePaginationData from '../data/examplePaginationData.json';
import { PaginatorObj } from '../../types/index';
import React from 'react';
import { vi } from 'vitest';

vi.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'en',
    pathname: 'test/path',
    push: vi.fn(),
    query: {
      page: '/examples/pagination/[[...page]]',
    },
  }),
}));

/**
 * @vitest-environment jsdom
 */

interface PaginationItemProps {
  currentItems: PaginatorObj[];
}
const RenderCurrentItems: React.FC<PaginationItemProps> = ({
  currentItems,
}: PaginationItemProps): JSX.Element => {
  return (
    <React.Fragment>
      {currentItems.map(item => {
        return (
          <article
            key={item.id}
            className="flex flex-col p-3 w-fit mx-auto mb-10"
          >
            <h2 className="justify-start my-auto text-2xl mb-2">
              {item.title}
            </h2>
            <p className="max-w-prose my-2">
              {item?.body.value.substr(0, 150)}...
            </p>
          </article>
        );
      })}
    </React.Fragment>
  );
};
describe(`<Paginator />`, () => {
  it('should render the paginated data', () => {
    const { asFragment } = render(
      <div className="prose container min-w-full min-h-screen max-w-screen mx-auto">
        <main className="flex mx-auto flex-col">
          <section className="mx-auto">
            <h1 className="my-10">Pagination example</h1>
            <Paginator
              data={examplePaginationData}
              itemsPerPage={10}
              breakpoints={{ start: 6, end: 12, add: 6 }}
              routing={true}
              Component={RenderCurrentItems}
            />
          </section>
        </main>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
