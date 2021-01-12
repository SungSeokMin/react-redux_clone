import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux/index';

// function component
const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);

  return (
    <div className="items">
      <h2>조회수: {count}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => addView(number)}>조회하기!</button>
    </div>
  );
};

// store의 state를 가져온다.
const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
  };
};

// store의 state를 변경하기 위해 dispatch(action())을 사용
const mapDispatchToProps = (dispatch) => {
  return {
    addView: (number) => dispatch(addView(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
