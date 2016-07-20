<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Light Sensor Data</title>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <style>
        body {
            padding-top: 60px;
        }
    </style>
    <script>
        $(function() {
            $("#phoneChangerForm").submit(function(event) {
				var id = $("id").val();
                var sensorvalue__c = $("#sensorvalue__c").val();
                var sensortimestamp__c = $("#sensortimestamp__c").val();
                $.ajax({
                    url: event.target.action,
                    method: event.target.method,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(data) {
							
					}
                })
            });
        });
    </script>
</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/"></a>
            </div>
        </div>
    </nav>

    <div class="container">
	<div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Most Recent Data</h3>
                </div>
                <div class="panel-body">
                    <div class="form-group">
                        <label for="sensorvalue__c">Sensor Data:</label>
                        <div id="sensorvalue__c">
                    </div>
                    <div class="form-group">
                        <label for="sensortimestamp__c">Time Stamp:</label>
                        <div id="sensortimestamp__c">
                    </div>
                </div>
        <form id="phoneChangerForm" action="/update" method="get" style="width: 400px">
            
                <div class="panel-footer">
                    <button type="submit" class="btn btn-primary">Refresh</button>
                </div>
            </div>
        </form>
    </div>
</body>
</html>