class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event) {
      this.setState({
        input: event.target.value
      })
    }
    render() {
      return (
        <div>
          <input value={this.state.input} onChange={this.handleChange} />
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

  // 30
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
  
      this.setState({
        submit: this.state.input
      })
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange} />
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  }