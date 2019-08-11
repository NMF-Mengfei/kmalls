/*
* @Author: TomChen
* @Date:   2018-09-04 16:47:16
* @Last Modified by:   TomChen
* @Last Modified time: 2018-09-17 15:51:19
*/
var _util = require('util')

var _product = {

	getProductList:function(data,success,error){
		_util.request({
			url:'/product/home/list',
			data:data,
			success:success,
			error:error		
		})
	},
	getProductDetail:function(data,success,error){
		_util.request({
			url:'/product/home/detail',
			data:data,
			success:success,
			error:error		
		})
	},			
}

module.exports = _product;