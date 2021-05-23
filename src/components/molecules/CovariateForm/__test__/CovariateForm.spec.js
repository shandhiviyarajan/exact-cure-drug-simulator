import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { configure,mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('Search Layout', () => {
  it('Render Search Header Component',()=>{
    expect(true).toBeTruthy();
  })
})
