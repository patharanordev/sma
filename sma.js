
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

var simpleMovingAVGWithObject = function(dataObjArray, timePeriods){
	var sum = 0;
	var result = false;

	try{
		for(var i=timePeriods-1;i>-1;i--){
			sum += dataObjArray[i].data;
		}

		result = (parseFloat(sum) / parseFloat(timePeriods));
		console.log('SMA Result : ' + result);
	} catch(err) {
		result = false;
		console.log("SMA Error : " + err);
	}

	return result;
};
