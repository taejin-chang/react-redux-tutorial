import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = ( {number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
  );
};
//
// const mapStateToProps = state => ({
//   number: state.counter.number,
// });
//
// const mapDispatchToProps = dispatch => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//     console.log('increase');
//   },
//   decrease: () => {
//     dispatch(decrease());
//     console.log('decrease');
//   },
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CounterContainer);


//형식 변경
export default connect(
  state => ({
    number: state.counter.number,
  }),
  // dispatch => ({
  //   increase: ()=>dispatch(increase()),
  //   decrease: ()=>dispatch(decrease()),
  // }),
  //객체형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators작업해줌!
  {
    increase,
    decrease,
  },
)(CounterContainer);

// export default CounterContainer;

