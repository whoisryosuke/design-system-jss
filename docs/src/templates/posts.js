import React, { Component } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'react-jss'
import theme from '../../../src/theme/theme'
import Layout from '../components/layout'

import PropsTable from '../components/propstable'

export default class MDXRuntimeTest extends Component {
  render() {
    const { children, data, tableOfContents } = this.props
    console.log(ButtonProps.components[0].props)
    return (
      <ThemeProvider theme={theme}>
        <MDXProvider>
          <Layout>
            <div className="content">
              {children}
              <MDXRenderer tableOfContents={tableOfContents}>
                {data.mdx.code.body}
              </MDXRenderer>
              <h2 style={{ marginTop: '2rem' }}>Props:</h2>
              <PropsTable propMetaData={ButtonProps.components[0].props} />
            </div>
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      tableOfContents
    }
  }
`
