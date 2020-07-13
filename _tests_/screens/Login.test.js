import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../../screens/index'
import renderer from 'react-test-renderer'
// import { ThemeProvider } from 'react-native'

describe('Test case for testing login', () => {
    it('checks email input', () => {
        const wrapper = renderer.create(<Login />).getInstance()
        wrapper.find('input.email').simulate('change', {
            target: { name: 'email', value: 'a@a.ru' },
        })
        expect(wrapper.state('email')).toEqual('a@a.ru')
    })
    // it('calls onLogin when button clicked', () => {
    //     let LoginScreen = renderer.create(<Login />).getInstance()
    //     LoginScreen.find('input.email')
    //       .simulate('change', { target: { value: 'myUser' } })
    //     LoginScreen.find('input.password')
    //       .simulate('change', { target: { value: 'pwd' } })
    //     component.find('form').simulate('submit')
    //     expect(LoginScreen.onClickListener(2)).toEqual(2)
    // const handleLoginMock = jest.fn()

    // const component = Enzyme.mount(
    //     <ThemeProvider theme={themes.default}>
    //         <Login handleLogin={handleLoginMock} />
    //     </ThemeProvider>
    // )

    // component
    //     .find('input.email')
    //     .simulate('change', { target: { value: 'myUser' } })
    // component
    //     .find('input.password')
    //     .simulate('change', { target: { value: 'myPassword' } })
    // component.find('form').simulate('submit')

    // console.log('onClickMock.mock', onSubmitMock.mock)
    // expect(onSubmitMock).toBeCalled()
    // })
    // let wrapper
    // test('username check', () => {
    //     wrapper = shallow(<Login />)
    //     wrapper.find('input[type="text"]').simulate('change', {
    //         target: { name: 'email', value: 'krishankantsinghal' },
    //     })
    //     expect(wrapper.state('username')).toEqual('krishankantsinghal')
    // })
    // it('password check', () => {
    //     wrapper = shallow(<Login />)
    //     wrapper.find('input[type="password"]').simulate('change', {
    //         target: { name: 'password', value: 'krishankant123' },
    //     })
    //     expect(wrapper.state('password')).toEqual('krishankant123')
    // })
    // it('login check with right data', () => {
    //     wrapper = shallow(<Login />)
    //     wrapper.find('input[type="text"]').simulate('change', {
    //         target: { name: 'username', value: 'krishankantsinghal' },
    //     })
    //     wrapper.find('input[type="password"]').simulate('change', {
    //         target: { name: 'password', value: 'krishankant123' },
    //     })
    //     wrapper.find('button').simulate('click')
    //     expect(wrapper.state('isLogined')).toBe(true)
    // })
    // it('login check with wrong data', () => {
    //     wrapper = shallow(<Login />)
    //     wrapper.find('input[type="text"]').simulate('change', {
    //         target: { name: 'username', value: 'krishankantsinghal' },
    //     })
    //     wrapper.find('input[type="password"]').simulate('change', {
    //         target: { name: 'password', value: 'krishankant1234' },
    //     })
    //     wrapper.find('button').simulate('click')
    //     expect(wrapper.state('isLogined')).toBe(false)
    // })
})
