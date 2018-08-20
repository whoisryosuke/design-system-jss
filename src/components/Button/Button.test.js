import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ThemeProvider } from "react-jss";
import Button from "./Button";
import theme from "../../theme/theme";

// Jest's describe function accepts a test description
// And a function containing assertions
describe('Button Component', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<ThemeProvider theme={theme}><Button>Test</Button></ThemeProvider>).exists()).toBe(true)
  })
})