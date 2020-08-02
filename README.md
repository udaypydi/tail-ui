<div align="center">
    <a href="http://react-simple-boilerplate.surge.sh/">
        <h1>Tail UI</h1>
    </a>
</div>
<p>A lite weight react component library built with love for React Hooks, Tailwind Css and React Developers. Its easy to get started, simple and consists of tiny components. <strong>Its a work in progress. Contributions are most welcome.</strong></p>
<div align="center">
    <strong>A React UI library built using tailwind css</strong>
    <br />
    <div>
        <!-- Mit License -->
        <a href="https://github.com/udaypydi/tail-ui/blob/master/LICENSE">
            <img src="https://img.shields.io/github/license/udaypydi/tail-ui">
        </a>
        <!-- Pr's -->
        <a href="https://github.com/udaypydi/tail-ui/blob/master/CONTRIBUTING.md"> 
        <img src="https://img.shields.io/badge/PRs-welcome-blueviolet.svg">
        </a>
    </div>
</div>

<div align="left">
    <h1>Installtion</h1>
    <p>Install <code>tailwind-ui-react</code> locally:</p>

    // using npm
    npm i --save tailwind-ui-react
    
    or

    // using yarn
    yarn add tailwind-ui-react
    
</div>
<div align="left">
    <h1>Components</h1>
    <ul>
        <li>Button</li>
        <li>Container</li>
        <li>Header</li>
        <li>Image</li>
        <li>Input</li>
        <li>Select</li>
        <li>Message</li>
    </ul>
</div>

<div align="left">
    <h1>Usage</h1>
        <strong>Button</strong>
        <br />

        import { Button } from 'tail-ui';

        function App(props) {
            return (
                <Button style={{ background: '#0077b5', color: '#ffffff' }} />
            )
        }


<strong>Input</strong>
    <br />

    import { Input } from 'tail-ui';

    function App(props) {
        return (
            <Input placeholder="Placeholder Text..." rounded />
        )
    }

<strong>Container</strong>
    <br />

    import { Container } from 'tail-ui';

    function App(props) {
        return (
            <Container fluid raised />
        )
    }

<strong>Header</strong>
    <br />

    import { Header } from 'tail-ui';

    function App(props) {
        return (
            <Header headerText="Simple Header" />
        )
    }

<strong>Image</strong>
    <br />

    import { Image } from 'tail-ui';

    function App(props) {
        return (
            <Image src="https://demoimage/image.png" rounded />
        )
    }

<strong>Select</strong>
    <br />

    import { Select } from 'tail-ui';

    function App(props) {
        return (
            <Select options=[{ text: 'TailUI', value: 'tailui' }}/>
        )
    }
</div>

<strong>Message</strong>
    <br />

    import { Message } from 'tail-ui';

    function App(props) {
        return (
            <Message className="text-green-500 border-green-500" />
        )
    }
</div>
