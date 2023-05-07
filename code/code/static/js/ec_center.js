var ec_center = echarts.init(document.getElementById('c2'), "dark");

// var mydata = [{'name': '上海', 'value': 318}, {'name': '云南', 'value': 162}];

var ec_center_option = {
    title: {
        text: '蜜雪冰城全国门店数',
        x: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: '20%',
        right: '20%',
        bottom: '2%',
        top: 200,
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'top',
        textStyle: {
            fontSize: 14,
        },
        splitList: [{ start: 1,end: 100 },
            {start: 101, end: 300 },
			{ start: 301, end: 600 },
            {  start: 601, end: 999 },
            { start: 1000 }],
        color: ['#8A3310', '#c68018', '#e5d525', '#f2ad92', '#F9DCD1']
    },
    backgroundColor:"rgba(128, 128, 128, 0)",
    //配置属性
    series: [{
        name: '蜜雪冰城门店数',
        type: 'map',
        mapType: 'china',
        roam: false, //拖动和缩放
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data: [] //mydata //数据
    }]
};