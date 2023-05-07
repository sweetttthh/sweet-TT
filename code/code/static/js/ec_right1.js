var ec_right1 = echarts.init(document.getElementById('r1'), "dark");
var ec_right1_option = {
    //标题样式
    title: {
        text: "奶茶品牌全国门店总数top7",
        textStyle: {
            color: 'white',
        },
        left: 'center',
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        axisLabel: {
            interval: 0,
            rotate: 25
        },
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value',
        // offset:
    },
    backgroundColor:"rgba(128, 128, 128, 0)",
    series: [{
        data: [],
        type: 'bar',
        barMaxWidth: "50%"
    }]
};