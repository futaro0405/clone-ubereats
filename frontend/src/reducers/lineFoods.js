import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL, // 取得状況
  postState: REQUEST_STATE.INITIAL,  // 登録状況
  lineFoodsSummary: null,            // 仮注文データ
};

export const lineFoodsActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  POSTING: 'POSTING',
  POST_SUCCESS: 'POST_SUCCESS',
}

export const lineFoodsReducer = (state, action) => {
  switch (action.type) {
    case lineFoodsActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case lineFoodsActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        lineFoodsSummary: action.payload.lineFoodsSummary,
      };
    case lineFoodsActionTyps.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING,
      };
    case lineFoodsActionTyps.POST_SUCCESS:
      return {
        ...state,
        postState: REQUEST_STATE.OK,
      };
    default:
      throw new Error();
  }
}
