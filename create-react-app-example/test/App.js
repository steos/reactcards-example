import React from 'react'
import { assert } from 'chai'
import { shallow } from 'enzyme'
import App from '../src/App'

export function testAppComponent() {
    describe('Test <App />', () => {
        it('should display a bar. drink up!', () => {
            const wrapper = shallow(<App message="?!"/>)
            assert.equal(wrapper.text(), '?!')
        })
    })
}

export function testAppComponentTwo() {
    describe('Test <App />', () => {
        it('should display Foo says \'testing\'', () => {
            const wrapper = shallow(<App message="testing"/>)
            assert.equal(wrapper.text(), "testing")
        })
    })
}
