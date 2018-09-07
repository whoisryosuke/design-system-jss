import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Sidebar from './sidebar'
import './layout.css'

class Layout extends React.Component {
  state = {
    active: false,
  }

  toggleSidebar = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { children } = this.props
    const { active } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }

            components: allDataJson {
              edges {
                node {
                  components {
                    displayName
                    filename
                  }
                }
              }
            }

            sidebarPages: allDataJson {
              edges {
                node {
                  sidebar {
                    pages
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header
              active={active}
              toggleSidebar={this.toggleSidebar}
              siteTitle={data.site.siteMetadata.title}
            />
            <Sidebar
              active={active}
              toggleSidebar={this.toggleSidebar}
              components={data.components.edges[0].node.components}
              sidebarPages={data.sidebarPages.edges.filter(
                sidebarPage => sidebarPage.node.sidebar !== null
              )}
            />
            <div className="ContentArea">{children}</div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
