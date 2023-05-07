var ec_left2 = echarts.init(document.getElementById('l2'), "dark");
var ec_left2_Option = {
    // backgroundColor: "#003366",
    title: {
        text: "重庆市门店数量top6",
        textStyle: {
            color: 'white',
        },
        left: 'center',
        link:"allcity"
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    backgroundColor:"rgba(128, 128, 128, 0)",
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: []
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
            },
            data: []
        }],
    series: [{
        name: '值',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
            normal: {
                barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgb(2,163,254,1)'
                }, {
                    offset: 1,
                    color: 'rgb(125,64,255,1)'
                }]),
            },
        },
        barWidth: 20,
        data: []
    },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [],
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};

