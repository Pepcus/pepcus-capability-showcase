var ngDataGrid = angular.module('ngDataGrid', [
  'ui.grid',
  'ui.grid.selection',
  'ui.grid.exporter',
  'ui.grid.pagination',
  'ui.grid.infiniteScroll',
  'ui.grid.moveColumns'
]);
ngDataGrid.directive("testDirective", function () {
  return {
    restrict: 'E',
    scope: {
         data: '@data',
         config: '@config'
       },
    controller: 'ngDataGridCtrl',
    templateUrl: 'DataGrid.html'
  };
});
ngDataGrid.controller('ngDataGridCtrl', function ($http, $scope, uiGridConstants) {
    var thisVar = this;
    var gridData = JSON.parse($scope.data);
    var gridConfig = JSON.parse($scope.config);
    setTimeout(function () {
      thisVar.gridOptions = {
        data: gridData
      };
    });
    thisVar.gridOptions = {
      //Enables total items footer..
      showGridFooter: true,
      //Enable column total footer...
      showColumnFooter: true,
      //dropdown to shows No.of entries per pages...
      paginationPageSizes: [25, 50, 75, 100],
      //no.of entry in 1 page.....
      paginationPageSize: 50,
      //Enable filters for search input tag ....
      enableFiltering: true,
      //Hamburger icon for export files......
      enableGridMenu: true,
      //Enable select feature....
      enableSelectAll: true,

      //Pdf Export styling......
      exporterCsvFilename: 'myFile.csv',

      //fontsize for pdf output...
      exporterPdfDefaultStyle: {fontSize: 9},

      //margin in output pdf ............
      exporterPdfTableStyle: {margin: [0, 0, 0, 0]},

     //styling for data headings in pdf output //or first row of pdf output.......
      exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},

      //Pdf heading content............
      exporterPdfHeader: {text: "ngDataGrid Header", style: 'headerStyle'},
     //pdf footer page count.....
      exporterPdfFooter: function (currentPage, pageCount) {
        return {text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle'};
      },
      //Header and Footer styling........
      exporterPdfCustomFormatter: function (docDefinition) {
        docDefinition.styles.headerStyle = {fontSize: 22, bold: true,color:'red'};
        docDefinition.styles.footerStyle = {fontSize: 10, bold: true};
        return docDefinition;
      },
      //pdf orientation can be "portrait" or "landscape"........
      exporterPdfOrientation: 'portrait',
      //pdf page type or size
      exporterPdfPageSize: 'LETTER',
      //pdf page width
      exporterPdfMaxGridWidth: 500,

      //Csv export ................
      exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
     //Excel sheet file name......
      exporterExcelFilename: 'ngDataGrid.xlsx',
      //Excel sheet name.........
      exporterExcelSheetName: 'ngDataGrid1'
    };

    thisVar.gridOptions.onRegisterApi = function (gridApi) {
      thisVar.gridApi = gridApi;
    };
    thisVar.gridOptions.columnDefs = [];

    angular.forEach(gridConfig, function (item) {
      thisVar.gridOptions.columnDefs.push({
        field: item.field,
        width: item.width
      });
    });

  });

