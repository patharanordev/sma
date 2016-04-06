
var simpleMovingAVG = function(dataArray, timePeriods, resultArr){
	var sum = 0;
	var result = -1;

	try{
		for(var i=timePeriods-1;i>-1;i--){
			sum += dataArray[i];
		}

		result = (sum / parseFloat(timePeriods));

		if(resultArr instanceof Array)
			resultArr.push(result);
	} catch(err) {
		result = -1;
		console.log("SMA Error : " + err);
	}

	return result;
};