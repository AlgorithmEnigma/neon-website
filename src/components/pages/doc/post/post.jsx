'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRef } from 'react';

import Breadcrumbs from 'components/pages/doc/breadcrumbs';
import DocFooter from 'components/pages/doc/doc-footer';
import PreviousAndNextLinks from 'components/pages/doc/previous-and-next-links';
import TableOfContents from 'components/pages/doc/table-of-contents';
import Hero from 'components/pages/release-notes/hero';
// import Pagination from 'components/pages/release-notes/pagination';
import ReleaseNoteList from 'components/pages/release-notes/release-note-list';
import Content from 'components/shared/content';

// TODO: Add pagination for release notes

const ReleaseNotes = ({ title, items }) => (
  <>
    <Hero title={title} />
    <ReleaseNoteList items={items} />
    {/* {pageCount > 1 && <Pagination currentPageIndex={currentPageIndex} pageCount={pageCount} />} */}
  </>
);

ReleaseNotes.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.shape({}).isRequired,
    })
  ).isRequired,
};

const Post = ({
  data: { title, enableTableOfContents },
  content,
  breadcrumbs,
  navigationLinks: { previousLink, nextLink },
  isReleaseNotes = false,
  releaseNotes = [],
  currentSlug,
  fileOriginPath,
}) => {
  const contentRef = useRef(null);

  return (
    <>
      <div
        className={clsx(
          '-mx-10 flex flex-col pt-[110px] pb-20 2xl:mx-0 xl:col-span-9 xl:ml-11 xl:max-w-[750px] lg:ml-0 lg:max-w-none lg:pt-0 md:mx-auto md:pb-[70px] sm:pb-8',
          isReleaseNotes ? 'col-span-7' : 'col-span-6 2xl:col-span-7 2xl:mx-5 xl:mr-0'
        )}
      >
        {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
        {isReleaseNotes ? (
          <ReleaseNotes title={title} items={releaseNotes} />
        ) : (
          <article>
            <h1 className="text-[36px] font-semibold leading-tight xl:text-3xl">{title}</h1>
            <Content className="mt-5" content={content} ref={contentRef} />
          </article>
        )}
        <div className="mt-auto">
          <PreviousAndNextLinks previousLink={previousLink} nextLink={nextLink} />
          <DocFooter fileOriginPath={fileOriginPath} slug={currentSlug} />
        </div>
      </div>
      {enableTableOfContents && (
        <TableOfContents
          className="col-start-11 col-end-13 -ml-11 pb-20 pt-[110px] 2xl:ml-0"
          contentRef={contentRef}
        />
      )}
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    enableTableOfContents: PropTypes.bool,
  }).isRequired,
  content: PropTypes.shape({}).isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigationLinks: PropTypes.exact({
    previousLink: PropTypes.shape({}),
    nextLink: PropTypes.shape({}),
  }).isRequired,
  isReleaseNotes: PropTypes.bool,
  releaseNotes: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.shape({}),
      data: PropTypes.shape({
        label: PropTypes.string,
      }),
      slug: PropTypes.string,
    })
  ),
  currentSlug: PropTypes.string.isRequired,
  fileOriginPath: PropTypes.string.isRequired,
};

export default Post;
