import React from 'react'
import { Link } from 'gatsby'
import capitalize from '../tools/capitalize'

const Sidebar = ({ active, components, sidebarPages }) => (
  <nav className={`Sidebar ${active ? 'visible' : ''}`}>
    {sidebarPages[0]
      ? sidebarPages[0].node.sidebar.pages.map(sidebarPage => (
        <Link href={sidebarPage.slug}>{capitalize(sidebarPage.title)}</Link>
        ))
      : ''}
    <strong>Components:</strong>
    {components
      ? components.map(component => <Link>{component.displayName}</Link>)
      : ''}
  </nav>
)

export default Sidebar
