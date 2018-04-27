const URL = 'https://dzsw.hxzs.com.cn/ST9ZHHXAPP';
const API = {
    loginApi: '/Login/Login',
    searchList: '/ShipTicket/shipHome/selectStation',
    getList: '/ShipTicket/shipList/ListShip',
    pay : '/ShipTicket/shipSeat/makeship'
}

const PAGE = {
    index: '/Mine/Index',
    login: '/Login',
    list : '/ShipTicket/ShipList/Index',
    pay : '/ShipTicket/shipSeat/Index'
}
module.exports = {
    API, URL, PAGE
};
