import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { configure,mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from '../../../molecules/Header/index';
import SearchLayout from '../SearchLayout';
configure({ adapter: new Adapter() });

describe('Search Layout', () => {
  it('Render Search Header Component',()=>{
    expect(<Header>Header</Header>).toBeTruthy();
  })
  it('Render Search Layout Component',()=>{
    expect(<SearchLayout>Search Layout</SearchLayout>).toBeTruthy();
  })
})

