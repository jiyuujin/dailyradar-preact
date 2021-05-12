import { h } from 'preact'
import { shallow } from 'enzyme'
import HelloWorld from '../src/components/HelloWorld'

describe('HelloWorld', () => {
    let wrapper: any

    beforeEach(() => {
        wrapper = shallow((<HelloWorld msg="Hello React 16.13" />) as any)
    })

    it('should render without errors', () => {
        expect(wrapper).toBeTruthy()
    })
})
