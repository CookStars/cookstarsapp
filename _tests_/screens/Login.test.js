import React from 'react'
import { configure, shallow } from 'enzyme'
import { Login } from '../../screens/index'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
// import { ThemeProvider } from 'react-native'

describe('Test case for testing login', () => {
    configure({ adapter: new Adapter() })

    it('renders correctly', () => {
        const tree = renderer.create(<Login />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('checks email input', () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.find('#emailInput').length).toEqual(1)
    })

    it('checks email field sets state on change', () => {
        const wrapper = shallow(<Login />)
        wrapper.find('#emailInput').simulate('changeText', 'email@email.com')
        // console.log('@@@@value', wrapper.find('#emailInput').props().value)
        expect(wrapper.state('email')).toEqual('email@email.com')
    })
})
