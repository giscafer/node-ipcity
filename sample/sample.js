var ipcity=require('../index');
ipcity.getIpCityInfo('221.193.207.29').then((city) => {
	console.log(city);
});