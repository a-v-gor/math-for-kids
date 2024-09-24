/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/ts/App.ts":
/*!******************************!*\
  !*** ./src/assets/ts/App.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _controller_ControllerGamePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/ControllerGamePage */ "./src/assets/ts/controller/ControllerGamePage.ts");
/* harmony import */ var _controller_ControllerRecordsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/ControllerRecordsPage */ "./src/assets/ts/controller/ControllerRecordsPage.ts");
/* harmony import */ var _controller_ControllerSettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/ControllerSettingsPage */ "./src/assets/ts/controller/ControllerSettingsPage.ts");
/* harmony import */ var _controller_ControllerStartPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/ControllerStartPage */ "./src/assets/ts/controller/ControllerStartPage.ts");
/* harmony import */ var _view_ViewGamePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/ViewGamePage */ "./src/assets/ts/view/ViewGamePage.ts");
/* harmony import */ var _view_ViewRecordsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/ViewRecordsPage */ "./src/assets/ts/view/ViewRecordsPage.ts");
/* harmony import */ var _view_ViewSettingsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/ViewSettingsPage */ "./src/assets/ts/view/ViewSettingsPage.ts");
/* harmony import */ var _view_ViewStartPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/ViewStartPage */ "./src/assets/ts/view/ViewStartPage.ts");








var App = /** @class */ (function () {
    function App(data) {
        var _this = this;
        this.actualizeData = function () {
            var stringData = _this.gameData.storageGameData.loadFromLS();
            var parsedObject = {
                examples: [],
                mistakes: [],
                operation: '',
                score: 0,
                gameTime: 0,
                numMistakes: 0,
                numExamples: 0,
                records: [],
            };
            if (stringData !== null) {
                parsedObject = JSON.parse(stringData);
                _this.gameData.setExamples(parsedObject.examples);
                _this.gameData.setMistakes(parsedObject.mistakes);
                _this.gameData.setOperation(parsedObject.operation);
                _this.gameData.setScore(parsedObject.score);
                _this.gameData.setRecords(parsedObject.records);
            }
        };
        this.gameData = data;
    }
    App.prototype.addPagesViews = function () {
        var viewStartPage = new _view_ViewStartPage__WEBPACK_IMPORTED_MODULE_7__["default"](this.gameData);
        this.gameData.setViewStartPage(viewStartPage);
        var viewSettingsPage = new _view_ViewSettingsPage__WEBPACK_IMPORTED_MODULE_6__["default"](this.gameData);
        this.gameData.setViewSettingsPage(viewSettingsPage);
        var viewGamePage = new _view_ViewGamePage__WEBPACK_IMPORTED_MODULE_4__["default"](this.gameData);
        this.gameData.setViewGamePage(viewGamePage);
        var viewRecordsPage = new _view_ViewRecordsPage__WEBPACK_IMPORTED_MODULE_5__["default"](this.gameData);
        this.gameData.setViewRecordsPage(viewRecordsPage);
    };
    App.prototype.addControllers = function () {
        var controllerStartPage = new _controller_ControllerStartPage__WEBPACK_IMPORTED_MODULE_3__["default"](this.gameData);
        var controllerSettingsPage = new _controller_ControllerSettingsPage__WEBPACK_IMPORTED_MODULE_2__["default"](this.gameData);
        var controllerGamePage = new _controller_ControllerGamePage__WEBPACK_IMPORTED_MODULE_0__["default"](this.gameData);
        var controllerRecordsPage = new _controller_ControllerRecordsPage__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameData);
        this.gameData.setControllerStartPage(controllerStartPage);
        this.gameData.setControllerSettingsPage(controllerSettingsPage);
        this.gameData.setControllerGamePage(controllerGamePage);
        this.gameData.setControllerRecordsPage(controllerRecordsPage);
    };
    App.prototype.new = function () {
        var _a, _b, _c, _d, _e;
        this.actualizeData();
        this.addPagesViews();
        this.addControllers();
        (_a = this.gameData.getControllerStartPage()) === null || _a === void 0 ? void 0 : _a.startListenButtons();
        (_b = this.gameData.getControllerSettingsPage()) === null || _b === void 0 ? void 0 : _b.startListenButtons();
        (_c = this.gameData.getControllerGamePage()) === null || _c === void 0 ? void 0 : _c.startListenEvents();
        (_d = this.gameData.getControllerRecordsPage()) === null || _d === void 0 ? void 0 : _d.startListenMenu();
        (_e = this.gameData.getViewStartPage()) === null || _e === void 0 ? void 0 : _e.show();
    };
    return App;
}());



/***/ }),

/***/ "./src/assets/ts/controller/ControllerGamePage.ts":
/*!********************************************************!*\
  !*** ./src/assets/ts/controller/ControllerGamePage.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_InfoBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/InfoBlock */ "./src/assets/ts/view/InfoBlock.ts");

var ControllerGamePage = /** @class */ (function () {
    function ControllerGamePage(gameData) {
        var _this = this;
        this.startNextExample = function () {
            _this.arrExamples = _this.gameData.getExamples();
            var example = _this.viewGamePage.example;
            if (_this.arrExamples.length > 0) {
                if (_this.gameData.getScore() === 0) {
                    _this.infoBlock.showInstruction();
                }
                else {
                    _this.infoBlock.showStatistics();
                }
                _this.viewGamePage.updateScore();
                _this.startExampleTime = new Date();
                var nextExample = _this.arrExamples.pop();
                _this.currentExample = nextExample;
                example.innerText = "".concat(nextExample.example, " =");
                _this.answerField.innerText = '??';
            }
            else {
                var record = {
                    operation: _this.gameData.getOperation(),
                    numExamples: _this.gameData.getNumExamples(),
                    numMistakes: _this.gameData.getNumMistakes(),
                    score: _this.gameData.getScore(),
                    time: _this.gameData.getGameTime(),
                    date: new Date(),
                };
                _this.gameData.addRecord(record);
                _this.infoBlock.showEndGame();
                example.innerText = "\u041C\u043E\u043B\u043E\u0434\u0435\u0446";
                _this.answerField.innerText = '!!!';
                _this.currentExample = null;
                _this.gameData.setExamples([]);
                setTimeout(function () {
                    var _a;
                    _this.viewGamePage.hide();
                    (_a = _this.gameData.getViewRecordsPage()) === null || _a === void 0 ? void 0 : _a.show();
                }, 3500);
            }
        };
        this.addExampleToMistakes = function (example) {
            var arrMistakes = _this.gameData.getMistakes() === undefined
                ? []
                : _this.gameData.getMistakes();
            if (!arrMistakes.includes(example)) {
                arrMistakes.push(example);
                example.score -= 1;
                _this.gameData.setNumMistakes(_this.gameData.getNumMistakes() + 1);
                _this.gameData.setMistakes(arrMistakes);
            }
        };
        this.increaseScore = function (num) {
            var currentScore = _this.gameData.getScore();
            var newScore = currentScore + num;
            _this.gameData.setScore(newScore);
        };
        this.checkAnswer = function () {
            if (_this.currentExample !== null && _this.answerField.textContent !== '??') {
                if (Number(_this.answerField.innerText) === _this.currentExample.answer) {
                    if (_this.startExampleTime !== null) {
                        var solveTime = new Date().valueOf() - _this.startExampleTime.valueOf();
                        var gameTime = _this.gameData.getGameTime();
                        _this.gameData.setGameTime(gameTime + solveTime);
                    }
                    _this.gameData.setExamples(_this.arrExamples);
                    _this.infoBlock.showRightAnswer();
                    _this.increaseScore(_this.currentExample.score);
                    _this.viewGamePage.updateScore();
                    _this.blockButtons = true;
                    setTimeout(function () {
                        _this.startNextExample();
                        _this.blockButtons = false;
                    }, 1100);
                }
                else {
                    _this.addExampleToMistakes(_this.currentExample);
                    _this.infoBlock.showWrongAnswer();
                    _this.blockButtons = true;
                    setTimeout(function () {
                        _this.blockButtons = false;
                        _this.infoBlock.showInstruction();
                        _this.answerField.innerText = '??';
                    }, 1100);
                }
            }
        };
        this.controlPressedKey = function (keyValue) {
            if (_this.blockButtons === false) {
                switch (keyValue) {
                    case '×':
                        _this.answerField.innerText = '??';
                        break;
                    case '✓':
                        _this.checkAnswer();
                        break;
                    default:
                        if ((_this.answerField.innerText.length > 1 &&
                            _this.answerField.innerText !== '10') ||
                            _this.answerField.innerText === '??') {
                            _this.answerField.innerText = keyValue;
                        }
                        else {
                            _this.answerField.innerText += keyValue;
                        }
                }
            }
        };
        this.checkPressedButton = function (event) {
            var button = event.target;
            if (button.classList.contains('button')) {
                button.blur();
                _this.controlPressedKey(button.name);
            }
        };
        this.startListenNumButtons = function () {
            _this.keysWrapper.addEventListener('click', function (event) {
                return _this.checkPressedButton(event);
            });
        };
        this.checkKeyboardButtons = function (event) {
            var key = event.key;
            if (!key.match(/\D/g)) {
                _this.controlPressedKey(key);
            }
            else if (key === 'Backspace' || key === 'Delete' || key === 'Escape') {
                _this.controlPressedKey('×');
            }
            else if (key === 'Enter') {
                _this.controlPressedKey('✓');
            }
        };
        this.startListenKeyboardButtons = function () {
            document.addEventListener('keyup', function (event) {
                _this.checkKeyboardButtons(event);
            });
        };
        this.startListenMenu = function () {
            _this.navHome.addEventListener('click', function () {
                var _a;
                _this.gameData.storageGameData.saveToLS(_this.gameData, _this.currentExample);
                _this.viewGamePage.hide();
                (_a = _this.gameData.getViewStartPage()) === null || _a === void 0 ? void 0 : _a.show();
            });
            _this.navHelp.addEventListener('click', function () {
                var _a;
                (_a = _this.viewGamePage.viewHelp) === null || _a === void 0 ? void 0 : _a.show();
            });
            _this.helpCloseButton.addEventListener('click', function () { var _a; return (_a = _this.viewGamePage.viewHelp) === null || _a === void 0 ? void 0 : _a.hide(); });
        };
        this.startListenCloseWindow = function () {
            window.addEventListener('beforeunload', function () {
                _this.gameData.storageGameData.saveToLS(_this.gameData, _this.currentExample);
            });
        };
        this.gameData = gameData;
        this.viewGamePage = gameData.getViewGamePage();
        this.answerField = this.viewGamePage.answerField;
        this.infoBlock = new _view_InfoBlock__WEBPACK_IMPORTED_MODULE_0__["default"](gameData);
        this.currentExample = null;
        this.navHome = this.viewGamePage.navHome;
        this.navHelp = this.viewGamePage.navHelp;
        this.keysWrapper = this.viewGamePage.keysWrapper;
        this.arrExamples = [];
        this.helpCloseButton = this.viewGamePage.helpCloseButton;
        this.startExampleTime = null;
        this.blockButtons = false;
    }
    ControllerGamePage.prototype.startListenEvents = function () {
        this.startListenNumButtons();
        this.startListenKeyboardButtons();
        this.startListenMenu();
        this.startListenCloseWindow();
    };
    return ControllerGamePage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControllerGamePage);


/***/ }),

/***/ "./src/assets/ts/controller/ControllerRecordsPage.ts":
/*!***********************************************************!*\
  !*** ./src/assets/ts/controller/ControllerRecordsPage.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ControllerRecordsPage = /** @class */ (function () {
    function ControllerRecordsPage(data) {
        var _this = this;
        var _a;
        this.startListenMenu = function () {
            _this.navHome.addEventListener('click', function () {
                var _a;
                _this.viewRecordsPage.hide();
                (_a = _this.gameData.getViewStartPage()) === null || _a === void 0 ? void 0 : _a.show();
            });
        };
        this.gameData = data;
        this.viewRecordsPage = this.gameData.getViewRecordsPage();
        this.navHome = (_a = this.gameData.getViewRecordsPage()) === null || _a === void 0 ? void 0 : _a.navHome;
    }
    return ControllerRecordsPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControllerRecordsPage);


/***/ }),

/***/ "./src/assets/ts/controller/ControllerSettingsPage.ts":
/*!************************************************************!*\
  !*** ./src/assets/ts/controller/ControllerSettingsPage.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Examples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Examples */ "./src/assets/ts/model/Examples.ts");

var ControllerSettingsPage = /** @class */ (function () {
    function ControllerSettingsPage(gameData) {
        var _this = this;
        this.addExamplesData = function () {
            var operationText = _this.tempOperation.slice(0, 1);
            var examples = [];
            if (operationText === '!') {
                examples = _this.gameData.getMistakes();
                _this.gameData.setMistakes([]);
            }
            else {
                examples = new _model_Examples__WEBPACK_IMPORTED_MODULE_0__["default"](operationText).return();
            }
            _this.tempExamples = examples;
        };
        this.makeSettingsBlockActive = function () {
            _this.settingsBlock.classList.remove('information_unactive');
        };
        this.makeSettingsBlockUnactive = function () {
            if (!_this.settingsBlock.classList.contains('information_unactive')) {
                _this.settingsBlock.classList.add('information_unactive');
            }
        };
        this.applyTempSettings = function () {
            _this.gameData.setOperation(_this.tempOperation);
            _this.gameData.setExamples(_this.tempExamples);
        };
        this.setExamples = function (event) {
            var button = event.target;
            _this.tempOperation = button.innerHTML;
            var descriptionOperation = (_this.viewSettingsPage.descriptionOperation);
            descriptionOperation.textContent = button.innerHTML;
            _this.makeSettingsBlockActive();
            _this.addExamplesData();
            var numExamples = _this.tempExamples.length;
            _this.descriptionNumExamples.textContent =
                numExamples >= 20 ? '20' : String(numExamples);
        };
        this.checkActiveSetNumButtons = function () {
            var numExamples = _this.tempExamples.length;
            if (Number(_this.descriptionNumExamples.textContent) == numExamples) {
                _this.addOneExampleButton.disabled = true;
            }
            else {
                _this.addOneExampleButton.disabled = false;
            }
            if (Number(_this.descriptionNumExamples.textContent) + 10 > numExamples) {
                _this.addManyExamplesButton.disabled = true;
            }
            else {
                _this.addManyExamplesButton.disabled = false;
            }
            if (Number(_this.descriptionNumExamples.textContent) + 50 > numExamples) {
                _this.addMostExamplesButton.disabled = true;
            }
            else {
                _this.addMostExamplesButton.disabled = false;
            }
            if (Number(_this.descriptionNumExamples.textContent) - 50 <= 0) {
                _this.removeMostExamplesButton.disabled = true;
            }
            else {
                _this.removeMostExamplesButton.disabled = false;
            }
            if (Number(_this.descriptionNumExamples.textContent) - 10 <= 0) {
                _this.removeManyExamplesButton.disabled = true;
            }
            else {
                _this.removeManyExamplesButton.disabled = false;
            }
            if (Number(_this.descriptionNumExamples.textContent) - 1 <= 0) {
                _this.removeOneExampleButton.disabled = true;
            }
            else {
                _this.removeOneExampleButton.disabled = false;
            }
        };
        this.setGame = function (event) {
            var button = event.target;
            if (button.classList.contains('button')) {
                _this.setExamples(event);
                _this.checkActiveSetNumButtons();
            }
        };
        this.changeNumExamples = function (event) {
            var button = event.target;
            if (button.classList.contains('button')) {
                if (button === _this.removeOneExampleButton) {
                    _this.descriptionNumExamples.textContent = String(Number(_this.descriptionNumExamples.textContent) - 1);
                }
                else if (button === _this.removeManyExamplesButton) {
                    _this.descriptionNumExamples.textContent = String(Number(_this.descriptionNumExamples.textContent) - 10);
                }
                else if (button === _this.removeMostExamplesButton) {
                    _this.descriptionNumExamples.textContent = String(Number(_this.descriptionNumExamples.textContent) - 50);
                }
                else if (button === _this.addOneExampleButton) {
                    _this.descriptionNumExamples.textContent = String(Number(_this.descriptionNumExamples.textContent) + 1);
                }
                else if (button === _this.addManyExamplesButton) {
                    _this.descriptionNumExamples.textContent = String(Number(_this.descriptionNumExamples.textContent) + 10);
                }
                else {
                    _this.descriptionNumExamples.textContent = String(Number(_this.descriptionNumExamples.textContent) + 50);
                }
                _this.checkActiveSetNumButtons();
            }
        };
        this.applySettings = function () {
            var _a, _b;
            _this.tempExamples.length = Number(_this.descriptionNumExamples.textContent);
            _this.gameData.setGameTime(0);
            _this.gameData.setNumMistakes(0);
            _this.gameData.setScore(0);
            _this.gameData.setNumExamples(Number(_this.descriptionNumExamples.textContent));
            _this.applyTempSettings();
            _this.makeSettingsBlockUnactive();
            _this.viewSettingsPage.hide();
            (_a = _this.gameData.getControllerGamePage()) === null || _a === void 0 ? void 0 : _a.startNextExample();
            (_b = _this.gameData.getViewGamePage()) === null || _b === void 0 ? void 0 : _b.show();
        };
        this.startListenButtons = function () {
            _this.buttonWrapper.addEventListener('click', _this.setGame);
            _this.setNumExpressionsButtons.addEventListener('click', _this.changeNumExamples);
            _this.settingsApplyButton.addEventListener('click', _this.applySettings);
            _this.settingsCloseButton.addEventListener('click', _this.makeSettingsBlockUnactive);
            _this.helpCloseButton.addEventListener('click', function () { var _a; return (_a = _this.viewSettingsPage.viewHelp) === null || _a === void 0 ? void 0 : _a.hide(); });
            _this.navHome.addEventListener('click', function () {
                var _a;
                _this.viewSettingsPage.hide();
                (_a = _this.gameData.getViewStartPage()) === null || _a === void 0 ? void 0 : _a.show();
            });
            _this.navHelp.addEventListener('click', function () {
                var _a;
                (_a = _this.viewSettingsPage.viewHelp) === null || _a === void 0 ? void 0 : _a.show();
            });
        };
        this.gameData = gameData;
        this.viewSettingsPage = gameData.getViewSettingsPage();
        this.buttonWrapper = this.viewSettingsPage.buttonWrapper;
        this.navHome = this.viewSettingsPage.navHome;
        this.navHelp = this.viewSettingsPage.navHelp;
        this.descriptionNumExamples = this.viewSettingsPage.descriptionNumExamples;
        this.setNumExpressionsButtons = (this.viewSettingsPage.setNumExpressionsButtons);
        this.removeMostExamplesButton =
            this.viewSettingsPage.removeMostExamplesButton;
        this.removeManyExamplesButton =
            this.viewSettingsPage.removeManyExamplesButton;
        this.removeOneExampleButton = this.viewSettingsPage.removeOneExampleButton;
        this.addMostExamplesButton = this.viewSettingsPage.addMostExamplesButton;
        this.addManyExamplesButton = this.viewSettingsPage.addManyExamplesButton;
        this.addOneExampleButton = this.viewSettingsPage.addOneExampleButton;
        this.settingsApplyButton = this.viewSettingsPage.settingsApplyButton;
        this.settingsCloseButton = this.viewSettingsPage.infoCloseButton;
        this.helpCloseButton = this.viewSettingsPage.helpCloseButton;
        this.settingsBlock = this.viewSettingsPage.settingsBlock;
        this.tempOperation = '';
        this.tempExamples = [];
    }
    return ControllerSettingsPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControllerSettingsPage);


/***/ }),

/***/ "./src/assets/ts/controller/ControllerStartPage.ts":
/*!*********************************************************!*\
  !*** ./src/assets/ts/controller/ControllerStartPage.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ControllerStartPage = /** @class */ (function () {
    function ControllerStartPage(gameData) {
        var _this = this;
        this.showRecords = function () {
            var _a;
            _this.viewStartPage.hide();
            (_a = _this.gameData.getViewRecordsPage()) === null || _a === void 0 ? void 0 : _a.show();
        };
        this.startNewGame = function () {
            var _a;
            _this.viewStartPage.hide();
            (_a = _this.gameData.getViewSettingsPage()) === null || _a === void 0 ? void 0 : _a.show();
        };
        this.startLoadGame = function () {
            var _a, _b;
            _this.viewStartPage.hide();
            (_a = _this.gameData.getControllerGamePage()) === null || _a === void 0 ? void 0 : _a.startNextExample();
            (_b = _this.gameData.getViewGamePage()) === null || _b === void 0 ? void 0 : _b.show();
        };
        this.startListenButtons = function () {
            _this.buttonNewGame.addEventListener('click', _this.startNewGame);
            _this.buttonLoadGame.addEventListener('click', _this.startLoadGame);
            _this.buttonRecords.addEventListener('click', _this.showRecords);
        };
        this.gameData = gameData;
        this.viewStartPage = gameData.getViewStartPage();
        this.buttonNewGame = this.viewStartPage.buttonNewGame;
        this.buttonLoadGame = this.viewStartPage.buttonLoadGame;
        this.buttonRecords = this.viewStartPage.buttonRecords;
    }
    return ControllerStartPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControllerStartPage);


/***/ }),

/***/ "./src/assets/ts/model/Examples.ts":
/*!*****************************************!*\
  !*** ./src/assets/ts/model/Examples.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Examples = /** @class */ (function () {
    function Examples(operation) {
        var _this = this;
        this.shuffle = function (arr) {
            var result = [];
            for (; arr.length > 0;) {
                var randomNum = Math.floor(Math.random() * arr.length);
                result.push(arr[randomNum]);
                arr = __spreadArray(__spreadArray([], arr.slice(0, randomNum), true), arr.slice(randomNum + 1, arr.length), true);
            }
            return result;
        };
        this.returnScoreSumSubstr = function (num) {
            var result = 0;
            switch (num % 10) {
                case 1:
                case 0:
                    result = 1;
                    break;
                default:
                    result = 2;
            }
            if (num > 10) {
                result += 1;
            }
            return result;
        };
        this.returnScoreMultiple = function (num) {
            switch (num) {
                case 1:
                    return 5;
                case 10:
                    return 6;
                default:
                    return 7;
            }
        };
        this.returnSum = function () {
            var arr = [];
            for (var i = 1; i < 20; i += 1) {
                for (var j = 1; j + i <= 20; j += 1) {
                    var example = "".concat(i, " + ").concat(j);
                    var answer = i + j;
                    var score = _this.returnScoreSumSubstr(i) + _this.returnScoreSumSubstr(j);
                    arr.push({ example: example, answer: answer, score: score });
                }
            }
            return _this.shuffle(arr);
        };
        this.returnSubstr = function () {
            var arr = [];
            for (var i = 20; i >= 1; i -= 1) {
                for (var j = 1; i - j >= 1; j += 1) {
                    var example = "".concat(i, " - ").concat(j);
                    var answer = i - j;
                    var score = _this.returnScoreSumSubstr(i) + _this.returnScoreSumSubstr(j);
                    arr.push({ example: example, answer: answer, score: score });
                }
            }
            return _this.shuffle(arr);
        };
        this.returnMultiple = function () {
            var arr = [];
            for (var i = 1; i <= 10; i += 1) {
                for (var j = 1; j <= 10; j += 1) {
                    var example = "".concat(i, " \u00D7 ").concat(j);
                    var answer = i * j;
                    var score = Math.min(_this.returnScoreMultiple(i), _this.returnScoreMultiple(j));
                    arr.push({ example: example, answer: answer, score: score });
                }
            }
            return _this.shuffle(arr);
        };
        this.examplesArr =
            operation === '+'
                ? this.returnSum()
                : operation === '-'
                    ? this.returnSubstr()
                    : this.returnMultiple();
    }
    Examples.prototype.return = function () {
        return this.examplesArr;
    };
    return Examples;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Examples);


/***/ }),

/***/ "./src/assets/ts/model/GameData.ts":
/*!*****************************************!*\
  !*** ./src/assets/ts/model/GameData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StorageGameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageGameData */ "./src/assets/ts/model/StorageGameData.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var GameData = /** @class */ (function () {
    function GameData() {
        var _this = this;
        this.setViewRecordsPage = function (viewRecordsPage) {
            _this.viewRecordsPage = viewRecordsPage;
        };
        this.getViewRecordsPage = function () {
            return _this.viewRecordsPage;
        };
        this.setControllerRecordsPage = function (controllerRecordsPage) {
            _this.controllerRecordsPage = controllerRecordsPage;
        };
        this.getControllerRecordsPage = function () {
            return _this.controllerRecordsPage;
        };
        this.setViewStartPage = function (viewStartPage) {
            _this.viewStartPage = viewStartPage;
        };
        this.getViewStartPage = function () {
            return _this.viewStartPage;
        };
        this.setViewSettingsPage = function (viewSettingsPage) {
            _this.viewSettingsPage = viewSettingsPage;
        };
        this.getViewSettingsPage = function () {
            return _this.viewSettingsPage;
        };
        this.setViewGamePage = function (viewGamePage) {
            _this.viewGamePage = viewGamePage;
        };
        this.getViewGamePage = function () {
            return _this.viewGamePage;
        };
        this.setControllerStartPage = function (controllerStartPage) {
            _this.controllerStartPage = controllerStartPage;
        };
        this.getControllerStartPage = function () {
            return _this.controllerStartPage;
        };
        this.setControllerSettingsPage = function (controllerSettingsPage) {
            _this.controllerSettingsPage = controllerSettingsPage;
        };
        this.getControllerSettingsPage = function () {
            return _this.controllerSettingsPage;
        };
        this.setControllerGamePage = function (controllerGamePage) {
            _this.controllerGamePage = controllerGamePage;
        };
        this.getControllerGamePage = function () {
            return _this.controllerGamePage;
        };
        this.setExamples = function (examples) {
            _this.examples = examples;
        };
        this.getExamples = function () {
            return _this.examples;
        };
        this.setMistakes = function (mistakes) {
            _this.mistakes = mistakes;
        };
        this.getMistakes = function () {
            return _this.mistakes;
        };
        this.setOperation = function (operation) {
            _this.operation = operation;
        };
        this.getOperation = function () {
            return _this.operation;
        };
        this.setScore = function (num) {
            _this.score = num;
        };
        this.getScore = function () {
            return _this.score;
        };
        this.setGameTime = function (num) {
            _this.gameTime = num;
        };
        this.getGameTime = function () {
            return _this.gameTime;
        };
        this.setNumMistakes = function (num) {
            _this.numMistakes = num;
        };
        this.getNumMistakes = function () {
            return _this.numMistakes;
        };
        this.addRecord = function (record) {
            if (_this.records.length > 0) {
                _this.records = __spreadArray([record], _this.records, true);
                if (_this.records.length > 10) {
                    _this.records.length = 10;
                }
            }
            else {
                _this.setRecords([record]);
            }
        };
        this.getRecords = function () {
            return _this.records;
        };
        this.setRecords = function (arrRecords) {
            _this.records = arrRecords;
        };
        this.getNumExamples = function () {
            return _this.numExamples;
        };
        this.setNumExamples = function (num) {
            _this.numExamples = num;
        };
        this.controllerGamePage = null;
        this.controllerRecordsPage = null;
        this.controllerSettingsPage = null;
        this.controllerStartPage = null;
        this.examples = [];
        this.gameTime = 0;
        this.mistakes = [];
        this.numExamples = 0;
        this.numMistakes = 0;
        this.operation = '';
        this.records = [];
        this.score = 0;
        this.storageGameData = new _StorageGameData__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.viewGamePage = null;
        this.viewRecordsPage = null;
        this.viewSettingsPage = null;
        this.viewStartPage = null;
    }
    return GameData;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameData);


/***/ }),

/***/ "./src/assets/ts/model/StorageGameData.ts":
/*!************************************************!*\
  !*** ./src/assets/ts/model/StorageGameData.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var StorageGameData = /** @class */ (function () {
    function StorageGameData() {
        this.loadFromLS = function () {
            var strFromLS = localStorage.getItem('gameData');
            return strFromLS;
        };
    }
    StorageGameData.prototype.saveToLS = function (gameData, example) {
        var dataObj = {
            examples: gameData.getExamples(),
            gameTime: gameData.getGameTime(),
            mistakes: gameData.getMistakes(),
            numExamples: gameData.getNumExamples(),
            numMistakes: gameData.getNumMistakes(),
            operation: gameData.getOperation(),
            score: gameData.getScore(),
            records: gameData.getRecords(),
        };
        if (example !== null && !gameData.getExamples().includes(example)) {
            dataObj.examples.push(example);
        }
        var strToSave = JSON.stringify(dataObj);
        localStorage.setItem('gameData', strToSave);
    };
    return StorageGameData;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageGameData);


/***/ }),

/***/ "./src/assets/ts/view/InfoBlock.ts":
/*!*****************************************!*\
  !*** ./src/assets/ts/view/InfoBlock.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var InfoBlock = /** @class */ (function () {
    function InfoBlock(data) {
        var _this = this;
        var _a;
        this.showRightAnswer = function () {
            _this.infoBlock.innerText = 'Верно!';
            _this.infoBlock.classList.add('game-info__correct');
        };
        this.showWrongAnswer = function () {
            _this.infoBlock.innerText = 'Неправильно. попробуй еще раз.';
            _this.infoBlock.classList.add('game-info__wrong');
        };
        this.unstyleInfoBlock = function () {
            if (_this.infoBlock.classList.contains('game-info__correct')) {
                _this.infoBlock.classList.remove('game-info__correct');
            }
            if (_this.infoBlock.classList.contains('game-info__wrong')) {
                _this.infoBlock.classList.remove('game-info__wrong');
            }
        };
        this.showInstruction = function () {
            _this.unstyleInfoBlock();
            _this.infoBlock.innerText = 'Введи число и нажми «✓».';
        };
        this.showStatistics = function () {
            _this.unstyleInfoBlock();
            var examplesNum = _this.gameData.getExamples().length;
            var i = examplesNum % 100;
            var examplesWord = i % 10 === 1 && (i < 10 || i > 20) && i !== 11
                ? 'пример'
                : i % 10 < 5 && i % 10 > 0 && (i < 10 || i > 20)
                    ? 'примера'
                    : 'примеров';
            _this.infoBlock.innerHTML = "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0440\u0435\u0448\u0438\u0442\u044C <br/><span class=\"game__statistics\">".concat(examplesNum, "</span> ").concat(examplesWord, ".");
        };
        this.showEndGame = function () {
            _this.infoBlock.innerText = 'Все примеры решены.';
        };
        this.gameData = data;
        this.infoBlock = (_a = this.gameData.getViewGamePage()) === null || _a === void 0 ? void 0 : _a.infoBlock;
    }
    return InfoBlock;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoBlock);


/***/ }),

/***/ "./src/assets/ts/view/ViewFooter.ts":
/*!******************************************!*\
  !*** ./src/assets/ts/view/ViewFooter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/view/returnElement.ts");

var ViewFooter = /** @class */ (function () {
    function ViewFooter() {
        var _this = this;
        this.return = function () {
            return _this.footer;
        };
        this.footer = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'footer',
            classes: ['footer'],
        });
        var wrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['wrapper', 'footer__wrapper'],
        });
        var copyright = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['footer__block'],
        });
        var copyrightTitle = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['footer__block-title'],
            textContent: '©, дизайн: ',
        });
        var copyrightLink = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'a',
            classes: ['footer__link'],
            attrib: [
                { name: 'href', value: 'https://github.com/a-v-gor' },
                { name: 'target', value: '_blank' },
            ],
            textContent: 'А.Горбенко',
        });
        var year = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['footer__block', 'footer__year'],
            textContent: '2024',
        });
        var design = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['footer__block', 'footer__design'],
        });
        var designTitle = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['footer__block-title'],
            textContent: 'Дизайн: ',
        });
        var designLink = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'a',
            classes: ['footer__link'],
            attrib: [
                {
                    name: 'href',
                    value: 'https://www.figma.com/community/file/1084493668769923289/educational-kids-game',
                },
                { name: 'target', value: '_blank' },
            ],
            textContent: 'N.Pandya',
        });
        copyright.append(copyrightTitle, copyrightLink);
        design.append(designTitle, designLink);
        wrapper.append(copyright, year, design);
        this.footer.append(wrapper);
    }
    return ViewFooter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewFooter);


/***/ }),

/***/ "./src/assets/ts/view/ViewGamePage.ts":
/*!********************************************!*\
  !*** ./src/assets/ts/view/ViewGamePage.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/view/returnElement.ts");
/* harmony import */ var _ViewHelp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewHelp */ "./src/assets/ts/view/ViewHelp.ts");
/* harmony import */ var _ViewNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewNavigation */ "./src/assets/ts/view/ViewNavigation.ts");
/* harmony import */ var _ViewPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewPage */ "./src/assets/ts/view/ViewPage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ViewGamePage = /** @class */ (function (_super) {
    __extends(ViewGamePage, _super);
    function ViewGamePage(gameData) {
        var _this = _super.call(this, 'gamePage', gameData) || this;
        _this.updateScore = function () {
            _this.scoreValue.textContent = String(_this.gameData.getScore());
        };
        var headerWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['wrapper', 'header__wrapper', 'game__header-wrapper'],
        });
        var navigation = new _ViewNavigation__WEBPACK_IMPORTED_MODULE_2__["default"](true);
        _this.navHome = navigation.returnHomeButton();
        _this.navHelp = navigation.returnHelpButton();
        var scoreWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['score__wrapper'],
        });
        var scoreTitle = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'h2',
            classes: ['score__title'],
            textContent: 'Счет:',
        });
        _this.scoreValue = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'p',
            classes: ['score__value'],
            textContent: '0',
        });
        _this.title = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'h1',
            classes: ['title'],
        });
        var gameWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['wrapper', 'game__wrapper'],
        });
        _this.infoBlock = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['game__info', "game-info"],
        });
        var exampleWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['game__example-wrapper', 'example__wrapper'],
        });
        _this.example = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['example__text'],
        });
        _this.answerField = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['example__input'],
        });
        var keysTextsArr = [];
        for (var i = 1; i < 10; i += 1) {
            keysTextsArr.push("".concat(i));
        }
        keysTextsArr.push('×', '0', '✓');
        _this.keysWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['keys__wrapper'],
        });
        for (var i = 0; i < keysTextsArr.length; i += 1) {
            var classesArr = ['button', 'keys__button'];
            if (keysTextsArr[i] === '×') {
                classesArr.push('keys__cancel');
            }
            if (keysTextsArr[i] === '✓') {
                classesArr.push('keys__submit');
            }
            var keyButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
                tag: 'button',
                classes: classesArr,
                attrib: [
                    {
                        name: 'name',
                        value: keysTextsArr[i],
                    },
                ],
                textContent: keysTextsArr[i],
            });
            _this.keysWrapper.append(keyButton);
        }
        _this.updateTitle = function (value) {
            if (_this.title !== undefined) {
                _this.title.textContent = value;
            }
        };
        _this.viewHelp = new _ViewHelp__WEBPACK_IMPORTED_MODULE_1__["default"]([
            'Максимально возможное число для ввода — «100». После ввода числа следует подтвердить свой ответ (нажатием на кнопку «✓» или «Enter» на клавиатуре).',
            'При ошибке можно стереть введенное значение (нажатием на кнопку «×» или «Delete», «Backspace», «Esc» на клавиатуре).',
            'Игра считайется пройденной после решения всех примеров (результат заносится в книгу рекордов, посмотреть которую можно нажав «Рекорды» на главной страницы игры). Если прервать игру не решив все примеры (закрыть вкладку браузера или нажать на домик в меню), результат не будет сохранен, но игра не удалится. Игру можно завершить в будущем, выбрав «Продолжить игру» на главной странице.',
        ]);
        _this.helpCloseButton = _this.viewHelp.returnCloseButton();
        var viewHelpBlock = _this.viewHelp.returnBlock();
        scoreWrapper.append(scoreTitle, _this.scoreValue);
        headerWrapper.append(_this.title, navigation.returnElement(), scoreWrapper);
        _this.header.append(headerWrapper);
        exampleWrapper.append(_this.example, _this.answerField);
        gameWrapper.append(_this.infoBlock, exampleWrapper, _this.keysWrapper);
        _this.main.append(viewHelpBlock, gameWrapper);
        return _this;
    }
    return ViewGamePage;
}(_ViewPage__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewGamePage);


/***/ }),

/***/ "./src/assets/ts/view/ViewHelp.ts":
/*!****************************************!*\
  !*** ./src/assets/ts/view/ViewHelp.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/view/returnElement.ts");

var ViewHelp = /** @class */ (function () {
    function ViewHelp(description) {
        var _this = this;
        this.hide = function () {
            if (!_this.viewHelpBlock.classList.contains('information_unactive')) {
                _this.viewHelpBlock.classList.add('information_unactive');
            }
        };
        this.show = function () {
            _this.viewHelpBlock.classList.remove('information_unactive');
        };
        this.returnBlock = function () {
            return _this.viewHelpBlock;
        };
        this.returnCloseButton = function () {
            return _this.helpCloseButton;
        };
        this.viewHelpBlock = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['help__block', 'information', 'information_unactive'],
        });
        var wrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['wrapper', 'help__wrapper'],
        });
        var title = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'h2',
            classes: ['title', 'help__title'],
            textContent: 'Как играть',
        });
        wrapper.append(title);
        for (var i = 0; i < description.length; i += 1) {
            var paragraph = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
                tag: 'p',
                classes: ['help__paragraph'],
                textContent: description[i],
            });
            wrapper.append(paragraph);
        }
        this.helpCloseButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'help__close-button'],
            textContent: 'Закрыть',
        });
        wrapper.append(this.helpCloseButton);
        this.viewHelpBlock.append(wrapper);
    }
    return ViewHelp;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewHelp);


/***/ }),

/***/ "./src/assets/ts/view/ViewNavigation.ts":
/*!**********************************************!*\
  !*** ./src/assets/ts/view/ViewNavigation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/view/returnElement.ts");

var ViewNavigation = /** @class */ (function () {
    function ViewNavigation(helpButton) {
        this.nav = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'nav',
            classes: ['menu'],
        });
        var navUl = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'ul',
            classes: ['menu__ul'],
        });
        this.navHome = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'li',
            classes: ['menu__item', 'menu__home'],
        });
        navUl.append(this.navHome);
        if (helpButton === true) {
            this.navHelp = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
                tag: 'li',
                classes: ['menu__item', 'menu__instruction'],
            });
            navUl.append(this.navHelp);
        }
        this.nav.append(navUl);
    }
    ViewNavigation.prototype.returnElement = function () {
        return this.nav;
    };
    ViewNavigation.prototype.returnHomeButton = function () {
        return this.navHome;
    };
    ViewNavigation.prototype.returnHelpButton = function () {
        return this.navHelp;
    };
    return ViewNavigation;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewNavigation);


/***/ }),

/***/ "./src/assets/ts/view/ViewPage.ts":
/*!****************************************!*\
  !*** ./src/assets/ts/view/ViewPage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/view/returnElement.ts");
/* harmony import */ var _ViewFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewFooter */ "./src/assets/ts/view/ViewFooter.ts");


var ViewPage = /** @class */ (function () {
    function ViewPage(name, data) {
        var _this = this;
        this.show = function () {
            var _a, _b, _c;
            _this.body.append(_this.header, _this.main, _this.footer);
            if (_this.pageName === 'startPage') {
                var buttonLoadGame = _this.buttonLoadGame;
                var buttonRecords = _this.buttonRecords;
                if (_this.gameData.getExamples() === null ||
                    _this.gameData.getExamples().length === 0) {
                    buttonLoadGame.disabled = true;
                }
                else {
                    buttonLoadGame.disabled = false;
                }
                if (_this.gameData.getRecords().length > 0) {
                    buttonRecords.disabled = false;
                }
                else {
                    buttonRecords.disabled = true;
                }
            }
            if (_this.pageName === 'settingsPage') {
                var fixButton = _this.buttonSetFix;
                if (_this.gameData.getMistakes().length === 0) {
                    fixButton.disabled = true;
                }
                else {
                    fixButton.disabled = false;
                }
            }
            if (_this.pageName === 'gamePage') {
                var updateTitle = (_a = _this.gameData.getViewGamePage()) === null || _a === void 0 ? void 0 : _a.updateTitle;
                if (updateTitle !== undefined) {
                    updateTitle(_this.gameData.getOperation());
                }
                (_b = _this.gameData.getViewGamePage()) === null || _b === void 0 ? void 0 : _b.updateScore();
            }
            if (_this.pageName === 'recordsPage') {
                (_c = _this.gameData.getViewRecordsPage()) === null || _c === void 0 ? void 0 : _c.updateRecords();
            }
        };
        this.body = document.body;
        this.header = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'header',
            classes: ['header'],
        });
        this.main = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'main',
            classes: ['main'],
        });
        var viewFooter = new _ViewFooter__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.footer = viewFooter.return();
        this.pageName = name;
        this.gameData = data;
    }
    ViewPage.prototype.hide = function () {
        this.body.innerHTML = '';
    };
    return ViewPage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewPage);


/***/ }),

/***/ "./src/assets/ts/view/ViewRecordsPage.ts":
/*!***********************************************!*\
  !*** ./src/assets/ts/view/ViewRecordsPage.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/view/returnElement.ts");
/* harmony import */ var _ViewNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewNavigation */ "./src/assets/ts/view/ViewNavigation.ts");
/* harmony import */ var _ViewPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewPage */ "./src/assets/ts/view/ViewPage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ViewRecordsPage = /** @class */ (function (_super) {
    __extends(ViewRecordsPage, _super);
    function ViewRecordsPage(gameData) {
        var _this = _super.call(this, 'recordsPage', gameData) || this;
        _this.updateRecords = function () {
            var records = _this.gameData.getRecords();
            var table = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
                tag: 'div',
                classes: ['table', 'records'],
            });
            var returnTextElement = function (text) {
                return (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    tag: 'div',
                    classes: ['records__text'],
                    textContent: text,
                });
            };
            records.forEach(function (element) {
                var recordElement = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    tag: 'div',
                    classes: ['records__record'],
                });
                var returnEsteemText = function () {
                    var solveExampleTime = Math.ceil(element.time / element.numExamples / 1000);
                    if (solveExampleTime <= 4 &&
                        (element.numMistakes === 0 ||
                            element.numMistakes / element.numExamples <= 0.1)) {
                        return 'Отлично!';
                    }
                    else if (solveExampleTime <= 5.5 &&
                        (element.numMistakes === 0 ||
                            element.numMistakes / element.numExamples <= 0.5)) {
                        return 'Хорошо.';
                    }
                    else {
                        return 'Неплохо.';
                    }
                };
                var timeStyle = new Intl.DateTimeFormat('ru', {
                    timeStyle: 'short',
                    dateStyle: 'long',
                });
                var date = returnTextElement(timeStyle.format(new Date(element.date)));
                date.classList.add('records__date');
                var operation = returnTextElement(element.operation);
                operation.classList.add('records__operation');
                var numExamples = returnTextElement("\u041F\u0440\u0438\u043C\u0435\u0440\u043E\u0432: ".concat(String(element.numExamples)));
                numExamples.classList.add('records__num-examples');
                var numMistakes = returnTextElement("\u041E\u0448\u0438\u0431\u043E\u043A: ".concat(String(element.numMistakes)));
                numMistakes.classList.add('records__num-mistakes');
                var time = returnTextElement("\u0412\u0440\u0435\u043C\u044F: ".concat(String(Math.ceil(element.time / 1000)), " \u0441\u0435\u043A."));
                time.classList.add('records__time');
                var score = returnTextElement("\u0421\u0447\u0451\u0442: ".concat(String(element.score)));
                score.classList.add('records__score');
                var esteem = returnTextElement("\u041E\u0446\u0435\u043D\u043A\u0430: ".concat(returnEsteemText()));
                if (esteem.textContent === 'Оценка: Отлично!') {
                    esteem.classList.add('records__perfect');
                }
                else if (esteem.textContent === 'Оценка: Хорошо.') {
                    esteem.classList.add('records__good');
                }
                else {
                    esteem.classList.add('records__not-bad');
                }
                recordElement.append(date, operation, numExamples, numMistakes, time, score, esteem);
                table.append(recordElement);
            });
            _this.recordsWrapper.innerHTML = '';
            _this.recordsWrapper.append(table);
        };
        var headerWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['wrapper', 'header__wrapper'],
        });
        var navigation = new _ViewNavigation__WEBPACK_IMPORTED_MODULE_1__["default"](false);
        _this.navHome = navigation.returnHomeButton();
        var title = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'h1',
            classes: ['title'],
            textContent: 'Рекорды',
        });
        _this.recordsWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['wrapper', 'records__wrapper'],
        });
        _this.arrRecords = gameData.getRecords();
        _this.main.classList.add('records__main');
        headerWrapper.append(title, navigation.returnElement());
        _this.header.append(headerWrapper);
        _this.main.append(_this.recordsWrapper);
        return _this;
    }
    return ViewRecordsPage;
}(_ViewPage__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewRecordsPage);


/***/ }),

/***/ "./src/assets/ts/view/ViewSettingsPage.ts":
/*!************************************************!*\
  !*** ./src/assets/ts/view/ViewSettingsPage.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/view/returnElement.ts");
/* harmony import */ var _ViewHelp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewHelp */ "./src/assets/ts/view/ViewHelp.ts");
/* harmony import */ var _ViewNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewNavigation */ "./src/assets/ts/view/ViewNavigation.ts");
/* harmony import */ var _ViewPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewPage */ "./src/assets/ts/view/ViewPage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ViewSettingsPage = /** @class */ (function (_super) {
    __extends(ViewSettingsPage, _super);
    function ViewSettingsPage(gameData) {
        var _this = _super.call(this, 'settingsPage', gameData) || this;
        var title = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'h1',
            classes: ['title'],
            textContent: 'Новая игра',
        });
        var headerWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['wrapper', 'header__wrapper'],
        });
        var navigation = new _ViewNavigation__WEBPACK_IMPORTED_MODULE_2__["default"](true);
        _this.navHome = navigation.returnHomeButton();
        _this.navHelp = navigation.returnHelpButton();
        _this.buttonWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['button-wrapper'],
        });
        _this.buttonSetSum = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button'],
            textContent: '+ Сложение',
        });
        _this.buttonSetSubstr = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button'],
            textContent: '- Вычитание',
        });
        _this.buttonSetMultiple = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button'],
            textContent: '× Умножение',
        });
        _this.buttonSetFix = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'button-mistakes'],
            textContent: '! Ошибки',
        });
        _this.settingsBlock = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['settings', 'information', 'information_unactive'],
        });
        var settingsWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['settings__wrapper'],
        });
        var settingsDescriptions = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['settings__descript-list', 'descript-list'],
        });
        var descriptionOperationWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['descript-list__descr-wrapper'],
        });
        var terminOperation = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['descript-list__term'],
            textContent: 'Действие: ',
        });
        _this.descriptionOperation = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['descript-list__descr'],
        });
        var descriptionNumExamplesWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['descript-list__descr-wrapper'],
        });
        var terminNumExamples = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['descript-list__term'],
            textContent: 'Количество примеров:',
        });
        _this.setNumExpressionsButtons = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['descript-list__buttons-wrap'],
        });
        _this.removeMostExamplesButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'descript-list__button'],
            textContent: '---',
        });
        _this.removeManyExamplesButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'descript-list__button'],
            textContent: '--',
        });
        _this.removeOneExampleButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'descript-list__button'],
            textContent: '-',
        });
        _this.addOneExampleButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'descript-list__button'],
            textContent: '+',
        });
        _this.addManyExamplesButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'descript-list__button'],
            textContent: '++',
        });
        _this.addMostExamplesButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'descript-list__button'],
            textContent: '+++',
        });
        _this.descriptionNumExamples = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['descript-list__descr'],
        });
        _this.settingsApplyButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'settings__apply-button'],
            textContent: 'Применить',
        });
        _this.infoCloseButton = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button', 'settings__close-button'],
        });
        _this.viewHelp = new _ViewHelp__WEBPACK_IMPORTED_MODULE_1__["default"]([
            "\u0414\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 (\u0441\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0432\u044B\u0447\u0438\u0442\u0430\u043D\u0438\u0435, \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u0435) \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443.",
            'Если активна кнопка «! Ошибки», по нажатию на нее можно приступить к работе над ошибками, допущенными ранее.',
            'В следующем окне выберите количество примеров для решения (по умолчанию 20). Кнопки «---», «--» и «-» уменьшают число на 50, 10 и 1 соответственно. Кнопки прибавления действуют аналогично в сторону увеличения числа.',
            'Нажатием на кнопку «Применить» начните игру.',
        ]);
        _this.helpCloseButton = _this.viewHelp.returnCloseButton();
        var viewHelpBlock = _this.viewHelp.returnBlock();
        _this.setNumExpressionsButtons.append(_this.descriptionNumExamples, _this.removeMostExamplesButton, _this.removeManyExamplesButton, _this.removeOneExampleButton, _this.addOneExampleButton, _this.addManyExamplesButton, _this.addMostExamplesButton);
        descriptionNumExamplesWrapper.append(terminNumExamples, _this.setNumExpressionsButtons);
        descriptionOperationWrapper.append(terminOperation, _this.descriptionOperation);
        settingsDescriptions.append(descriptionOperationWrapper, descriptionNumExamplesWrapper);
        settingsWrapper.append(settingsDescriptions, _this.settingsApplyButton, _this.infoCloseButton);
        _this.settingsBlock.append(settingsWrapper);
        headerWrapper.append(title, navigation.returnElement());
        _this.header.append(headerWrapper);
        _this.buttonWrapper.append(_this.buttonSetSum, _this.buttonSetSubstr, _this.buttonSetMultiple, _this.buttonSetFix);
        _this.main.append(viewHelpBlock, _this.buttonWrapper, _this.settingsBlock);
        return _this;
    }
    return ViewSettingsPage;
}(_ViewPage__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewSettingsPage);


/***/ }),

/***/ "./src/assets/ts/view/ViewStartPage.ts":
/*!*********************************************!*\
  !*** ./src/assets/ts/view/ViewStartPage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/view/returnElement.ts");
/* harmony import */ var _ViewPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewPage */ "./src/assets/ts/view/ViewPage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ViewStartPage = /** @class */ (function (_super) {
    __extends(ViewStartPage, _super);
    function ViewStartPage(gameData) {
        var _this = _super.call(this, 'startPage', gameData) || this;
        _this.buttonNewGame = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button'],
            textContent: 'Начать игру',
        });
        _this.buttonLoadGame = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button'],
            textContent: 'Продолжить игру',
        });
        _this.buttonRecords = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button'],
            textContent: 'Рекорды',
        });
        var buttonWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['wrapper', 'button-wrapper'],
        });
        var titleWrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'div',
            classes: ['header__title-wrapper'],
        });
        var title = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'h1',
            classes: ['title', 'header__title'],
        });
        var titleString = 'Юный математик';
        titleString.split('').map(function (letter) {
            if (!letter.match(/\s/)) {
                var letterElement = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
                    tag: 'span',
                    classes: ['title__letter'],
                    textContent: letter,
                });
                title.append(letterElement);
            }
            else {
                title.append(letter);
            }
        });
        titleWrapper.append(title);
        _this.header.append(titleWrapper);
        buttonWrapper.append(_this.buttonNewGame, _this.buttonLoadGame, _this.buttonRecords);
        _this.main.append(buttonWrapper);
        return _this;
    }
    return ViewStartPage;
}(_ViewPage__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewStartPage);


/***/ }),

/***/ "./src/assets/ts/view/returnElement.ts":
/*!*********************************************!*\
  !*** ./src/assets/ts/view/returnElement.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnElement)
/* harmony export */ });
function returnElement(elemData) {
    var element = document.createElement(elemData.tag);
    if (elemData.classes !== undefined) {
        elemData.classes.forEach(function (item) {
            element.classList.add(item);
        });
    }
    if (elemData.id !== undefined) {
        element.id = elemData.id;
    }
    if (elemData.attrib !== undefined) {
        elemData.attrib.forEach(function (i) {
            element.setAttribute(i.name, i.value);
        });
    }
    if (elemData.textContent !== undefined) {
        element.textContent = elemData.textContent;
    }
    if (elemData.tag === 'img' && elemData.src !== undefined) {
        element.setAttribute('src', elemData.src);
    }
    return element;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/style.scss */ "./src/assets/scss/style.scss");
/* harmony import */ var _assets_ts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ts/App */ "./src/assets/ts/App.ts");
/* harmony import */ var _assets_ts_model_GameData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ts/model/GameData */ "./src/assets/ts/model/GameData.ts");



var gameData = new _assets_ts_model_GameData__WEBPACK_IMPORTED_MODULE_2__["default"]();
var app = new _assets_ts_App__WEBPACK_IMPORTED_MODULE_1__.App(gameData);
app.new();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDekQsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDOzs7Ozs7O1VDL0JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFDSTtBQUNZO0FBRWxELElBQU0sUUFBUSxHQUFHLElBQUksaUVBQVEsRUFBRSxDQUFDO0FBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksK0NBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3M/YjM3NiIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9BcHAudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvY29udHJvbGxlci9Db250cm9sbGVyR2FtZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvY29udHJvbGxlci9Db250cm9sbGVyUmVjb3Jkc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvY29udHJvbGxlci9Db250cm9sbGVyU2V0dGluZ3NQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL2NvbnRyb2xsZXIvQ29udHJvbGxlclN0YXJ0UGFnZS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9tb2RlbC9FeGFtcGxlcy50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9tb2RlbC9HYW1lRGF0YS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9tb2RlbC9TdG9yYWdlR2FtZURhdGEudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9JbmZvQmxvY2sudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9WaWV3Rm9vdGVyLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld0dhbWVQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld0hlbHAudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9WaWV3TmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy92aWV3L1ZpZXdQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld1JlY29yZHNQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld1NldHRpbmdzUGFnZS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy92aWV3L1ZpZXdTdGFydFBhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9yZXR1cm5FbGVtZW50LnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBDb250cm9sbGVyR2FtZVBhZ2UgZnJvbSAnLi9jb250cm9sbGVyL0NvbnRyb2xsZXJHYW1lUGFnZSc7XG5pbXBvcnQgQ29udHJvbGxlclJlY29yZHNQYWdlIGZyb20gJy4vY29udHJvbGxlci9Db250cm9sbGVyUmVjb3Jkc1BhZ2UnO1xuaW1wb3J0IENvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgZnJvbSAnLi9jb250cm9sbGVyL0NvbnRyb2xsZXJTZXR0aW5nc1BhZ2UnO1xuaW1wb3J0IENvbnRyb2xsZXJTdGFydFBhZ2UgZnJvbSAnLi9jb250cm9sbGVyL0NvbnRyb2xsZXJTdGFydFBhZ2UnO1xuaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IGlPYmpGb3JMUyBmcm9tICcuL21vZGVsL2lPYmpGb3JMUyc7XG5pbXBvcnQgVmlld0dhbWVQYWdlIGZyb20gJy4vdmlldy9WaWV3R2FtZVBhZ2UnO1xuaW1wb3J0IFZpZXdSZWNvcmRzUGFnZSBmcm9tICcuL3ZpZXcvVmlld1JlY29yZHNQYWdlJztcbmltcG9ydCBWaWV3U2V0dGluZ3NQYWdlIGZyb20gJy4vdmlldy9WaWV3U2V0dGluZ3NQYWdlJztcbmltcG9ydCBWaWV3U3RhcnRQYWdlIGZyb20gJy4vdmlldy9WaWV3U3RhcnRQYWdlJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGdhbWVEYXRhOiBHYW1lRGF0YTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZ2FtZURhdGEgPSBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQYWdlc1ZpZXdzKCkge1xuICAgIGNvbnN0IHZpZXdTdGFydFBhZ2UgPSBuZXcgVmlld1N0YXJ0UGFnZSh0aGlzLmdhbWVEYXRhKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldFZpZXdTdGFydFBhZ2Uodmlld1N0YXJ0UGFnZSk7XG4gICAgY29uc3Qgdmlld1NldHRpbmdzUGFnZSA9IG5ldyBWaWV3U2V0dGluZ3NQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Vmlld1NldHRpbmdzUGFnZSh2aWV3U2V0dGluZ3NQYWdlKTtcbiAgICBjb25zdCB2aWV3R2FtZVBhZ2UgPSBuZXcgVmlld0dhbWVQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Vmlld0dhbWVQYWdlKHZpZXdHYW1lUGFnZSk7XG4gICAgY29uc3Qgdmlld1JlY29yZHNQYWdlID0gbmV3IFZpZXdSZWNvcmRzUGFnZSh0aGlzLmdhbWVEYXRhKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldFZpZXdSZWNvcmRzUGFnZSh2aWV3UmVjb3Jkc1BhZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDb250cm9sbGVycygpIHtcbiAgICBjb25zdCBjb250cm9sbGVyU3RhcnRQYWdlID0gbmV3IENvbnRyb2xsZXJTdGFydFBhZ2UodGhpcy5nYW1lRGF0YSk7XG4gICAgY29uc3QgY29udHJvbGxlclNldHRpbmdzUGFnZSA9IG5ldyBDb250cm9sbGVyU2V0dGluZ3NQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIGNvbnN0IGNvbnRyb2xsZXJHYW1lUGFnZSA9IG5ldyBDb250cm9sbGVyR2FtZVBhZ2UodGhpcy5nYW1lRGF0YSk7XG4gICAgY29uc3QgY29udHJvbGxlclJlY29yZHNQYWdlID0gbmV3IENvbnRyb2xsZXJSZWNvcmRzUGFnZSh0aGlzLmdhbWVEYXRhKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldENvbnRyb2xsZXJTdGFydFBhZ2UoY29udHJvbGxlclN0YXJ0UGFnZSk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRDb250cm9sbGVyU2V0dGluZ3NQYWdlKGNvbnRyb2xsZXJTZXR0aW5nc1BhZ2UpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Q29udHJvbGxlckdhbWVQYWdlKGNvbnRyb2xsZXJHYW1lUGFnZSk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRDb250cm9sbGVyUmVjb3Jkc1BhZ2UoY29udHJvbGxlclJlY29yZHNQYWdlKTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0dWFsaXplRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBzdHJpbmdEYXRhOiBzdHJpbmcgfCBudWxsID1cbiAgICAgIHRoaXMuZ2FtZURhdGEuc3RvcmFnZUdhbWVEYXRhLmxvYWRGcm9tTFMoKTtcbiAgICBsZXQgcGFyc2VkT2JqZWN0OiBpT2JqRm9yTFMgPSB7XG4gICAgICBleGFtcGxlczogW10sXG4gICAgICBtaXN0YWtlczogW10sXG4gICAgICBvcGVyYXRpb246ICcnLFxuICAgICAgc2NvcmU6IDAsXG4gICAgICBnYW1lVGltZTogMCxcbiAgICAgIG51bU1pc3Rha2VzOiAwLFxuICAgICAgbnVtRXhhbXBsZXM6IDAsXG4gICAgICByZWNvcmRzOiBbXSxcbiAgICB9O1xuICAgIGlmIChzdHJpbmdEYXRhICE9PSBudWxsKSB7XG4gICAgICBwYXJzZWRPYmplY3QgPSA8aU9iakZvckxTPkpTT04ucGFyc2Uoc3RyaW5nRGF0YSk7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldEV4YW1wbGVzKHBhcnNlZE9iamVjdC5leGFtcGxlcyk7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldE1pc3Rha2VzKHBhcnNlZE9iamVjdC5taXN0YWtlcyk7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldE9wZXJhdGlvbihwYXJzZWRPYmplY3Qub3BlcmF0aW9uKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0U2NvcmUocGFyc2VkT2JqZWN0LnNjb3JlKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0UmVjb3JkcyhwYXJzZWRPYmplY3QucmVjb3Jkcyk7XG4gICAgfVxuICB9O1xuXG4gIG5ldygpIHtcbiAgICB0aGlzLmFjdHVhbGl6ZURhdGEoKTtcbiAgICB0aGlzLmFkZFBhZ2VzVmlld3MoKTtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXJzKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRDb250cm9sbGVyU3RhcnRQYWdlKCk/LnN0YXJ0TGlzdGVuQnV0dG9ucygpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Q29udHJvbGxlclNldHRpbmdzUGFnZSgpPy5zdGFydExpc3RlbkJ1dHRvbnMoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldENvbnRyb2xsZXJHYW1lUGFnZSgpPy5zdGFydExpc3RlbkV2ZW50cygpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Q29udHJvbGxlclJlY29yZHNQYWdlKCk/LnN0YXJ0TGlzdGVuTWVudSgpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld1N0YXJ0UGFnZSgpPy5zaG93KCk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgaUV4YW1wbGUgZnJvbSAnLi4vbW9kZWwvaUV4YW1wbGUnO1xuaW1wb3J0IGlSZWNvcmQgZnJvbSAnLi4vbW9kZWwvaVJlY29yZCc7XG5pbXBvcnQgSW5mb0Jsb2NrIGZyb20gJy4uL3ZpZXcvSW5mb0Jsb2NrJztcbmltcG9ydCBWaWV3R2FtZVBhZ2UgZnJvbSAnLi4vdmlldy9WaWV3R2FtZVBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyR2FtZVBhZ2Uge1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIHZpZXdHYW1lUGFnZTogVmlld0dhbWVQYWdlO1xuICBhbnN3ZXJGaWVsZDogSFRNTERpdkVsZW1lbnQ7XG4gIGluZm9CbG9jazogSW5mb0Jsb2NrO1xuICBjdXJyZW50RXhhbXBsZTogaUV4YW1wbGUgfCBudWxsO1xuICBuYXZIb21lOiBIVE1MTElFbGVtZW50O1xuICBuYXZIZWxwOiBIVE1MTElFbGVtZW50O1xuICBoZWxwQ2xvc2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBrZXlzV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG4gIGFyckV4YW1wbGVzOiBpRXhhbXBsZVtdO1xuICBzdGFydEV4YW1wbGVUaW1lOiBEYXRlIHwgbnVsbDtcbiAgYmxvY2tCdXR0b25zOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWVEYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZ2FtZURhdGEgPSBnYW1lRGF0YTtcbiAgICB0aGlzLnZpZXdHYW1lUGFnZSA9IDxWaWV3R2FtZVBhZ2U+Z2FtZURhdGEuZ2V0Vmlld0dhbWVQYWdlKCk7XG4gICAgdGhpcy5hbnN3ZXJGaWVsZCA9IHRoaXMudmlld0dhbWVQYWdlLmFuc3dlckZpZWxkO1xuICAgIHRoaXMuaW5mb0Jsb2NrID0gbmV3IEluZm9CbG9jayhnYW1lRGF0YSk7XG4gICAgdGhpcy5jdXJyZW50RXhhbXBsZSA9IG51bGw7XG4gICAgdGhpcy5uYXZIb21lID0gPEhUTUxMSUVsZW1lbnQ+dGhpcy52aWV3R2FtZVBhZ2UubmF2SG9tZTtcbiAgICB0aGlzLm5hdkhlbHAgPSA8SFRNTExJRWxlbWVudD50aGlzLnZpZXdHYW1lUGFnZS5uYXZIZWxwO1xuICAgIHRoaXMua2V5c1dyYXBwZXIgPSB0aGlzLnZpZXdHYW1lUGFnZS5rZXlzV3JhcHBlcjtcbiAgICB0aGlzLmFyckV4YW1wbGVzID0gW107XG4gICAgdGhpcy5oZWxwQ2xvc2VCdXR0b24gPSB0aGlzLnZpZXdHYW1lUGFnZS5oZWxwQ2xvc2VCdXR0b247XG4gICAgdGhpcy5zdGFydEV4YW1wbGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLmJsb2NrQnV0dG9ucyA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnROZXh0RXhhbXBsZSA9ICgpID0+IHtcbiAgICB0aGlzLmFyckV4YW1wbGVzID0gdGhpcy5nYW1lRGF0YS5nZXRFeGFtcGxlcygpO1xuICAgIGNvbnN0IGV4YW1wbGU6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy52aWV3R2FtZVBhZ2UuZXhhbXBsZTtcbiAgICBpZiAodGhpcy5hcnJFeGFtcGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy5nYW1lRGF0YS5nZXRTY29yZSgpID09PSAwKSB7XG4gICAgICAgIHRoaXMuaW5mb0Jsb2NrLnNob3dJbnN0cnVjdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmZvQmxvY2suc2hvd1N0YXRpc3RpY3MoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlld0dhbWVQYWdlLnVwZGF0ZVNjb3JlKCk7XG4gICAgICB0aGlzLnN0YXJ0RXhhbXBsZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgbmV4dEV4YW1wbGUgPSA8aUV4YW1wbGU+dGhpcy5hcnJFeGFtcGxlcy5wb3AoKTtcbiAgICAgIHRoaXMuY3VycmVudEV4YW1wbGUgPSBuZXh0RXhhbXBsZTtcbiAgICAgIGV4YW1wbGUuaW5uZXJUZXh0ID0gYCR7bmV4dEV4YW1wbGUuZXhhbXBsZX0gPWA7XG4gICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCA9ICc/Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlY29yZDogaVJlY29yZCA9IHtcbiAgICAgICAgb3BlcmF0aW9uOiB0aGlzLmdhbWVEYXRhLmdldE9wZXJhdGlvbigpLFxuICAgICAgICBudW1FeGFtcGxlczogdGhpcy5nYW1lRGF0YS5nZXROdW1FeGFtcGxlcygpLFxuICAgICAgICBudW1NaXN0YWtlczogdGhpcy5nYW1lRGF0YS5nZXROdW1NaXN0YWtlcygpLFxuICAgICAgICBzY29yZTogdGhpcy5nYW1lRGF0YS5nZXRTY29yZSgpLFxuICAgICAgICB0aW1lOiB0aGlzLmdhbWVEYXRhLmdldEdhbWVUaW1lKCksXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICB9O1xuICAgICAgdGhpcy5nYW1lRGF0YS5hZGRSZWNvcmQocmVjb3JkKTtcbiAgICAgIHRoaXMuaW5mb0Jsb2NrLnNob3dFbmRHYW1lKCk7XG4gICAgICBleGFtcGxlLmlubmVyVGV4dCA9IGDQnNC+0LvQvtC00LXRhmA7XG4gICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCA9ICchISEnO1xuICAgICAgdGhpcy5jdXJyZW50RXhhbXBsZSA9IG51bGw7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldEV4YW1wbGVzKFtdKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXdHYW1lUGFnZS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld1JlY29yZHNQYWdlKCk/LnNob3coKTtcbiAgICAgIH0sIDM1MDApO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGFkZEV4YW1wbGVUb01pc3Rha2VzID0gKGV4YW1wbGU6IGlFeGFtcGxlKSA9PiB7XG4gICAgY29uc3QgYXJyTWlzdGFrZXMgPVxuICAgICAgdGhpcy5nYW1lRGF0YS5nZXRNaXN0YWtlcygpID09PSB1bmRlZmluZWRcbiAgICAgICAgPyBbXVxuICAgICAgICA6IHRoaXMuZ2FtZURhdGEuZ2V0TWlzdGFrZXMoKTtcbiAgICBpZiAoIWFyck1pc3Rha2VzLmluY2x1ZGVzKGV4YW1wbGUpKSB7XG4gICAgICBhcnJNaXN0YWtlcy5wdXNoKGV4YW1wbGUpO1xuICAgICAgZXhhbXBsZS5zY29yZSAtPSAxO1xuICAgICAgdGhpcy5nYW1lRGF0YS5zZXROdW1NaXN0YWtlcyh0aGlzLmdhbWVEYXRhLmdldE51bU1pc3Rha2VzKCkgKyAxKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0TWlzdGFrZXMoYXJyTWlzdGFrZXMpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGluY3JlYXNlU2NvcmUgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2NvcmUgPSB0aGlzLmdhbWVEYXRhLmdldFNjb3JlKCk7XG4gICAgY29uc3QgbmV3U2NvcmUgPSBjdXJyZW50U2NvcmUgKyBudW07XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRTY29yZShuZXdTY29yZSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBjaGVja0Fuc3dlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5jdXJyZW50RXhhbXBsZSAhPT0gbnVsbCAmJiB0aGlzLmFuc3dlckZpZWxkLnRleHRDb250ZW50ICE9PSAnPz8nKSB7XG4gICAgICBpZiAoTnVtYmVyKHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0KSA9PT0gdGhpcy5jdXJyZW50RXhhbXBsZS5hbnN3ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRFeGFtcGxlVGltZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHNvbHZlVGltZSA9XG4gICAgICAgICAgICBuZXcgRGF0ZSgpLnZhbHVlT2YoKSAtIHRoaXMuc3RhcnRFeGFtcGxlVGltZS52YWx1ZU9mKCk7XG4gICAgICAgICAgY29uc3QgZ2FtZVRpbWUgPSB0aGlzLmdhbWVEYXRhLmdldEdhbWVUaW1lKCk7XG4gICAgICAgICAgdGhpcy5nYW1lRGF0YS5zZXRHYW1lVGltZShnYW1lVGltZSArIHNvbHZlVGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lRGF0YS5zZXRFeGFtcGxlcyh0aGlzLmFyckV4YW1wbGVzKTtcbiAgICAgICAgdGhpcy5pbmZvQmxvY2suc2hvd1JpZ2h0QW5zd2VyKCk7XG4gICAgICAgIHRoaXMuaW5jcmVhc2VTY29yZSh0aGlzLmN1cnJlbnRFeGFtcGxlLnNjb3JlKTtcbiAgICAgICAgdGhpcy52aWV3R2FtZVBhZ2UudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgdGhpcy5ibG9ja0J1dHRvbnMgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXJ0TmV4dEV4YW1wbGUoKTtcbiAgICAgICAgICB0aGlzLmJsb2NrQnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICB9LCAxMTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkRXhhbXBsZVRvTWlzdGFrZXModGhpcy5jdXJyZW50RXhhbXBsZSk7XG4gICAgICAgIHRoaXMuaW5mb0Jsb2NrLnNob3dXcm9uZ0Fuc3dlcigpO1xuICAgICAgICB0aGlzLmJsb2NrQnV0dG9ucyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYmxvY2tCdXR0b25zID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pbmZvQmxvY2suc2hvd0luc3RydWN0aW9uKCk7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJGaWVsZC5pbm5lclRleHQgPSAnPz8nO1xuICAgICAgICB9LCAxMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBjb250cm9sUHJlc3NlZEtleSA9IChrZXlWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYodGhpcy5ibG9ja0J1dHRvbnMgPT09IGZhbHNlKSB7XG4gICAgICBzd2l0Y2ggKGtleVZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ8OXJzpcbiAgICAgICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCA9ICc/Pyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ+Kckyc6XG4gICAgICAgICAgdGhpcy5jaGVja0Fuc3dlcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICh0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dC5sZW5ndGggPiAxICYmXG4gICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0ICE9PSAnMTAnKSB8fFxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJGaWVsZC5pbm5lclRleHQgPT09ICc/PydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0ID0ga2V5VmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0ICs9IGtleVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBjaGVja1ByZXNzZWRCdXR0b24gPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uJykpIHtcbiAgICAgIGJ1dHRvbi5ibHVyKCk7XG4gICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkS2V5KGJ1dHRvbi5uYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGFydExpc3Rlbk51bUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5rZXlzV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+XG4gICAgICB0aGlzLmNoZWNrUHJlc3NlZEJ1dHRvbihldmVudClcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgY2hlY2tLZXlib2FyZEJ1dHRvbnMgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG4gICAgaWYgKCFrZXkubWF0Y2goL1xcRC9nKSkge1xuICAgICAgdGhpcy5jb250cm9sUHJlc3NlZEtleShrZXkpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyB8fCBrZXkgPT09ICdEZWxldGUnIHx8IGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWRLZXkoJ8OXJyk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWRLZXkoJ+KckycpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHN0YXJ0TGlzdGVuS2V5Ym9hcmRCdXR0b25zID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNoZWNrS2V5Ym9hcmRCdXR0b25zKGV2ZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIHN0YXJ0TGlzdGVuTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLm5hdkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmdhbWVEYXRhLnN0b3JhZ2VHYW1lRGF0YS5zYXZlVG9MUyhcbiAgICAgICAgdGhpcy5nYW1lRGF0YSxcbiAgICAgICAgPGlFeGFtcGxlPnRoaXMuY3VycmVudEV4YW1wbGVcbiAgICAgICk7XG4gICAgICB0aGlzLnZpZXdHYW1lUGFnZS5oaWRlKCk7XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdTdGFydFBhZ2UoKT8uc2hvdygpO1xuICAgIH0pO1xuICAgIHRoaXMubmF2SGVscC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMudmlld0dhbWVQYWdlLnZpZXdIZWxwPy5zaG93KCk7XG4gICAgfSk7XG4gICAgdGhpcy5oZWxwQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgdGhpcy52aWV3R2FtZVBhZ2Uudmlld0hlbHA/LmhpZGUoKVxuICAgICk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGFydExpc3RlbkNsb3NlV2luZG93ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmdhbWVEYXRhLnN0b3JhZ2VHYW1lRGF0YS5zYXZlVG9MUyhcbiAgICAgICAgdGhpcy5nYW1lRGF0YSxcbiAgICAgICAgPGlFeGFtcGxlPnRoaXMuY3VycmVudEV4YW1wbGVcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhcnRMaXN0ZW5FdmVudHMoKSB7XG4gICAgdGhpcy5zdGFydExpc3Rlbk51bUJ1dHRvbnMoKTtcbiAgICB0aGlzLnN0YXJ0TGlzdGVuS2V5Ym9hcmRCdXR0b25zKCk7XG4gICAgdGhpcy5zdGFydExpc3Rlbk1lbnUoKTtcbiAgICB0aGlzLnN0YXJ0TGlzdGVuQ2xvc2VXaW5kb3coKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcbmltcG9ydCBWaWV3UmVjb3Jkc1BhZ2UgZnJvbSAnLi4vdmlldy9WaWV3UmVjb3Jkc1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyUmVjb3Jkc1BhZ2Uge1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIHZpZXdSZWNvcmRzUGFnZTogVmlld1JlY29yZHNQYWdlO1xuICBuYXZIb21lOiBIVE1MTElFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5nYW1lRGF0YSA9IGRhdGE7XG4gICAgdGhpcy52aWV3UmVjb3Jkc1BhZ2UgPSA8Vmlld1JlY29yZHNQYWdlPnRoaXMuZ2FtZURhdGEuZ2V0Vmlld1JlY29yZHNQYWdlKCk7XG4gICAgdGhpcy5uYXZIb21lID0gPEhUTUxMSUVsZW1lbnQ+dGhpcy5nYW1lRGF0YS5nZXRWaWV3UmVjb3Jkc1BhZ2UoKT8ubmF2SG9tZTtcbiAgfVxuXG4gIHN0YXJ0TGlzdGVuTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLm5hdkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnZpZXdSZWNvcmRzUGFnZS5oaWRlKCk7XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdTdGFydFBhZ2UoKT8uc2hvdygpO1xuICAgIH0pO1xuICB9O1xufVxuIiwiaW1wb3J0IEV4YW1wbGVzIGZyb20gJy4uL21vZGVsL0V4YW1wbGVzJztcbmltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgaUV4YW1wbGUgZnJvbSAnLi4vbW9kZWwvaUV4YW1wbGUnO1xuaW1wb3J0IFZpZXdTZXR0aW5nc1BhZ2UgZnJvbSAnLi4vdmlldy9WaWV3U2V0dGluZ3NQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclNldHRpbmdzUGFnZSB7XG4gIGdhbWVEYXRhOiBHYW1lRGF0YTtcbiAgYnV0dG9uV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG4gIG5hdkhvbWU6IEhUTUxMSUVsZW1lbnQ7XG4gIG5hdkhlbHA6IEhUTUxMSUVsZW1lbnQ7XG4gIGhlbHBDbG9zZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHNldE51bUV4cHJlc3Npb25zQnV0dG9uczogSFRNTERpdkVsZW1lbnQ7XG4gIGRlc2NyaXB0aW9uTnVtRXhhbXBsZXM6IEhUTUxEaXZFbGVtZW50O1xuICByZW1vdmVNb3N0RXhhbXBsZXNCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICByZW1vdmVNYW55RXhhbXBsZXNCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICByZW1vdmVPbmVFeGFtcGxlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYWRkTW9zdEV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYWRkTWFueUV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYWRkT25lRXhhbXBsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHNldHRpbmdzQXBwbHlCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZXR0aW5nc0Nsb3NlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgc2V0dGluZ3NCbG9jazogSFRNTERpdkVsZW1lbnQ7XG4gIHZpZXdTZXR0aW5nc1BhZ2U6IFZpZXdTZXR0aW5nc1BhZ2U7XG4gIHRlbXBPcGVyYXRpb246IHN0cmluZztcbiAgdGVtcEV4YW1wbGVzOiBpRXhhbXBsZVtdO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWVEYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZ2FtZURhdGEgPSBnYW1lRGF0YTtcbiAgICB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UgPSA8Vmlld1NldHRpbmdzUGFnZT5nYW1lRGF0YS5nZXRWaWV3U2V0dGluZ3NQYWdlKCk7XG4gICAgdGhpcy5idXR0b25XcmFwcGVyID0gdGhpcy52aWV3U2V0dGluZ3NQYWdlLmJ1dHRvbldyYXBwZXI7XG4gICAgdGhpcy5uYXZIb21lID0gPEhUTUxMSUVsZW1lbnQ+dGhpcy52aWV3U2V0dGluZ3NQYWdlLm5hdkhvbWU7XG4gICAgdGhpcy5uYXZIZWxwID0gPEhUTUxMSUVsZW1lbnQ+dGhpcy52aWV3U2V0dGluZ3NQYWdlLm5hdkhlbHA7XG4gICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzID0gdGhpcy52aWV3U2V0dGluZ3NQYWdlLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXM7XG4gICAgdGhpcy5zZXROdW1FeHByZXNzaW9uc0J1dHRvbnMgPSA8SFRNTERpdkVsZW1lbnQ+KFxuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLnNldE51bUV4cHJlc3Npb25zQnV0dG9uc1xuICAgICk7XG4gICAgdGhpcy5yZW1vdmVNb3N0RXhhbXBsZXNCdXR0b24gPVxuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbjtcbiAgICB0aGlzLnJlbW92ZU1hbnlFeGFtcGxlc0J1dHRvbiA9XG4gICAgICB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UucmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uO1xuICAgIHRoaXMucmVtb3ZlT25lRXhhbXBsZUJ1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5yZW1vdmVPbmVFeGFtcGxlQnV0dG9uO1xuICAgIHRoaXMuYWRkTW9zdEV4YW1wbGVzQnV0dG9uID0gdGhpcy52aWV3U2V0dGluZ3NQYWdlLmFkZE1vc3RFeGFtcGxlc0J1dHRvbjtcbiAgICB0aGlzLmFkZE1hbnlFeGFtcGxlc0J1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5hZGRNYW55RXhhbXBsZXNCdXR0b247XG4gICAgdGhpcy5hZGRPbmVFeGFtcGxlQnV0dG9uID0gdGhpcy52aWV3U2V0dGluZ3NQYWdlLmFkZE9uZUV4YW1wbGVCdXR0b247XG4gICAgdGhpcy5zZXR0aW5nc0FwcGx5QnV0dG9uID0gdGhpcy52aWV3U2V0dGluZ3NQYWdlLnNldHRpbmdzQXBwbHlCdXR0b247XG4gICAgdGhpcy5zZXR0aW5nc0Nsb3NlQnV0dG9uID0gdGhpcy52aWV3U2V0dGluZ3NQYWdlLmluZm9DbG9zZUJ1dHRvbjtcbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5oZWxwQ2xvc2VCdXR0b247XG4gICAgdGhpcy5zZXR0aW5nc0Jsb2NrID0gdGhpcy52aWV3U2V0dGluZ3NQYWdlLnNldHRpbmdzQmxvY2s7XG4gICAgdGhpcy50ZW1wT3BlcmF0aW9uID0gJyc7XG4gICAgdGhpcy50ZW1wRXhhbXBsZXMgPSBbXTtcbiAgfVxuXG4gIGFkZEV4YW1wbGVzRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBvcGVyYXRpb25UZXh0ID0gdGhpcy50ZW1wT3BlcmF0aW9uLnNsaWNlKDAsIDEpO1xuICAgIGxldCBleGFtcGxlcyA9IFtdO1xuICAgIGlmIChvcGVyYXRpb25UZXh0ID09PSAnIScpIHtcbiAgICAgIGV4YW1wbGVzID0gdGhpcy5nYW1lRGF0YS5nZXRNaXN0YWtlcygpO1xuICAgICAgdGhpcy5nYW1lRGF0YS5zZXRNaXN0YWtlcyhbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4YW1wbGVzID0gbmV3IEV4YW1wbGVzKG9wZXJhdGlvblRleHQpLnJldHVybigpO1xuICAgIH1cbiAgICB0aGlzLnRlbXBFeGFtcGxlcyA9IGV4YW1wbGVzO1xuICB9O1xuXG4gIG1ha2VTZXR0aW5nc0Jsb2NrQWN0aXZlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0dGluZ3NCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvcm1hdGlvbl91bmFjdGl2ZScpO1xuICB9O1xuXG4gIG1ha2VTZXR0aW5nc0Jsb2NrVW5hY3RpdmUgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmZvcm1hdGlvbl91bmFjdGl2ZScpKSB7XG4gICAgICB0aGlzLnNldHRpbmdzQmxvY2suY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb25fdW5hY3RpdmUnKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBhcHBseVRlbXBTZXR0aW5ncyA9ICgpID0+IHtcbiAgICB0aGlzLmdhbWVEYXRhLnNldE9wZXJhdGlvbih0aGlzLnRlbXBPcGVyYXRpb24pO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0RXhhbXBsZXModGhpcy50ZW1wRXhhbXBsZXMpO1xuICB9O1xuXG4gIHNldEV4YW1wbGVzID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMudGVtcE9wZXJhdGlvbiA9IGJ1dHRvbi5pbm5lckhUTUw7XG4gICAgY29uc3QgZGVzY3JpcHRpb25PcGVyYXRpb24gPSA8SFRNTEVsZW1lbnQ+KFxuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLmRlc2NyaXB0aW9uT3BlcmF0aW9uXG4gICAgKTtcbiAgICBkZXNjcmlwdGlvbk9wZXJhdGlvbi50ZXh0Q29udGVudCA9IGJ1dHRvbi5pbm5lckhUTUw7XG4gICAgdGhpcy5tYWtlU2V0dGluZ3NCbG9ja0FjdGl2ZSgpO1xuICAgIHRoaXMuYWRkRXhhbXBsZXNEYXRhKCk7XG4gICAgY29uc3QgbnVtRXhhbXBsZXMgPSB0aGlzLnRlbXBFeGFtcGxlcy5sZW5ndGg7XG4gICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50ID1cbiAgICAgIG51bUV4YW1wbGVzID49IDIwID8gJzIwJyA6IFN0cmluZyhudW1FeGFtcGxlcyk7XG4gIH07XG5cbiAgY2hlY2tBY3RpdmVTZXROdW1CdXR0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG51bUV4YW1wbGVzID0gdGhpcy50ZW1wRXhhbXBsZXMubGVuZ3RoO1xuICAgIGlmIChOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSA9PSBudW1FeGFtcGxlcykge1xuICAgICAgdGhpcy5hZGRPbmVFeGFtcGxlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRPbmVFeGFtcGxlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSArIDEwID4gbnVtRXhhbXBsZXMpIHtcbiAgICAgIHRoaXMuYWRkTWFueUV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRNYW55RXhhbXBsZXNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpICsgNTAgPiBudW1FeGFtcGxlcykge1xuICAgICAgdGhpcy5hZGRNb3N0RXhhbXBsZXNCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZE1vc3RFeGFtcGxlc0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgLSA1MCA8PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSAtIDEwIDw9IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVNYW55RXhhbXBsZXNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpIC0gMSA8PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgc2V0R2FtZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uJykpIHtcbiAgICAgIHRoaXMuc2V0RXhhbXBsZXMoZXZlbnQpO1xuICAgICAgdGhpcy5jaGVja0FjdGl2ZVNldE51bUJ1dHRvbnMoKTtcbiAgICB9XG4gIH07XG5cbiAgY2hhbmdlTnVtRXhhbXBsZXMgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uJykpIHtcbiAgICAgIGlmIChidXR0b24gPT09IHRoaXMucmVtb3ZlT25lRXhhbXBsZUJ1dHRvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQgPSBTdHJpbmcoXG4gICAgICAgICAgTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgLSAxXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiA9PT0gdGhpcy5yZW1vdmVNYW55RXhhbXBsZXNCdXR0b24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50ID0gU3RyaW5nKFxuICAgICAgICAgIE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpIC0gMTBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uID09PSB0aGlzLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQgPSBTdHJpbmcoXG4gICAgICAgICAgTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgLSA1MFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gPT09IHRoaXMuYWRkT25lRXhhbXBsZUJ1dHRvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQgPSBTdHJpbmcoXG4gICAgICAgICAgTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgKyAxXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiA9PT0gdGhpcy5hZGRNYW55RXhhbXBsZXNCdXR0b24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50ID0gU3RyaW5nKFxuICAgICAgICAgIE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpICsgMTBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCA9IFN0cmluZyhcbiAgICAgICAgICBOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSArIDUwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrQWN0aXZlU2V0TnVtQnV0dG9ucygpO1xuICAgIH1cbiAgfTtcblxuICBhcHBseVNldHRpbmdzID0gKCkgPT4ge1xuICAgIHRoaXMudGVtcEV4YW1wbGVzLmxlbmd0aCA9IE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0R2FtZVRpbWUoMCk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXROdW1NaXN0YWtlcygwKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldFNjb3JlKDApO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0TnVtRXhhbXBsZXMoXG4gICAgICBOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KVxuICAgICk7XG4gICAgdGhpcy5hcHBseVRlbXBTZXR0aW5ncygpO1xuICAgIHRoaXMubWFrZVNldHRpbmdzQmxvY2tVbmFjdGl2ZSgpO1xuICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5oaWRlKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRDb250cm9sbGVyR2FtZVBhZ2UoKT8uc3RhcnROZXh0RXhhbXBsZSgpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld0dhbWVQYWdlKCk/LnNob3coKTtcbiAgfTtcblxuICBzdGFydExpc3RlbkJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5idXR0b25XcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZXRHYW1lKTtcbiAgICB0aGlzLnNldE51bUV4cHJlc3Npb25zQnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuY2hhbmdlTnVtRXhhbXBsZXNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3NBcHBseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYXBwbHlTZXR0aW5ncyk7XG4gICAgdGhpcy5zZXR0aW5nc0Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5tYWtlU2V0dGluZ3NCbG9ja1VuYWN0aXZlXG4gICAgKTtcbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICB0aGlzLnZpZXdTZXR0aW5nc1BhZ2Uudmlld0hlbHA/LmhpZGUoKVxuICAgICk7XG4gICAgdGhpcy5uYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLmhpZGUoKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld1N0YXJ0UGFnZSgpPy5zaG93KCk7XG4gICAgfSk7XG4gICAgdGhpcy5uYXZIZWxwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLnZpZXdIZWxwPy5zaG93KCk7XG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IFZpZXdTdGFydFBhZ2UgZnJvbSAnLi4vdmlldy9WaWV3U3RhcnRQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclN0YXJ0UGFnZSB7XG4gIGdhbWVEYXRhOiBHYW1lRGF0YTtcbiAgdmlld1N0YXJ0UGFnZTogVmlld1N0YXJ0UGFnZTtcbiAgYnV0dG9uTmV3R2FtZTogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ1dHRvbkxvYWRHYW1lOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYnV0dG9uUmVjb3JkczogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZ2FtZURhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5nYW1lRGF0YSA9IGdhbWVEYXRhO1xuICAgIHRoaXMudmlld1N0YXJ0UGFnZSA9IDxWaWV3U3RhcnRQYWdlPmdhbWVEYXRhLmdldFZpZXdTdGFydFBhZ2UoKTtcbiAgICB0aGlzLmJ1dHRvbk5ld0dhbWUgPSB0aGlzLnZpZXdTdGFydFBhZ2UuYnV0dG9uTmV3R2FtZTtcbiAgICB0aGlzLmJ1dHRvbkxvYWRHYW1lID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMudmlld1N0YXJ0UGFnZS5idXR0b25Mb2FkR2FtZTtcbiAgICB0aGlzLmJ1dHRvblJlY29yZHMgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy52aWV3U3RhcnRQYWdlLmJ1dHRvblJlY29yZHM7XG4gIH1cbiAgc2hvd1JlY29yZHMgPSAoKSA9PiB7XG4gICAgdGhpcy52aWV3U3RhcnRQYWdlLmhpZGUoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdSZWNvcmRzUGFnZSgpPy5zaG93KCk7XG4gIH07XG4gIHN0YXJ0TmV3R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnZpZXdTdGFydFBhZ2UuaGlkZSgpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld1NldHRpbmdzUGFnZSgpPy5zaG93KCk7XG4gIH07XG4gIHN0YXJ0TG9hZEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy52aWV3U3RhcnRQYWdlLmhpZGUoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldENvbnRyb2xsZXJHYW1lUGFnZSgpPy5zdGFydE5leHRFeGFtcGxlKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3R2FtZVBhZ2UoKT8uc2hvdygpO1xuICB9O1xuICBzdGFydExpc3RlbkJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5idXR0b25OZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGFydE5ld0dhbWUpO1xuICAgIHRoaXMuYnV0dG9uTG9hZEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN0YXJ0TG9hZEdhbWUpO1xuICAgIHRoaXMuYnV0dG9uUmVjb3Jkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1JlY29yZHMpO1xuICB9O1xufVxuIiwiaW1wb3J0IGlFeGFtcGxlIGZyb20gJy4vaUV4YW1wbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlcyB7XG4gIGV4YW1wbGVzQXJyOiBpRXhhbXBsZVtdO1xuXG4gIGNvbnN0cnVjdG9yKG9wZXJhdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5leGFtcGxlc0FyciA9XG4gICAgICBvcGVyYXRpb24gPT09ICcrJ1xuICAgICAgICA/IHRoaXMucmV0dXJuU3VtKClcbiAgICAgICAgOiBvcGVyYXRpb24gPT09ICctJ1xuICAgICAgICAgID8gdGhpcy5yZXR1cm5TdWJzdHIoKVxuICAgICAgICAgIDogdGhpcy5yZXR1cm5NdWx0aXBsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaHVmZmxlID0gKGFycjogaUV4YW1wbGVbXSk6IGlFeGFtcGxlW10gPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogaUV4YW1wbGVbXSA9IFtdO1xuICAgIGZvciAoOyBhcnIubGVuZ3RoID4gMDsgKSB7XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAgIHJlc3VsdC5wdXNoKGFycltyYW5kb21OdW1dKTtcbiAgICAgIGFyciA9IFtcbiAgICAgICAgLi4uYXJyLnNsaWNlKDAsIHJhbmRvbU51bSksXG4gICAgICAgIC4uLmFyci5zbGljZShyYW5kb21OdW0gKyAxLCBhcnIubGVuZ3RoKSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcHJpdmF0ZSByZXR1cm5TY29yZVN1bVN1YnN0ciA9IChudW06IG51bWJlcikgPT4ge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIHN3aXRjaCAobnVtICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3VsdCA9IDI7XG4gICAgfVxuICAgIGlmIChudW0gPiAxMCkge1xuICAgICAgcmVzdWx0ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcHJpdmF0ZSByZXR1cm5TY29yZU11bHRpcGxlID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgc3dpdGNoIChudW0pIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDU7XG5cbiAgICAgIGNhc2UgMTA6XG4gICAgICAgIHJldHVybiA2O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gNztcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZXR1cm5TdW0gPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiArIGkgPD0gMjA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBleGFtcGxlID0gYCR7aX0gKyAke2p9YDtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gaSArIGo7XG4gICAgICAgIGNvbnN0IHNjb3JlID1cbiAgICAgICAgICB0aGlzLnJldHVyblNjb3JlU3VtU3Vic3RyKGkpICsgdGhpcy5yZXR1cm5TY29yZVN1bVN1YnN0cihqKTtcbiAgICAgICAgYXJyLnB1c2goeyBleGFtcGxlOiBleGFtcGxlLCBhbnN3ZXI6IGFuc3dlciwgc2NvcmU6IHNjb3JlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaHVmZmxlKGFycik7XG4gIH07XG5cbiAgcHJpdmF0ZSByZXR1cm5TdWJzdHIgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDIwOyBpID49IDE7IGkgLT0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGkgLSBqID49IDE7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBleGFtcGxlID0gYCR7aX0gLSAke2p9YDtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gaSAtIGo7XG4gICAgICAgIGNvbnN0IHNjb3JlID1cbiAgICAgICAgICB0aGlzLnJldHVyblNjb3JlU3VtU3Vic3RyKGkpICsgdGhpcy5yZXR1cm5TY29yZVN1bVN1YnN0cihqKTtcbiAgICAgICAgYXJyLnB1c2goeyBleGFtcGxlOiBleGFtcGxlLCBhbnN3ZXI6IGFuc3dlciwgc2NvcmU6IHNjb3JlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaHVmZmxlKGFycik7XG4gIH07XG5cbiAgcHJpdmF0ZSByZXR1cm5NdWx0aXBsZSA9ICgpID0+IHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGV4YW1wbGUgPSBgJHtpfSDDlyAke2p9YDtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gaSAqIGo7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gTWF0aC5taW4oXG4gICAgICAgICAgdGhpcy5yZXR1cm5TY29yZU11bHRpcGxlKGkpLFxuICAgICAgICAgIHRoaXMucmV0dXJuU2NvcmVNdWx0aXBsZShqKVxuICAgICAgICApO1xuICAgICAgICBhcnIucHVzaCh7IGV4YW1wbGU6IGV4YW1wbGUsIGFuc3dlcjogYW5zd2VyLCBzY29yZTogc2NvcmUgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNodWZmbGUoYXJyKTtcbiAgfTtcblxuICByZXR1cm4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhhbXBsZXNBcnI7XG4gIH1cbn1cbiIsImltcG9ydCBDb250cm9sbGVyR2FtZVBhZ2UgZnJvbSAnLi4vY29udHJvbGxlci9Db250cm9sbGVyR2FtZVBhZ2UnO1xuaW1wb3J0IENvbnRyb2xsZXJSZWNvcmRzUGFnZSBmcm9tICcuLi9jb250cm9sbGVyL0NvbnRyb2xsZXJSZWNvcmRzUGFnZSc7XG5pbXBvcnQgQ29udHJvbGxlclNldHRpbmdzUGFnZSBmcm9tICcuLi9jb250cm9sbGVyL0NvbnRyb2xsZXJTZXR0aW5nc1BhZ2UnO1xuaW1wb3J0IENvbnRyb2xsZXJTdGFydFBhZ2UgZnJvbSAnLi4vY29udHJvbGxlci9Db250cm9sbGVyU3RhcnRQYWdlJztcbmltcG9ydCBWaWV3R2FtZVBhZ2UgZnJvbSAnLi4vdmlldy9WaWV3R2FtZVBhZ2UnO1xuaW1wb3J0IFZpZXdSZWNvcmRzUGFnZSBmcm9tICcuLi92aWV3L1ZpZXdSZWNvcmRzUGFnZSc7XG5pbXBvcnQgVmlld1NldHRpbmdzUGFnZSBmcm9tICcuLi92aWV3L1ZpZXdTZXR0aW5nc1BhZ2UnO1xuaW1wb3J0IFZpZXdTdGFydFBhZ2UgZnJvbSAnLi4vdmlldy9WaWV3U3RhcnRQYWdlJztcbmltcG9ydCBpRXhhbXBsZSBmcm9tICcuL2lFeGFtcGxlJztcbmltcG9ydCBpUmVjb3JkIGZyb20gJy4vaVJlY29yZCc7XG5pbXBvcnQgU3RvcmFnZUdhbWVEYXRhIGZyb20gJy4vU3RvcmFnZUdhbWVEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURhdGEge1xuICBwcml2YXRlIGNvbnRyb2xsZXJHYW1lUGFnZTogQ29udHJvbGxlckdhbWVQYWdlIHwgbnVsbDtcbiAgcHJpdmF0ZSBjb250cm9sbGVyUmVjb3Jkc1BhZ2U6IENvbnRyb2xsZXJSZWNvcmRzUGFnZSB8IG51bGw7XG4gIHByaXZhdGUgY29udHJvbGxlclNldHRpbmdzUGFnZTogQ29udHJvbGxlclNldHRpbmdzUGFnZSB8IG51bGw7XG4gIHByaXZhdGUgY29udHJvbGxlclN0YXJ0UGFnZTogQ29udHJvbGxlclN0YXJ0UGFnZSB8IG51bGw7XG4gIHByaXZhdGUgZXhhbXBsZXM6IGlFeGFtcGxlW107XG4gIHByaXZhdGUgZ2FtZVRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtaXN0YWtlczogaUV4YW1wbGVbXTtcbiAgcHJpdmF0ZSBudW1FeGFtcGxlczogbnVtYmVyO1xuICBwcml2YXRlIG51bU1pc3Rha2VzOiBudW1iZXI7XG4gIHByaXZhdGUgb3BlcmF0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVjb3JkczogaVJlY29yZFtdO1xuICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XG4gIHB1YmxpYyBzdG9yYWdlR2FtZURhdGE6IFN0b3JhZ2VHYW1lRGF0YTtcbiAgcHJpdmF0ZSB2aWV3R2FtZVBhZ2U6IFZpZXdHYW1lUGFnZSB8IG51bGw7XG4gIHByaXZhdGUgdmlld1JlY29yZHNQYWdlOiBWaWV3UmVjb3Jkc1BhZ2UgfCBudWxsO1xuICBwcml2YXRlIHZpZXdTZXR0aW5nc1BhZ2U6IFZpZXdTZXR0aW5nc1BhZ2UgfCBudWxsO1xuICBwcml2YXRlIHZpZXdTdGFydFBhZ2U6IFZpZXdTdGFydFBhZ2UgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udHJvbGxlckdhbWVQYWdlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2xsZXJSZWNvcmRzUGFnZSA9IG51bGw7XG4gICAgdGhpcy5jb250cm9sbGVyU2V0dGluZ3NQYWdlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2xsZXJTdGFydFBhZ2UgPSBudWxsO1xuICAgIHRoaXMuZXhhbXBsZXMgPSBbXTtcbiAgICB0aGlzLmdhbWVUaW1lID0gMDtcbiAgICB0aGlzLm1pc3Rha2VzID0gW107XG4gICAgdGhpcy5udW1FeGFtcGxlcyA9IDA7XG4gICAgdGhpcy5udW1NaXN0YWtlcyA9IDA7XG4gICAgdGhpcy5vcGVyYXRpb24gPSAnJztcbiAgICB0aGlzLnJlY29yZHMgPSBbXTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnN0b3JhZ2VHYW1lRGF0YSA9IG5ldyBTdG9yYWdlR2FtZURhdGEoKTtcbiAgICB0aGlzLnZpZXdHYW1lUGFnZSA9IG51bGw7XG4gICAgdGhpcy52aWV3UmVjb3Jkc1BhZ2UgPSBudWxsO1xuICAgIHRoaXMudmlld1NldHRpbmdzUGFnZSA9IG51bGw7XG4gICAgdGhpcy52aWV3U3RhcnRQYWdlID0gbnVsbDtcbiAgfVxuXG4gIHNldFZpZXdSZWNvcmRzUGFnZSA9ICh2aWV3UmVjb3Jkc1BhZ2U6IFZpZXdSZWNvcmRzUGFnZSkgPT4ge1xuICAgIHRoaXMudmlld1JlY29yZHNQYWdlID0gdmlld1JlY29yZHNQYWdlO1xuICB9O1xuXG4gIGdldFZpZXdSZWNvcmRzUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52aWV3UmVjb3Jkc1BhZ2U7XG4gIH07XG5cbiAgc2V0Q29udHJvbGxlclJlY29yZHNQYWdlID0gKGNvbnRyb2xsZXJSZWNvcmRzUGFnZTogQ29udHJvbGxlclJlY29yZHNQYWdlKSA9PiB7XG4gICAgdGhpcy5jb250cm9sbGVyUmVjb3Jkc1BhZ2UgPSBjb250cm9sbGVyUmVjb3Jkc1BhZ2U7XG4gIH07XG5cbiAgZ2V0Q29udHJvbGxlclJlY29yZHNQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJSZWNvcmRzUGFnZTtcbiAgfTtcblxuICBzZXRWaWV3U3RhcnRQYWdlID0gKHZpZXdTdGFydFBhZ2U6IFZpZXdTdGFydFBhZ2UpID0+IHtcbiAgICB0aGlzLnZpZXdTdGFydFBhZ2UgPSB2aWV3U3RhcnRQYWdlO1xuICB9O1xuXG4gIGdldFZpZXdTdGFydFBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmlld1N0YXJ0UGFnZTtcbiAgfTtcblxuICBzZXRWaWV3U2V0dGluZ3NQYWdlID0gKHZpZXdTZXR0aW5nc1BhZ2U6IFZpZXdTZXR0aW5nc1BhZ2UpID0+IHtcbiAgICB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UgPSB2aWV3U2V0dGluZ3NQYWdlO1xuICB9O1xuXG4gIGdldFZpZXdTZXR0aW5nc1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmlld1NldHRpbmdzUGFnZTtcbiAgfTtcblxuICBzZXRWaWV3R2FtZVBhZ2UgPSAodmlld0dhbWVQYWdlOiBWaWV3R2FtZVBhZ2UpID0+IHtcbiAgICB0aGlzLnZpZXdHYW1lUGFnZSA9IHZpZXdHYW1lUGFnZTtcbiAgfTtcblxuICBnZXRWaWV3R2FtZVBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmlld0dhbWVQYWdlO1xuICB9O1xuXG4gIHNldENvbnRyb2xsZXJTdGFydFBhZ2UgPSAoY29udHJvbGxlclN0YXJ0UGFnZTogQ29udHJvbGxlclN0YXJ0UGFnZSkgPT4ge1xuICAgIHRoaXMuY29udHJvbGxlclN0YXJ0UGFnZSA9IGNvbnRyb2xsZXJTdGFydFBhZ2U7XG4gIH07XG5cbiAgZ2V0Q29udHJvbGxlclN0YXJ0UGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyU3RhcnRQYWdlO1xuICB9O1xuXG4gIHNldENvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgPSAoXG4gICAgY29udHJvbGxlclNldHRpbmdzUGFnZTogQ29udHJvbGxlclNldHRpbmdzUGFnZVxuICApID0+IHtcbiAgICB0aGlzLmNvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgPSBjb250cm9sbGVyU2V0dGluZ3NQYWdlO1xuICB9O1xuXG4gIGdldENvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlclNldHRpbmdzUGFnZTtcbiAgfTtcblxuICBzZXRDb250cm9sbGVyR2FtZVBhZ2UgPSAoY29udHJvbGxlckdhbWVQYWdlOiBDb250cm9sbGVyR2FtZVBhZ2UpID0+IHtcbiAgICB0aGlzLmNvbnRyb2xsZXJHYW1lUGFnZSA9IGNvbnRyb2xsZXJHYW1lUGFnZTtcbiAgfTtcblxuICBnZXRDb250cm9sbGVyR2FtZVBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlckdhbWVQYWdlO1xuICB9O1xuXG4gIHNldEV4YW1wbGVzID0gKGV4YW1wbGVzOiBpRXhhbXBsZVtdKSA9PiB7XG4gICAgdGhpcy5leGFtcGxlcyA9IGV4YW1wbGVzO1xuICB9O1xuXG4gIGdldEV4YW1wbGVzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmV4YW1wbGVzO1xuICB9O1xuXG4gIHNldE1pc3Rha2VzID0gKG1pc3Rha2VzOiBpRXhhbXBsZVtdKSA9PiB7XG4gICAgdGhpcy5taXN0YWtlcyA9IG1pc3Rha2VzO1xuICB9O1xuXG4gIGdldE1pc3Rha2VzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm1pc3Rha2VzO1xuICB9O1xuXG4gIHNldE9wZXJhdGlvbiA9IChvcGVyYXRpb246IHN0cmluZykgPT4ge1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICB9O1xuXG4gIGdldE9wZXJhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVyYXRpb247XG4gIH07XG5cbiAgc2V0U2NvcmUgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICB0aGlzLnNjb3JlID0gbnVtO1xuICB9O1xuXG4gIGdldFNjb3JlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNjb3JlO1xuICB9O1xuXG4gIHNldEdhbWVUaW1lID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5nYW1lVGltZSA9IG51bTtcbiAgfTtcblxuICBnZXRHYW1lVGltZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nYW1lVGltZTtcbiAgfTtcblxuICBzZXROdW1NaXN0YWtlcyA9IChudW06IG51bWJlcikgPT4ge1xuICAgIHRoaXMubnVtTWlzdGFrZXMgPSBudW07XG4gIH07XG5cbiAgZ2V0TnVtTWlzdGFrZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubnVtTWlzdGFrZXM7XG4gIH07XG5cbiAgYWRkUmVjb3JkID0gKHJlY29yZDogaVJlY29yZCkgPT4ge1xuICAgIGlmICh0aGlzLnJlY29yZHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZWNvcmRzID0gW3JlY29yZCwgLi4udGhpcy5yZWNvcmRzXTtcbiAgICAgIGlmICh0aGlzLnJlY29yZHMubGVuZ3RoID4gMTApIHtcbiAgICAgICAgdGhpcy5yZWNvcmRzLmxlbmd0aCA9IDEwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFJlY29yZHMoW3JlY29yZF0pO1xuICAgIH1cbiAgfTtcblxuICBnZXRSZWNvcmRzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnJlY29yZHM7XG4gIH07XG5cbiAgc2V0UmVjb3JkcyA9IChhcnJSZWNvcmRzOiBpUmVjb3JkW10pID0+IHtcbiAgICB0aGlzLnJlY29yZHMgPSBhcnJSZWNvcmRzO1xuICB9O1xuXG4gIGdldE51bUV4YW1wbGVzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm51bUV4YW1wbGVzO1xuICB9O1xuXG4gIHNldE51bUV4YW1wbGVzID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5udW1FeGFtcGxlcyA9IG51bTtcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuL0dhbWVEYXRhJztcbmltcG9ydCBpRXhhbXBsZSBmcm9tICcuL2lFeGFtcGxlJztcbmltcG9ydCBpT2JqRm9yTFMgZnJvbSAnLi9pT2JqRm9yTFMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlR2FtZURhdGEge1xuICBzYXZlVG9MUyhnYW1lRGF0YTogR2FtZURhdGEsIGV4YW1wbGU6IGlFeGFtcGxlIHwgbnVsbCkge1xuICAgIGNvbnN0IGRhdGFPYmo6IGlPYmpGb3JMUyA9IHtcbiAgICAgIGV4YW1wbGVzOiBnYW1lRGF0YS5nZXRFeGFtcGxlcygpLFxuICAgICAgZ2FtZVRpbWU6IGdhbWVEYXRhLmdldEdhbWVUaW1lKCksXG4gICAgICBtaXN0YWtlczogZ2FtZURhdGEuZ2V0TWlzdGFrZXMoKSxcbiAgICAgIG51bUV4YW1wbGVzOiBnYW1lRGF0YS5nZXROdW1FeGFtcGxlcygpLFxuICAgICAgbnVtTWlzdGFrZXM6IGdhbWVEYXRhLmdldE51bU1pc3Rha2VzKCksXG4gICAgICBvcGVyYXRpb246IGdhbWVEYXRhLmdldE9wZXJhdGlvbigpLFxuICAgICAgc2NvcmU6IGdhbWVEYXRhLmdldFNjb3JlKCksXG4gICAgICByZWNvcmRzOiBnYW1lRGF0YS5nZXRSZWNvcmRzKCksXG4gICAgfTtcbiAgICBpZiAoZXhhbXBsZSAhPT0gbnVsbCAmJiAhZ2FtZURhdGEuZ2V0RXhhbXBsZXMoKS5pbmNsdWRlcyhleGFtcGxlKSkge1xuICAgICAgZGF0YU9iai5leGFtcGxlcy5wdXNoKGV4YW1wbGUpO1xuICAgIH1cbiAgICBjb25zdCBzdHJUb1NhdmUgPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZURhdGEnLCBzdHJUb1NhdmUpO1xuICB9XG5cbiAgbG9hZEZyb21MUyA9ICgpID0+IHtcbiAgICBjb25zdCBzdHJGcm9tTFMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZURhdGEnKTtcbiAgICByZXR1cm4gc3RyRnJvbUxTO1xuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb0Jsb2NrIHtcbiAgaW5mb0Jsb2NrOiBIVE1MRGl2RWxlbWVudDtcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5nYW1lRGF0YSA9IGRhdGE7XG4gICAgdGhpcy5pbmZvQmxvY2sgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy5nYW1lRGF0YS5nZXRWaWV3R2FtZVBhZ2UoKT8uaW5mb0Jsb2NrO1xuICB9XG5cbiAgc2hvd1JpZ2h0QW5zd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQktC10YDQvdC+ISc7XG4gICAgdGhpcy5pbmZvQmxvY2suY2xhc3NMaXN0LmFkZCgnZ2FtZS1pbmZvX19jb3JyZWN0Jyk7XG4gIH07XG5cbiAgc2hvd1dyb25nQW5zd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQndC10L/RgNCw0LLQuNC70YzQvdC+LiDQv9C+0L/RgNC+0LHRg9C5INC10YnQtSDRgNCw0LcuJztcbiAgICB0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuYWRkKCdnYW1lLWluZm9fX3dyb25nJyk7XG4gIH07XG5cbiAgdW5zdHlsZUluZm9CbG9jayA9ICgpID0+IHtcbiAgICBpZih0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWUtaW5mb19fY29ycmVjdCcpKSB7XG4gICAgICB0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLWluZm9fX2NvcnJlY3QnKVxuICAgIH1cbiAgICBpZih0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWUtaW5mb19fd3JvbmcnKSkge1xuICAgICAgdGhpcy5pbmZvQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1pbmZvX193cm9uZycpXG4gICAgfVxuICB9XG5cbiAgc2hvd0luc3RydWN0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMudW5zdHlsZUluZm9CbG9jaygpO1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQktCy0LXQtNC4INGH0LjRgdC70L4g0Lgg0L3QsNC20LzQuCDCq+Kck8K7Lic7XG4gIH07XG5cbiAgc2hvd1N0YXRpc3RpY3MgPSAoKSA9PiB7XG4gICAgdGhpcy51bnN0eWxlSW5mb0Jsb2NrKCk7XG4gICAgY29uc3QgZXhhbXBsZXNOdW0gPSB0aGlzLmdhbWVEYXRhLmdldEV4YW1wbGVzKCkubGVuZ3RoO1xuICAgIGNvbnN0IGkgPSBleGFtcGxlc051bSAlIDEwMDtcbiAgICBjb25zdCBleGFtcGxlc1dvcmQgPVxuICAgICAgaSAlIDEwID09PSAxICYmIChpIDwgMTAgfHwgaSA+IDIwKSAmJiBpICE9PSAxMVxuICAgICAgICA/ICfQv9GA0LjQvNC10YAnXG4gICAgICAgIDogaSAlIDEwIDwgNSAmJiBpICUgMTAgPiAwICYmIChpIDwgMTAgfHwgaSA+IDIwKVxuICAgICAgICAgID8gJ9C/0YDQuNC80LXRgNCwJ1xuICAgICAgICAgIDogJ9C/0YDQuNC80LXRgNC+0LInO1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVySFRNTCA9IGDQntGB0YLQsNC70L7RgdGMINGA0LXRiNC40YLRjCA8YnIvPjxzcGFuIGNsYXNzPVwiZ2FtZV9fc3RhdGlzdGljc1wiPiR7ZXhhbXBsZXNOdW19PC9zcGFuPiAke2V4YW1wbGVzV29yZH0uYDtcbiAgfTtcblxuICBzaG93RW5kR2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmluZm9CbG9jay5pbm5lclRleHQgPSAn0JLRgdC1INC/0YDQuNC80LXRgNGLINGA0LXRiNC10L3Riy4nO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdGb290ZXIge1xyXG4gIGZvb3RlcjogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmZvb3RlciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdmb290ZXInLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3RlciddLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdmb290ZXJfX3dyYXBwZXInXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29weXJpZ2h0ID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgIGNsYXNzZXM6IFsnZm9vdGVyX19ibG9jayddLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHRUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2stdGl0bGUnXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICfCqSwg0LTQuNC30LDQudC9OiAnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHRMaW5rID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2EnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxyXG4gICAgICBhdHRyaWI6IFtcclxuICAgICAgICB7IG5hbWU6ICdocmVmJywgdmFsdWU6ICdodHRwczovL2dpdGh1Yi5jb20vYS12LWdvcicgfSxcclxuICAgICAgICB7IG5hbWU6ICd0YXJnZXQnLCB2YWx1ZTogJ19ibGFuaycgfSxcclxuICAgICAgXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICfQkC7Qk9C+0YDQsdC10L3QutC+JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeWVhciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2snLCAnZm9vdGVyX195ZWFyJ10sXHJcbiAgICAgIHRleHRDb250ZW50OiAnMjAyNCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRlc2lnbiA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2snLCAnZm9vdGVyX19kZXNpZ24nXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGVzaWduVGl0bGUgPSByZXR1cm5FbGVtZW50KHtcclxuICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgY2xhc3NlczogWydmb290ZXJfX2Jsb2NrLXRpdGxlJ10sXHJcbiAgICAgIHRleHRDb250ZW50OiAn0JTQuNC30LDQudC9OiAnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkZXNpZ25MaW5rID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2EnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxyXG4gICAgICBhdHRyaWI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnaHJlZicsXHJcbiAgICAgICAgICB2YWx1ZTpcclxuICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDg0NDkzNjY4NzY5OTIzMjg5L2VkdWNhdGlvbmFsLWtpZHMtZ2FtZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG5hbWU6ICd0YXJnZXQnLCB2YWx1ZTogJ19ibGFuaycgfSxcclxuICAgICAgXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICdOLlBhbmR5YScsXHJcbiAgICB9KTtcclxuICAgIGNvcHlyaWdodC5hcHBlbmQoY29weXJpZ2h0VGl0bGUsIGNvcHlyaWdodExpbmspO1xyXG4gICAgZGVzaWduLmFwcGVuZChkZXNpZ25UaXRsZSwgZGVzaWduTGluayk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZChjb3B5cmlnaHQsIHllYXIsIGRlc2lnbik7XHJcbiAgICB0aGlzLmZvb3Rlci5hcHBlbmQod3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5mb290ZXI7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3SGVscCBmcm9tICcuL1ZpZXdIZWxwJztcbmltcG9ydCBWaWV3TmF2aWdhdGlvbiBmcm9tICcuL1ZpZXdOYXZpZ2F0aW9uJztcbmltcG9ydCBWaWV3UGFnZSBmcm9tICcuL1ZpZXdQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0dhbWVQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBhbnN3ZXJGaWVsZDogSFRNTERpdkVsZW1lbnQ7XG4gIGV4YW1wbGU6IEhUTUxEaXZFbGVtZW50O1xuICBoZWxwQ2xvc2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBpbmZvQmxvY2s6IEhUTUxEaXZFbGVtZW50O1xuICBrZXlzV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG4gIHNjb3JlVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuICB0aXRsZTogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZ2FtZURhdGE6IEdhbWVEYXRhKSB7XG4gICAgc3VwZXIoJ2dhbWVQYWdlJywgZ2FtZURhdGEpO1xuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAnaGVhZGVyX193cmFwcGVyJywgJ2dhbWVfX2hlYWRlci13cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBWaWV3TmF2aWdhdGlvbih0cnVlKTtcbiAgICB0aGlzLm5hdkhvbWUgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhvbWVCdXR0b24oKTtcbiAgICB0aGlzLm5hdkhlbHAgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhlbHBCdXR0b24oKTtcbiAgICBjb25zdCBzY29yZVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3Njb3JlX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3Qgc2NvcmVUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaDInLFxuICAgICAgY2xhc3NlczogWydzY29yZV9fdGl0bGUnXSxcbiAgICAgIHRleHRDb250ZW50OiAn0KHRh9C10YI6JyxcbiAgICB9KTtcbiAgICB0aGlzLnNjb3JlVmFsdWUgPSA8SFRNTFBhcmFncmFwaEVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdwJyxcbiAgICAgIGNsYXNzZXM6IFsnc2NvcmVfX3ZhbHVlJ10sXG4gICAgICB0ZXh0Q29udGVudDogJzAnLFxuICAgIH0pO1xuICAgIHRoaXMudGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gxJyxcbiAgICAgIGNsYXNzZXM6IFsndGl0bGUnXSxcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdnYW1lX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgdGhpcy5pbmZvQmxvY2sgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydnYW1lX19pbmZvJywgXCJnYW1lLWluZm9cIl0sXG4gICAgfSk7XG4gICAgY29uc3QgZXhhbXBsZVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2dhbWVfX2V4YW1wbGUtd3JhcHBlcicsICdleGFtcGxlX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgdGhpcy5leGFtcGxlID0gPEhUTUxEaXZFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZXhhbXBsZV9fdGV4dCddLFxuICAgIH0pO1xuICAgIHRoaXMuYW5zd2VyRmllbGQgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydleGFtcGxlX19pbnB1dCddLFxuICAgIH0pO1xuICAgIGNvbnN0IGtleXNUZXh0c0FyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAga2V5c1RleHRzQXJyLnB1c2goYCR7aX1gKTtcbiAgICB9XG4gICAga2V5c1RleHRzQXJyLnB1c2goJ8OXJywgJzAnLCAn4pyTJyk7XG4gICAgdGhpcy5rZXlzV3JhcHBlciA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2tleXNfX3dyYXBwZXInXSxcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNUZXh0c0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2xhc3Nlc0FyciA9IFsnYnV0dG9uJywgJ2tleXNfX2J1dHRvbiddO1xuICAgICAgaWYgKGtleXNUZXh0c0FycltpXSA9PT0gJ8OXJykge1xuICAgICAgICBjbGFzc2VzQXJyLnB1c2goJ2tleXNfX2NhbmNlbCcpO1xuICAgICAgfVxuICAgICAgaWYgKGtleXNUZXh0c0FycltpXSA9PT0gJ+KckycpIHtcbiAgICAgICAgY2xhc3Nlc0Fyci5wdXNoKCdrZXlzX19zdWJtaXQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleUJ1dHRvbiA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzQXJyLFxuICAgICAgICBhdHRyaWI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB2YWx1ZToga2V5c1RleHRzQXJyW2ldLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRleHRDb250ZW50OiBrZXlzVGV4dHNBcnJbaV0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMua2V5c1dyYXBwZXIuYXBwZW5kKGtleUJ1dHRvbik7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUaXRsZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy52aWV3SGVscCA9IG5ldyBWaWV3SGVscChbXG4gICAgICAn0JzQsNC60YHQuNC80LDQu9GM0L3QviDQstC+0LfQvNC+0LbQvdC+0LUg0YfQuNGB0LvQviDQtNC70Y8g0LLQstC+0LTQsCDigJQgwqsxMDDCuy4g0J/QvtGB0LvQtSDQstCy0L7QtNCwINGH0LjRgdC70LAg0YHQu9C10LTRg9C10YIg0L/QvtC00YLQstC10YDQtNC40YLRjCDRgdCy0L7QuSDQvtGC0LLQtdGCICjQvdCw0LbQsNGC0LjQtdC8INC90LAg0LrQvdC+0L/QutGDIMKr4pyTwrsg0LjQu9C4IMKrRW50ZXLCuyDQvdCwINC60LvQsNCy0LjQsNGC0YPRgNC1KS4nLFxuICAgICAgJ9Cf0YDQuCDQvtGI0LjQsdC60LUg0LzQvtC20L3QviDRgdGC0LXRgNC10YLRjCDQstCy0LXQtNC10L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSAo0L3QsNC20LDRgtC40LXQvCDQvdCwINC60L3QvtC/0LrRgyDCq8OXwrsg0LjQu9C4IMKrRGVsZXRlwrssIMKrQmFja3NwYWNlwrssIMKrRXNjwrsg0L3QsCDQutC70LDQstC40LDRgtGD0YDQtSkuJyxcbiAgICAgICfQmNCz0YDQsCDRgdGH0LjRgtCw0LnQtdGC0YHRjyDQv9GA0L7QudC00LXQvdC90L7QuSDQv9C+0YHQu9C1INGA0LXRiNC10L3QuNGPINCy0YHQtdGFINC/0YDQuNC80LXRgNC+0LIgKNGA0LXQt9GD0LvRjNGC0LDRgiDQt9Cw0L3QvtGB0LjRgtGB0Y8g0LIg0LrQvdC40LPRgyDRgNC10LrQvtGA0LTQvtCyLCDQv9C+0YHQvNC+0YLRgNC10YLRjCDQutC+0YLQvtGA0YPRjiDQvNC+0LbQvdC+INC90LDQttCw0LIgwqvQoNC10LrQvtGA0LTRi8K7INC90LAg0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbRiyDQuNCz0YDRiykuINCV0YHQu9C4INC/0YDQtdGA0LLQsNGC0Ywg0LjQs9GA0YMg0L3QtSDRgNC10YjQuNCyINCy0YHQtSDQv9GA0LjQvNC10YDRiyAo0LfQsNC60YDRi9GC0Ywg0LLQutC70LDQtNC60YMg0LHRgNCw0YPQt9C10YDQsCDQuNC70Lgg0L3QsNC20LDRgtGMINC90LAg0LTQvtC80LjQuiDQsiDQvNC10L3RjiksINGA0LXQt9GD0LvRjNGC0LDRgiDQvdC1INCx0YPQtNC10YIg0YHQvtGF0YDQsNC90LXQvSwg0L3QviDQuNCz0YDQsCDQvdC1INGD0LTQsNC70LjRgtGB0Y8uINCY0LPRgNGDINC80L7QttC90L4g0LfQsNCy0LXRgNGI0LjRgtGMINCyINCx0YPQtNGD0YnQtdC8LCDQstGL0LHRgNCw0LIgwqvQn9GA0L7QtNC+0LvQttC40YLRjCDQuNCz0YDRg8K7INC90LAg0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbQtS4nLFxuICAgIF0pO1xuICAgIHRoaXMuaGVscENsb3NlQnV0dG9uID0gdGhpcy52aWV3SGVscC5yZXR1cm5DbG9zZUJ1dHRvbigpO1xuICAgIGNvbnN0IHZpZXdIZWxwQmxvY2sgPSB0aGlzLnZpZXdIZWxwLnJldHVybkJsb2NrKCk7XG4gICAgc2NvcmVXcmFwcGVyLmFwcGVuZChzY29yZVRpdGxlLCB0aGlzLnNjb3JlVmFsdWUpO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKHRoaXMudGl0bGUsIG5hdmlnYXRpb24ucmV0dXJuRWxlbWVudCgpLCBzY29yZVdyYXBwZXIpO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZChoZWFkZXJXcmFwcGVyKTtcbiAgICBleGFtcGxlV3JhcHBlci5hcHBlbmQodGhpcy5leGFtcGxlLCB0aGlzLmFuc3dlckZpZWxkKTtcbiAgICBnYW1lV3JhcHBlci5hcHBlbmQodGhpcy5pbmZvQmxvY2ssIGV4YW1wbGVXcmFwcGVyLCB0aGlzLmtleXNXcmFwcGVyKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kKHZpZXdIZWxwQmxvY2ssIGdhbWVXcmFwcGVyKTtcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuc2NvcmVWYWx1ZS50ZXh0Q29udGVudCA9IFN0cmluZyh0aGlzLmdhbWVEYXRhLmdldFNjb3JlKCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0hlbHAge1xuICB2aWV3SGVscEJsb2NrOiBIVE1MRWxlbWVudDtcbiAgaGVscENsb3NlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb246IHN0cmluZ1tdKSB7XG4gICAgdGhpcy52aWV3SGVscEJsb2NrID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydoZWxwX19ibG9jaycsICdpbmZvcm1hdGlvbicsICdpbmZvcm1hdGlvbl91bmFjdGl2ZSddLFxuICAgIH0pO1xuICAgIGNvbnN0IHdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAnaGVscF9fd3JhcHBlciddLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdoMicsXG4gICAgICBjbGFzc2VzOiBbJ3RpdGxlJywgJ2hlbHBfX3RpdGxlJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ9Ca0LDQuiDQuNCz0YDQsNGC0YwnLFxuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kKHRpdGxlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc2NyaXB0aW9uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwYXJhZ3JhcGggPSByZXR1cm5FbGVtZW50KHtcbiAgICAgICAgdGFnOiAncCcsXG4gICAgICAgIGNsYXNzZXM6IFsnaGVscF9fcGFyYWdyYXBoJ10sXG4gICAgICAgIHRleHRDb250ZW50OiBkZXNjcmlwdGlvbltpXSxcbiAgICAgIH0pO1xuICAgICAgd3JhcHBlci5hcHBlbmQocGFyYWdyYXBoKTtcbiAgICB9XG5cbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdoZWxwX19jbG9zZS1idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0JfQsNC60YDRi9GC0YwnLFxuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kKHRoaXMuaGVscENsb3NlQnV0dG9uKTtcbiAgICB0aGlzLnZpZXdIZWxwQmxvY2suYXBwZW5kKHdyYXBwZXIpO1xuICB9XG5cbiAgaGlkZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2luZm9ybWF0aW9uX3VuYWN0aXZlJykpIHtcbiAgICAgIHRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbl91bmFjdGl2ZScpO1xuICAgIH1cbiAgfTtcblxuICBzaG93ID0gKCkgPT4ge1xuICAgIHRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvcm1hdGlvbl91bmFjdGl2ZScpO1xuICB9O1xuXG4gIHJldHVybkJsb2NrID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdIZWxwQmxvY2s7XG4gIH07XG5cbiAgcmV0dXJuQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaGVscENsb3NlQnV0dG9uO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld05hdmlnYXRpb24ge1xuICBuYXY6IEhUTUxFbGVtZW50O1xuICBuYXZIb21lOiBIVE1MRWxlbWVudDtcbiAgbmF2SGVscD86IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGhlbHBCdXR0b246IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5hdiA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnbmF2JyxcbiAgICAgIGNsYXNzZXM6IFsnbWVudSddLFxuICAgIH0pO1xuICAgIGNvbnN0IG5hdlVsID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICd1bCcsXG4gICAgICBjbGFzc2VzOiBbJ21lbnVfX3VsJ10sXG4gICAgfSk7XG4gICAgdGhpcy5uYXZIb21lID0gPEhUTUxMSUVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdsaScsXG4gICAgICBjbGFzc2VzOiBbJ21lbnVfX2l0ZW0nLCAnbWVudV9faG9tZSddLFxuICAgIH0pO1xuXG4gICAgbmF2VWwuYXBwZW5kKHRoaXMubmF2SG9tZSk7XG4gICAgaWYgKGhlbHBCdXR0b24gPT09IHRydWUpIHtcbiAgICAgIHRoaXMubmF2SGVscCA9IDxIVE1MTElFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdsaScsXG4gICAgICAgIGNsYXNzZXM6IFsnbWVudV9faXRlbScsICdtZW51X19pbnN0cnVjdGlvbiddLFxuICAgICAgfSk7XG4gICAgICBuYXZVbC5hcHBlbmQodGhpcy5uYXZIZWxwKTtcbiAgICB9XG4gICAgdGhpcy5uYXYuYXBwZW5kKG5hdlVsKTtcbiAgfVxuXG4gIHJldHVybkVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2O1xuICB9XG5cbiAgcmV0dXJuSG9tZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZIb21lO1xuICB9XG5cbiAgcmV0dXJuSGVscEJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZIZWxwO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3Rm9vdGVyIGZyb20gJy4vVmlld0Zvb3Rlcic7XG5pbXBvcnQgVmlld0hlbHAgZnJvbSAnLi9WaWV3SGVscCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFZpZXdQYWdlIHtcbiAgYm9keTogSFRNTEJvZHlFbGVtZW50O1xuICBidXR0b25Mb2FkR2FtZT86IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25SZWNvcmRzPzogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ1dHRvblNldEZpeD86IEhUTUxCdXR0b25FbGVtZW50O1xuICBmb290ZXI6IEhUTUxFbGVtZW50O1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIGhlYWRlcjogSFRNTEVsZW1lbnQ7XG4gIG1haW46IEhUTUxFbGVtZW50O1xuICBuYXZIZWxwPzogSFRNTExJRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgbmF2SG9tZT86IEhUTUxMSUVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIHBhZ2VOYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZVRpdGxlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHZpZXdIZWxwPzogVmlld0hlbHA7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuYm9keSA9IDxIVE1MQm9keUVsZW1lbnQ+ZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmhlYWRlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaGVhZGVyJyxcbiAgICAgIGNsYXNzZXM6IFsnaGVhZGVyJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1haW4gPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ21haW4nLFxuICAgICAgY2xhc3NlczogWydtYWluJ10sXG4gICAgfSk7XG5cbiAgICBjb25zdCB2aWV3Rm9vdGVyID0gbmV3IFZpZXdGb290ZXIoKTtcblxuICAgIHRoaXMuZm9vdGVyID0gdmlld0Zvb3Rlci5yZXR1cm4oKTtcbiAgICB0aGlzLnBhZ2VOYW1lID0gbmFtZTtcbiAgICB0aGlzLmdhbWVEYXRhID0gZGF0YTtcbiAgfVxuICBzaG93ID0gKCkgPT4ge1xuICAgIHRoaXMuYm9keS5hcHBlbmQodGhpcy5oZWFkZXIsIHRoaXMubWFpbiwgdGhpcy5mb290ZXIpO1xuXG4gICAgaWYgKHRoaXMucGFnZU5hbWUgPT09ICdzdGFydFBhZ2UnKSB7XG4gICAgICBjb25zdCBidXR0b25Mb2FkR2FtZSA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJ1dHRvbkxvYWRHYW1lO1xuICAgICAgY29uc3QgYnV0dG9uUmVjb3JkcyA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJ1dHRvblJlY29yZHM7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZ2V0RXhhbXBsZXMoKSA9PT0gbnVsbCB8fFxuICAgICAgICB0aGlzLmdhbWVEYXRhLmdldEV4YW1wbGVzKCkubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgYnV0dG9uTG9hZEdhbWUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uTG9hZEdhbWUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdhbWVEYXRhLmdldFJlY29yZHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGJ1dHRvblJlY29yZHMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvblJlY29yZHMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2VOYW1lID09PSAnc2V0dGluZ3NQYWdlJykge1xuICAgICAgY29uc3QgZml4QnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuYnV0dG9uU2V0Rml4O1xuICAgICAgaWYgKHRoaXMuZ2FtZURhdGEuZ2V0TWlzdGFrZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZml4QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpeEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2VOYW1lID09PSAnZ2FtZVBhZ2UnKSB7XG4gICAgICBjb25zdCB1cGRhdGVUaXRsZSA9IHRoaXMuZ2FtZURhdGEuZ2V0Vmlld0dhbWVQYWdlKCk/LnVwZGF0ZVRpdGxlO1xuICAgICAgaWYgKHVwZGF0ZVRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXBkYXRlVGl0bGUodGhpcy5nYW1lRGF0YS5nZXRPcGVyYXRpb24oKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdHYW1lUGFnZSgpPy51cGRhdGVTY29yZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2VOYW1lID09PSAncmVjb3Jkc1BhZ2UnKSB7XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdSZWNvcmRzUGFnZSgpPy51cGRhdGVSZWNvcmRzKCk7XG4gICAgfVxuICB9O1xuICBoaWRlKCkge1xuICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcbmltcG9ydCBpUmVjb3JkIGZyb20gJy4uL21vZGVsL2lSZWNvcmQnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3TmF2aWdhdGlvbiBmcm9tICcuL1ZpZXdOYXZpZ2F0aW9uJztcbmltcG9ydCBWaWV3UGFnZSBmcm9tICcuL1ZpZXdQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1JlY29yZHNQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBhcnJSZWNvcmRzOiBpUmVjb3JkW107XG4gIHJlY29yZHNXcmFwcGVyOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihnYW1lRGF0YTogR2FtZURhdGEpIHtcbiAgICBzdXBlcigncmVjb3Jkc1BhZ2UnLCBnYW1lRGF0YSk7XG4gICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdoZWFkZXJfX3dyYXBwZXInXSxcbiAgICB9KTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmV3IFZpZXdOYXZpZ2F0aW9uKGZhbHNlKTtcbiAgICB0aGlzLm5hdkhvbWUgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhvbWVCdXR0b24oKTtcbiAgICBjb25zdCB0aXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaDEnLFxuICAgICAgY2xhc3NlczogWyd0aXRsZSddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQoNC10LrQvtGA0LTRiycsXG4gICAgfSk7XG4gICAgdGhpcy5yZWNvcmRzV3JhcHBlciA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAncmVjb3Jkc19fd3JhcHBlciddLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJSZWNvcmRzID0gZ2FtZURhdGEuZ2V0UmVjb3JkcygpO1xuXG4gICAgdGhpcy5tYWluLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX21haW4nKTtcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZCh0aXRsZSwgbmF2aWdhdGlvbi5yZXR1cm5FbGVtZW50KCkpO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZChoZWFkZXJXcmFwcGVyKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kKHRoaXMucmVjb3Jkc1dyYXBwZXIpO1xuICB9XG5cbiAgdXBkYXRlUmVjb3JkcyA9ICgpID0+IHtcbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5nYW1lRGF0YS5nZXRSZWNvcmRzKCk7XG4gICAgY29uc3QgdGFibGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3RhYmxlJywgJ3JlY29yZHMnXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJldHVyblRleHRFbGVtZW50ID0gKHRleHQ6IHN0cmluZykgPT5cbiAgICAgIHJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ3JlY29yZHNfX3RleHQnXSxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRleHQsXG4gICAgICB9KTtcblxuICAgIHJlY29yZHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjb3JkRWxlbWVudCA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ3JlY29yZHNfX3JlY29yZCddLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXR1cm5Fc3RlZW1UZXh0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzb2x2ZUV4YW1wbGVUaW1lID0gTWF0aC5jZWlsKFxuICAgICAgICAgIGVsZW1lbnQudGltZSAvIGVsZW1lbnQubnVtRXhhbXBsZXMgLyAxMDAwXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzb2x2ZUV4YW1wbGVUaW1lIDw9IDQgJiZcbiAgICAgICAgICAoZWxlbWVudC5udW1NaXN0YWtlcyA9PT0gMCB8fFxuICAgICAgICAgICAgZWxlbWVudC5udW1NaXN0YWtlcyAvIGVsZW1lbnQubnVtRXhhbXBsZXMgPD0gMC4xKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gJ9Ce0YLQu9C40YfQvdC+ISc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc29sdmVFeGFtcGxlVGltZSA8PSA1LjUgJiZcbiAgICAgICAgICAoZWxlbWVudC5udW1NaXN0YWtlcyA9PT0gMCB8fFxuICAgICAgICAgICAgZWxlbWVudC5udW1NaXN0YWtlcyAvIGVsZW1lbnQubnVtRXhhbXBsZXMgPD0gMC41KVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gJ9Cl0L7RgNC+0YjQvi4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAn0J3QtdC/0LvQvtGF0L4uJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpbWVTdHlsZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHtcbiAgICAgICAgdGltZVN0eWxlOiAnc2hvcnQnLFxuICAgICAgICBkYXRlU3R5bGU6ICdsb25nJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0ZSA9IHJldHVyblRleHRFbGVtZW50KHRpbWVTdHlsZS5mb3JtYXQobmV3IERhdGUoZWxlbWVudC5kYXRlKSkpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX19kYXRlJyk7XG4gICAgICBjb25zdCBvcGVyYXRpb24gPSByZXR1cm5UZXh0RWxlbWVudChlbGVtZW50Lm9wZXJhdGlvbik7XG4gICAgICBvcGVyYXRpb24uY2xhc3NMaXN0LmFkZCgncmVjb3Jkc19fb3BlcmF0aW9uJyk7XG4gICAgICBjb25zdCBudW1FeGFtcGxlcyA9IHJldHVyblRleHRFbGVtZW50KFxuICAgICAgICBg0J/RgNC40LzQtdGA0L7QsjogJHtTdHJpbmcoZWxlbWVudC5udW1FeGFtcGxlcyl9YFxuICAgICAgKTtcbiAgICAgIG51bUV4YW1wbGVzLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX251bS1leGFtcGxlcycpO1xuICAgICAgY29uc3QgbnVtTWlzdGFrZXMgPSByZXR1cm5UZXh0RWxlbWVudChcbiAgICAgICAgYNCe0YjQuNCx0L7QujogJHtTdHJpbmcoZWxlbWVudC5udW1NaXN0YWtlcyl9YFxuICAgICAgKTtcbiAgICAgIG51bU1pc3Rha2VzLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX251bS1taXN0YWtlcycpO1xuICAgICAgY29uc3QgdGltZSA9IHJldHVyblRleHRFbGVtZW50KFxuICAgICAgICBg0JLRgNC10LzRjzogJHtTdHJpbmcoTWF0aC5jZWlsKGVsZW1lbnQudGltZSAvIDEwMDApKX0g0YHQtdC6LmBcbiAgICAgICk7XG4gICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX3RpbWUnKTtcbiAgICAgIGNvbnN0IHNjb3JlID0gcmV0dXJuVGV4dEVsZW1lbnQoYNCh0YfRkdGCOiAke1N0cmluZyhlbGVtZW50LnNjb3JlKX1gKTtcbiAgICAgIHNjb3JlLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX3Njb3JlJyk7XG4gICAgICBjb25zdCBlc3RlZW0gPSByZXR1cm5UZXh0RWxlbWVudChg0J7RhtC10L3QutCwOiAke3JldHVybkVzdGVlbVRleHQoKX1gKTtcbiAgICAgIGlmIChlc3RlZW0udGV4dENvbnRlbnQgPT09ICfQntGG0LXQvdC60LA6INCe0YLQu9C40YfQvdC+IScpIHtcbiAgICAgICAgZXN0ZWVtLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX3BlcmZlY3QnKTtcbiAgICAgIH0gZWxzZSBpZiAoZXN0ZWVtLnRleHRDb250ZW50ID09PSAn0J7RhtC10L3QutCwOiDQpdC+0YDQvtGI0L4uJykge1xuICAgICAgICBlc3RlZW0uY2xhc3NMaXN0LmFkZCgncmVjb3Jkc19fZ29vZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXN0ZWVtLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX25vdC1iYWQnKTtcbiAgICAgIH1cbiAgICAgIHJlY29yZEVsZW1lbnQuYXBwZW5kKFxuICAgICAgICBkYXRlLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG51bUV4YW1wbGVzLFxuICAgICAgICBudW1NaXN0YWtlcyxcbiAgICAgICAgdGltZSxcbiAgICAgICAgc2NvcmUsXG4gICAgICAgIGVzdGVlbVxuICAgICAgKTtcbiAgICAgIHRhYmxlLmFwcGVuZChyZWNvcmRFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLnJlY29yZHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMucmVjb3Jkc1dyYXBwZXIuYXBwZW5kKHRhYmxlKTtcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL3JldHVybkVsZW1lbnQnO1xuaW1wb3J0IFZpZXdIZWxwIGZyb20gJy4vVmlld0hlbHAnO1xuaW1wb3J0IFZpZXdOYXZpZ2F0aW9uIGZyb20gJy4vVmlld05hdmlnYXRpb24nO1xuaW1wb3J0IFZpZXdQYWdlIGZyb20gJy4vVmlld1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2V0dGluZ3NQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBhZGRNYW55RXhhbXBsZXNCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBhZGRNb3N0RXhhbXBsZXNCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBhZGRPbmVFeGFtcGxlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYnV0dG9uU2V0TXVsdGlwbGU6IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25TZXRTdWJzdHI6IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25TZXRTdW06IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25XcmFwcGVyOiBIVE1MRGl2RWxlbWVudDtcbiAgZGVzY3JpcHRpb25OdW1FeGFtcGxlczogSFRNTERpdkVsZW1lbnQ7XG4gIGRlc2NyaXB0aW9uT3BlcmF0aW9uOiBIVE1MRGl2RWxlbWVudDtcbiAgaGVscENsb3NlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgaW5mb0Nsb3NlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlT25lRXhhbXBsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHNldE51bUV4cHJlc3Npb25zQnV0dG9uczogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIHNldHRpbmdzQXBwbHlCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZXR0aW5nc0Jsb2NrOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihnYW1lRGF0YTogR2FtZURhdGEpIHtcbiAgICBzdXBlcignc2V0dGluZ3NQYWdlJywgZ2FtZURhdGEpO1xuXG4gICAgY29uc3QgdGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gxJyxcbiAgICAgIGNsYXNzZXM6IFsndGl0bGUnXSxcbiAgICAgIHRleHRDb250ZW50OiAn0J3QvtCy0LDRjyDQuNCz0YDQsCcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXJXcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWyd3cmFwcGVyJywgJ2hlYWRlcl9fd3JhcHBlciddLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBWaWV3TmF2aWdhdGlvbih0cnVlKTtcblxuICAgIHRoaXMubmF2SG9tZSA9IDxIVE1MTElFbGVtZW50Pm5hdmlnYXRpb24ucmV0dXJuSG9tZUJ1dHRvbigpO1xuICAgIHRoaXMubmF2SGVscCA9IDxIVE1MTElFbGVtZW50Pm5hdmlnYXRpb24ucmV0dXJuSGVscEJ1dHRvbigpO1xuXG4gICAgdGhpcy5idXR0b25XcmFwcGVyID0gPEhUTUxEaXZFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uLXdyYXBwZXInXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYnV0dG9uU2V0U3VtID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJysg0KHQu9C+0LbQtdC90LjQtScsXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblNldFN1YnN0ciA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICctINCS0YvRh9C40YLQsNC90LjQtScsXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblNldE11bHRpcGxlID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ8OXINCj0LzQvdC+0LbQtdC90LjQtScsXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblNldEZpeCA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdidXR0b24tbWlzdGFrZXMnXSxcbiAgICAgIHRleHRDb250ZW50OiAnISDQntGI0LjQsdC60LgnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXR0aW5nc0Jsb2NrID0gPEhUTUxEaXZFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnc2V0dGluZ3MnLCAnaW5mb3JtYXRpb24nLCAnaW5mb3JtYXRpb25fdW5hY3RpdmUnXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldHRpbmdzV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnc2V0dGluZ3NfX3dyYXBwZXInXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldHRpbmdzRGVzY3JpcHRpb25zID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydzZXR0aW5nc19fZGVzY3JpcHQtbGlzdCcsICdkZXNjcmlwdC1saXN0J10sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbk9wZXJhdGlvbldyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX2Rlc2NyLXdyYXBwZXInXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRlcm1pbk9wZXJhdGlvbiA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZGVzY3JpcHQtbGlzdF9fdGVybSddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQlNC10LnRgdGC0LLQuNC1OiAnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5kZXNjcmlwdGlvbk9wZXJhdGlvbiA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX2Rlc2NyJ10sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbk51bUV4YW1wbGVzV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZGVzY3JpcHQtbGlzdF9fZGVzY3Itd3JhcHBlciddLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGVybWluTnVtRXhhbXBsZXMgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX3Rlcm0nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0JrQvtC70LjRh9C10YHRgtCy0L4g0L/RgNC40LzQtdGA0L7QsjonLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXROdW1FeHByZXNzaW9uc0J1dHRvbnMgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX2J1dHRvbnMtd3JhcCddLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdmVNb3N0RXhhbXBsZXNCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nLCAnZGVzY3JpcHQtbGlzdF9fYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJy0tLScsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbW92ZU1hbnlFeGFtcGxlc0J1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdkZXNjcmlwdC1saXN0X19idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnLS0nLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdmVPbmVFeGFtcGxlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ2Rlc2NyaXB0LWxpc3RfX2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICctJyxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkT25lRXhhbXBsZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdkZXNjcmlwdC1saXN0X19idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnKycsXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZE1hbnlFeGFtcGxlc0J1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdkZXNjcmlwdC1saXN0X19idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnKysnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRNb3N0RXhhbXBsZXNCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nLCAnZGVzY3JpcHQtbGlzdF9fYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJysrKycsXG4gICAgfSk7XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydkZXNjcmlwdC1saXN0X19kZXNjciddLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXR0aW5nc0FwcGx5QnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ3NldHRpbmdzX19hcHBseS1idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0J/RgNC40LzQtdC90LjRgtGMJyxcbiAgICB9KTtcbiAgICB0aGlzLmluZm9DbG9zZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdzZXR0aW5nc19fY2xvc2UtYnV0dG9uJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLnZpZXdIZWxwID0gbmV3IFZpZXdIZWxwKFtcbiAgICAgIGDQlNC70Y8g0LLRi9Cx0L7RgNCwINC80LDRgtC10LzQsNGC0LjRh9C10YHQutC+0Lkg0L7Qv9C10YDQsNGG0LjQuCAo0YHQu9C+0LbQtdC90LjQtSwg0LLRi9GH0LjRgtCw0L3QuNC1LCDRg9C80L3QvtC20LXQvdC40LUpINC90LDQttC80LjRgtC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0YPRjiDQutC90L7Qv9C60YMuYCxcbiAgICAgICfQldGB0LvQuCDQsNC60YLQuNCy0L3QsCDQutC90L7Qv9C60LAgwqshINCe0YjQuNCx0LrQuMK7LCDQv9C+INC90LDQttCw0YLQuNGOINC90LAg0L3QtdC1INC80L7QttC90L4g0L/RgNC40YHRgtGD0L/QuNGC0Ywg0Log0YDQsNCx0L7RgtC1INC90LDQtCDQvtGI0LjQsdC60LDQvNC4LCDQtNC+0L/Rg9GJ0LXQvdC90YvQvNC4INGA0LDQvdC10LUuJyxcbiAgICAgICfQkiDRgdC70LXQtNGD0Y7RidC10Lwg0L7QutC90LUg0LLRi9Cx0LXRgNC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9GA0LjQvNC10YDQvtCyINC00LvRjyDRgNC10YjQtdC90LjRjyAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gMjApLiDQmtC90L7Qv9C60LggwqstLS3CuywgwqstLcK7INC4IMKrLcK7INGD0LzQtdC90YzRiNCw0Y7RgiDRh9C40YHQu9C+INC90LAgNTAsIDEwINC4IDEg0YHQvtC+0YLQstC10YLRgdGC0LLQtdC90L3Qvi4g0JrQvdC+0L/QutC4INC/0YDQuNCx0LDQstC70LXQvdC40Y8g0LTQtdC50YHRgtCy0YPRjtGCINCw0L3QsNC70L7Qs9C40YfQvdC+INCyINGB0YLQvtGA0L7QvdGDINGD0LLQtdC70LjRh9C10L3QuNGPINGH0LjRgdC70LAuJyxcbiAgICAgICfQndCw0LbQsNGC0LjQtdC8INC90LAg0LrQvdC+0L/QutGDIMKr0J/RgNC40LzQtdC90LjRgtGMwrsg0L3QsNGH0L3QuNGC0LUg0LjQs9GA0YMuJyxcbiAgICBdKTtcbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbiA9IHRoaXMudmlld0hlbHAucmV0dXJuQ2xvc2VCdXR0b24oKTtcblxuICAgIGNvbnN0IHZpZXdIZWxwQmxvY2sgPSB0aGlzLnZpZXdIZWxwLnJldHVybkJsb2NrKCk7XG5cbiAgICB0aGlzLnNldE51bUV4cHJlc3Npb25zQnV0dG9ucy5hcHBlbmQoXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMsXG4gICAgICB0aGlzLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbixcbiAgICAgIHRoaXMucmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uLFxuICAgICAgdGhpcy5yZW1vdmVPbmVFeGFtcGxlQnV0dG9uLFxuICAgICAgdGhpcy5hZGRPbmVFeGFtcGxlQnV0dG9uLFxuICAgICAgdGhpcy5hZGRNYW55RXhhbXBsZXNCdXR0b24sXG4gICAgICB0aGlzLmFkZE1vc3RFeGFtcGxlc0J1dHRvblxuICAgICk7XG4gICAgZGVzY3JpcHRpb25OdW1FeGFtcGxlc1dyYXBwZXIuYXBwZW5kKFxuICAgICAgdGVybWluTnVtRXhhbXBsZXMsXG4gICAgICB0aGlzLnNldE51bUV4cHJlc3Npb25zQnV0dG9uc1xuICAgICk7XG4gICAgZGVzY3JpcHRpb25PcGVyYXRpb25XcmFwcGVyLmFwcGVuZChcbiAgICAgIHRlcm1pbk9wZXJhdGlvbixcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25PcGVyYXRpb25cbiAgICApO1xuICAgIHNldHRpbmdzRGVzY3JpcHRpb25zLmFwcGVuZChcbiAgICAgIGRlc2NyaXB0aW9uT3BlcmF0aW9uV3JhcHBlcixcbiAgICAgIGRlc2NyaXB0aW9uTnVtRXhhbXBsZXNXcmFwcGVyXG4gICAgKTtcbiAgICBzZXR0aW5nc1dyYXBwZXIuYXBwZW5kKFxuICAgICAgc2V0dGluZ3NEZXNjcmlwdGlvbnMsXG4gICAgICB0aGlzLnNldHRpbmdzQXBwbHlCdXR0b24sXG4gICAgICB0aGlzLmluZm9DbG9zZUJ1dHRvblxuICAgICk7XG4gICAgdGhpcy5zZXR0aW5nc0Jsb2NrLmFwcGVuZChzZXR0aW5nc1dyYXBwZXIpO1xuXG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmQodGl0bGUsIG5hdmlnYXRpb24ucmV0dXJuRWxlbWVudCgpKTtcbiAgICB0aGlzLmhlYWRlci5hcHBlbmQoaGVhZGVyV3JhcHBlcik7XG5cbiAgICB0aGlzLmJ1dHRvbldyYXBwZXIuYXBwZW5kKFxuICAgICAgdGhpcy5idXR0b25TZXRTdW0sXG4gICAgICB0aGlzLmJ1dHRvblNldFN1YnN0cixcbiAgICAgIHRoaXMuYnV0dG9uU2V0TXVsdGlwbGUsXG4gICAgICB0aGlzLmJ1dHRvblNldEZpeFxuICAgICk7XG4gICAgdGhpcy5tYWluLmFwcGVuZCh2aWV3SGVscEJsb2NrLCB0aGlzLmJ1dHRvbldyYXBwZXIsIHRoaXMuc2V0dGluZ3NCbG9jayk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL3JldHVybkVsZW1lbnQnO1xuaW1wb3J0IFZpZXdQYWdlIGZyb20gJy4vVmlld1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U3RhcnRQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBidXR0b25OZXdHYW1lOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihnYW1lRGF0YTogR2FtZURhdGEpIHtcbiAgICBzdXBlcignc3RhcnRQYWdlJywgZ2FtZURhdGEpO1xuICAgIHRoaXMuYnV0dG9uTmV3R2FtZSA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQndCw0YfQsNGC0Ywg0LjQs9GA0YMnLFxuICAgIH0pO1xuICAgIHRoaXMuYnV0dG9uTG9hZEdhbWUgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0J/RgNC+0LTQvtC70LbQuNGC0Ywg0LjQs9GA0YMnLFxuICAgIH0pO1xuICAgIHRoaXMuYnV0dG9uUmVjb3JkcyA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQoNC10LrQvtGA0LTRiycsXG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdidXR0b24td3JhcHBlciddLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnaGVhZGVyX190aXRsZS13cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gxJyxcbiAgICAgIGNsYXNzZXM6IFsndGl0bGUnLCAnaGVhZGVyX190aXRsZSddLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlU3RyaW5nID0gJ9Cu0L3Ri9C5INC80LDRgtC10LzQsNGC0LjQuic7XG4gICAgdGl0bGVTdHJpbmcuc3BsaXQoJycpLm1hcCgobGV0dGVyKSA9PiB7XG4gICAgICBpZiAoIWxldHRlci5tYXRjaCgvXFxzLykpIHtcbiAgICAgICAgY29uc3QgbGV0dGVyRWxlbWVudCA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIGNsYXNzZXM6IFsndGl0bGVfX2xldHRlciddLFxuICAgICAgICAgIHRleHRDb250ZW50OiBsZXR0ZXIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aXRsZS5hcHBlbmQobGV0dGVyRWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZS5hcHBlbmQobGV0dGVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRpdGxlV3JhcHBlci5hcHBlbmQodGl0bGUpO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZCh0aXRsZVdyYXBwZXIpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kKFxuICAgICAgdGhpcy5idXR0b25OZXdHYW1lLFxuICAgICAgdGhpcy5idXR0b25Mb2FkR2FtZSxcbiAgICAgIHRoaXMuYnV0dG9uUmVjb3Jkc1xuICAgICk7XG4gICAgdGhpcy5tYWluLmFwcGVuZChidXR0b25XcmFwcGVyKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIElFbGVtRGF0YSB7XG4gIHRhZzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nW107XG4gIGlkPzogc3RyaW5nO1xuICBhdHRyaWI/OiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9W107XG4gIHRleHRDb250ZW50Pzogc3RyaW5nO1xuICBzcmM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVybkVsZW1lbnQoZWxlbURhdGE6IElFbGVtRGF0YSk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbURhdGEudGFnKTtcbiAgaWYgKGVsZW1EYXRhLmNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1EYXRhLmNsYXNzZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGl0ZW0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtRGF0YS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC5pZCA9IGVsZW1EYXRhLmlkO1xuICB9XG4gIGlmIChlbGVtRGF0YS5hdHRyaWIgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1EYXRhLmF0dHJpYi5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShpLm5hbWUsIGkudmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtRGF0YS50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1EYXRhLnRleHRDb250ZW50O1xuICB9XG4gIGlmIChlbGVtRGF0YS50YWcgPT09ICdpbWcnICYmIGVsZW1EYXRhLnNyYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVsZW1EYXRhLnNyYyk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXNzZXRzL3RzL0FwcCc7XG5pbXBvcnQgR2FtZURhdGEgZnJvbSAnLi9hc3NldHMvdHMvbW9kZWwvR2FtZURhdGEnO1xuXG5jb25zdCBnYW1lRGF0YSA9IG5ldyBHYW1lRGF0YSgpO1xuY29uc3QgYXBwID0gbmV3IEFwcChnYW1lRGF0YSk7XG5hcHAubmV3KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=