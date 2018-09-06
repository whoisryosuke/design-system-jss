import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Components</h1>
    <ul>
      {data.allDataJson.edges.map(jsonData =>
        jsonData.node.components.map(component => (
          <li>{component.displayName}</li>
        ))
      )}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          components {
            description
            displayName
            filename
            props {
              classes {
                type {
                  name
                }
                required
                description
              }
            }
          }
        }
      }
    }
  }
`
