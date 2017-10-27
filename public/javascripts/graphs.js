//$(function () {
//    Highcharts.chart('container-wealth', {
//        chart: {
//            type: 'spline'
//        },
//        title: {
//            text: ' '
//        },
//        subtitle: {
//            text: ' '
//        },
//        xAxis: {
//            type: 'datetime',
//            dateTimeLabelFormats: { // don't display the dummy year
//                month: '%e. %b',
//                year: '%b'
//            },
//            title: {
//                text: ' '
//            }
//        },
//        yAxis: {
//            title: {
//                text: ' '
//            },
//            min: 0
//        },
//        tooltip: {
//            headerFormat: '<b>{series.name}</b><br>',
//            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
//        },
//
//        plotOptions: {
//            spline: {
//                marker: {
//                    enabled: true
//                }
//            }
//        },
//
//        series: [{
//            name: 'Investments',
//            // Define the data points. All series have a dummy year
//            // of 1970/71 in order to be compared on the same x axis. Note
//            // that in JavaScript, months start at 0 for January, 1 for February etc.
//            data: [
//                [Date.UTC(1970, 9, 21), 0],
//                [Date.UTC(1970, 10, 4), 0.28],
//                [Date.UTC(1970, 10, 9), 0.25],
//                [Date.UTC(1970, 10, 27), 0.2],
//                [Date.UTC(1970, 11, 2), 0.28],
//                [Date.UTC(1970, 11, 26), 0.28],
//                [Date.UTC(1970, 11, 29), 0.47],
//                [Date.UTC(1971, 0, 11), 0.79],
//                [Date.UTC(1971, 0, 26), 0.72],
//                [Date.UTC(1971, 1, 3), 1.02],
//                [Date.UTC(1971, 1, 11), 1.12],
//                [Date.UTC(1971, 1, 25), 1.2],
//                [Date.UTC(1971, 2, 11), 1.18],
//                [Date.UTC(1971, 3, 11), 1.19],
//                [Date.UTC(1971, 4, 1), 1.85],
//                [Date.UTC(1971, 4, 5), 2.22],
//                [Date.UTC(1971, 4, 19), 1.15],
//                [Date.UTC(1971, 5, 3), 0]
//            ]
//        }, {
//            name: 'Traditional Method',
//            data: [
//                [Date.UTC(1970, 9, 29), 0],
//                [Date.UTC(1970, 10, 9), 0.4],
//                [Date.UTC(1970, 11, 1), 0.25],
//                [Date.UTC(1971, 0, 1), 1.66],
//                [Date.UTC(1971, 0, 10), 1.8],
//                [Date.UTC(1971, 1, 19), 1.76],
//                [Date.UTC(1971, 2, 25), 2.62],
//                [Date.UTC(1971, 3, 19), 2.41],
//                [Date.UTC(1971, 3, 30), 2.05],
//                [Date.UTC(1971, 4, 14), 1.7],
//                [Date.UTC(1971, 4, 24), 1.1],
//                [Date.UTC(1971, 5, 10), 0]
//            ]
//        }, {
//            name: 'Wealth Acceleration Method',
//            data: [
//                [Date.UTC(1970, 10, 25), 0],
//                [Date.UTC(1970, 11, 6), 0.25],
//                [Date.UTC(1970, 11, 20), 1.41],
//                [Date.UTC(1970, 11, 25), 1.64],
//                [Date.UTC(1971, 0, 4), 1.6],
//                [Date.UTC(1971, 0, 17), 2.55],
//                [Date.UTC(1971, 0, 24), 2.62],
//                [Date.UTC(1971, 1, 4), 2.5],
//                [Date.UTC(1971, 1, 14), 2.42],
//                [Date.UTC(1971, 2, 6), 2.74],
//                [Date.UTC(1971, 2, 14), 2.62],
//                [Date.UTC(1971, 2, 24), 2.6],
//                [Date.UTC(1971, 3, 2), 2.81],
//                [Date.UTC(1971, 3, 12), 2.63],
//                [Date.UTC(1971, 3, 28), 2.77],
//                [Date.UTC(1971, 4, 5), 2.68],
//                [Date.UTC(1971, 4, 10), 2.56],
//                [Date.UTC(1971, 4, 15), 2.39],
//                [Date.UTC(1971, 4, 20), 2.3],
//                [Date.UTC(1971, 5, 5), 2],
//                [Date.UTC(1971, 5, 10), 1.85],
//                [Date.UTC(1971, 5, 15), 1.49],
//                [Date.UTC(1971, 5, 23), 1.08]
//            ]
//        }]
//    });
//});
//
//$(function () {
//    var chart = Highcharts.chart('container-income', {
//
//        chart: {
//            type: 'column'
//        },
//
//        title: {
//            text: 'Highcharts responsive chart'
//        },
//
//        subtitle: {
//            text: 'Resize the frame or click buttons to change appearance'
//        },
//
//        legend: {
//            align: 'right',
//            verticalAlign: 'middle',
//            layout: 'vertical'
//        },
//
//        xAxis: {
//            categories: [' '],
//            labels: {
//                x: -10
//            }
//        },
//
//        yAxis: {
//            allowDecimals: false,
//            title: {
//                text: ' Data'
//            }
//        },
//
//        series: [{
//            name: 'Income',
//            data: [7]
//        }, {
//            name: 'Household Expenses',
//            data: [5]
//        }, {
//            name: 'Discretionary',
//            data: [3]
//        }],
//
//        responsive: {
//            rules: [{
//                condition: {
//
//                },
//                chartOptions: {
//                    legend: {
//                        align: 'center',
//                        verticalAlign: 'bottom',
//                        layout: 'horizontal'
//                    },
//                    yAxis: {
//                        labels: {
//                            align: 'left',
//                            x: 0,
//                            y: -5
//                        },
//                        title: {
//                            text: null
//                        }
//                    },
//                    subtitle: {
//                        text: null
//                    },
//                    credits: {
//                        enabled: false
//                    }
//                }
//            }]
//        }
//    });
//
//});
