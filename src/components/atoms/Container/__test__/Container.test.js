import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Container from '../index';

configure({ adapter: new Adapter() });

describe('Container Component', () => {
  it('Render Container Component', () => {
    expect(<Container>Container</Container>).toBeTruthy();
  })
});

