$.ajax({
	type:"get",
	url:"https://elm.cangdu.org/v2/index_entry",
	success:function(data){
		console.log(data);
		for(var i = 0; i < 8;i++){
			$("<li><img src='"+ data[i].image_url +"'><span>"+data[i].title+"</span></li>").appendTo(".toubu-lyl");
		}
	}
});
$.ajax({
	type:"get",
	url:"https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762",
	success:function(data){
		console.log(data);
		for(var i = 0; i < 8;i++){
//			"+ data[i].image_path +"
			$("<li><div style='display:block;width:30%;height:100%;position:absolute;'><img src='"+ data[i].image_path +"' style='width:100%;height:70%;margin-top:15%;'></div><div style='width:70%;height:100%;position:absolute;left:30%;padding:5px;'><span style='background:yellow;'>品牌</span><span style='margin-left:5px;font-size:20px;font-weight:bold;'>"+data[i].name+"</span><span style='border:1px solid gray;position:relative;left:30%;font-size:13px;color:gray;'>保</span><span style='border:1px solid gray;position:relative;left:33%;font-size:13px;color:gray;'>准</span><span style='border:1px solid gray;position:relative;left:36%;font-size:13px;color:gray;'>票</span><span style='background:dodgerblue;font-size:12px;position:absolute;top:40%;right:20%;color:white;'>蜂鸟专送</span><span style='border:1px solid dodgerblue;font-size:12px;position:absolute;top:40%;right:3%;color:dodgerblue;'>准时达</span><span style='position:absolute;top:40%;left:30%;color:orange;font-size:13px;'><img src='xingxing.png' style='width:70px;position:absolute;left:-120%;'>"+ data[i].rating+"&nbsp;<span style='color:black;font-size:12px;'>月销"+data[i].recent_order_num+"</span></span><div style='top:85%;right:5%;position:absolute;font-size:12px;'>"+ data[i].distance+"/<span style='color:dodgerblue'>"+ data[i].order_lead_time+"</div><div style='position:absolute;font-size:12px;top:85%;'>￥20元起送/配送费约￥5</div></div></li>").appendTo(".end-ul");
		}
	}
});