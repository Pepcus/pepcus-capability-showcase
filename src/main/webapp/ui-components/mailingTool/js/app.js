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
    app.controller("templateController",['$scope',function($scope){
      $scope.AddReciever = function () {
        $('#TemplateData').css("display","none");
        $('#details-form').css("display","block");
        $(".ngdialog-content").css("width","350px");
        $('.select-send').html('send');

        console.log("clicked");
      };
      $scope.SelectTemplate = function () {
        $('#TemplateData').css("display","none");
        $('#details-form').css("display","block");
        $(".ngdialog-content").css("width","350px");
        $('.select-send').html('send');


        console.log("clicked");
      };

    }]);




})();
