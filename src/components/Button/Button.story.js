import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'react-jss'
import theme from "../../theme/theme";

import Button from "./Button";

storiesOf('Button', module)
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </ThemeProvider>

  ))
  .add('with some emoji', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    </ThemeProvider>
  ));   