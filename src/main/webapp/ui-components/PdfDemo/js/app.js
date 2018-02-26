(function(){
	var app = angular.module('PdfDemo',['ngDialog','ngSanitize']);

    app.run(function($rootScope) {
        $rootScope.image = [];
    })

    app.controller("EmployeeData",["$rootScope","$scope","ngDialog",function($scope,$rootScope,ngDialog){

      var thisVar = this;
      $scope.showPopup = function () {
        ngDialog.open({ template: 'html/popup.html', className: 'ngdialog-theme-default' });
        $(".ngdialog").css("overflow","hidden");
        $(".ngdialog").niceScroll({cursorborder:"",cursorcolor:"#A9A9A9"});

      };

      $scope.empInfo = function (EmpData) {
        $scope.employeeInfo = EmpData.employeeInfo;
        $scope.employeeInfo =  $scope.employeeInfo.replace(/\n\r?/g, '<br />');
      }

      $scope.AddEmployee = function (EmpData) {
        $scope.firstname = EmpData.firstname;
        $scope.lastname = EmpData.lastname;
        $scope.employeeId = EmpData.employeeId;
        $scope.address = EmpData.address;
        ngDialog.close();
      };
    }]);
    app.controller("DownloadAndPreviewController",["$rootScope","$scope","ngDialog",function($scope,$rootScope,ngDialog){
      $scope.showPreview = function () {
        $("#pdf-input-div").css("display","none");
        $(".pdf-div").css("display","block");
      };
      $scope.generatePDF = function () {
        $("#create_pdf").click();
      };
    }]);
})();


