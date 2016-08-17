$("#phoneChangerForm").submit(function(event) {
	event.preventDefault();
	$.ajax({
		url: event.target.action,
		method: event.target.method,
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		success: function(data) {
			$("#sensorvalue").text(data.rows[0].sensorvalue__c);
			$("#sensortimestamp").text(data.rows[0].sensortimestamp__c);
			$("#id").text(data.rows[0].id);
			$("#name").text(data.rows[0].name);
			$("#deviceuser").text(data.rows[0].deviceuser__c);
			$("#deviceos").text(data.rows[0].deviceos__c);
			$("#loginuname").text(data.rows[0].loginuname__c);
			$("#devicename").text(data.rows[0].devicename__c);
			$("#_hc_lastop").text(data.rows[0]._hc_lastop);
			$("#mcuinfo").text(data.rows[0].mcuinfo__c);
			$("#deviceipint").text(data.rows[0].deviceipint__c);
			$("#deviceipext").text(data.rows[0].deviceipext__c);
			$("#localtime").text(data.rows[0].localtimestamppst__c);
			$("#sensorinfo").text(data.rows[0].sensorinfo__c);
			$("#dataview").show();
			$("#exit").show();
			$("#list").hide();
			$("#recent").hide();
			$("#listpage").hide();
		}
	})
});