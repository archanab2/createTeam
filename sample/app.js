function AppController($scope, $http) {
  
  $http.get('content.json').success(function(data) {
    $scope.contentSets = data.contentData;
    
    $scope.news = [];
    $scope.headlines = [];
    
    angular.forEach(data.contentData, function(demoContent, index){

      angular.forEach(demoContent.news, function(newsGroup, index){
        $scope.news.push(newsGroup);

        angular.forEach(newsGroup.headlines, function(headline, index){
            $scope.headlines.push(headline);
          });
        });
    });
    
  });
  
  $scope.setContent = function(content) {
    $scope.useContent = content;
  }
}