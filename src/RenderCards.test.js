import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { RenderCards } from './RenderCards';

it('renders plan cards', () => {
    const tree = renderer.create(<MemoryRouter><RenderCards switched='true' /></MemoryRouter>).toJSON;

    expect(tree).toMatchSnapshot();
});