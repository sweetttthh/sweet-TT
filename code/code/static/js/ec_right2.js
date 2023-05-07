//创建了一个 ECharts 实例对象，将其绑定到 HTML 页面上的一个 DOM 元素（这里是 'r2'）上
var ec_right2 = echarts.init(document.getElementById('r2'), "dark");
var ec_right2_option = {
    title: {
        text: "重庆市评论数量最多的六个品牌",
        textStyle: {
            color: 'white',
        },
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
        }
    },
    backgroundColor: "rgba(128, 128, 128, 0)",
    series: [
        {
            name: '重庆市评论数量最多的六个品牌',
            type: 'pie',
            radius: [10, 100],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: true
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: []
        }
    ]

};