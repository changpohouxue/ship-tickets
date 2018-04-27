const login_data = JSON.stringify({
    'userID': '',
    'password': ''
})
//抢xx-xx的票
const search_list_data = {
    'startstation': '沈家门',
    'endstation': '东极',
    'startTime': '2018-04-28'
}
//抢几号的票
const getList_data = {
    'date': '2018-04-29'
}

module.exports = {
    login_data, search_list_data, getList_data
}