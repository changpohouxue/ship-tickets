/**
 * Created by maybe on 2018/4/27.
 */
const nodeemail = require('nodemailer');
const from = '';
const to = [''];

function sendEmail() {
    const smtp = nodeemail.createTransport({
        host: 'smtp.exmail.qq.com',
        port: 465,
        auth: {
            user: "youUser",
            pass: 'youPassWord'
        }
    })
    var mailOpt = {
        from,
        to,
        subject: '快去抢票',
        html:'速度'
    }
    smtp.sendMail(mailOpt,(err)=>{
        if (err) {
            console.log(`邮箱发送失败${err}`);
        } else {
            console.log('发送成功!');
        }
    })
}
module.exports = sendEmail;
