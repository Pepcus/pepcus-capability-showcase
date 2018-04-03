(function(){
	var app = angular.module('mailingTool',['ngDialog']);

    app.run(function($rootScope) {
        $rootScope.image = [];
    });

    app.controller("SelectTemplateController",["$rootScope","$scope","ngDialog",function($scope,$rootScope,ngDialog){
      var thisVar = this;
      $scope.showPopup = function (event) {
        ngDialog.open({ template: 'html/popup.html', className: 'ngdialog-theme-default' });
      };
      $scope.showTemplate = function ($event) {
        var templateId = ($event.currentTarget.id);
        ngDialog.open({ template: 'html/'+templateId+'.html', className: 'ngdialog-theme-default' });
        console.log(templateId);
      };
    }]);
    app.controller("templateController",['$scope',"$http","ngDialog",function($scope,$http,ngDialog){
      $scope.AddReciever = function () {
        $('#details-form').css("display","block");
        $('.select-send').css("display","none");

      };
      $scope.SelectTemplate = function () {
        $('#details-form').css("display","block");
        $('.select-send').css("display","none");
      };
      $scope.SendNotificationTemplate = function () {
    	  var data = {
        		  recieversName: $scope.recieversName,
        		  recieversEmail: $scope.recieversEmail,
        		  senderName: $scope.senderName,
        		  senderDesignation: $scope.senderDesignation
              };console.log('DAA: '+data);
        	  $http({
        	        method : "POST",
        	        url : "/pepcuscapability-showcase/mailingtool?template=NOTIFICATION",
        	        data: data
        	    }).then(function mySuccess(response) {
        	    	ngDialog.close();
        	    }, function myError(response) {
        	    	ngDialog.close();

        	    });
      };
      $scope.SendGreetingTemplate = function () {
    	  var data = {
    		  recieversName: $scope.recieversName,
    		  recieversEmail: $scope.recieversEmail
          };
    	  $http({
    	        method : "POST",
    	        url : "/pepcuscapability-showcase/mailingtool?template=GREETINGS",
    	        data: data
    	    }).then(function mySuccess(response) {
    	    	ngDialog.close();
    	    }, function myError(response) {
    	    	ngDialog.close();

    	    });
      };

    }]);
    
})();
