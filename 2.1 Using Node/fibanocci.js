function fibonacciGenerator(n) {

    var series = [];

    if (n === 1) {
        series = [0];
    } else if (n === 2) {
        series = [0, 1];
    } else {
        series = [0, 1];

        for (var i = 2; i < n; i++) {
            series.push(series[series.length - 2] + series[series.length - 1]);
        }

    }
    return series;
}
console.log(fibonacciGenerator(6));
