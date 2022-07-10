const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기상태
const initialState = {
  number : 0
};

//리듀서 함수 생성
function counter(state=initialState, action) {
  switch (action.type) {
    case INCREASE :
      return {
        number: state.number +1
      };
    case DECREASE :
      return {
        number: state.number -1
      };
    default:
      return state;
  }
}

//export counter와의 차이점
//default가 붙으면 단 한개만 내보낼수 있기때문에
//상태관리를 리듀서에서만 할 수 있도록 고정함.
export default counter;