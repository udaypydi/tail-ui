<div align="center">
    <a href="http://react-simple-boilerplate.surge.sh/">
        <h1>Tail UI</h1>
    </a>
</div>

<div align="center">
    <strong>A react ui library built using tailwind css</strong>
    <br />
    <div>
        <!-- travis -->
        <a href="https://travis-ci.com/github/udaypydi/tail-ui">
            <img src="https://api.travis-ci.com/udaypydi/tail-ui.svg" alt="Test Coverage" />
        </a>
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
    <h1>Components</h1>
    <ul>
        <li>Button</li>
        <li>Container</li>
        <li>Header</li>
        <li>Image</li>
        <li>Input</li>
        <li>Select</li>
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
</div>