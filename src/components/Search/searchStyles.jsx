import styled from 'styled-components';

export const SearchWrapperStyling = styled.div`
.input-empty {
  display: none;
}

.input-value {
  position: absolute;
  z-index: 3;
  right: 10px;
  background-color: ${(props) => props.theme.colors.grey_00};
  border: 1px solid ${(props) => props.theme.colors.grey_10};
  background:${(props) => props.theme.colors.grey_00};
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: 16px;
  margin-top: 5px;
  display: flex;
  text-align: left;
  max-width: 600px;
  box-shadow: 0 16px 24px -8px rgb(0 0 0 / 24%);

  @media screen and (max-width: 992px){
    left: 10px;
    right: 10px;
  }
}

.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${(props) => props.theme.colors.grey_90};
}

.algolia-result-style {
  list-style: none;
  margin-left: 0;
  li {
    &:hover {
      background-color: ${(props) => props.theme.colors.grey_05};
    }
    & .arrow-icon {
      -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
      transform: rotate(270deg);
      height: .8rem;
    }
    & mark, .mark {
      padding: 0;
      background-color: rgb(255, 244, 190);
      font-weight: 600;
  }
  }
}

.search-title {
  font-weight: 600;
}

.ais-SearchBox-form {
  margin-bottom: 0px;
  flex-grow: 2;
}

.ais-SearchBox-submit {
  width: 0.1px;
  height: 0.1px;
  font-size: 0.001px;
}

.ais-SearchBox-reset {
  width: 0.1px;
  height: 0.1px;
  font-size: 0.001px;
}

// Algolia Search Styling
.searchbox {
  ::placeholder {
    color: ${(props) => props.theme.colors.blue_95};
  }

  .ais-SearchBox-submit, .ais-SearchBox-reset {
    display: none;
  }
 
}

li.ais-Pagination-item.ais-Pagination-item--page.ais-Pagination-item--selected {
  a {
    background-color:  ${(props) => props.theme.colors.grey_10};
  }

}

.ais-Pagination-list {
  list-style: none;
  display: flex;
  flex-direction: row; 
  margin-left: 1.05rem;

  a {
    padding: 8px 16px;
    color: ${(props) => props.theme.colors.grey_50};

    &:hover, &:active {
      background-color:  ${(props) => props.theme.colors.grey_10};
      border: none;
      text-decoration: none;
    }
  }
  span.ais-Pagination-link {
      color: #A6A6A6 !important;
  }
  
  .ais-Pagination-item--firstPage {
    display: none;
  }
  
  .ais-Pagination-link[aria-label="Previous page"] {
    padding-left: 0px!important;
  }
  .ais-Pagination-item--previousPage > .ais-Pagination-link,
  .ais-Pagination-item--nextPage > .ais-Pagination-link {
    padding: 8px 16px;
    color: ${(props) => props.theme.colors.grey_50};
    font-weight: 600;
  }
}

/* Searchbox in .navbar-v6*/
form {
  @media screen and (max-width: 992px) {
    display: inline-block;
    margin-top: 16px;
    margin-left: -8px;
  }
}

input[type="search"] {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.24);
  border-width: 1px;
  font-size: 13px;
  padding: 4px 24px 4px 28px;
  height: 32px;
  margin: 0;
  width: 256px;
  border-radius: ${(props) => props.theme.borderRadius.small};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.blue_30};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue_30};
    outline: none;
  }
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${(props) => props.theme.colors.grey_40};
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${(props) => props.theme.colors.grey_40};
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: ${(props) => props.theme.colors.grey_40};
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${(props) => props.theme.colors.grey_40};
  }
}

label {
  display: flex;
  margin: 0;
}

/* Search Icon in .navbar-v6*/
svg.nav-search__icon {
position: absolute;
bottom: auto;
margin-left: 8px;
  @media screen and (max-width: 992px) {
    position: relative;
    bottom: -9px;
    margin-left: -9px;
    left: 16px;
  }
}
:-webkit-direct-focus {
  outline-color: none;
  outline-style: auto;
  outline-width: 0;
}
`
