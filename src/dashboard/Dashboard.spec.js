import React from 'react';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard.js';


describe('<Dashboard />', () => {

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(tree).toMatchSnapshot();
    })
})
