/*
* @Author: TomChen
* @Date:   2018-08-21 14:55:31
* @Last Modified by:   TomChen
* @Last Modified time: 2018-09-17 16:01:29
*/
// import { combineReducers } from 'redux';
//redux-immutable中的combineReducers方法生成的store中的state数据是immutable对象
import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from 'pages/login/store';
import { reducer as homeReducer } from 'pages/home/store';
import { reducer as userReducer } from 'pages/user/store';
import { reducer as categoryReducer } from 'pages/category/store';
import { reducer as productReducer } from 'pages/product/store';
import { reducer as orderReducer } from 'pages/order/store';

export default combineReducers({
	login:loginReducer,
	home:homeReducer,
	user:userReducer,
	category:categoryReducer,
	product:productReducer,
	order:orderReducer
})