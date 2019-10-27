import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from "../src/styles/Button";

export default {
  title: 'Button',
};

export const primary = () => <Button primary onClick={action('clicked')}>Save</Button>;

export const secondary = () => (
  <Button onClick={action('clicked')}>
      Cancel
  </Button>
);
