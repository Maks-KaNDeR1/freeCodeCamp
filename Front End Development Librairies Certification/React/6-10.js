// 6 -
const JSX = (
    <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);

// 7 -
const MyComponent = function () {
    return (
        <div>Completed challenge!</div>
    );
}

// 8 -
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }
};

// 9 -
const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                <ChildComponent />
            </div>
        );
    }
}

// 10 -
const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            <TypesOfFruit />
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
            </div>
        );
    }
};