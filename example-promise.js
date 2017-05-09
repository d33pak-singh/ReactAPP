/*function getTemp(location){
	return new Promise(function(resolve,reject){
		resolve(79);
		reject("City not found!");
	});
}

getTemp('Delhi').then(function(temp){
	console.log('Success!');
}, function(err){
	console.log(err);
});
http://samples.openweathermap.org/data/2.5/weather?q=Delhi,IN&appid=c4e735ea8bd7e7b6dc8368c752517b2d
*/

function addPromise(a, b){
	return new Promise(function(reject,resolve){
		if(typeof a  !== "number" || typeof b != "number"){
			reject("Format Error!");
		} else {
			resolve(a + b);
		}
	});
}

addPromise(5,"eee").then(function(sum){
	console.log("Succcess", sum);
}, function(error){
	console.log(error);
});