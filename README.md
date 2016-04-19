# Simple Moving Average (SMA)

A simple moving average is formed by computing the average price of a security over a specific number of periods. Most moving averages are based on closing prices. A 5-day simple moving average is the five day sum of closing prices divided by five. As its name implies, a moving average is an average that moves. Old data is dropped as new data comes available. This causes the average to move along the time scale. Below is an example of a 5-day moving average evolving over three days.

```
Daily Closing Prices: 11,12,13,14,15,16,17 
First day of 5-day SMA: (11 + 12 + 13 + 14 + 15) / 5 = 13
Second day of 5-day SMA: (12 + 13 + 14 + 15 + 16) / 5 = 14
Third day of 5-day SMA: (13 + 14 + 15 + 16 + 17) / 5 = 15
```

The first day of the moving average simply covers the last five days. The second day of the moving average drops the first data point (11) and adds the new data point (16). The third day of the moving average continues by dropping the first data point (12) and adding the new data point (17). In the example above, prices gradually increase from 11 to 17 over a total of seven days. Notice that the moving average also rises from 13 to 15 over a three day calculation period. Also notice that each moving average value is just below the last price. For example, the moving average for day one equals 13 and the last price is 15. Prices the prior four days were lower and this causes the moving average to lag.

## Using the function with object array

Sometime you may use the data based on date/time, you can call `simpleMovingAVG` function to calculate SMA. The data object format is `{ date:NO_FIX_DATE_FORMAT, data:?, ema:TO_SUPPORT_EMA_METHOD }`.
```
<!DOCTYPE html>
<html>	
 <head>		
		<meta charset="UTF-8">		
		<title>Test</title>
		<script src="js/maths.js"></script>
		<script>
			var prices = [
				{date:'2010-03-24', data:22.27, ema:null}, 
				{date:'2010-03-25', data:22.19, ema:null}, 
				{date:'2010-03-26', data:22.08, ema:null}, 
				{date:'2010-03-29', data:22.17, ema:null}, 
				{date:'2010-03-30', data:22.18, ema:null}, 
				{date:'2010-03-31', data:22.13, ema:null}, 
				{date:'2010-04-01', data:22.23, ema:null}, 
				{date:'2010-04-05', data:22.43, ema:null}, 
				{date:'2010-04-06', data:22.24, ema:null}, 
				{date:'2010-04-07', data:22.29, ema:null}, 
				{date:'2010-04-08', data:22.15, ema:null}, 
				{date:'2010-04-09', data:22.39, ema:null}, 
				{date:'2010-04-12', data:22.38, ema:null}, 
				{date:'2010-04-13', data:22.61, ema:null}, 
				{date:'2010-04-14', data:23.36, ema:null}, 
				{date:'2010-04-15', data:24.05, ema:null}, 
				{date:'2010-04-16', data:23.75, ema:null}, 
				{date:'2010-04-19', data:23.83, ema:null}, 
				{date:'2010-04-20', data:23.95, ema:null}, 
				{date:'2010-04-21', data:23.63, ema:null}, 
				{date:'2010-04-22', data:23.82, ema:null}, 
				{date:'2010-04-23', data:23.87, ema:null}, 
				{date:'2010-04-26', data:23.65, ema:null}, 
				{date:'2010-04-27', data:23.19, ema:null}, 
				{date:'2010-04-28', data:23.10, ema:null}, 
				{date:'2010-04-29', data:23.33, ema:null}, 
				{date:'2010-04-30', data:22.68, ema:null}, 
				{date:'2010-05-03', data:23.10, ema:null}, 
				{date:'2010-05-04', data:22.40, ema:null}, 
				{date:'2010-05-05', data:22.17, ema:null}
			];
			
			var sma = simpleMovingAVG(prices, 10);
			console.log(sma);
		</script>
	</head>	
	<body>		
	</body>
</html>
```

## Note

 - Thank you for knowledge from [StockCharts](http://stockcharts.com/school/doku.php?id=chart_school). You can see more detail from their webside.
