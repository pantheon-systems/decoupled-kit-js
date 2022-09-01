import { screen, render, fireEvent } from '@testing-library/react';
import Paginator from '../../components/paginator';
import examplePaginationData from '../data/examplePaginationData.json';
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

interface PaginatorRenderObj {
  id: string;
  title: string;
  body: {
    value: string;
  };
}

/**
 * @vitest-environment jsdom
 */

interface PaginationItemProps {
  currentItems: PaginatorRenderObj[];
}
const RenderCurrentItems: React.FC<PaginationItemProps> = ({
  currentItems,
}: PaginationItemProps): JSX.Element => {
  return (
    <>
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
    </>
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
  it('back button is disabled on first page', () => {
    render(
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
    expect(
      (document.getElementById('back-btn') as HTMLButtonElement).disabled
    ).toBe(true);
  });

  it('next button is disabled on last page', () => {
    render(
      <div className="prose container min-w-full min-h-screen max-w-screen mx-auto">
        <main className="flex mx-auto flex-col">
          <section className="mx-auto">
            <h1 className="my-10">Pagination example</h1>
            <Paginator
              data={examplePaginationData}
              itemsPerPage={60}
              breakpoints={{ start: 6, end: 12, add: 6 }}
              routing={true}
              Component={RenderCurrentItems}
            />
          </section>
        </main>
      </div>
    );
    fireEvent.click(screen.getByText('>'));
    fireEvent.click(screen.getByText('>'));
    expect(
      (document.getElementById('next-btn') as HTMLButtonElement).disabled
    ).toBe(true);
  });

  it('check breakpoints', () => {
    render(
      <div className="prose container min-w-full min-h-screen max-w-screen mx-auto">
        <main className="flex mx-auto flex-col">
          <section className="mx-auto">
            <h1 className="my-10">Pagination example</h1>
            <Paginator
              data={examplePaginationData}
              itemsPerPage={10}
              breakpoints={{ start: 2, end: 12, add: 6 }}
              routing={true}
              Component={RenderCurrentItems}
            />
          </section>
        </main>
      </div>
    );
    expect(screen.queryAllByText('2')).toHaveLength(0);
    fireEvent.click(screen.getByText('...'));
    expect(screen.queryAllByText('2')).toHaveLength(1);
  });
  it('check next button works', () => {
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
    fireEvent.click(screen.getByText('>'));
    expect(asFragment()).toMatchSnapshot();
  });
  it('check back button works', () => {
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
    fireEvent.click(screen.getByText('>'));
    fireEvent.click(screen.getByText('<'));
    expect(asFragment()).toMatchSnapshot();
  });
});
