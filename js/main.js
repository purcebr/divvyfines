var app = angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {

  // $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  // $scope.series = ['California & Milwaulkee'];
  // $scope.data = [
  //   [65, 59, 80, 81, 56, 55, 40],
  // ];

 //  $http.get('/index.php').
 //  success(function(data, status, headers, config) {
 //    // this callback will be called asynchronously
 //    // when the response is available
	// var keys = [],
	//     values = [];

	// for (var property in data) {

	//    if ( ! data.hasOwnProperty(property)) {
	//       continue;
	//    }

	//    keys.push(data[property].ts + " / " + data[property].sum);
	//    values.push(data[property].total);
	   

	// }
// $scope.labels = keys;
// $scope.data = [ values ];

  // }).
  // error(function(data, status, headers, config) {
  //   // called asynchronously if an error occurs
  //   // or server returns response with an error status.
  // });
});

app.controller("GenderController", function ($scope) {
$scope.options = {
	tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>",
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };
  $scope.labels = ["Male", "Female"];
  $scope.data = [135746.27, 76544.31];
});

app.controller("UserTypeController", function ($scope) {
	   $scope.options = {
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
    };
  $scope.labels = ["Customer", "Subscriber"];
  $scope.data = [1198590.52 , 212378.62 ];
});

// app.controller("GenderAdjustedController", function ($scope) {
// $scope.options = {
// 	tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>",
// 	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
//     };
//   $scope.labels = ["Male", "Female"];
//   $scope.data = [135746.27 / 1255733, 76544.31 /407621];
// });

app.controller("GenderAdjustedController", function ($scope) {
	$scope.options = {
		scaleLabel: "$<%=value%>",
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
	};
  $scope.labels = ["Male", "Female"];
  $scope.series = ['Gender Adjusted'];
  $scope.data = [
	[135746.27 / 1255733, 76544.31 /407621]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});

// app.controller("UserTypeAdjustedController", function ($scope) {
// 	   $scope.options = {
// 		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
//     };
//   $scope.labels = ["Customer", "Subscriber"];
//   $scope.data = [1198590.52 / 791240, 212378.62 / 1663394];
// });

app.controller("UserTypeAdjustedController", function ($scope) {
	$scope.options = {
		scaleLabel: "$<%=value%>",
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
	};
  $scope.labels = ["Customer", "Subscriber"];
  $scope.series = ['User Type Adjusted'];
  $scope.data = [
	[1198590.52 / 791240, 212378.62 / 1663394]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});


app.controller("MonthsController", function ($scope) {
   $scope.options = {
   	scaleLabel: "$<%=value%>",
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
    };
  $scope.labels = ["January '14", "February '14", "March '14", "April '14", "May '14", "June '14", "July '14", "August '14", "September '14", "October '14", "November '14", "December '14"];
  $scope.series = ['Fines By Month'];
  $scope.data = [
	[5898.44, 8641.16,32547.42,106918.48,218329.62,241265.35,266491.64,251356.90,143062.04,88510.99,29239.43, 18704.17]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});

app.controller("MonthsAdjustedController", function ($scope) {
  $scope.options = {
    scaleLabel: "$<%=value%>",
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
  };
  $scope.labels = ["January '14", "February '14", "March '14", "April '14", "May '14", "June '14", "July '14", "August '14", "September '14", "October '14", "November '14", "December '14"];
  $scope.series = ['Months Adjusted'];
  $scope.data = [
  [(5898.44 / 25074).toFixed(2), (8641.16 / 28081).toFixed(2),(32547.42 / 69302).toFixed(2),(106918.48 / 158479).toFixed(2),(218329.62 /278601).toFixed(2),(241265.35 / 346154).toFixed(2),(266491.64 / 410276).toFixed(2),(251356.90 / 392051).toFixed(2),(143062.04 /308635).toFixed(2),(88510.99 /237324).toFixed(2),(29239.43 /113878).toFixed(2), (18704.17 /86776).toFixed(2)]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});


app.controller("DaysController", function ($scope) {
	$scope.options = {
		scaleLabel: "$<%=value%>",
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
	};
  $scope.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  $scope.series = ['Fines By Day of Week'];
  $scope.data = [
	[183185.69, 133704.69,115565.72,130549.02,184366.51,322023.96,341573.55]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});

app.controller("DaysAdjustedController", function ($scope) {
  $scope.options = {
    scaleLabel: "$<%=value%>",
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
  };
  $scope.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  $scope.series = ['Days Adjusted'];
  $scope.data = [
  [(183185.69 /342764).toFixed(2), (133704.69 / 335397).toFixed(2),(115565.72 / 337159).toFixed(2),(130549.02/342551).toFixed(2),(184366.51/366778).toFixed(2),(322023.96 / 378265).toFixed(2),(341573.55 / 351720).toFixed(2)]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});

// app.controller("AgeController", function ($scope) {
// 	   $scope.options = {
// 		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
//     };
//   $scope.labels = ["18-25", "26-33", "34-41", "42-49", "50-57", "58-65", "65+"];
//   $scope.data = [
// 	[23960.81, 87446.53,45663.09,23494.00,18829.14,10139.43,2822.65]
//   ];
// });


app.controller("AgeController", function ($scope) {
	   $scope.options = {
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
    };
  $scope.labels = ["18-25", "26-33", "34-41", "42-49", "50-57", "58-65", "65+"];
  $scope.data = [23960.81, 87446.53,45663.09,23494.00,18829.14,10139.43,2822.65];
});


// app.controller("AgeAdjustedController", function ($scope) {
// 	   $scope.options = {
// 		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
//     };
//   $scope.labels = ["18-25", "26-33", "34-41", "42-49", "50-57", "58-65", "65+"];
//   $scope.data = [23960.81 / 142675, 87446.53 / 707570,45663.09 / 370652,23494.00 / 207510,18829.14 / 151582,10139.43 / 68314,2822.65 / 14521];
// });

app.controller("AgeAdjustedController", function ($scope) {
	$scope.options = {
		scaleLabel: "$<%=value%>",
		tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>"
	};
  $scope.labels = ["18-25", "26-33", "34-41", "42-49", "50-57", "58-65", "65+"];
  $scope.series = ['Age Adjusted'];
  $scope.data = [
	[23960.81 / 142675, 87446.53 / 707570,45663.09 / 370652,23494.00 / 207510,18829.14 / 151582,10139.43 / 68314,2822.65 / 14521]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});

    	//Customer 119859052 / 791240 rides

    	//Male 13574627
    	//Female 7654431