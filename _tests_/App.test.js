import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'

describe('<App />', () => {
    it('App renders without crashing', () => {
        const rendered = renderer.create(<App />).toJSON()
        expect(rendered).toBeTruthy()
    })

    it('App test against snapshot', () => {
        const tree = renderer.create(<App />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON()
        expect(tree.children.length).toBe(1)
    })
})
