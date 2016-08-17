$("#listing").submit(function(event){
	event.preventDefault();
	$("#recent").hide();
	$("#dataview").hide();
	$("#list").hide();
	$("#exit").show();
	$("#listpage").show();
	$.ajax({
		url: event.target.action,
		method: event.target.method,
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: function(data) {
			var labels1 = [];
			var data1 = [];
			for(var l=0; l<20; l++){
				data1[l] = (data.rows[l].sensorvalue__c);
				labels1[l] = (data.rows[l].localtimestamppst__c);
			}
			labels1[0] = "Current: " + labels1[0];
			var ctx = document.getElementById("myChart").getContext("2d");
			ctx.canvas.height = 50;
			var myChart = new Chart(ctx , {
				responsive: 'true',
				type: 'line',
				data: { 
					labels: labels1,
					datasets:[{
						label: 'Light Intensity (LUX)',
						pointColor: 'rgba(250,135,20,1)',
						fillColor: 'rgba(125,150,245,1)',
						highlightFill: 'rgba(125,150,245,1)',
						data: data1
					}]	
				},	
				options: {
					hover: {
						mode: 'label'
					},
					title: {
						display: true,
						text: 'Last 20 Brightness Values (Hover over points to show details)'
					},
					scales: {
						yAxes: [{
							ticks: {
								min: 40,
								max: 60
							}	
						}],
						xAxes: [{
							display: false
						}]
					}
				}
			});
			myChart.update(2000);						
		}
	})
});
