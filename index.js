const login = require('./login');
const getList = require('./searchList');
const email = require('./send-email');
global.cookie = 'null';
function _init() {
    login().then((log) => {
        console.log(log);
        var t = setInterval(()=>{
           getList().then((res)=>{
               let data = res.data;
               if (data.indexOf('余票:') > 0) {
                   if (data.indexOf('可网售:0') < 0) {
                       email();
                       clearInterval(t);
                   }
               }
           });
        },1000)
    })
}

_init();
