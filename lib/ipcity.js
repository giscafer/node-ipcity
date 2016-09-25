/**
 * get ip city info
 * 获取ip归属城市信息
 * https://github.com/giscafer/node-ipcity
 */
'use strict'
const request = require('superagent');
let seach_ip_url = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json";

function getIpCityInfo(ip) {
    seach_ip_url += '&ip=' + ip;
    return new Promise((resolve, reject) => {
        if (!(/\d+\.\d+\.\d+\.\d+/).test(ip)) {
            return resolve(null);
        }
        let req = request.get(seach_ip_url).end((err, res) => {
            if (err) {
                reject(err);
            } else {
                let data = JSON.parse(res.text);
                if (typeof data == 'object' && data != null) {
                    resolve(data.country+' '+data.province+' '+data.city);
                }else{
                	resolve(null);
                }
                
            }
        });
    });
}

module.exports = {
    getIpCityInfo
}
