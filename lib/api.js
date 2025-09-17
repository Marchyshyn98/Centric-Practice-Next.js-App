const ARTICLE_GRAPHQL_FIELDS = `
    sys {
        id
    }
      title
      slug
      summary
      details {
        json
        links {
        	assets {
            block {
              sys {
                id
              }
              url
              description
            }
          }
        }
      }
      date
      articleImage {
        url
      }
      authorName
      categoryName
`

async function fetchGraphQL(query) {
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
            },
            body: JSON.stringify({ query }),
            next: { tags: ["articles"] }
        }
    ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse) {
    return fetchResponse.data.knowledgeArticleCollection.items;
}

export async function getAllArticles(limit = 3) {
    const articles = await fetchGraphQL(
        `query {
            knowledgeArticleCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}) {
                items {
                    ${ARTICLE_GRAPHQL_FIELDS}
                }
            }
        }`
    );

    return extractArticleEntries(articles);
}

export async function getArticle(slug) {
    const article = await fetchGraphQL(
        `query {
            knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1) {
                items {
                    ${ARTICLE_GRAPHQL_FIELDS}
                }
            }
        }`
    );
    return extractArticleEntries(article);
}