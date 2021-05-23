import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { configure,mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Article from '../index';

configure({ adapter: new Adapter() });

describe('Article Component', () => {

  it('Render Article Component',()=>{
    expect(<Article>Article</Article>).toBeTruthy();
  })
})

