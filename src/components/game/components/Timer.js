import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timeOut } from '../../../actions';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
    };
  }

  componentDidMount() {
    this.playCounter();
  }

  componentWillUnmount() {
    clearInterval(this.inCount());
  }

  playCounter = () => {
    const { isTimeEnded } = this.props;
    const { counter } = this.state;
    while (counter > 0) {
      this.inCounter();
    }
    isTimeEnded();
  }

  inCounter = () => {
    const interval = 1000;
    this.inCount = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }, interval);
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <span>Tempo</span>
        {' '}
        <span>{counter}</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  isTimeEnded: () => dispatch(timeOut()),
});

Timer.propTypes = {
  isTimeEnded: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Timer);

// Referências: https://www.youtube.com/watch?v=NAx76xx40jM e
