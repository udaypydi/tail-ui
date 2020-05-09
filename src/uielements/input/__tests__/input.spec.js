import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'test-utils';
import ReactTestUtils from 'react-dom/test-utils';
import Input from 'uielements/input/input.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Input />);

    expect(asFragment(<Input />)).toMatchSnapshot();
});

it('should render a rounded input', () => {
    const { asFragment } = render(<Input rounded />);

    expect(asFragment(<Input rounded />)).toMatchSnapshot();
});

it('should render a disabled input', () => {
    const { asFragment } = render(<Input disabled />);

    expect(asFragment(<Input disabled />)).toMatchSnapshot();
});

it('should render a fluid input', () => {
    const { asFragment } = render(<Input fluid />);

    expect(asFragment(<Input fluid />)).toMatchSnapshot();
});

it('should render a placeholder input', () => {
    const { asFragment } = render(<Input placeholder="Hello world!" />);

    expect(asFragment(<Input placeholder="Hello world!" />)).toMatchSnapshot();
});

it('should render a different type input', () => {
    const { asFragment } = render(<Input type="checkbox" />);

    expect(asFragment(<Input type="checkbox" />)).toMatchSnapshot();
});

it('should render a styled input', () => {
    const { asFragment } = render(<Input style={{ background: '#0077b5', color: '#ffffff' }} />);

    expect(asFragment(<Input style={{ background: '#0077b5', color: '#ffffff' }} />)).toMatchSnapshot();
});

it('should render new classNames for input', () => {
    const { asFragment } = render(<Input className="p-1 m-1" />);

    expect(asFragment(<Input className="p-1 m-1" />)).toMatchSnapshot();
});

it('should render a error input', () => {
    const { asFragment } = render(<Input error />);

    expect(asFragment(<Input error />)).toMatchSnapshot();
});

let div;

beforeEach(() => {
    div = document.createElement("div");
});

it('captures changes in input', done => {
    const ref = React.createRef();
    function handleChange(evt) {
        expect(evt.target.value).toEqual("Hello!");
        done();
    }

    ReactDOM.render(<Input onChange={handleChange} ref={ref} />, div);
    ReactTestUtils.Simulate.change(ref.current, { target: { value: "Hello!" } });
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
});