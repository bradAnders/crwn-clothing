import { combineReducers } from 'redux';

const { default: userReducer } = require("./user/user.reducer");

export default combineReducers({
  user: userReducer
})