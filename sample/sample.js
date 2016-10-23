var ipcity=require('../index');
//the ip '221.193.207.29' belong to city
ipcity.getIpCityInfo('221.193.207.29').then((city) => {
	console.log(city);
});
//current ip address belong to city
ipcity.getIpCityInfo().then((city) => {
	console.log('current city:',city);
});
//get ip address
ipcity.getIp().then((ip) => {
	console.log('your ip is '+ip);
});