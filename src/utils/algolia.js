// The queries allow you to grab the data you want Algolia to index directly from
// Gatsby’s GraphQL layer by exporting from src/utils/algolia.js an array of objects,
// each containing a required GraphQL query and an optional index name,
// transformer function and settings object.

//  the query property is a GraphQL query string.
// The transformer is a function that takes the data retrieved by the query and
// transforms it into the array of objects that will become your Algolia index records.

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const algoliaIndex = (process.env.NODE_ENV === 'development') ? 'dev_docs' : 'docs';

const pageQuery = `{
  allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/docs/" },
    }
  ) {
    edges {
      node {
        id
        headings(depth: h2) {
          value
        }
        frontmatter {
          title
          search_keyword
          early_access
        }
        fields {
          slug
        }
        rawMarkdownBody
        internal {
          contentDigest
        }
        excerpt
      }
    }
  }
}`;


const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
       return data.allMarkdownRemark.edges.map(edge => edge.node).reduce((acc, post) => {
          const pChunks = post.rawMarkdownBody.split('##');
          
          const chunks = pChunks.map((chnk, index) => ({
            objectID: post.id + '-' + index,
            early_access: post.frontmatter.early_access,
            headings: post.headings,
            slug: post.fields.slug,
            title: post.frontmatter.title,
            internal: post.internal,
            excerpt: post.excerpt,
            search_keyword: post.frontmatter.search_keyword,
            content: chnk
          }));
          return [...acc, ...chunks]
        }, [])
    },
    indexName: algoliaIndex,
    // mergeSettings: false, // overrites index settings and replaces them with settings from the config on each build
    settings: { // by supplying settings, you will overwrite all existing settings on the index
      attributesToSnippet: ['excerpt:20'],
      attributeForDistinct: 'slug',
      distinct: 1,
      customRanking: [
        'desc(search_keyword)',
        'desc(content)'
      ]
    }
  },
];

module.exports = queries;
