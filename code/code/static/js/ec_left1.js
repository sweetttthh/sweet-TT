var ec_left1 = echarts.init(document.getElementById('l1'), "dark");

var ec_left1_Option = {
		//标题样式
	title: {
		text: "重庆市门店评分占比",
		textStyle: {
			color: 'white',
		},
		left: 'center',
	},
	tooltip: {
		trigger: 'item'
	},
	legend: {
		top: 'bottom'
	},
	backgroundColor:"rgba(128, 128, 128, 0)",
	series: [
		{
			name: 'Access From',
			type: 'pie',
			radius: ['40%', '70%'],
			avoidLabelOverlap: false,
			itemStyle: {
				borderRadius: 10,
				borderColor: '#fff',
				borderWidth: 2
			},
			label: {
				show: false,
				position: 'center'
			},
			emphasis: {
				label: {
					show: true,
					fontSize: 20,
					fontWeight: 'bold'
				}
			},
			labelLine: {
				show: false
			},
			data: []
		}
	]
};

