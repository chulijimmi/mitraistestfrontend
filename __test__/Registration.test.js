import ErrorComponent from '../src/baseComponent/ErrorComponent'

it('render ErrorComponent correctly if have props', () => {
    const error = <ErrorComponent />
    expect(tree).toMatchSnapshot();
})