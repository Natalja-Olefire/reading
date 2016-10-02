(function () {
'use strict';

angular.module('Words', ['ngTouch'])
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
		"динозавр",
		"банан",
		"акробат",
		"крошка",
		"йогурт",
		"энциклопедия",
		"яхта",
		"крышка",
		"противный",
		"кислый",
		"сладкий",
		"горький",
		"крыса",
		"совсем",
		"обидный",
		"радостный",
		"гора",
		"грибы",
		"кружок",
		"атлас",
		"приходить",
		"грозный",
		"гражданин",
		"карнавал",
		"компьютер",
		"монитор",
		"ковёр",
		"окно",
		"сорока",
		"ворона",
		"обидеть",
		"слышать",
		"видеть",
		"зависеть",
		"зависать",    
    "телевизор"
];

 var word;

 service.getRandom = function () {
    word = words[Math.floor((Math.random() * words.length))];
    return word;
  };
}

})();
