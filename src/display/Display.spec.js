import React from 'react';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display.js';

// does gate show open when open
// does gate show closed when closed
// does locked show when locked
// does unlocked show when unlocked
// does red-led class show when locked or closed
// does green-led class show when unlocked or open


describe('<Display />', () => {

    it('should show Open when open', () => {
        const { getByText } = render(<Display locked={false} closed={false} />)
        const position = getByText(/open/i)

        expect(position).toBeTruthy();
    })

    it('should show Closed when closed', () => {
        const { getByText } = render(<Display locked={false} closed={true} />)
        const position = getByText(/closed/i)

        expect(position).toBeTruthy();
    })

    it('should show Locked when locked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />)
        const position = getByText(/locked/i)

        expect(position).toBeTruthy();
    })

    it('should show Unlocked when unlocked', () => {
        const { getByText } = render(<Display locked={false} closed={true} />)
        const position = getByText(/unlocked/i)

        expect(position).toBeTruthy();
    })

    it('should show red-led class when closed', () => {
        const { getByText } = render(<Display closed={true} />)
        const closed = getByText(/closed/i)

        expect(closed).toHaveClass('red-led')
    })

    it('should show red-led class when locked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />)
        const locked = getByText(/locked/i)

        expect(locked).toHaveClass('red-led')
    })

    it('should show green-led class when open', () => {
        const { getByText } = render(<Display closed={false} />)
        const open = getByText(/open/i)

        expect(open).toHaveClass('green-led')
    })

    it('should show green-led class when unlocked', () => {
        const { getByText } = render(<Display locked={false} />)
        const unlocked = getByText(/unlocked/i)

        expect(unlocked).toHaveClass('green-led')
    })
})
