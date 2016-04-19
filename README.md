# Simple Moving Average (SMA)

A simple moving average is formed by computing the average price of a security over a specific number of periods. Most moving averages are based on closing prices. A 5-day simple moving average is the five day sum of closing prices divided by five. As its name implies, a moving average is an average that moves. Old data is dropped as new data comes available. This causes the average to move along the time scale. Below is an example of a 5-day moving average evolving over three days.

```
Daily Closing Prices: 11,12,13,14,15,16,17 
First day of 5-day SMA: (11 + 12 + 13 + 14 + 15) / 5 = 13
Second day of 5-day SMA: (12 + 13 + 14 + 15 + 16) / 5 = 14
Third day of 5-day SMA: (13 + 14 + 15 + 16 + 17) / 5 = 15
```

The first day of the moving average simply covers the last five days. The second day of the moving average drops the first data point (11) and adds the new data point (16). The third day of the moving average continues by dropping the first data point (12) and adding the new data point (17). In the example above, prices gradually increase from 11 to 17 over a total of seven days. Notice that the moving average also rises from 13 to 15 over a three day calculation period. Also notice that each moving average value is just below the last price. For example, the moving average for day one equals 13 and the last price is 15. Prices the prior four days were lower and this causes the moving average to lag.

## Note

 - Thank you for knowledge from [StockCharts](http://stockcharts.com/school/doku.php?id=chart_school). You can see more detail from their webside.
