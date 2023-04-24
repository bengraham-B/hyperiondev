import renderer from 'react-test-renderer'
import Link from '../Link';

it('Link renders Correctly', () => {
    const tree = renderer
    .create(<Link/>)
    .toJSON()
    expect(tree).toMatchSnapshot()
})






