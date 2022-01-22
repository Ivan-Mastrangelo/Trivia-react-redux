import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timeOut } from '../../../actions';

class Timer extends React.Component {
  componentDidMount() {
    const { playCounter } = this.props;
    playCounter();
  }

  componentDidUpdate() {
    const { isTimeEnded, counter, limparIntervalo } = this.props;
    if (counter <= 0) {
      limparIntervalo();
      isTimeEnded();
    }
  }

  render() {
    const { counter } = this.props;
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
  limparIntervalo: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  playCounter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Timer);

// Referência: https://www.youtube.com/watch?v=NAx76xx40jM
