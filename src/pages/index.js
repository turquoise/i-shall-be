import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container';

const IndexPage = ({ data }) => {
  console.log('data ', data);
  return (
    <Container>
      <h1>Posts</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {
        data.allMarkdownRemark.edges.map( ({node}) => (
          <div key={node.id} >
            <h3>
              {node.frontmatter.title} {" "}
              <span>- {node.frontmatter.date}</span>
            </h3>
          </div>
        ))
      }
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
  `


export default IndexPage
