# node-ipcity

[![NPM version](https://img.shields.io/npm/v/node-ipcity.svg?style=flat-square)](https://www.npmjs.com/package/node-ipcity)

get ip city info in Node.js,Base on `http://int.dpool.sina.com.cn/iplookup/iplookup.php`,`http://ip.cn/`

获取ip归属城市信息，获取ip地址

## Install

	npm install node-ipcity

## Usage

```javascript
	//获取指定ip的城市
	let ipcity=require('node-ipcity');
	ipcity.getIpCityInfo('221.193.207.29').then((city) => {
		console.log(city);//中国 河北 邯郸
	});
	//获取ip地址
	ipcity.getIp().then((ip) => {
		console.log('your ip is '+ip); //your ip is 183.220.19.214
	});

```
## License

![](https://img.shields.io/badge/license-MIT-blue.svg)

---

> [giscafer.com](http://giscafer.com) &nbsp;&middot;&nbsp;
> GitHub [@giscafer](https://github.com/giscafer) &nbsp;&middot;&nbsp;
> Weibo [@Nickbing Lao](https://weibo.com/laohoubin)