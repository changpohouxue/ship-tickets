const url = require('./config').URL;
const loginPage = require('./config').PAGE.login;
const loginApi = require('./config').API.loginApi;
const http = require('superagent');
const user = require('./api_data/api_data').login_data;
function getHtml() {
    return new Promise((resolve, reject) => {
        http.get(url + loginPage)
            .end((err, res) => {
                if (err) {
                    console.log('===getHtml===抓取页面出错->' + err);
                }
                login().then((res) => {
                    resolve('登录成功');
                })
            })
    })
}

function login() {
    return new Promise((resolve, reject) => {
        http.post(url + loginApi)
            .set('Content-Type', 'application/json')
            .send(user)
            .end((err, res) => {
                if (err) {
                    console.log('===login===出错->' + err);
                }
                setCookie(res);
                resolve(res);
            })
    })
}
function setCookie(res) {
    var ck = '';
    if (res.headers['set-cookie'] != null) {
        var arr = (res.headers['set-cookie']+'').split(';').forEach((value, index, array)=>{
            if (index == 0 || index == 2) {
                ck += value+';';
            }
        })
    }
    global.cookie = ck.replace('HttpOnly,','');

}

module.exports = getHtml;