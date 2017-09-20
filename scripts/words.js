(function () {
'use strict';

angular.module('Words', ['ngTouch'], function($locationProvider) {
$locationProvider.html5Mode(true);
})
.controller('WordsController', WordsController)
.service('LoadDataService', LoadDataService)
.service('WordsService', WordsService)
.constant('fileRoot', "https://natalja-olefire.github.io/reading/words")
.constant('defaultFile', "default.txt");


WordsController.$inject = ['LoadDataService', 'WordsService', 'defaultFile'];
function WordsController(LoadDataService, WordsService, defaultFile) {
  var wordsController = this;
  var lastRandom;
  var words;

  wordsController.getParam = function(name) {
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
  }

  var file = defaultFile;
  console.log(wordsController.getParam("file"));
  if (wordsController.getParam("file")) {
    file=wordsController.getParam("file");
  }

  LoadDataService.loadWords(file).then(function(returnedWords) {
      words = returnedWords;
      lastRandom=WordsService.getRandom(words);
  });

  wordsController.getLastRandom = function() {
    return lastRandom;
  }

  wordsController.getRandom = function() {
    lastRandom = WordsService.getRandom(words);
  }

}


LoadDataService.$inject = ['$http', 'fileRoot']
function LoadDataService($http, fileRoot) {
  var service = this;

  service.loadWords = function(file) {
    console.log("Loading from file:" + file);
    return $http.get(fileRoot + "/" + file).then(function (response) {
      var words = response.data.split('\n');
      return words;
    });
    return promise;
  }

}


function WordsService() {
  var service = this;

  var word;
  
  service.getRandom = function (words) {
    word = words[Math.floor((Math.random() * words.length))];
    return word;
  };


}

})();
