import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux/index';

// function component
const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <h2>구독자 수: {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기!</button>
    </div>
  );
};

// store의 state를 가져온다.
const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

// store의 state를 변경하기 위해 dispatch(action())을 사용
const mapDispatchToProps = (dispatch) => {
  return {
    addSubscriber: () => dispatch(addSubscriber()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
