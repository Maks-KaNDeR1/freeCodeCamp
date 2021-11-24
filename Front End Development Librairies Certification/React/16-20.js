// 16
const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};

ShoppingCart.defaultProps = {
    items: 0
};

// 17
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items quantity={10} />
    }
};

// 18
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = {
    quantity: PropTypes.number.isRequired
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items />
    }
};
