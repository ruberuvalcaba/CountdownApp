import React from 'react';
import PropTypes from 'prop-types';
import './Countdown.css';

const Countdown = ({ time }) => {
  return (
      <div className="countdown">
        <div className="countdown-content">
          <div className="countdown-item">
            <span className="countdown-value">{time.days}</span>
            <span className="countdown-title">Days</span>
          </div>
        </div>
        <div className="countdown-content">
          <div className="countdown-item">
            <span className="countdown-value">{time.hours}</span>
            <span className="countdown-title">Hours</span>
          </div>
        </div>
        <div className="countdown-content">
          <div className="countdown-item">
            <span className="countdown-value">{time.minutes}</span>
            <span className="countdown-title">Minutes</span>
          </div>
        </div>
        <div className="countdown-content">
          <div className="countdown-item">
            <span className="countdown-value">{time.seconds}</span>
            <span className="countdown-title">Seconds</span>
          </div>
        </div>
      </div>
  );
}

Countdown.propTypes = {
  time: PropTypes.shape({
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }).isRequired,
};

export default Countdown;