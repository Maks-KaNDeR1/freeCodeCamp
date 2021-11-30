
// 24 -
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      const name = this.state.name;
      return (
        <div>
            <h1>{name}</h1>
        </div>
      );
    }
  };
  
  // 25 -
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        name: 'React Rocks!'
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
  
  // 26 -
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          <button onClick = {this.handleClick}>Click Me</button>
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };