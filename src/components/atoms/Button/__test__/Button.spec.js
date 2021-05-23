import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '../index';

configure({ adapter: new Adapter() });

describe('Button Component', () => {
  it('Render Button Component', () => {
    expect(<Button>Button</Button>).toBeTruthy();
  })
});

