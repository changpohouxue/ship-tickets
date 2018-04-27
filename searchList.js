const url = require('./config').URL;
const searchListApi = require('./config').API.searchList;
const getListApi = require('./config').API.getList;
const searchListData = require('./api_data/api_data').search_list_data;
const getListData = require('./api_data/api_data').getList_data;
const UA_LIST = require('./UA');
const indexUA = UA_LIST[Math.floor(Math.random() * UA_LIST.length)];
const axios = require('axios');
const chunk = require('cheerio');
axios.defaults.withCredentials = true;//让ajax携带cookie
let getIndex = 1;
function search() {
    return new Promise((resolve, reject) => {
        getIndex++;
        axios({
            method : 'POST',
            url: url + searchListApi,
            data: searchListData,
            headers: {
                'Cookie': global.cookie,
                'User-Agent': indexUA
            }
        }).then((res)=>{
            console.log(`第${getIndex}次获取列表->${JSON.stringify(res.data)}`);
            return getList();
        }).then((res) => {
            resolve(res);
        })
    })
}

function getList() {
    return new Promise((resolve, reject) => {
        console.log(`当前准备获取${JSON.stringify(getListData)}的票`);
        axios({
            method : 'POST',
            url: url + getListApi,
            data: getListData,
            headers: {
                'Cookie': global.cookie,
                'User-Agent': indexUA
            }
        }).then((res)=>{
            // if (res.data.indexOf('余票:') > 0) {
            //     if (res.data.indexOf('可网售:0') < 0) {
            //         getType(res);
            //     }
            // } else {
                resolve(res);
            //}
        })
    })
}
function getType(res) {
    var $ = chunk.load(res.data);
    console.log($('li'));
    // var li = $('li').attr('onclick').replace('selectship','');
    // var cType = li.substr(2,li.indexOf(',')).replace(/,|'|(|)/g,'');
    // var cardType = li.substr(li.indexOf(",'")+2,li.length).replace(/,|'|(|)/g,'');
    // console.log(li);
    // console.log(cardType);
}
module.exports = search;