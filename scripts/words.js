(function () {
'use strict';

angular.module('Words', ['ngTouch'])
.controller('WordsController', WordsController)
.service('LoadDataService', LoadDataService)
.service('WordsService', WordsService)
.constant('fileRoot', "https://natalja-olefire.github.io/reading")
.constant('fileList', ["words.txt", "words2.txt"]);


WordsController.$inject = ['LoadDataService', 'WordsService'];
function WordsController(LoadDataService, WordsService) {
  var wordsController = this;
  var lastRandom;
  var words;

  LoadDataService.loadWords().then(function(returnedWords) {
      words = returnedWords;

      console.log("Words are loaded: ");
      console.log(words);


      lastRandom=WordsService.getRandom(words);
  });

  wordsController.getLastRandom = function() {
    return lastRandom;
  }

  wordsController.getRandom = function() {
    lastRandom = WordsService.getRandom(words);
  }
}


LoadDataService.$inject = ['$http', 'fileRoot', 'fileList']
function LoadDataService($http, fileRoot, fileList) {
  var service = this;

  service.loadWords = function() {
    return $http.get(fileRoot + "/" + fileList[0]).then(function (response) {
      var words = response.data.split('\n');
      console.log(words);
      return words;
    });
    return promise;
  }

}


function WordsService() {
  var service = this;

  var word;
  
  service.getRandom = function (words) {
    console.log("getRandom:");
    console.log(words);
    word = words[Math.floor((Math.random() * words.length))];
    console.log("selected: " + word);
    return word;
  };


}

})();
