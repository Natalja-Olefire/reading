(function () {
'use strict';

angular.module('Words', [])
.controller('WordsController', WordsController)
.service('WordsService', WordsService);

WordsController.$inject = ['WordsService'];
function WordsController(WordsService) {
  var words = this;
  var lastRandom=WordsService.getRandom();

  words.getLastRandom = function() {
    return lastRandom;
  }

  words.getRandom = function() {
    lastRandom = WordsService.getRandom();
  }
}

function WordsService() {
  var service = this;

  var words=[
    "кракозябра",
    "балалайка",
    "медведь",
    "кошка",
    "спит",
    "слон",
    "жираф",
    "ответ",
    "красивый",
    "Луна",
    "Земля",
    "школа",
    "ошибка",
    "смешной",
    "кусочек",
    "растёт",
    "весёлый",
    "радость",
    "природа",
    "грустить",
    "жевать",
    "акула",
    "селёдка",
    "соль",
    "парашут",
    "крапива",
    "прямая",
    "колба",
    "робот",
    "телевизор"
];

 var word;

 service.getRandom = function () {
    word = words[Math.floor((Math.random() * words.length))];
    return word;
  };
}

})();
