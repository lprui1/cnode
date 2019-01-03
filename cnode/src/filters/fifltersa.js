import Vue from 'vue'

export default Vue.filter('filtersa', times => {
var time1 = new Date(times);    //创建的时间
var time2 = new Date();         //修改的时间
var time = time2 - time1;  //两个时间差的毫秒数
//计算年
let year = Math.floor(time/1000/60/60/24/365)
if(year>0)return year+'年前';
//计算多少月
let month = Math.floor(time/1000/60/60/24/30); 
if(month>0)return month+'月前';
//计算天数
let day = Math.floor(time/1000/60/60/24);       
if(day>0)return day+'天前';
//计算小时
let hour = Math.floor(time/1000/60/60)
if(hour>0) return hour+'小时前';
//计算分钟
let min = Math.floor(time/1000/60); 
if(min>0) return  min+'分钟前'
//计算秒数
let ms = Math.floor(time/1000)
if(ms>0) return '刚才'
})