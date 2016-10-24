const Perf = React.addons.Perf;

class TimeIt extends React.Component {
  componentWillUpdate() {
    Perf.start();
  }
  componentDidUpdate() {
    Perf.stop();

    console.log('inclusive');
    Perf.printInclusive();

    console.log('wasted');
    Perf.printWasted();
  }
  render() {
    return this.props.children;
  }
}

const timeIt = component => (
  React.createElement(TimeIt, {}, component)
);

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.onAdd = this.onAdd.bind(this);
  }
  render() {
    return timeIt(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.onAdd}>Add</button>
      </div>
    );
  }
  onAdd() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
}

ReactDOM.render(
  <div>
    <Counter />
    <Counter />
  </div>,
  document.querySelector('#app')
);