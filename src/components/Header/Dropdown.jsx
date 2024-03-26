import React from 'react';
import { useEffect, useRef, useState, } from "react";
import { useInstantSearch } from 'react-instantsearch';
import { Paragraph } from 'aether-marketing';
const { v4: uuidv4 } = require('uuid');

/* Algolia Imports */
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
} from 'react-instantsearch';
import { SearchWrapperStyling } from '../Search/searchStyles.jsx';
import { CustomHits, CustomPagination } from '../Search/searchPreview.jsx';

const searchOnlyKey = process.env.NODE_ENV === 'development' ? '003daeb8de202d4a917c2395628d75a8' : '69f2c5376f1a90912c6c3b6b772c25bc';
const algoliaIndex = process.env.NODE_ENV === 'development' ? 'dev_docs' : 'docs';

/* Algolia Search Bar */
const algoliaClient = algoliasearch(
  '4A5N71XYH0',
  searchOnlyKey
);

// removes empty query searches from analytics
const searchClient = {
  search(requests) {
    const newRequests = requests.map((request) => {
      // test for empty string and change request parameter: analytics
      if (!request.params.query || request.params.query.length === 0) {
        request.params.analytics = false;
      }
      return request;
    });
    return algoliaClient.search(newRequests);
  },
};

// Provide a fallback when no results are returned.
function NoResultsBoundary({ children, fallback }) {
  const { results } = useInstantSearch();

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function NoResults() {
  return (
    <ul className="algolia-result-style">
      <li key={uuidv4()} className='mb-3 px-lg-5'>
        <Paragraph className="mt-2">
          No search results found.
        </Paragraph>
      </li>
    </ul>
  );
}

const Dropdown = () => {
  const ref = useRef();
  const [refresh, setRefresh] = useState(false);
  const [hasInput, setHasInput] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If clicked target is outside the open dropdown, close the dropdown
      if (hasInput && ref.current && !ref.current.contains(e.target)) {
        setHasInput(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [hasInput]);

  return (
    <SearchWrapperStyling className="form-inline header__search">
      <div className="wrapper" ref={ref}>
        <InstantSearch
          searchClient={searchClient}
          indexName={algoliaIndex}
          refresh={refresh}
        >
          <Configure hitsPerPage={5} distinct/>
          <SearchBox
            id="search-lc"
            classNames={{
              root: "searchbox",
              form: "ais-SearchBox-input"
            }}
            placeholder='Search Postman Docs'
            submitIconComponent={() => (
              <></>
             )}
            resetIconComponent={() => (
              <></>
            )}
            onKeyUp={(event) => {
              setHasInput(event.target.value.length > 2)
            }}
          />
          <div className={!hasInput ? 'input-empty' : 'input-value'}>
            <div className="row">
              <div className="col-12">
                <NoResultsBoundary fallback={<NoResults />}>
                  <CustomHits hitComponent={Hits} />
                  <Pagination
                    totalPages={3}
                    translations={{
                      previousPageItemText: '← Previous',
                      nextPageItemText: 'Next →',
                      firstPageItemText: '',
                      lastPageItemText: '',
                      previousPageItemAriaLabel: 'Previous page',
                      nextPageItemAriaLabel: 'Next page',
                      firstPageItemAriaLabel: 'First page',
                      lastPageItemAriaLabel: 'Last page',
                    }}
                  />
                </NoResultsBoundary>
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </SearchWrapperStyling>
  );
}

export default Dropdown;
