var baseUrl = 'http://t3.vlicai.yinker.net/wb'; //测试服务器接口
var baseIp = "http://t3.vlicai.yinker.net"; //测试服务器IP

export default {
    "baseUrl": baseUrl,
    "baseIp": baseIp,
    'requestIndexSyncData': baseUrl + '/app/h5/index/requestIndexSyncData', 
    'requestIndexAsyncData': baseUrl + '/app/h5/index/requestIndexAsyncData', 
    'getHelpMenuDetail': baseUrl + '/app/h5/helpCenter/getHelpMenuDetail', 
    "getBankListData": baseUrl + "/app/h5/deal/getbanklistinfo", 
    "getBankInfo": baseUrl + "/app/h5/deal/getbankinfo"
}