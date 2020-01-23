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
			$("<li><img src='"+ data[i].image_path +"' style=><span>"+data[i].name+"</span><span>"+ data[i].rating+"</span><span>"+ data[i].distance+"</span><span>"+ data[i].order_lead_time+"</span></li>").appendTo(".end-ul");
		}
	}
});