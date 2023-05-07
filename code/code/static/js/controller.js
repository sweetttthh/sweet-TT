function get_time() {
	$.ajax({
		url: "/time",
		// timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			$("#time").html(data)
		},
		error: function(xhr, type, errorThrown) {

		}
	});
}

function get_c2_data() {
    $.ajax({
        url:"/c2",
        success: function(data) {
			ec_center_option.series[0].data=data.data;
            ec_center.setOption(ec_center_option)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}

function get_l1_data() {
    $.ajax({
        url:"/l1",
        success: function(data) {
			ec_left1_Option.series[0].data = data.data;
            ec_left1.setOption(ec_left1_Option);
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}

function get_l2_data(city) {
    $.ajax({
        url:"/l2",
        data:{city:city},
        success: function(data) {
			ec_left2_Option.title.text=data.city_name + "门店数量top6";
			ec_left2_Option.yAxis[0].data=data.name;
			ec_left2_Option.yAxis[1].data=data.num;
            ec_left2_Option.series[0].data=data.num;
            ec_left2_Option.series[1].data=data.max_num;
            ec_left2.setOption(ec_left2_Option)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}

function get_r1_data() {
    $.ajax({
        url: "/r1",
        success: function (data) {
            ec_right1_option.xAxis.data=data.city;
            ec_right1_option.series[0].data=data.confirm;
            ec_right1.setOption(ec_right1_option);
        }
    })
}

function get_r2_data() {
    $.ajax({
        url: "/r2",
        success: function (data) {
            ec_right2_option.series[0].data=data.data;
            ec_right2.setOption(ec_right2_option);
        }
    })
}

get_c2_data();
get_l1_data();
get_l2_data('cq');
get_r1_data();
get_r2_data();
