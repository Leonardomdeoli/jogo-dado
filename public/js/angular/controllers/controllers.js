

angular.module("myApp", []).controller("memoria", function($scope,$timeout,$interval) {



var cont = 0;
var aux = 0;
$scope.resultado;


function sorteia(){
    var n = Math.floor(Math.random()*7);
    console.log(n);
    if(angular.isUndefined(n) || n == 0 ){
      return sorteia();
    }else{
       return n;       
     }
 }
inicial();
function inicial(){

  cont = 0;
    aux = sorteia();  
    cont += aux;
    $scope.imagem ="public/img/"+aux+".png";

    aux = sorteia();  
    cont += aux;
    $scope.imagem1 ="public/img/"+aux+".png";

    aux = sorteia();  
    cont += aux;
    $scope.imagem2 ="public/img/"+aux+".png";

    aux = sorteia();  
    cont += aux;
    $scope.imagem3 ="public/img/"+aux+".png";

    aux = sorteia();  
    cont += aux;
    $scope.imagem4 ="public/img/"+aux+".png";    

    $scope.resultado = cont;


}

$scope.preencheDado = function(){
    inicial();
  }

});
