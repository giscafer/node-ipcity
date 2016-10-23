/**
 * get ip city info
 * 获取ip归属城市信息
 * https://github.com/giscafer/node-ipcity
 */
'use strict'
const request = require('superagent');
let DPOOLSINA_IP_URL = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json";
let IPCN_URL = 'http://www.ip.cn';


function getIpCityInfo(ip) {

    return new Promise((resolve, reject) => {
        let url = DPOOLSINA_IP_URL;
        if ((/\d+\.\d+\.\d+\.\d+/).test(ip)) {
            url = DPOOLSINA_IP_URL + '&ip=' + ip;
            // return resolve(null);
        }
        request.get(url)
            .set('User-Agent', 'curl/7.21.3 (i686-pc-linux-gnu) libcurl/7.21.3 OpenSSL/0.9.8o zlib/1.2.3.4 libidn/1.18')
            .end((err, res) => {
                if (err) {
                    reject(err);
                } else {
                    let data = JSON.parse(res.text);
                    if (typeof data == 'object' && data != null) {
                        resolve(data.country + ' ' + data.province + ' ' + data.city);
                    } else {
                        resolve(null);
                    }
                }
            });
    });
}

function getIp() {
    return new Promise((resolve, reject) => {
        request.get(IPCN_URL)
            .set('User-Agent', 'curl/7.21.3 (i686-pc-linux-gnu) libcurl/7.21.3 OpenSSL/0.9.8o zlib/1.2.3.4 libidn/1.18')
            .end((err, res) => {
                if (err) {
                    return reject(err);
                } else {
                    let ip = res.text.match(/\d+\.\d+\.\d+\.\d+/)[0];
                    return resolve(ip);
                }
            });
    });
}

module.exports = {
    getIpCityInfo,
    getIp
}
