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
            var examplesTexts = [];
            arrMistakes.forEach(function (item) {
                examplesTexts.push(item.example);
            });
            if (!examplesTexts.includes(example.example)) {
                arrMistakes.push(example);
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
                    if (_this.currentExample.score > 0) {
                        _this.currentExample.score -= 1;
                    }
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
            var lastNumExamples = _this.gameData.getRecords()[0] !== undefined ? _this.gameData.getRecords()[0].numExamples : 10;
            _this.descriptionNumExamples.textContent =
                numExamples >= lastNumExamples ? String(lastNumExamples) : String(numExamples);
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
/* harmony import */ var _examplesArrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examplesArrays */ "./src/assets/ts/model/examplesArrays.ts");
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
        this.shuffle = function () {
            var result = [];
            for (; _this.examplesArr.length > 0;) {
                var randomNum = Math.floor(Math.random() * _this.examplesArr.length);
                result.push(_this.examplesArr[randomNum]);
                _this.examplesArr = __spreadArray(__spreadArray([], _this.examplesArr.slice(0, randomNum), true), _this.examplesArr.slice(randomNum + 1, _this.examplesArr.length), true);
            }
            return result;
        };
        this.examplesArr =
            operation === '+'
                ? _examplesArrays__WEBPACK_IMPORTED_MODULE_0__.sumArray
                : operation === '-'
                    ? _examplesArrays__WEBPACK_IMPORTED_MODULE_0__.substrArray
                    : operation === '×'
                        ? _examplesArrays__WEBPACK_IMPORTED_MODULE_0__.multipleArr :
                        _examplesArrays__WEBPACK_IMPORTED_MODULE_0__.divideArray;
    }
    Examples.prototype.return = function () {
        return this.shuffle();
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

/***/ "./src/assets/ts/model/examplesArrays.ts":
/*!***********************************************!*\
  !*** ./src/assets/ts/model/examplesArrays.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   divideArray: () => (/* binding */ divideArray),
/* harmony export */   multipleArr: () => (/* binding */ multipleArr),
/* harmony export */   substrArray: () => (/* binding */ substrArray),
/* harmony export */   sumArray: () => (/* binding */ sumArray)
/* harmony export */ });
var sumArray = [
    {
        "example": "1 + 1",
        "answer": 2,
        "score": 2
    },
    {
        "example": "1 + 2",
        "answer": 3,
        "score": 3
    },
    {
        "example": "1 + 3",
        "answer": 4,
        "score": 3
    },
    {
        "example": "1 + 4",
        "answer": 5,
        "score": 3
    },
    {
        "example": "1 + 5",
        "answer": 6,
        "score": 3
    },
    {
        "example": "1 + 6",
        "answer": 7,
        "score": 3
    },
    {
        "example": "1 + 7",
        "answer": 8,
        "score": 3
    },
    {
        "example": "1 + 8",
        "answer": 9,
        "score": 3
    },
    {
        "example": "1 + 9",
        "answer": 10,
        "score": 3
    },
    {
        "example": "1 + 10",
        "answer": 11,
        "score": 2
    },
    {
        "example": "1 + 11",
        "answer": 12,
        "score": 3
    },
    {
        "example": "1 + 12",
        "answer": 13,
        "score": 4
    },
    {
        "example": "1 + 13",
        "answer": 14,
        "score": 4
    },
    {
        "example": "1 + 14",
        "answer": 15,
        "score": 4
    },
    {
        "example": "1 + 15",
        "answer": 16,
        "score": 4
    },
    {
        "example": "1 + 16",
        "answer": 17,
        "score": 4
    },
    {
        "example": "1 + 17",
        "answer": 18,
        "score": 4
    },
    {
        "example": "1 + 18",
        "answer": 19,
        "score": 4
    },
    {
        "example": "1 + 19",
        "answer": 20,
        "score": 4
    },
    {
        "example": "2 + 1",
        "answer": 3,
        "score": 3
    },
    {
        "example": "2 + 2",
        "answer": 4,
        "score": 4
    },
    {
        "example": "2 + 3",
        "answer": 5,
        "score": 4
    },
    {
        "example": "2 + 4",
        "answer": 6,
        "score": 4
    },
    {
        "example": "2 + 5",
        "answer": 7,
        "score": 4
    },
    {
        "example": "2 + 6",
        "answer": 8,
        "score": 4
    },
    {
        "example": "2 + 7",
        "answer": 9,
        "score": 4
    },
    {
        "example": "2 + 8",
        "answer": 10,
        "score": 4
    },
    {
        "example": "2 + 9",
        "answer": 11,
        "score": 4
    },
    {
        "example": "2 + 10",
        "answer": 12,
        "score": 3
    },
    {
        "example": "2 + 11",
        "answer": 13,
        "score": 4
    },
    {
        "example": "2 + 12",
        "answer": 14,
        "score": 5
    },
    {
        "example": "2 + 13",
        "answer": 15,
        "score": 5
    },
    {
        "example": "2 + 14",
        "answer": 16,
        "score": 5
    },
    {
        "example": "2 + 15",
        "answer": 17,
        "score": 5
    },
    {
        "example": "2 + 16",
        "answer": 18,
        "score": 5
    },
    {
        "example": "2 + 17",
        "answer": 19,
        "score": 5
    },
    {
        "example": "2 + 18",
        "answer": 20,
        "score": 5
    },
    {
        "example": "3 + 1",
        "answer": 4,
        "score": 3
    },
    {
        "example": "3 + 2",
        "answer": 5,
        "score": 4
    },
    {
        "example": "3 + 3",
        "answer": 6,
        "score": 4
    },
    {
        "example": "3 + 4",
        "answer": 7,
        "score": 4
    },
    {
        "example": "3 + 5",
        "answer": 8,
        "score": 4
    },
    {
        "example": "3 + 6",
        "answer": 9,
        "score": 4
    },
    {
        "example": "3 + 7",
        "answer": 10,
        "score": 4
    },
    {
        "example": "3 + 8",
        "answer": 11,
        "score": 4
    },
    {
        "example": "3 + 9",
        "answer": 12,
        "score": 4
    },
    {
        "example": "3 + 10",
        "answer": 13,
        "score": 3
    },
    {
        "example": "3 + 11",
        "answer": 14,
        "score": 4
    },
    {
        "example": "3 + 12",
        "answer": 15,
        "score": 5
    },
    {
        "example": "3 + 13",
        "answer": 16,
        "score": 5
    },
    {
        "example": "3 + 14",
        "answer": 17,
        "score": 5
    },
    {
        "example": "3 + 15",
        "answer": 18,
        "score": 5
    },
    {
        "example": "3 + 16",
        "answer": 19,
        "score": 5
    },
    {
        "example": "3 + 17",
        "answer": 20,
        "score": 5
    },
    {
        "example": "4 + 1",
        "answer": 5,
        "score": 3
    },
    {
        "example": "4 + 2",
        "answer": 6,
        "score": 4
    },
    {
        "example": "4 + 3",
        "answer": 7,
        "score": 4
    },
    {
        "example": "4 + 4",
        "answer": 8,
        "score": 4
    },
    {
        "example": "4 + 5",
        "answer": 9,
        "score": 4
    },
    {
        "example": "4 + 6",
        "answer": 10,
        "score": 4
    },
    {
        "example": "4 + 7",
        "answer": 11,
        "score": 4
    },
    {
        "example": "4 + 8",
        "answer": 12,
        "score": 4
    },
    {
        "example": "4 + 9",
        "answer": 13,
        "score": 4
    },
    {
        "example": "4 + 10",
        "answer": 14,
        "score": 3
    },
    {
        "example": "4 + 11",
        "answer": 15,
        "score": 4
    },
    {
        "example": "4 + 12",
        "answer": 16,
        "score": 5
    },
    {
        "example": "4 + 13",
        "answer": 17,
        "score": 5
    },
    {
        "example": "4 + 14",
        "answer": 18,
        "score": 5
    },
    {
        "example": "4 + 15",
        "answer": 19,
        "score": 5
    },
    {
        "example": "4 + 16",
        "answer": 20,
        "score": 5
    },
    {
        "example": "5 + 1",
        "answer": 6,
        "score": 3
    },
    {
        "example": "5 + 2",
        "answer": 7,
        "score": 4
    },
    {
        "example": "5 + 3",
        "answer": 8,
        "score": 4
    },
    {
        "example": "5 + 4",
        "answer": 9,
        "score": 4
    },
    {
        "example": "5 + 5",
        "answer": 10,
        "score": 4
    },
    {
        "example": "5 + 6",
        "answer": 11,
        "score": 4
    },
    {
        "example": "5 + 7",
        "answer": 12,
        "score": 4
    },
    {
        "example": "5 + 8",
        "answer": 13,
        "score": 4
    },
    {
        "example": "5 + 9",
        "answer": 14,
        "score": 4
    },
    {
        "example": "5 + 10",
        "answer": 15,
        "score": 3
    },
    {
        "example": "5 + 11",
        "answer": 16,
        "score": 4
    },
    {
        "example": "5 + 12",
        "answer": 17,
        "score": 5
    },
    {
        "example": "5 + 13",
        "answer": 18,
        "score": 5
    },
    {
        "example": "5 + 14",
        "answer": 19,
        "score": 5
    },
    {
        "example": "5 + 15",
        "answer": 20,
        "score": 5
    },
    {
        "example": "6 + 1",
        "answer": 7,
        "score": 3
    },
    {
        "example": "6 + 2",
        "answer": 8,
        "score": 4
    },
    {
        "example": "6 + 3",
        "answer": 9,
        "score": 4
    },
    {
        "example": "6 + 4",
        "answer": 10,
        "score": 4
    },
    {
        "example": "6 + 5",
        "answer": 11,
        "score": 4
    },
    {
        "example": "6 + 6",
        "answer": 12,
        "score": 4
    },
    {
        "example": "6 + 7",
        "answer": 13,
        "score": 4
    },
    {
        "example": "6 + 8",
        "answer": 14,
        "score": 4
    },
    {
        "example": "6 + 9",
        "answer": 15,
        "score": 4
    },
    {
        "example": "6 + 10",
        "answer": 16,
        "score": 3
    },
    {
        "example": "6 + 11",
        "answer": 17,
        "score": 4
    },
    {
        "example": "6 + 12",
        "answer": 18,
        "score": 5
    },
    {
        "example": "6 + 13",
        "answer": 19,
        "score": 5
    },
    {
        "example": "6 + 14",
        "answer": 20,
        "score": 5
    },
    {
        "example": "7 + 1",
        "answer": 8,
        "score": 3
    },
    {
        "example": "7 + 2",
        "answer": 9,
        "score": 4
    },
    {
        "example": "7 + 3",
        "answer": 10,
        "score": 4
    },
    {
        "example": "7 + 4",
        "answer": 11,
        "score": 4
    },
    {
        "example": "7 + 5",
        "answer": 12,
        "score": 4
    },
    {
        "example": "7 + 6",
        "answer": 13,
        "score": 4
    },
    {
        "example": "7 + 7",
        "answer": 14,
        "score": 4
    },
    {
        "example": "7 + 8",
        "answer": 15,
        "score": 4
    },
    {
        "example": "7 + 9",
        "answer": 16,
        "score": 4
    },
    {
        "example": "7 + 10",
        "answer": 17,
        "score": 3
    },
    {
        "example": "7 + 11",
        "answer": 18,
        "score": 4
    },
    {
        "example": "7 + 12",
        "answer": 19,
        "score": 5
    },
    {
        "example": "7 + 13",
        "answer": 20,
        "score": 5
    },
    {
        "example": "8 + 1",
        "answer": 9,
        "score": 3
    },
    {
        "example": "8 + 2",
        "answer": 10,
        "score": 4
    },
    {
        "example": "8 + 3",
        "answer": 11,
        "score": 4
    },
    {
        "example": "8 + 4",
        "answer": 12,
        "score": 4
    },
    {
        "example": "8 + 5",
        "answer": 13,
        "score": 4
    },
    {
        "example": "8 + 6",
        "answer": 14,
        "score": 4
    },
    {
        "example": "8 + 7",
        "answer": 15,
        "score": 4
    },
    {
        "example": "8 + 8",
        "answer": 16,
        "score": 4
    },
    {
        "example": "8 + 9",
        "answer": 17,
        "score": 4
    },
    {
        "example": "8 + 10",
        "answer": 18,
        "score": 3
    },
    {
        "example": "8 + 11",
        "answer": 19,
        "score": 4
    },
    {
        "example": "8 + 12",
        "answer": 20,
        "score": 5
    },
    {
        "example": "9 + 1",
        "answer": 10,
        "score": 3
    },
    {
        "example": "9 + 2",
        "answer": 11,
        "score": 4
    },
    {
        "example": "9 + 3",
        "answer": 12,
        "score": 4
    },
    {
        "example": "9 + 4",
        "answer": 13,
        "score": 4
    },
    {
        "example": "9 + 5",
        "answer": 14,
        "score": 4
    },
    {
        "example": "9 + 6",
        "answer": 15,
        "score": 4
    },
    {
        "example": "9 + 7",
        "answer": 16,
        "score": 4
    },
    {
        "example": "9 + 8",
        "answer": 17,
        "score": 4
    },
    {
        "example": "9 + 9",
        "answer": 18,
        "score": 4
    },
    {
        "example": "9 + 10",
        "answer": 19,
        "score": 3
    },
    {
        "example": "9 + 11",
        "answer": 20,
        "score": 4
    },
    {
        "example": "10 + 1",
        "answer": 11,
        "score": 2
    },
    {
        "example": "10 + 2",
        "answer": 12,
        "score": 3
    },
    {
        "example": "10 + 3",
        "answer": 13,
        "score": 3
    },
    {
        "example": "10 + 4",
        "answer": 14,
        "score": 3
    },
    {
        "example": "10 + 5",
        "answer": 15,
        "score": 3
    },
    {
        "example": "10 + 6",
        "answer": 16,
        "score": 3
    },
    {
        "example": "10 + 7",
        "answer": 17,
        "score": 3
    },
    {
        "example": "10 + 8",
        "answer": 18,
        "score": 3
    },
    {
        "example": "10 + 9",
        "answer": 19,
        "score": 3
    },
    {
        "example": "10 + 10",
        "answer": 20,
        "score": 2
    },
    {
        "example": "11 + 1",
        "answer": 12,
        "score": 3
    },
    {
        "example": "11 + 2",
        "answer": 13,
        "score": 4
    },
    {
        "example": "11 + 3",
        "answer": 14,
        "score": 4
    },
    {
        "example": "11 + 4",
        "answer": 15,
        "score": 4
    },
    {
        "example": "11 + 5",
        "answer": 16,
        "score": 4
    },
    {
        "example": "11 + 6",
        "answer": 17,
        "score": 4
    },
    {
        "example": "11 + 7",
        "answer": 18,
        "score": 4
    },
    {
        "example": "11 + 8",
        "answer": 19,
        "score": 4
    },
    {
        "example": "11 + 9",
        "answer": 20,
        "score": 4
    },
    {
        "example": "12 + 1",
        "answer": 13,
        "score": 4
    },
    {
        "example": "12 + 2",
        "answer": 14,
        "score": 5
    },
    {
        "example": "12 + 3",
        "answer": 15,
        "score": 5
    },
    {
        "example": "12 + 4",
        "answer": 16,
        "score": 5
    },
    {
        "example": "12 + 5",
        "answer": 17,
        "score": 5
    },
    {
        "example": "12 + 6",
        "answer": 18,
        "score": 5
    },
    {
        "example": "12 + 7",
        "answer": 19,
        "score": 5
    },
    {
        "example": "12 + 8",
        "answer": 20,
        "score": 5
    },
    {
        "example": "13 + 1",
        "answer": 14,
        "score": 4
    },
    {
        "example": "13 + 2",
        "answer": 15,
        "score": 5
    },
    {
        "example": "13 + 3",
        "answer": 16,
        "score": 5
    },
    {
        "example": "13 + 4",
        "answer": 17,
        "score": 5
    },
    {
        "example": "13 + 5",
        "answer": 18,
        "score": 5
    },
    {
        "example": "13 + 6",
        "answer": 19,
        "score": 5
    },
    {
        "example": "13 + 7",
        "answer": 20,
        "score": 5
    },
    {
        "example": "14 + 1",
        "answer": 15,
        "score": 4
    },
    {
        "example": "14 + 2",
        "answer": 16,
        "score": 5
    },
    {
        "example": "14 + 3",
        "answer": 17,
        "score": 5
    },
    {
        "example": "14 + 4",
        "answer": 18,
        "score": 5
    },
    {
        "example": "14 + 5",
        "answer": 19,
        "score": 5
    },
    {
        "example": "14 + 6",
        "answer": 20,
        "score": 5
    },
    {
        "example": "15 + 1",
        "answer": 16,
        "score": 4
    },
    {
        "example": "15 + 2",
        "answer": 17,
        "score": 5
    },
    {
        "example": "15 + 3",
        "answer": 18,
        "score": 5
    },
    {
        "example": "15 + 4",
        "answer": 19,
        "score": 5
    },
    {
        "example": "15 + 5",
        "answer": 20,
        "score": 5
    },
    {
        "example": "16 + 1",
        "answer": 17,
        "score": 4
    },
    {
        "example": "16 + 2",
        "answer": 18,
        "score": 5
    },
    {
        "example": "16 + 3",
        "answer": 19,
        "score": 5
    },
    {
        "example": "16 + 4",
        "answer": 20,
        "score": 5
    },
    {
        "example": "17 + 1",
        "answer": 18,
        "score": 4
    },
    {
        "example": "17 + 2",
        "answer": 19,
        "score": 5
    },
    {
        "example": "17 + 3",
        "answer": 20,
        "score": 5
    },
    {
        "example": "18 + 1",
        "answer": 19,
        "score": 4
    },
    {
        "example": "18 + 2",
        "answer": 20,
        "score": 5
    },
    {
        "example": "19 + 1",
        "answer": 20,
        "score": 4
    }
];
var substrArray = [
    {
        "example": "20 - 1",
        "answer": 19,
        "score": 5
    },
    {
        "example": "20 - 2",
        "answer": 18,
        "score": 6
    },
    {
        "example": "20 - 3",
        "answer": 17,
        "score": 6
    },
    {
        "example": "20 - 4",
        "answer": 16,
        "score": 6
    },
    {
        "example": "20 - 5",
        "answer": 15,
        "score": 6
    },
    {
        "example": "20 - 6",
        "answer": 14,
        "score": 6
    },
    {
        "example": "20 - 7",
        "answer": 13,
        "score": 6
    },
    {
        "example": "20 - 8",
        "answer": 12,
        "score": 6
    },
    {
        "example": "20 - 9",
        "answer": 11,
        "score": 6
    },
    {
        "example": "20 - 10",
        "answer": 10,
        "score": 5
    },
    {
        "example": "20 - 11",
        "answer": 9,
        "score": 6
    },
    {
        "example": "20 - 12",
        "answer": 8,
        "score": 7
    },
    {
        "example": "20 - 13",
        "answer": 7,
        "score": 7
    },
    {
        "example": "20 - 14",
        "answer": 6,
        "score": 7
    },
    {
        "example": "20 - 15",
        "answer": 5,
        "score": 7
    },
    {
        "example": "20 - 16",
        "answer": 4,
        "score": 7
    },
    {
        "example": "20 - 17",
        "answer": 3,
        "score": 7
    },
    {
        "example": "20 - 18",
        "answer": 2,
        "score": 7
    },
    {
        "example": "20 - 19",
        "answer": 1,
        "score": 7
    },
    {
        "example": "19 - 1",
        "answer": 18,
        "score": 6
    },
    {
        "example": "19 - 2",
        "answer": 17,
        "score": 7
    },
    {
        "example": "19 - 3",
        "answer": 16,
        "score": 7
    },
    {
        "example": "19 - 4",
        "answer": 15,
        "score": 7
    },
    {
        "example": "19 - 5",
        "answer": 14,
        "score": 7
    },
    {
        "example": "19 - 6",
        "answer": 13,
        "score": 7
    },
    {
        "example": "19 - 7",
        "answer": 12,
        "score": 7
    },
    {
        "example": "19 - 8",
        "answer": 11,
        "score": 7
    },
    {
        "example": "19 - 9",
        "answer": 10,
        "score": 7
    },
    {
        "example": "19 - 10",
        "answer": 9,
        "score": 6
    },
    {
        "example": "19 - 11",
        "answer": 8,
        "score": 7
    },
    {
        "example": "19 - 12",
        "answer": 7,
        "score": 8
    },
    {
        "example": "19 - 13",
        "answer": 6,
        "score": 8
    },
    {
        "example": "19 - 14",
        "answer": 5,
        "score": 8
    },
    {
        "example": "19 - 15",
        "answer": 4,
        "score": 8
    },
    {
        "example": "19 - 16",
        "answer": 3,
        "score": 8
    },
    {
        "example": "19 - 17",
        "answer": 2,
        "score": 8
    },
    {
        "example": "19 - 18",
        "answer": 1,
        "score": 8
    },
    {
        "example": "18 - 1",
        "answer": 17,
        "score": 6
    },
    {
        "example": "18 - 2",
        "answer": 16,
        "score": 7
    },
    {
        "example": "18 - 3",
        "answer": 15,
        "score": 7
    },
    {
        "example": "18 - 4",
        "answer": 14,
        "score": 7
    },
    {
        "example": "18 - 5",
        "answer": 13,
        "score": 7
    },
    {
        "example": "18 - 6",
        "answer": 12,
        "score": 7
    },
    {
        "example": "18 - 7",
        "answer": 11,
        "score": 7
    },
    {
        "example": "18 - 8",
        "answer": 10,
        "score": 7
    },
    {
        "example": "18 - 9",
        "answer": 9,
        "score": 7
    },
    {
        "example": "18 - 10",
        "answer": 8,
        "score": 6
    },
    {
        "example": "18 - 11",
        "answer": 7,
        "score": 7
    },
    {
        "example": "18 - 12",
        "answer": 6,
        "score": 8
    },
    {
        "example": "18 - 13",
        "answer": 5,
        "score": 8
    },
    {
        "example": "18 - 14",
        "answer": 4,
        "score": 8
    },
    {
        "example": "18 - 15",
        "answer": 3,
        "score": 8
    },
    {
        "example": "18 - 16",
        "answer": 2,
        "score": 8
    },
    {
        "example": "18 - 17",
        "answer": 1,
        "score": 8
    },
    {
        "example": "17 - 1",
        "answer": 16,
        "score": 6
    },
    {
        "example": "17 - 2",
        "answer": 15,
        "score": 7
    },
    {
        "example": "17 - 3",
        "answer": 14,
        "score": 7
    },
    {
        "example": "17 - 4",
        "answer": 13,
        "score": 7
    },
    {
        "example": "17 - 5",
        "answer": 12,
        "score": 7
    },
    {
        "example": "17 - 6",
        "answer": 11,
        "score": 7
    },
    {
        "example": "17 - 7",
        "answer": 10,
        "score": 7
    },
    {
        "example": "17 - 8",
        "answer": 9,
        "score": 7
    },
    {
        "example": "17 - 9",
        "answer": 8,
        "score": 7
    },
    {
        "example": "17 - 10",
        "answer": 7,
        "score": 6
    },
    {
        "example": "17 - 11",
        "answer": 6,
        "score": 7
    },
    {
        "example": "17 - 12",
        "answer": 5,
        "score": 8
    },
    {
        "example": "17 - 13",
        "answer": 4,
        "score": 8
    },
    {
        "example": "17 - 14",
        "answer": 3,
        "score": 8
    },
    {
        "example": "17 - 15",
        "answer": 2,
        "score": 8
    },
    {
        "example": "17 - 16",
        "answer": 1,
        "score": 8
    },
    {
        "example": "16 - 1",
        "answer": 15,
        "score": 6
    },
    {
        "example": "16 - 2",
        "answer": 14,
        "score": 7
    },
    {
        "example": "16 - 3",
        "answer": 13,
        "score": 7
    },
    {
        "example": "16 - 4",
        "answer": 12,
        "score": 7
    },
    {
        "example": "16 - 5",
        "answer": 11,
        "score": 7
    },
    {
        "example": "16 - 6",
        "answer": 10,
        "score": 7
    },
    {
        "example": "16 - 7",
        "answer": 9,
        "score": 7
    },
    {
        "example": "16 - 8",
        "answer": 8,
        "score": 7
    },
    {
        "example": "16 - 9",
        "answer": 7,
        "score": 7
    },
    {
        "example": "16 - 10",
        "answer": 6,
        "score": 6
    },
    {
        "example": "16 - 11",
        "answer": 5,
        "score": 7
    },
    {
        "example": "16 - 12",
        "answer": 4,
        "score": 8
    },
    {
        "example": "16 - 13",
        "answer": 3,
        "score": 8
    },
    {
        "example": "16 - 14",
        "answer": 2,
        "score": 8
    },
    {
        "example": "16 - 15",
        "answer": 1,
        "score": 8
    },
    {
        "example": "15 - 1",
        "answer": 14,
        "score": 6
    },
    {
        "example": "15 - 2",
        "answer": 13,
        "score": 7
    },
    {
        "example": "15 - 3",
        "answer": 12,
        "score": 7
    },
    {
        "example": "15 - 4",
        "answer": 11,
        "score": 7
    },
    {
        "example": "15 - 5",
        "answer": 10,
        "score": 7
    },
    {
        "example": "15 - 6",
        "answer": 9,
        "score": 7
    },
    {
        "example": "15 - 7",
        "answer": 8,
        "score": 7
    },
    {
        "example": "15 - 8",
        "answer": 7,
        "score": 7
    },
    {
        "example": "15 - 9",
        "answer": 6,
        "score": 7
    },
    {
        "example": "15 - 10",
        "answer": 5,
        "score": 6
    },
    {
        "example": "15 - 11",
        "answer": 4,
        "score": 7
    },
    {
        "example": "15 - 12",
        "answer": 3,
        "score": 8
    },
    {
        "example": "15 - 13",
        "answer": 2,
        "score": 8
    },
    {
        "example": "15 - 14",
        "answer": 1,
        "score": 8
    },
    {
        "example": "14 - 1",
        "answer": 13,
        "score": 6
    },
    {
        "example": "14 - 2",
        "answer": 12,
        "score": 7
    },
    {
        "example": "14 - 3",
        "answer": 11,
        "score": 7
    },
    {
        "example": "14 - 4",
        "answer": 10,
        "score": 7
    },
    {
        "example": "14 - 5",
        "answer": 9,
        "score": 7
    },
    {
        "example": "14 - 6",
        "answer": 8,
        "score": 7
    },
    {
        "example": "14 - 7",
        "answer": 7,
        "score": 7
    },
    {
        "example": "14 - 8",
        "answer": 6,
        "score": 7
    },
    {
        "example": "14 - 9",
        "answer": 5,
        "score": 7
    },
    {
        "example": "14 - 10",
        "answer": 4,
        "score": 6
    },
    {
        "example": "14 - 11",
        "answer": 3,
        "score": 7
    },
    {
        "example": "14 - 12",
        "answer": 2,
        "score": 8
    },
    {
        "example": "14 - 13",
        "answer": 1,
        "score": 8
    },
    {
        "example": "13 - 1",
        "answer": 12,
        "score": 6
    },
    {
        "example": "13 - 2",
        "answer": 11,
        "score": 7
    },
    {
        "example": "13 - 3",
        "answer": 10,
        "score": 7
    },
    {
        "example": "13 - 4",
        "answer": 9,
        "score": 7
    },
    {
        "example": "13 - 5",
        "answer": 8,
        "score": 7
    },
    {
        "example": "13 - 6",
        "answer": 7,
        "score": 7
    },
    {
        "example": "13 - 7",
        "answer": 6,
        "score": 7
    },
    {
        "example": "13 - 8",
        "answer": 5,
        "score": 7
    },
    {
        "example": "13 - 9",
        "answer": 4,
        "score": 7
    },
    {
        "example": "13 - 10",
        "answer": 3,
        "score": 6
    },
    {
        "example": "13 - 11",
        "answer": 2,
        "score": 7
    },
    {
        "example": "13 - 12",
        "answer": 1,
        "score": 8
    },
    {
        "example": "12 - 1",
        "answer": 11,
        "score": 6
    },
    {
        "example": "12 - 2",
        "answer": 10,
        "score": 7
    },
    {
        "example": "12 - 3",
        "answer": 9,
        "score": 7
    },
    {
        "example": "12 - 4",
        "answer": 8,
        "score": 7
    },
    {
        "example": "12 - 5",
        "answer": 7,
        "score": 7
    },
    {
        "example": "12 - 6",
        "answer": 6,
        "score": 7
    },
    {
        "example": "12 - 7",
        "answer": 5,
        "score": 7
    },
    {
        "example": "12 - 8",
        "answer": 4,
        "score": 7
    },
    {
        "example": "12 - 9",
        "answer": 3,
        "score": 7
    },
    {
        "example": "12 - 10",
        "answer": 2,
        "score": 6
    },
    {
        "example": "12 - 11",
        "answer": 1,
        "score": 7
    },
    {
        "example": "11 - 1",
        "answer": 10,
        "score": 5
    },
    {
        "example": "11 - 2",
        "answer": 9,
        "score": 6
    },
    {
        "example": "11 - 3",
        "answer": 8,
        "score": 6
    },
    {
        "example": "11 - 4",
        "answer": 7,
        "score": 6
    },
    {
        "example": "11 - 5",
        "answer": 6,
        "score": 6
    },
    {
        "example": "11 - 6",
        "answer": 5,
        "score": 6
    },
    {
        "example": "11 - 7",
        "answer": 4,
        "score": 6
    },
    {
        "example": "11 - 8",
        "answer": 3,
        "score": 6
    },
    {
        "example": "11 - 9",
        "answer": 2,
        "score": 6
    },
    {
        "example": "11 - 10",
        "answer": 1,
        "score": 5
    },
    {
        "example": "10 - 1",
        "answer": 9,
        "score": 4
    },
    {
        "example": "10 - 2",
        "answer": 8,
        "score": 5
    },
    {
        "example": "10 - 3",
        "answer": 7,
        "score": 5
    },
    {
        "example": "10 - 4",
        "answer": 6,
        "score": 5
    },
    {
        "example": "10 - 5",
        "answer": 5,
        "score": 5
    },
    {
        "example": "10 - 6",
        "answer": 4,
        "score": 5
    },
    {
        "example": "10 - 7",
        "answer": 3,
        "score": 5
    },
    {
        "example": "10 - 8",
        "answer": 2,
        "score": 5
    },
    {
        "example": "10 - 9",
        "answer": 1,
        "score": 5
    },
    {
        "example": "9 - 1",
        "answer": 8,
        "score": 5
    },
    {
        "example": "9 - 2",
        "answer": 7,
        "score": 6
    },
    {
        "example": "9 - 3",
        "answer": 6,
        "score": 6
    },
    {
        "example": "9 - 4",
        "answer": 5,
        "score": 6
    },
    {
        "example": "9 - 5",
        "answer": 4,
        "score": 6
    },
    {
        "example": "9 - 6",
        "answer": 3,
        "score": 6
    },
    {
        "example": "9 - 7",
        "answer": 2,
        "score": 6
    },
    {
        "example": "9 - 8",
        "answer": 1,
        "score": 6
    },
    {
        "example": "8 - 1",
        "answer": 7,
        "score": 5
    },
    {
        "example": "8 - 2",
        "answer": 6,
        "score": 6
    },
    {
        "example": "8 - 3",
        "answer": 5,
        "score": 6
    },
    {
        "example": "8 - 4",
        "answer": 4,
        "score": 6
    },
    {
        "example": "8 - 5",
        "answer": 3,
        "score": 6
    },
    {
        "example": "8 - 6",
        "answer": 2,
        "score": 6
    },
    {
        "example": "8 - 7",
        "answer": 1,
        "score": 6
    },
    {
        "example": "7 - 1",
        "answer": 6,
        "score": 5
    },
    {
        "example": "7 - 2",
        "answer": 5,
        "score": 6
    },
    {
        "example": "7 - 3",
        "answer": 4,
        "score": 6
    },
    {
        "example": "7 - 4",
        "answer": 3,
        "score": 6
    },
    {
        "example": "7 - 5",
        "answer": 2,
        "score": 6
    },
    {
        "example": "7 - 6",
        "answer": 1,
        "score": 6
    },
    {
        "example": "6 - 1",
        "answer": 5,
        "score": 5
    },
    {
        "example": "6 - 2",
        "answer": 4,
        "score": 6
    },
    {
        "example": "6 - 3",
        "answer": 3,
        "score": 6
    },
    {
        "example": "6 - 4",
        "answer": 2,
        "score": 6
    },
    {
        "example": "6 - 5",
        "answer": 1,
        "score": 6
    },
    {
        "example": "5 - 1",
        "answer": 4,
        "score": 5
    },
    {
        "example": "5 - 2",
        "answer": 3,
        "score": 6
    },
    {
        "example": "5 - 3",
        "answer": 2,
        "score": 6
    },
    {
        "example": "5 - 4",
        "answer": 1,
        "score": 6
    },
    {
        "example": "4 - 1",
        "answer": 3,
        "score": 5
    },
    {
        "example": "4 - 2",
        "answer": 2,
        "score": 6
    },
    {
        "example": "4 - 3",
        "answer": 1,
        "score": 6
    },
    {
        "example": "3 - 1",
        "answer": 2,
        "score": 5
    },
    {
        "example": "3 - 2",
        "answer": 1,
        "score": 6
    },
    {
        "example": "2 - 1",
        "answer": 1,
        "score": 5
    }
];
var multipleArr = [
    {
        "example": "1 × 1",
        "answer": 1,
        "score": 5
    },
    {
        "example": "1 × 2",
        "answer": 2,
        "score": 5
    },
    {
        "example": "1 × 3",
        "answer": 3,
        "score": 5
    },
    {
        "example": "1 × 4",
        "answer": 4,
        "score": 5
    },
    {
        "example": "1 × 5",
        "answer": 5,
        "score": 5
    },
    {
        "example": "1 × 6",
        "answer": 6,
        "score": 5
    },
    {
        "example": "1 × 7",
        "answer": 7,
        "score": 5
    },
    {
        "example": "1 × 8",
        "answer": 8,
        "score": 5
    },
    {
        "example": "1 × 9",
        "answer": 9,
        "score": 5
    },
    {
        "example": "1 × 10",
        "answer": 10,
        "score": 5
    },
    {
        "example": "2 × 1",
        "answer": 2,
        "score": 5
    },
    {
        "example": "2 × 2",
        "answer": 4,
        "score": 7
    },
    {
        "example": "2 × 3",
        "answer": 6,
        "score": 7
    },
    {
        "example": "2 × 4",
        "answer": 8,
        "score": 7
    },
    {
        "example": "2 × 5",
        "answer": 10,
        "score": 7
    },
    {
        "example": "2 × 6",
        "answer": 12,
        "score": 7
    },
    {
        "example": "2 × 7",
        "answer": 14,
        "score": 7
    },
    {
        "example": "2 × 8",
        "answer": 16,
        "score": 7
    },
    {
        "example": "2 × 9",
        "answer": 18,
        "score": 7
    },
    {
        "example": "2 × 10",
        "answer": 20,
        "score": 6
    },
    {
        "example": "3 × 1",
        "answer": 3,
        "score": 5
    },
    {
        "example": "3 × 2",
        "answer": 6,
        "score": 7
    },
    {
        "example": "3 × 3",
        "answer": 9,
        "score": 7
    },
    {
        "example": "3 × 4",
        "answer": 12,
        "score": 7
    },
    {
        "example": "3 × 5",
        "answer": 15,
        "score": 7
    },
    {
        "example": "3 × 6",
        "answer": 18,
        "score": 7
    },
    {
        "example": "3 × 7",
        "answer": 21,
        "score": 7
    },
    {
        "example": "3 × 8",
        "answer": 24,
        "score": 7
    },
    {
        "example": "3 × 9",
        "answer": 27,
        "score": 7
    },
    {
        "example": "3 × 10",
        "answer": 30,
        "score": 6
    },
    {
        "example": "4 × 1",
        "answer": 4,
        "score": 5
    },
    {
        "example": "4 × 2",
        "answer": 8,
        "score": 7
    },
    {
        "example": "4 × 3",
        "answer": 12,
        "score": 7
    },
    {
        "example": "4 × 4",
        "answer": 16,
        "score": 7
    },
    {
        "example": "4 × 5",
        "answer": 20,
        "score": 7
    },
    {
        "example": "4 × 6",
        "answer": 24,
        "score": 7
    },
    {
        "example": "4 × 7",
        "answer": 28,
        "score": 7
    },
    {
        "example": "4 × 8",
        "answer": 32,
        "score": 7
    },
    {
        "example": "4 × 9",
        "answer": 36,
        "score": 7
    },
    {
        "example": "4 × 10",
        "answer": 40,
        "score": 6
    },
    {
        "example": "5 × 1",
        "answer": 5,
        "score": 5
    },
    {
        "example": "5 × 2",
        "answer": 10,
        "score": 7
    },
    {
        "example": "5 × 3",
        "answer": 15,
        "score": 7
    },
    {
        "example": "5 × 4",
        "answer": 20,
        "score": 7
    },
    {
        "example": "5 × 5",
        "answer": 25,
        "score": 7
    },
    {
        "example": "5 × 6",
        "answer": 30,
        "score": 7
    },
    {
        "example": "5 × 7",
        "answer": 35,
        "score": 7
    },
    {
        "example": "5 × 8",
        "answer": 40,
        "score": 7
    },
    {
        "example": "5 × 9",
        "answer": 45,
        "score": 7
    },
    {
        "example": "5 × 10",
        "answer": 50,
        "score": 6
    },
    {
        "example": "6 × 1",
        "answer": 6,
        "score": 5
    },
    {
        "example": "6 × 2",
        "answer": 12,
        "score": 7
    },
    {
        "example": "6 × 3",
        "answer": 18,
        "score": 7
    },
    {
        "example": "6 × 4",
        "answer": 24,
        "score": 7
    },
    {
        "example": "6 × 5",
        "answer": 30,
        "score": 7
    },
    {
        "example": "6 × 6",
        "answer": 36,
        "score": 7
    },
    {
        "example": "6 × 7",
        "answer": 42,
        "score": 7
    },
    {
        "example": "6 × 8",
        "answer": 48,
        "score": 7
    },
    {
        "example": "6 × 9",
        "answer": 54,
        "score": 7
    },
    {
        "example": "6 × 10",
        "answer": 60,
        "score": 6
    },
    {
        "example": "7 × 1",
        "answer": 7,
        "score": 5
    },
    {
        "example": "7 × 2",
        "answer": 14,
        "score": 7
    },
    {
        "example": "7 × 3",
        "answer": 21,
        "score": 7
    },
    {
        "example": "7 × 4",
        "answer": 28,
        "score": 7
    },
    {
        "example": "7 × 5",
        "answer": 35,
        "score": 7
    },
    {
        "example": "7 × 6",
        "answer": 42,
        "score": 7
    },
    {
        "example": "7 × 7",
        "answer": 49,
        "score": 7
    },
    {
        "example": "7 × 8",
        "answer": 56,
        "score": 7
    },
    {
        "example": "7 × 9",
        "answer": 63,
        "score": 7
    },
    {
        "example": "7 × 10",
        "answer": 70,
        "score": 6
    },
    {
        "example": "8 × 1",
        "answer": 8,
        "score": 5
    },
    {
        "example": "8 × 2",
        "answer": 16,
        "score": 7
    },
    {
        "example": "8 × 3",
        "answer": 24,
        "score": 7
    },
    {
        "example": "8 × 4",
        "answer": 32,
        "score": 7
    },
    {
        "example": "8 × 5",
        "answer": 40,
        "score": 7
    },
    {
        "example": "8 × 6",
        "answer": 48,
        "score": 7
    },
    {
        "example": "8 × 7",
        "answer": 56,
        "score": 7
    },
    {
        "example": "8 × 8",
        "answer": 64,
        "score": 7
    },
    {
        "example": "8 × 9",
        "answer": 72,
        "score": 7
    },
    {
        "example": "8 × 10",
        "answer": 80,
        "score": 6
    },
    {
        "example": "9 × 1",
        "answer": 9,
        "score": 5
    },
    {
        "example": "9 × 2",
        "answer": 18,
        "score": 7
    },
    {
        "example": "9 × 3",
        "answer": 27,
        "score": 7
    },
    {
        "example": "9 × 4",
        "answer": 36,
        "score": 7
    },
    {
        "example": "9 × 5",
        "answer": 45,
        "score": 7
    },
    {
        "example": "9 × 6",
        "answer": 54,
        "score": 7
    },
    {
        "example": "9 × 7",
        "answer": 63,
        "score": 7
    },
    {
        "example": "9 × 8",
        "answer": 72,
        "score": 7
    },
    {
        "example": "9 × 9",
        "answer": 81,
        "score": 7
    },
    {
        "example": "9 × 10",
        "answer": 90,
        "score": 6
    },
    {
        "example": "10 × 1",
        "answer": 10,
        "score": 5
    },
    {
        "example": "10 × 2",
        "answer": 20,
        "score": 6
    },
    {
        "example": "10 × 3",
        "answer": 30,
        "score": 6
    },
    {
        "example": "10 × 4",
        "answer": 40,
        "score": 6
    },
    {
        "example": "10 × 5",
        "answer": 50,
        "score": 6
    },
    {
        "example": "10 × 6",
        "answer": 60,
        "score": 6
    },
    {
        "example": "10 × 7",
        "answer": 70,
        "score": 6
    },
    {
        "example": "10 × 8",
        "answer": 80,
        "score": 6
    },
    {
        "example": "10 × 9",
        "answer": 90,
        "score": 6
    },
    {
        "example": "10 × 10",
        "answer": 100,
        "score": 6
    }
];
var divideArray = [
    {
        "example": "100 : 10",
        "answer": 10,
        "score": 8
    },
    {
        "example": "90 : 9",
        "answer": 10,
        "score": 8
    },
    {
        "example": "90 : 10",
        "answer": 9,
        "score": 8
    },
    {
        "example": "81 : 9",
        "answer": 9,
        "score": 9
    },
    {
        "example": "80 : 8",
        "answer": 10,
        "score": 8
    },
    {
        "example": "80 : 10",
        "answer": 8,
        "score": 8
    },
    {
        "example": "72 : 8",
        "answer": 9,
        "score": 9
    },
    {
        "example": "72 : 9",
        "answer": 8,
        "score": 9
    },
    {
        "example": "70 : 7",
        "answer": 10,
        "score": 8
    },
    {
        "example": "70 : 10",
        "answer": 7,
        "score": 8
    },
    {
        "example": "64 : 8",
        "answer": 8,
        "score": 9
    },
    {
        "example": "63 : 7",
        "answer": 9,
        "score": 9
    },
    {
        "example": "63 : 9",
        "answer": 7,
        "score": 9
    },
    {
        "example": "60 : 6",
        "answer": 10,
        "score": 8
    },
    {
        "example": "60 : 10",
        "answer": 6,
        "score": 8
    },
    {
        "example": "56 : 7",
        "answer": 8,
        "score": 9
    },
    {
        "example": "56 : 8",
        "answer": 7,
        "score": 9
    },
    {
        "example": "54 : 6",
        "answer": 9,
        "score": 9
    },
    {
        "example": "54 : 9",
        "answer": 6,
        "score": 9
    },
    {
        "example": "50 : 5",
        "answer": 10,
        "score": 8
    },
    {
        "example": "50 : 10",
        "answer": 5,
        "score": 8
    },
    {
        "example": "49 : 7",
        "answer": 7,
        "score": 9
    },
    {
        "example": "48 : 6",
        "answer": 8,
        "score": 9
    },
    {
        "example": "48 : 8",
        "answer": 6,
        "score": 9
    },
    {
        "example": "45 : 5",
        "answer": 9,
        "score": 9
    },
    {
        "example": "45 : 9",
        "answer": 5,
        "score": 9
    },
    {
        "example": "42 : 6",
        "answer": 7,
        "score": 9
    },
    {
        "example": "42 : 7",
        "answer": 6,
        "score": 9
    },
    {
        "example": "40 : 4",
        "answer": 10,
        "score": 8
    },
    {
        "example": "40 : 10",
        "answer": 4,
        "score": 8
    },
    {
        "example": "40 : 5",
        "answer": 8,
        "score": 9
    },
    {
        "example": "40 : 8",
        "answer": 5,
        "score": 9
    },
    {
        "example": "36 : 4",
        "answer": 9,
        "score": 9
    },
    {
        "example": "36 : 9",
        "answer": 4,
        "score": 9
    },
    {
        "example": "36 : 6",
        "answer": 6,
        "score": 9
    },
    {
        "example": "35 : 5",
        "answer": 7,
        "score": 9
    },
    {
        "example": "35 : 7",
        "answer": 5,
        "score": 9
    },
    {
        "example": "32 : 4",
        "answer": 8,
        "score": 9
    },
    {
        "example": "32 : 8",
        "answer": 4,
        "score": 9
    },
    {
        "example": "30 : 3",
        "answer": 10,
        "score": 8
    },
    {
        "example": "30 : 10",
        "answer": 3,
        "score": 8
    },
    {
        "example": "30 : 5",
        "answer": 6,
        "score": 9
    },
    {
        "example": "30 : 6",
        "answer": 5,
        "score": 9
    },
    {
        "example": "28 : 4",
        "answer": 7,
        "score": 9
    },
    {
        "example": "28 : 7",
        "answer": 4,
        "score": 9
    },
    {
        "example": "27 : 3",
        "answer": 9,
        "score": 9
    },
    {
        "example": "27 : 9",
        "answer": 3,
        "score": 9
    },
    {
        "example": "25 : 5",
        "answer": 5,
        "score": 9
    },
    {
        "example": "24 : 3",
        "answer": 8,
        "score": 9
    },
    {
        "example": "24 : 8",
        "answer": 3,
        "score": 9
    },
    {
        "example": "24 : 4",
        "answer": 6,
        "score": 9
    },
    {
        "example": "24 : 6",
        "answer": 4,
        "score": 9
    },
    {
        "example": "21 : 3",
        "answer": 7,
        "score": 9
    },
    {
        "example": "21 : 7",
        "answer": 3,
        "score": 9
    },
    {
        "example": "20 : 2",
        "answer": 10,
        "score": 8
    },
    {
        "example": "20 : 10",
        "answer": 2,
        "score": 8
    },
    {
        "example": "20 : 4",
        "answer": 5,
        "score": 9
    },
    {
        "example": "20 : 5",
        "answer": 4,
        "score": 9
    },
    {
        "example": "18 : 2",
        "answer": 9,
        "score": 9
    },
    {
        "example": "18 : 9",
        "answer": 2,
        "score": 9
    },
    {
        "example": "18 : 3",
        "answer": 6,
        "score": 9
    },
    {
        "example": "18 : 6",
        "answer": 3,
        "score": 9
    },
    {
        "example": "16 : 2",
        "answer": 8,
        "score": 9
    },
    {
        "example": "16 : 8",
        "answer": 2,
        "score": 9
    },
    {
        "example": "16 : 4",
        "answer": 4,
        "score": 9
    },
    {
        "example": "15 : 3",
        "answer": 5,
        "score": 9
    },
    {
        "example": "15 : 5",
        "answer": 3,
        "score": 9
    },
    {
        "example": "14 : 2",
        "answer": 7,
        "score": 9
    },
    {
        "example": "14 : 7",
        "answer": 2,
        "score": 9
    },
    {
        "example": "12 : 2",
        "answer": 6,
        "score": 9
    },
    {
        "example": "12 : 6",
        "answer": 2,
        "score": 9
    },
    {
        "example": "12 : 3",
        "answer": 4,
        "score": 9
    },
    {
        "example": "12 : 4",
        "answer": 3,
        "score": 9
    },
    {
        "example": "10 : 1",
        "answer": 10,
        "score": 7
    },
    {
        "example": "10 : 10",
        "answer": 1,
        "score": 7
    },
    {
        "example": "10 : 2",
        "answer": 5,
        "score": 9
    },
    {
        "example": "10 : 5",
        "answer": 2,
        "score": 9
    },
    {
        "example": "9 : 1",
        "answer": 9,
        "score": 7
    },
    {
        "example": "9 : 9",
        "answer": 1,
        "score": 7
    },
    {
        "example": "9 : 3",
        "answer": 3,
        "score": 9
    },
    {
        "example": "8 : 1",
        "answer": 8,
        "score": 7
    },
    {
        "example": "8 : 8",
        "answer": 1,
        "score": 7
    },
    {
        "example": "8 : 2",
        "answer": 4,
        "score": 9
    },
    {
        "example": "8 : 4",
        "answer": 2,
        "score": 9
    },
    {
        "example": "7 : 1",
        "answer": 7,
        "score": 7
    },
    {
        "example": "7 : 7",
        "answer": 1,
        "score": 7
    },
    {
        "example": "6 : 1",
        "answer": 6,
        "score": 7
    },
    {
        "example": "6 : 6",
        "answer": 1,
        "score": 7
    },
    {
        "example": "6 : 2",
        "answer": 3,
        "score": 9
    },
    {
        "example": "6 : 3",
        "answer": 2,
        "score": 9
    },
    {
        "example": "5 : 1",
        "answer": 5,
        "score": 7
    },
    {
        "example": "5 : 5",
        "answer": 1,
        "score": 7
    },
    {
        "example": "4 : 1",
        "answer": 4,
        "score": 7
    },
    {
        "example": "4 : 4",
        "answer": 1,
        "score": 7
    },
    {
        "example": "4 : 2",
        "answer": 2,
        "score": 9
    },
    {
        "example": "3 : 1",
        "answer": 3,
        "score": 7
    },
    {
        "example": "3 : 3",
        "answer": 1,
        "score": 7
    },
    {
        "example": "2 : 1",
        "answer": 2,
        "score": 7
    },
    {
        "example": "2 : 2",
        "answer": 1,
        "score": 7
    },
    {
        "example": "1 : 1",
        "answer": 1,
        "score": 7
    }
];



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
        _this.buttonSetDivide = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'button',
            classes: ['button'],
            textContent: ': Деление',
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
        _this.buttonWrapper.append(_this.buttonSetSum, _this.buttonSetSubstr, _this.buttonSetMultiple, _this.buttonSetDivide, _this.buttonSetFix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0NBQ0YsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHO0lBQ2xCO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEs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LEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtDQUNGO0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7QUM5MUZ4RDtJQUlFLG1CQUFZLElBQWM7UUFBMUIsaUJBR0M7O1FBRUQsb0JBQWUsR0FBRztZQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDO1FBRUYsb0JBQWUsR0FBRztZQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztZQUM1RCxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUM7UUFFRixxQkFBZ0IsR0FBRztZQUNqQixJQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztZQUN2RCxDQUFDO1lBQ0QsSUFBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDO2dCQUN6RCxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDckQsQ0FBQztRQUNILENBQUM7UUFFRCxvQkFBZSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1FBQ3hELENBQUMsQ0FBQztRQUVGLG1CQUFjLEdBQUc7WUFDZixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFNLENBQUMsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQzVCLElBQU0sWUFBWSxHQUNoQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUM1QyxDQUFDLENBQUMsUUFBUTtnQkFDVixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzlDLENBQUMsQ0FBQyxTQUFTO29CQUNYLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDbkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsc0lBQXVELFdBQVcscUJBQVcsWUFBWSxNQUFHLENBQUM7UUFDMUgsQ0FBQyxDQUFDO1FBRUYsZ0JBQVcsR0FBRztZQUNaLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBQ25ELENBQUMsQ0FBQztRQTNDQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFtQixVQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSwwQ0FBRSxTQUFTLENBQUM7SUFDOUUsQ0FBQztJQTBDSCxnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQyQztBQUU1QztJQUVFO1FBQUEsaUJBMERDO1FBRUQsV0FBTSxHQUFHO1lBQ1AsT0FBTyxLQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUMsQ0FBQztRQTdEQSxJQUFJLENBQUMsTUFBTSxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxPQUFPLEdBQUcsMERBQWEsQ0FBQztZQUM1QixHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztTQUN4QyxDQUFDLENBQUM7UUFDSCxJQUFNLFNBQVMsR0FBRywwREFBYSxDQUFDO1lBQzlCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzNCLENBQUMsQ0FBQztRQUNILElBQU0sY0FBYyxHQUFHLDBEQUFhLENBQUM7WUFDbkMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNoQyxXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDLENBQUM7UUFDSCxJQUFNLGFBQWEsR0FBRywwREFBYSxDQUFDO1lBQ2xDLEdBQUcsRUFBRSxHQUFHO1lBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ3pCLE1BQU0sRUFBRTtnQkFDTixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFO2dCQUNyRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTthQUNwQztZQUNELFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUMsQ0FBQztRQUNILElBQU0sSUFBSSxHQUFHLDBEQUFhLENBQUM7WUFDekIsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDO1lBQzFDLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQU0sTUFBTSxHQUFHLDBEQUFhLENBQUM7WUFDM0IsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxXQUFXLEdBQUcsMERBQWEsQ0FBQztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLFdBQVcsRUFBRSxVQUFVO1NBQ3hCLENBQUMsQ0FBQztRQUNILElBQU0sVUFBVSxHQUFHLDBEQUFhLENBQUM7WUFDL0IsR0FBRyxFQUFFLEdBQUc7WUFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDekIsTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFDSCxnRkFBZ0Y7aUJBQ25GO2dCQUNELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2FBQ3BDO1lBQ0QsV0FBVyxFQUFFLFVBQVU7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFLSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEUyQztBQUNWO0FBQ1k7QUFDWjtBQUVsQztJQUEwQyxnQ0FBUTtJQVNoRCxzQkFBWSxRQUFrQjtRQUM1QixrQkFBSyxZQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FBQztRQWtHOUIsaUJBQVcsR0FBRztZQUNaLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDO1FBbkdBLElBQU0sYUFBYSxHQUFHLDBEQUFhLENBQUM7WUFDbEMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7U0FDaEUsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxVQUFVLEdBQUcsSUFBSSx1REFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLEtBQUksQ0FBQyxPQUFPLEdBQWtCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVELEtBQUksQ0FBQyxPQUFPLEdBQWtCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVELElBQU0sWUFBWSxHQUFHLDBEQUFhLENBQUM7WUFDakMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFNLFVBQVUsR0FBRywwREFBYSxDQUFDO1lBQy9CLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ3pCLFdBQVcsRUFBRSxPQUFPO1NBQ3JCLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxVQUFVLEdBQXlCLDBEQUFhLENBQUM7WUFDcEQsR0FBRyxFQUFFLEdBQUc7WUFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDekIsV0FBVyxFQUFFLEdBQUc7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLEtBQUssR0FBRywwREFBYSxDQUFDO1lBQ3pCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQU0sV0FBVyxHQUFHLDBEQUFhLENBQUM7WUFDaEMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxTQUFTLEdBQW1CLDBEQUFhLENBQUM7WUFDN0MsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILElBQU0sY0FBYyxHQUFHLDBEQUFhLENBQUM7WUFDbkMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQztTQUN2RCxDQUFDLENBQUM7UUFDSCxLQUFJLENBQUMsT0FBTyxHQUFtQiwwREFBYSxDQUFDO1lBQzNDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzNCLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxXQUFXLEdBQW1CLDBEQUFhLENBQUM7WUFDL0MsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFHLENBQUMsQ0FBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxLQUFJLENBQUMsV0FBVyxHQUFtQiwwREFBYSxDQUFDO1lBQy9DLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzNCLENBQUMsQ0FBQztRQUNILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNoRCxJQUFNLFVBQVUsR0FBRyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUM5QyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDNUIsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBQ0QsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzVCLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEMsQ0FBQztZQUNELElBQU0sU0FBUyxHQUFHLDBEQUFhLENBQUM7Z0JBQzlCLEdBQUcsRUFBRSxRQUFRO2dCQUNiLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixNQUFNLEVBQUU7b0JBQ047d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO2lCQUNGO2dCQUNELFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFRCxLQUFJLENBQUMsV0FBVyxHQUFHLFVBQUMsS0FBYTtZQUMvQixJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGlEQUFRLENBQUM7WUFDM0IscUpBQXFKO1lBQ3JKLHNIQUFzSDtZQUN0SCxrWUFBa1k7U0FDblksQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekQsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMzRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7SUFDL0MsQ0FBQztJQUtILG1CQUFDO0FBQUQsQ0FBQyxDQS9HeUMsaURBQVEsR0ErR2pEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIMkM7QUFFNUM7SUFHRSxrQkFBWSxXQUFxQjtRQUFqQyxpQkErQkM7UUFFRCxTQUFJLEdBQUc7WUFDTCxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQztnQkFDbkUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDM0QsQ0FBQztRQUNILENBQUMsQ0FBQztRQUVGLFNBQUksR0FBRztZQUNMLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQztRQUVGLGdCQUFXLEdBQUc7WUFDWixPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBRUYsc0JBQWlCLEdBQUc7WUFDbEIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUMsQ0FBQztRQWhEQSxJQUFJLENBQUMsYUFBYSxHQUFHLDBEQUFhLENBQUM7WUFDakMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO1NBQ2hFLENBQUMsQ0FBQztRQUNILElBQU0sT0FBTyxHQUFHLDBEQUFhLENBQUM7WUFDNUIsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQUNILElBQU0sS0FBSyxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO1lBQ2pDLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQy9DLElBQU0sU0FBUyxHQUFHLDBEQUFhLENBQUM7Z0JBQzlCLEdBQUcsRUFBRSxHQUFHO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QixXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUM1QixDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFzQiwwREFBYSxDQUFDO1lBQ3RELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDO1lBQ3pDLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFtQkgsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkQyQztBQUU1QztJQUtFLHdCQUFZLFVBQW1CO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsMERBQWEsQ0FBQztZQUN2QixHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUNsQixDQUFDLENBQUM7UUFDSCxJQUFNLEtBQUssR0FBRywwREFBYSxDQUFDO1lBQzFCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQWtCLDBEQUFhLENBQUM7WUFDMUMsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksVUFBVSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQWtCLDBEQUFhLENBQUM7Z0JBQzFDLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQzthQUM3QyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDMkM7QUFDTjtBQUd0QztJQWVFLGtCQUFZLElBQVksRUFBRSxJQUFjO1FBQXhDLGlCQWlCQztRQUNELFNBQUksR0FBRzs7WUFDTCxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXRELElBQUksS0FBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDbEMsSUFBTSxjQUFjLEdBQXNCLEtBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzlELElBQU0sYUFBYSxHQUFzQixLQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM1RCxJQUNFLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSTtvQkFDcEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUN4QyxDQUFDO29CQUNELGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxDQUFDO3FCQUFNLENBQUM7b0JBQ04sY0FBYyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDMUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pDLENBQUM7cUJBQU0sQ0FBQztvQkFDTixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEMsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLEtBQUksQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7Z0JBQ3JDLElBQU0sU0FBUyxHQUFzQixLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN2RCxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUM3QyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDNUIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksS0FBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUUsQ0FBQztnQkFDakMsSUFBTSxXQUFXLEdBQUcsV0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsMENBQUUsV0FBVyxDQUFDO2dCQUNqRSxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDOUIsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxXQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSwwQ0FBRSxXQUFXLEVBQUUsQ0FBQztZQUNqRCxDQUFDO1lBRUQsSUFBSSxLQUFJLENBQUMsUUFBUSxLQUFLLGFBQWEsRUFBRSxDQUFDO2dCQUNwQyxXQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLDBDQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDLENBQUM7UUExREEsSUFBSSxDQUFDLElBQUksR0FBb0IsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDcEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksR0FBRywwREFBYSxDQUFDO1lBQ3hCLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQU0sVUFBVSxHQUFHLElBQUksbURBQVUsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUEyQ0QsdUJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRjJDO0FBQ0U7QUFDWjtBQUVsQztJQUE2QyxtQ0FBUTtJQUluRCx5QkFBWSxRQUFrQjtRQUM1QixrQkFBSyxZQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsU0FBQztRQXlCakMsbUJBQWEsR0FBRztZQUNkLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDM0MsSUFBTSxLQUFLLEdBQUcsMERBQWEsQ0FBQztnQkFDMUIsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUM5QixDQUFDLENBQUM7WUFFSCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsSUFBWTtnQkFDckMsaUVBQWEsQ0FBQztvQkFDWixHQUFHLEVBQUUsS0FBSztvQkFDVixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzFCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDO1lBSkYsQ0FJRSxDQUFDO1lBRUwsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ3RCLElBQU0sYUFBYSxHQUFHLDBEQUFhLENBQUM7b0JBQ2xDLEdBQUcsRUFBRSxLQUFLO29CQUNWLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3QixDQUFDLENBQUM7Z0JBQ0gsSUFBTSxnQkFBZ0IsR0FBRztvQkFDdkIsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUNoQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUMxQyxDQUFDO29CQUNGLElBQ0UsZ0JBQWdCLElBQUksQ0FBQzt3QkFDckIsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsRUFDbkQsQ0FBQzt3QkFDRCxPQUFPLFVBQVUsQ0FBQztvQkFDcEIsQ0FBQzt5QkFBTSxJQUNMLGdCQUFnQixJQUFJLEdBQUc7d0JBQ3ZCLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxDQUFDOzRCQUN4QixPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLEVBQ25ELENBQUM7d0JBQ0QsT0FBTyxTQUFTLENBQUM7b0JBQ25CLENBQUM7eUJBQU0sQ0FBQzt3QkFDTixPQUFPLFVBQVUsQ0FBQztvQkFDcEIsQ0FBQztnQkFDSCxDQUFDLENBQUM7Z0JBQ0YsSUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtvQkFDOUMsU0FBUyxFQUFFLE9BQU87b0JBQ2xCLFNBQVMsRUFBRSxNQUFNO2lCQUNsQixDQUFDLENBQUM7Z0JBQ0gsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDcEMsSUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM5QyxJQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FDbkMsNERBQWEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBRSxDQUMzQyxDQUFDO2dCQUNGLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ25ELElBQU0sV0FBVyxHQUFHLGlCQUFpQixDQUNuQyxnREFBVyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFFLENBQ3pDLENBQUM7Z0JBQ0YsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDbkQsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQzVCLDBDQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMseUJBQU8sQ0FDeEQsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDcEMsSUFBTSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsb0NBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUM7Z0JBQ2xFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3RDLElBQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLGdEQUFXLGdCQUFnQixFQUFFLENBQUUsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssa0JBQWtCLEVBQUUsQ0FBQztvQkFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztxQkFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssaUJBQWlCLEVBQUUsQ0FBQztvQkFDcEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7cUJBQU0sQ0FBQztvQkFDTixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELGFBQWEsQ0FBQyxNQUFNLENBQ2xCLElBQUksRUFDSixTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWCxJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sQ0FDUCxDQUFDO2dCQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBMUdBLElBQU0sYUFBYSxHQUFHLDBEQUFhLENBQUM7WUFDbEMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxVQUFVLEdBQUcsSUFBSSx1REFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLEtBQUksQ0FBQyxPQUFPLEdBQWtCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVELElBQU0sS0FBSyxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDbEIsV0FBVyxFQUFFLFNBQVM7U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGNBQWMsR0FBbUIsMERBQWEsQ0FBQztZQUNsRCxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQztTQUN6QyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV4QyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDeEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztJQUN4QyxDQUFDO0lBcUZILHNCQUFDO0FBQUQsQ0FBQyxDQWpINEMsaURBQVEsR0FpSHBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIMkM7QUFDVjtBQUNZO0FBQ1o7QUFFbEM7SUFBOEMsb0NBQVE7SUFvQnBELDBCQUFZLFFBQWtCO1FBQzVCLGtCQUFLLFlBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxTQUFDO1FBRWhDLElBQU0sS0FBSyxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDbEIsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBTSxhQUFhLEdBQUcsMERBQWEsQ0FBQztZQUNsQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztTQUN4QyxDQUFDLENBQUM7UUFFSCxJQUFNLFVBQVUsR0FBRyxJQUFJLHVEQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMsS0FBSSxDQUFDLE9BQU8sR0FBa0IsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUQsS0FBSSxDQUFDLE9BQU8sR0FBa0IsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFNUQsS0FBSSxDQUFDLGFBQWEsR0FBbUIsMERBQWEsQ0FBQztZQUNqRCxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxZQUFZLEdBQXNCLDBEQUFhLENBQUM7WUFDbkQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkIsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLGVBQWUsR0FBc0IsMERBQWEsQ0FBQztZQUN0RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsaUJBQWlCLEdBQXNCLDBEQUFhLENBQUM7WUFDeEQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkIsV0FBVyxFQUFFLGFBQWE7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLGVBQWUsR0FBc0IsMERBQWEsQ0FBQztZQUN0RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsWUFBWSxHQUFzQiwwREFBYSxDQUFDO1lBQ25ELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDO1lBQ3RDLFdBQVcsRUFBRSxVQUFVO1NBQ3hCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLEdBQW1CLDBEQUFhLENBQUM7WUFDakQsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO1NBQzdELENBQUMsQ0FBQztRQUVILElBQU0sZUFBZSxHQUFHLDBEQUFhLENBQUM7WUFDcEMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFFSCxJQUFNLG9CQUFvQixHQUFHLDBEQUFhLENBQUM7WUFDekMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxlQUFlLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBRUgsSUFBTSwyQkFBMkIsR0FBRywwREFBYSxDQUFDO1lBQ2hELEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDMUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxlQUFlLEdBQUcsMERBQWEsQ0FBQztZQUNwQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxvQkFBb0IsR0FBbUIsMERBQWEsQ0FBQztZQUN4RCxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUVILElBQU0sNkJBQTZCLEdBQUcsMERBQWEsQ0FBQztZQUNsRCxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzFDLENBQUMsQ0FBQztRQUVILElBQU0saUJBQWlCLEdBQUcsMERBQWEsQ0FBQztZQUN0QyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLHdCQUF3QixHQUFHLDBEQUFhLENBQUM7WUFDNUMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUN6QyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsd0JBQXdCLEdBQXNCLDBEQUFhLENBQUM7WUFDL0QsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUM7WUFDNUMsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLHdCQUF3QixHQUFzQiwwREFBYSxDQUFDO1lBQy9ELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDO1lBQzVDLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxzQkFBc0IsR0FBc0IsMERBQWEsQ0FBQztZQUM3RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQztZQUM1QyxXQUFXLEVBQUUsR0FBRztTQUNqQixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsbUJBQW1CLEdBQXNCLDBEQUFhLENBQUM7WUFDMUQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUM7WUFDNUMsV0FBVyxFQUFFLEdBQUc7U0FDakIsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLHFCQUFxQixHQUFzQiwwREFBYSxDQUFDO1lBQzVELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDO1lBQzVDLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxxQkFBcUIsR0FBc0IsMERBQWEsQ0FBQztZQUM1RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQztZQUM1QyxXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsc0JBQXNCLEdBQW1CLDBEQUFhLENBQUM7WUFDMUQsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsbUJBQW1CLEdBQXNCLDBEQUFhLENBQUM7WUFDMUQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUM7WUFDN0MsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGVBQWUsR0FBc0IsMERBQWEsQ0FBQztZQUN0RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQztTQUM5QyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaURBQVEsQ0FBQztZQUMzQiw4Z0JBQXFHO1lBQ3JHLDhHQUE4RztZQUM5Ryx5TkFBeU47WUFDek4sOENBQThDO1NBQy9DLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpELElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbEQsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FDbEMsS0FBSSxDQUFDLHNCQUFzQixFQUMzQixLQUFJLENBQUMsd0JBQXdCLEVBQzdCLEtBQUksQ0FBQyx3QkFBd0IsRUFDN0IsS0FBSSxDQUFDLHNCQUFzQixFQUMzQixLQUFJLENBQUMsbUJBQW1CLEVBQ3hCLEtBQUksQ0FBQyxxQkFBcUIsRUFDMUIsS0FBSSxDQUFDLHFCQUFxQixDQUMzQixDQUFDO1FBQ0YsNkJBQTZCLENBQUMsTUFBTSxDQUNsQyxpQkFBaUIsRUFDakIsS0FBSSxDQUFDLHdCQUF3QixDQUM5QixDQUFDO1FBQ0YsMkJBQTJCLENBQUMsTUFBTSxDQUNoQyxlQUFlLEVBQ2YsS0FBSSxDQUFDLG9CQUFvQixDQUMxQixDQUFDO1FBQ0Ysb0JBQW9CLENBQUMsTUFBTSxDQUN6QiwyQkFBMkIsRUFDM0IsNkJBQTZCLENBQzlCLENBQUM7UUFDRixlQUFlLENBQUMsTUFBTSxDQUNwQixvQkFBb0IsRUFDcEIsS0FBSSxDQUFDLG1CQUFtQixFQUN4QixLQUFJLENBQUMsZUFBZSxDQUNyQixDQUFDO1FBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFM0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDeEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQ3ZCLEtBQUksQ0FBQyxZQUFZLEVBQ2pCLEtBQUksQ0FBQyxlQUFlLEVBQ3BCLEtBQUksQ0FBQyxpQkFBaUIsRUFDdEIsS0FBSSxDQUFDLGVBQWUsRUFDcEIsS0FBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztRQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7SUFDMUUsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxDQTlONkMsaURBQVEsR0E4TnJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTzJDO0FBQ1Y7QUFFbEM7SUFBMkMsaUNBQVE7SUFHakQsdUJBQVksUUFBa0I7UUFDNUIsa0JBQUssWUFBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFNBQUM7UUFDN0IsS0FBSSxDQUFDLGFBQWEsR0FBc0IsMERBQWEsQ0FBQztZQUNwRCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDLENBQUM7UUFDSCxLQUFJLENBQUMsY0FBYyxHQUFzQiwwREFBYSxDQUFDO1lBQ3JELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ25CLFdBQVcsRUFBRSxpQkFBaUI7U0FDL0IsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGFBQWEsR0FBc0IsMERBQWEsQ0FBQztZQUNwRCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUUsU0FBUztTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFNLGFBQWEsR0FBRywwREFBYSxDQUFDO1lBQ2xDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDO1NBQ3ZDLENBQUMsQ0FBQztRQUNILElBQU0sWUFBWSxHQUFHLDBEQUFhLENBQUM7WUFDakMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNuQyxDQUFDLENBQUM7UUFDSCxJQUFNLEtBQUssR0FBRywwREFBYSxDQUFDO1lBQzFCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFDSCxJQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU07WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsSUFBTSxhQUFhLEdBQUcsMERBQWEsQ0FBQztvQkFDbEMsR0FBRyxFQUFFLE1BQU07b0JBQ1gsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixXQUFXLEVBQUUsTUFBTTtpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxhQUFhLENBQUMsTUFBTSxDQUNsQixLQUFJLENBQUMsYUFBYSxFQUNsQixLQUFJLENBQUMsY0FBYyxFQUNuQixLQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO1FBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBQ2xDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQ0F2RDBDLGlEQUFRLEdBdURsRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEYyxTQUFTLGFBQWEsQ0FBQyxRQUFtQjtJQUN2RCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDbkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDekQsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDOzs7Ozs7O1VDL0JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFDSTtBQUNZO0FBRWxELElBQU0sUUFBUSxHQUFHLElBQUksaUVBQVEsRUFBRSxDQUFDO0FBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksK0NBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3M/YjM3NiIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9BcHAudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvY29udHJvbGxlci9Db250cm9sbGVyR2FtZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvY29udHJvbGxlci9Db250cm9sbGVyUmVjb3Jkc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvY29udHJvbGxlci9Db250cm9sbGVyU2V0dGluZ3NQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL2NvbnRyb2xsZXIvQ29udHJvbGxlclN0YXJ0UGFnZS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9tb2RlbC9FeGFtcGxlcy50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9tb2RlbC9HYW1lRGF0YS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9tb2RlbC9TdG9yYWdlR2FtZURhdGEudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvbW9kZWwvZXhhbXBsZXNBcnJheXMudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9JbmZvQmxvY2sudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9WaWV3Rm9vdGVyLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld0dhbWVQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld0hlbHAudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9WaWV3TmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy92aWV3L1ZpZXdQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld1JlY29yZHNQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld1NldHRpbmdzUGFnZS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy92aWV3L1ZpZXdTdGFydFBhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9yZXR1cm5FbGVtZW50LnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBDb250cm9sbGVyR2FtZVBhZ2UgZnJvbSAnLi9jb250cm9sbGVyL0NvbnRyb2xsZXJHYW1lUGFnZSc7XG5pbXBvcnQgQ29udHJvbGxlclJlY29yZHNQYWdlIGZyb20gJy4vY29udHJvbGxlci9Db250cm9sbGVyUmVjb3Jkc1BhZ2UnO1xuaW1wb3J0IENvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgZnJvbSAnLi9jb250cm9sbGVyL0NvbnRyb2xsZXJTZXR0aW5nc1BhZ2UnO1xuaW1wb3J0IENvbnRyb2xsZXJTdGFydFBhZ2UgZnJvbSAnLi9jb250cm9sbGVyL0NvbnRyb2xsZXJTdGFydFBhZ2UnO1xuaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IGlPYmpGb3JMUyBmcm9tICcuL21vZGVsL2lPYmpGb3JMUyc7XG5pbXBvcnQgVmlld0dhbWVQYWdlIGZyb20gJy4vdmlldy9WaWV3R2FtZVBhZ2UnO1xuaW1wb3J0IFZpZXdSZWNvcmRzUGFnZSBmcm9tICcuL3ZpZXcvVmlld1JlY29yZHNQYWdlJztcbmltcG9ydCBWaWV3U2V0dGluZ3NQYWdlIGZyb20gJy4vdmlldy9WaWV3U2V0dGluZ3NQYWdlJztcbmltcG9ydCBWaWV3U3RhcnRQYWdlIGZyb20gJy4vdmlldy9WaWV3U3RhcnRQYWdlJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGdhbWVEYXRhOiBHYW1lRGF0YTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZ2FtZURhdGEgPSBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQYWdlc1ZpZXdzKCkge1xuICAgIGNvbnN0IHZpZXdTdGFydFBhZ2UgPSBuZXcgVmlld1N0YXJ0UGFnZSh0aGlzLmdhbWVEYXRhKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldFZpZXdTdGFydFBhZ2Uodmlld1N0YXJ0UGFnZSk7XG4gICAgY29uc3Qgdmlld1NldHRpbmdzUGFnZSA9IG5ldyBWaWV3U2V0dGluZ3NQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Vmlld1NldHRpbmdzUGFnZSh2aWV3U2V0dGluZ3NQYWdlKTtcbiAgICBjb25zdCB2aWV3R2FtZVBhZ2UgPSBuZXcgVmlld0dhbWVQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Vmlld0dhbWVQYWdlKHZpZXdHYW1lUGFnZSk7XG4gICAgY29uc3Qgdmlld1JlY29yZHNQYWdlID0gbmV3IFZpZXdSZWNvcmRzUGFnZSh0aGlzLmdhbWVEYXRhKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldFZpZXdSZWNvcmRzUGFnZSh2aWV3UmVjb3Jkc1BhZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDb250cm9sbGVycygpIHtcbiAgICBjb25zdCBjb250cm9sbGVyU3RhcnRQYWdlID0gbmV3IENvbnRyb2xsZXJTdGFydFBhZ2UodGhpcy5nYW1lRGF0YSk7XG4gICAgY29uc3QgY29udHJvbGxlclNldHRpbmdzUGFnZSA9IG5ldyBDb250cm9sbGVyU2V0dGluZ3NQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIGNvbnN0IGNvbnRyb2xsZXJHYW1lUGFnZSA9IG5ldyBDb250cm9sbGVyR2FtZVBhZ2UodGhpcy5nYW1lRGF0YSk7XG4gICAgY29uc3QgY29udHJvbGxlclJlY29yZHNQYWdlID0gbmV3IENvbnRyb2xsZXJSZWNvcmRzUGFnZSh0aGlzLmdhbWVEYXRhKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldENvbnRyb2xsZXJTdGFydFBhZ2UoY29udHJvbGxlclN0YXJ0UGFnZSk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRDb250cm9sbGVyU2V0dGluZ3NQYWdlKGNvbnRyb2xsZXJTZXR0aW5nc1BhZ2UpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Q29udHJvbGxlckdhbWVQYWdlKGNvbnRyb2xsZXJHYW1lUGFnZSk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRDb250cm9sbGVyUmVjb3Jkc1BhZ2UoY29udHJvbGxlclJlY29yZHNQYWdlKTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0dWFsaXplRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBzdHJpbmdEYXRhOiBzdHJpbmcgfCBudWxsID1cbiAgICAgIHRoaXMuZ2FtZURhdGEuc3RvcmFnZUdhbWVEYXRhLmxvYWRGcm9tTFMoKTtcbiAgICBsZXQgcGFyc2VkT2JqZWN0OiBpT2JqRm9yTFMgPSB7XG4gICAgICBleGFtcGxlczogW10sXG4gICAgICBtaXN0YWtlczogW10sXG4gICAgICBvcGVyYXRpb246ICcnLFxuICAgICAgc2NvcmU6IDAsXG4gICAgICBnYW1lVGltZTogMCxcbiAgICAgIG51bU1pc3Rha2VzOiAwLFxuICAgICAgbnVtRXhhbXBsZXM6IDAsXG4gICAgICByZWNvcmRzOiBbXSxcbiAgICB9O1xuICAgIGlmIChzdHJpbmdEYXRhICE9PSBudWxsKSB7XG4gICAgICBwYXJzZWRPYmplY3QgPSA8aU9iakZvckxTPkpTT04ucGFyc2Uoc3RyaW5nRGF0YSk7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldEV4YW1wbGVzKHBhcnNlZE9iamVjdC5leGFtcGxlcyk7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldE1pc3Rha2VzKHBhcnNlZE9iamVjdC5taXN0YWtlcyk7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldE9wZXJhdGlvbihwYXJzZWRPYmplY3Qub3BlcmF0aW9uKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0U2NvcmUocGFyc2VkT2JqZWN0LnNjb3JlKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0UmVjb3JkcyhwYXJzZWRPYmplY3QucmVjb3Jkcyk7XG4gICAgfVxuICB9O1xuXG4gIG5ldygpIHtcbiAgICB0aGlzLmFjdHVhbGl6ZURhdGEoKTtcbiAgICB0aGlzLmFkZFBhZ2VzVmlld3MoKTtcbiAgICB0aGlzLmFkZENvbnRyb2xsZXJzKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRDb250cm9sbGVyU3RhcnRQYWdlKCk/LnN0YXJ0TGlzdGVuQnV0dG9ucygpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Q29udHJvbGxlclNldHRpbmdzUGFnZSgpPy5zdGFydExpc3RlbkJ1dHRvbnMoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldENvbnRyb2xsZXJHYW1lUGFnZSgpPy5zdGFydExpc3RlbkV2ZW50cygpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Q29udHJvbGxlclJlY29yZHNQYWdlKCk/LnN0YXJ0TGlzdGVuTWVudSgpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld1N0YXJ0UGFnZSgpPy5zaG93KCk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgaUV4YW1wbGUgZnJvbSAnLi4vbW9kZWwvaUV4YW1wbGUnO1xuaW1wb3J0IGlSZWNvcmQgZnJvbSAnLi4vbW9kZWwvaVJlY29yZCc7XG5pbXBvcnQgSW5mb0Jsb2NrIGZyb20gJy4uL3ZpZXcvSW5mb0Jsb2NrJztcbmltcG9ydCBWaWV3R2FtZVBhZ2UgZnJvbSAnLi4vdmlldy9WaWV3R2FtZVBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyR2FtZVBhZ2Uge1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIHZpZXdHYW1lUGFnZTogVmlld0dhbWVQYWdlO1xuICBhbnN3ZXJGaWVsZDogSFRNTERpdkVsZW1lbnQ7XG4gIGluZm9CbG9jazogSW5mb0Jsb2NrO1xuICBjdXJyZW50RXhhbXBsZTogaUV4YW1wbGUgfCBudWxsO1xuICBuYXZIb21lOiBIVE1MTElFbGVtZW50O1xuICBuYXZIZWxwOiBIVE1MTElFbGVtZW50O1xuICBoZWxwQ2xvc2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBrZXlzV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG4gIGFyckV4YW1wbGVzOiBpRXhhbXBsZVtdO1xuICBzdGFydEV4YW1wbGVUaW1lOiBEYXRlIHwgbnVsbDtcbiAgYmxvY2tCdXR0b25zOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWVEYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZ2FtZURhdGEgPSBnYW1lRGF0YTtcbiAgICB0aGlzLnZpZXdHYW1lUGFnZSA9IDxWaWV3R2FtZVBhZ2U+Z2FtZURhdGEuZ2V0Vmlld0dhbWVQYWdlKCk7XG4gICAgdGhpcy5hbnN3ZXJGaWVsZCA9IHRoaXMudmlld0dhbWVQYWdlLmFuc3dlckZpZWxkO1xuICAgIHRoaXMuaW5mb0Jsb2NrID0gbmV3IEluZm9CbG9jayhnYW1lRGF0YSk7XG4gICAgdGhpcy5jdXJyZW50RXhhbXBsZSA9IG51bGw7XG4gICAgdGhpcy5uYXZIb21lID0gPEhUTUxMSUVsZW1lbnQ+dGhpcy52aWV3R2FtZVBhZ2UubmF2SG9tZTtcbiAgICB0aGlzLm5hdkhlbHAgPSA8SFRNTExJRWxlbWVudD50aGlzLnZpZXdHYW1lUGFnZS5uYXZIZWxwO1xuICAgIHRoaXMua2V5c1dyYXBwZXIgPSB0aGlzLnZpZXdHYW1lUGFnZS5rZXlzV3JhcHBlcjtcbiAgICB0aGlzLmFyckV4YW1wbGVzID0gW107XG4gICAgdGhpcy5oZWxwQ2xvc2VCdXR0b24gPSB0aGlzLnZpZXdHYW1lUGFnZS5oZWxwQ2xvc2VCdXR0b247XG4gICAgdGhpcy5zdGFydEV4YW1wbGVUaW1lID0gbnVsbDtcbiAgICB0aGlzLmJsb2NrQnV0dG9ucyA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnROZXh0RXhhbXBsZSA9ICgpID0+IHtcbiAgICB0aGlzLmFyckV4YW1wbGVzID0gdGhpcy5nYW1lRGF0YS5nZXRFeGFtcGxlcygpO1xuICAgIGNvbnN0IGV4YW1wbGU6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy52aWV3R2FtZVBhZ2UuZXhhbXBsZTtcbiAgICBpZiAodGhpcy5hcnJFeGFtcGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy5nYW1lRGF0YS5nZXRTY29yZSgpID09PSAwKSB7XG4gICAgICAgIHRoaXMuaW5mb0Jsb2NrLnNob3dJbnN0cnVjdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmZvQmxvY2suc2hvd1N0YXRpc3RpY3MoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlld0dhbWVQYWdlLnVwZGF0ZVNjb3JlKCk7XG4gICAgICB0aGlzLnN0YXJ0RXhhbXBsZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgbmV4dEV4YW1wbGUgPSA8aUV4YW1wbGU+dGhpcy5hcnJFeGFtcGxlcy5wb3AoKTtcbiAgICAgIHRoaXMuY3VycmVudEV4YW1wbGUgPSBuZXh0RXhhbXBsZTtcbiAgICAgIGV4YW1wbGUuaW5uZXJUZXh0ID0gYCR7bmV4dEV4YW1wbGUuZXhhbXBsZX0gPWA7XG4gICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCA9ICc/Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlY29yZDogaVJlY29yZCA9IHtcbiAgICAgICAgb3BlcmF0aW9uOiB0aGlzLmdhbWVEYXRhLmdldE9wZXJhdGlvbigpLFxuICAgICAgICBudW1FeGFtcGxlczogdGhpcy5nYW1lRGF0YS5nZXROdW1FeGFtcGxlcygpLFxuICAgICAgICBudW1NaXN0YWtlczogdGhpcy5nYW1lRGF0YS5nZXROdW1NaXN0YWtlcygpLFxuICAgICAgICBzY29yZTogdGhpcy5nYW1lRGF0YS5nZXRTY29yZSgpLFxuICAgICAgICB0aW1lOiB0aGlzLmdhbWVEYXRhLmdldEdhbWVUaW1lKCksXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICB9O1xuICAgICAgdGhpcy5nYW1lRGF0YS5hZGRSZWNvcmQocmVjb3JkKTtcbiAgICAgIHRoaXMuaW5mb0Jsb2NrLnNob3dFbmRHYW1lKCk7XG4gICAgICBleGFtcGxlLmlubmVyVGV4dCA9IGDQnNC+0LvQvtC00LXRhmA7XG4gICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCA9ICchISEnO1xuICAgICAgdGhpcy5jdXJyZW50RXhhbXBsZSA9IG51bGw7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldEV4YW1wbGVzKFtdKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXdHYW1lUGFnZS5oaWRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld1JlY29yZHNQYWdlKCk/LnNob3coKTtcbiAgICAgIH0sIDM1MDApO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGFkZEV4YW1wbGVUb01pc3Rha2VzID0gKGV4YW1wbGU6IGlFeGFtcGxlKSA9PiB7XG4gICAgY29uc3QgYXJyTWlzdGFrZXMgPVxuICAgICAgdGhpcy5nYW1lRGF0YS5nZXRNaXN0YWtlcygpID09PSB1bmRlZmluZWRcbiAgICAgICAgPyBbXVxuICAgICAgICA6IHRoaXMuZ2FtZURhdGEuZ2V0TWlzdGFrZXMoKTtcbiAgICBjb25zdCBleGFtcGxlc1RleHRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGFyck1pc3Rha2VzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGV4YW1wbGVzVGV4dHMucHVzaChpdGVtLmV4YW1wbGUpXG4gICAgfSlcbiAgICBpZiAoIWV4YW1wbGVzVGV4dHMuaW5jbHVkZXMoZXhhbXBsZS5leGFtcGxlKSkge1xuICAgICAgYXJyTWlzdGFrZXMucHVzaChleGFtcGxlKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0TWlzdGFrZXMoYXJyTWlzdGFrZXMpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGluY3JlYXNlU2NvcmUgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2NvcmUgPSB0aGlzLmdhbWVEYXRhLmdldFNjb3JlKCk7XG4gICAgY29uc3QgbmV3U2NvcmUgPSBjdXJyZW50U2NvcmUgKyBudW07XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRTY29yZShuZXdTY29yZSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBjaGVja0Fuc3dlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5jdXJyZW50RXhhbXBsZSAhPT0gbnVsbCAmJiB0aGlzLmFuc3dlckZpZWxkLnRleHRDb250ZW50ICE9PSAnPz8nKSB7XG4gICAgICBpZiAoTnVtYmVyKHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0KSA9PT0gdGhpcy5jdXJyZW50RXhhbXBsZS5hbnN3ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRFeGFtcGxlVGltZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHNvbHZlVGltZSA9XG4gICAgICAgICAgICBuZXcgRGF0ZSgpLnZhbHVlT2YoKSAtIHRoaXMuc3RhcnRFeGFtcGxlVGltZS52YWx1ZU9mKCk7XG4gICAgICAgICAgY29uc3QgZ2FtZVRpbWUgPSB0aGlzLmdhbWVEYXRhLmdldEdhbWVUaW1lKCk7XG4gICAgICAgICAgdGhpcy5nYW1lRGF0YS5zZXRHYW1lVGltZShnYW1lVGltZSArIHNvbHZlVGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lRGF0YS5zZXRFeGFtcGxlcyh0aGlzLmFyckV4YW1wbGVzKTtcbiAgICAgICAgdGhpcy5pbmZvQmxvY2suc2hvd1JpZ2h0QW5zd2VyKCk7XG4gICAgICAgIHRoaXMuaW5jcmVhc2VTY29yZSh0aGlzLmN1cnJlbnRFeGFtcGxlLnNjb3JlKTtcbiAgICAgICAgdGhpcy52aWV3R2FtZVBhZ2UudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgdGhpcy5ibG9ja0J1dHRvbnMgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXJ0TmV4dEV4YW1wbGUoKTtcbiAgICAgICAgICB0aGlzLmJsb2NrQnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICB9LCAxMTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRFeGFtcGxlLnNjb3JlID4gMCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEV4YW1wbGUuc2NvcmUgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV4YW1wbGVUb01pc3Rha2VzKHRoaXMuY3VycmVudEV4YW1wbGUpO1xuICAgICAgICB0aGlzLmluZm9CbG9jay5zaG93V3JvbmdBbnN3ZXIoKTtcbiAgICAgICAgdGhpcy5ibG9ja0J1dHRvbnMgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmJsb2NrQnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaW5mb0Jsb2NrLnNob3dJbnN0cnVjdGlvbigpO1xuICAgICAgICAgIHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0ID0gJz8/JztcbiAgICAgICAgfSwgMTEwMCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgY29udHJvbFByZXNzZWRLZXkgPSAoa2V5VmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmKHRoaXMuYmxvY2tCdXR0b25zID09PSBmYWxzZSkge1xuICAgICAgc3dpdGNoIChrZXlWYWx1ZSkge1xuICAgICAgICBjYXNlICfDlyc6XG4gICAgICAgICAgdGhpcy5hbnN3ZXJGaWVsZC5pbm5lclRleHQgPSAnPz8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfinJMnOlxuICAgICAgICAgIHRoaXMuY2hlY2tBbnN3ZXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAodGhpcy5hbnN3ZXJGaWVsZC5pbm5lclRleHQubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCAhPT0gJzEwJykgfHxcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0ID09PSAnPz8nXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCA9IGtleVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCArPSBrZXlWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgY2hlY2tQcmVzc2VkQnV0dG9uID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbicpKSB7XG4gICAgICBidXR0b24uYmx1cigpO1xuICAgICAgdGhpcy5jb250cm9sUHJlc3NlZEtleShidXR0b24ubmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgc3RhcnRMaXN0ZW5OdW1CdXR0b25zID0gKCkgPT4ge1xuICAgIHRoaXMua2V5c1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgdGhpcy5jaGVja1ByZXNzZWRCdXR0b24oZXZlbnQpXG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIGNoZWNrS2V5Ym9hcmRCdXR0b25zID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgIGlmICgha2V5Lm1hdGNoKC9cXEQvZykpIHtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWRLZXkoa2V5KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0JhY2tzcGFjZScgfHwga2V5ID09PSAnRGVsZXRlJyB8fCBrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkS2V5KCfDlycpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkS2V5KCfinJMnKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGFydExpc3RlbktleWJvYXJkQnV0dG9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0tleWJvYXJkQnV0dG9ucyhldmVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGFydExpc3Rlbk1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5uYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5nYW1lRGF0YS5zdG9yYWdlR2FtZURhdGEuc2F2ZVRvTFMoXG4gICAgICAgIHRoaXMuZ2FtZURhdGEsXG4gICAgICAgIDxpRXhhbXBsZT50aGlzLmN1cnJlbnRFeGFtcGxlXG4gICAgICApO1xuICAgICAgdGhpcy52aWV3R2FtZVBhZ2UuaGlkZSgpO1xuICAgICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3U3RhcnRQYWdlKCk/LnNob3coKTtcbiAgICB9KTtcbiAgICB0aGlzLm5hdkhlbHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnZpZXdHYW1lUGFnZS52aWV3SGVscD8uc2hvdygpO1xuICAgIH0pO1xuICAgIHRoaXMuaGVscENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIHRoaXMudmlld0dhbWVQYWdlLnZpZXdIZWxwPy5oaWRlKClcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgc3RhcnRMaXN0ZW5DbG9zZVdpbmRvdyA9ICgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5nYW1lRGF0YS5zdG9yYWdlR2FtZURhdGEuc2F2ZVRvTFMoXG4gICAgICAgIHRoaXMuZ2FtZURhdGEsXG4gICAgICAgIDxpRXhhbXBsZT50aGlzLmN1cnJlbnRFeGFtcGxlXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHN0YXJ0TGlzdGVuRXZlbnRzKCkge1xuICAgIHRoaXMuc3RhcnRMaXN0ZW5OdW1CdXR0b25zKCk7XG4gICAgdGhpcy5zdGFydExpc3RlbktleWJvYXJkQnV0dG9ucygpO1xuICAgIHRoaXMuc3RhcnRMaXN0ZW5NZW51KCk7XG4gICAgdGhpcy5zdGFydExpc3RlbkNsb3NlV2luZG93KCk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgVmlld1JlY29yZHNQYWdlIGZyb20gJy4uL3ZpZXcvVmlld1JlY29yZHNQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclJlY29yZHNQYWdlIHtcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xuICB2aWV3UmVjb3Jkc1BhZ2U6IFZpZXdSZWNvcmRzUGFnZTtcbiAgbmF2SG9tZTogSFRNTExJRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZ2FtZURhdGEgPSBkYXRhO1xuICAgIHRoaXMudmlld1JlY29yZHNQYWdlID0gPFZpZXdSZWNvcmRzUGFnZT50aGlzLmdhbWVEYXRhLmdldFZpZXdSZWNvcmRzUGFnZSgpO1xuICAgIHRoaXMubmF2SG9tZSA9IDxIVE1MTElFbGVtZW50PnRoaXMuZ2FtZURhdGEuZ2V0Vmlld1JlY29yZHNQYWdlKCk/Lm5hdkhvbWU7XG4gIH1cblxuICBzdGFydExpc3Rlbk1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5uYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy52aWV3UmVjb3Jkc1BhZ2UuaGlkZSgpO1xuICAgICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3U3RhcnRQYWdlKCk/LnNob3coKTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCBFeGFtcGxlcyBmcm9tICcuLi9tb2RlbC9FeGFtcGxlcyc7XG5pbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IGlFeGFtcGxlIGZyb20gJy4uL21vZGVsL2lFeGFtcGxlJztcbmltcG9ydCBWaWV3U2V0dGluZ3NQYWdlIGZyb20gJy4uL3ZpZXcvVmlld1NldHRpbmdzUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJTZXR0aW5nc1BhZ2Uge1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIGJ1dHRvbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xuICBuYXZIb21lOiBIVE1MTElFbGVtZW50O1xuICBuYXZIZWxwOiBIVE1MTElFbGVtZW50O1xuICBoZWxwQ2xvc2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZXROdW1FeHByZXNzaW9uc0J1dHRvbnM6IEhUTUxEaXZFbGVtZW50O1xuICBkZXNjcmlwdGlvbk51bUV4YW1wbGVzOiBIVE1MRGl2RWxlbWVudDtcbiAgcmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlT25lRXhhbXBsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGFkZE1vc3RFeGFtcGxlc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGFkZE1hbnlFeGFtcGxlc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGFkZE9uZUV4YW1wbGVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZXR0aW5nc0FwcGx5QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgc2V0dGluZ3NDbG9zZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHNldHRpbmdzQmxvY2s6IEhUTUxEaXZFbGVtZW50O1xuICB2aWV3U2V0dGluZ3NQYWdlOiBWaWV3U2V0dGluZ3NQYWdlO1xuICB0ZW1wT3BlcmF0aW9uOiBzdHJpbmc7XG4gIHRlbXBFeGFtcGxlczogaUV4YW1wbGVbXTtcblxuICBjb25zdHJ1Y3RvcihnYW1lRGF0YTogR2FtZURhdGEpIHtcbiAgICB0aGlzLmdhbWVEYXRhID0gZ2FtZURhdGE7XG4gICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlID0gPFZpZXdTZXR0aW5nc1BhZ2U+Z2FtZURhdGEuZ2V0Vmlld1NldHRpbmdzUGFnZSgpO1xuICAgIHRoaXMuYnV0dG9uV3JhcHBlciA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5idXR0b25XcmFwcGVyO1xuICAgIHRoaXMubmF2SG9tZSA9IDxIVE1MTElFbGVtZW50PnRoaXMudmlld1NldHRpbmdzUGFnZS5uYXZIb21lO1xuICAgIHRoaXMubmF2SGVscCA9IDxIVE1MTElFbGVtZW50PnRoaXMudmlld1NldHRpbmdzUGFnZS5uYXZIZWxwO1xuICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcyA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5kZXNjcmlwdGlvbk51bUV4YW1wbGVzO1xuICAgIHRoaXMuc2V0TnVtRXhwcmVzc2lvbnNCdXR0b25zID0gPEhUTUxEaXZFbGVtZW50PihcbiAgICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5zZXROdW1FeHByZXNzaW9uc0J1dHRvbnNcbiAgICApO1xuICAgIHRoaXMucmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uID1cbiAgICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5yZW1vdmVNb3N0RXhhbXBsZXNCdXR0b247XG4gICAgdGhpcy5yZW1vdmVNYW55RXhhbXBsZXNCdXR0b24gPVxuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLnJlbW92ZU1hbnlFeGFtcGxlc0J1dHRvbjtcbiAgICB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24gPSB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UucmVtb3ZlT25lRXhhbXBsZUJ1dHRvbjtcbiAgICB0aGlzLmFkZE1vc3RFeGFtcGxlc0J1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5hZGRNb3N0RXhhbXBsZXNCdXR0b247XG4gICAgdGhpcy5hZGRNYW55RXhhbXBsZXNCdXR0b24gPSB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UuYWRkTWFueUV4YW1wbGVzQnV0dG9uO1xuICAgIHRoaXMuYWRkT25lRXhhbXBsZUJ1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5hZGRPbmVFeGFtcGxlQnV0dG9uO1xuICAgIHRoaXMuc2V0dGluZ3NBcHBseUJ1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5zZXR0aW5nc0FwcGx5QnV0dG9uO1xuICAgIHRoaXMuc2V0dGluZ3NDbG9zZUJ1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5pbmZvQ2xvc2VCdXR0b247XG4gICAgdGhpcy5oZWxwQ2xvc2VCdXR0b24gPSB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UuaGVscENsb3NlQnV0dG9uO1xuICAgIHRoaXMuc2V0dGluZ3NCbG9jayA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5zZXR0aW5nc0Jsb2NrO1xuICAgIHRoaXMudGVtcE9wZXJhdGlvbiA9ICcnO1xuICAgIHRoaXMudGVtcEV4YW1wbGVzID0gW107XG4gIH1cblxuICBhZGRFeGFtcGxlc0RhdGEgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3BlcmF0aW9uVGV4dCA9IHRoaXMudGVtcE9wZXJhdGlvbi5zbGljZSgwLCAxKTtcbiAgICBsZXQgZXhhbXBsZXMgPSBbXTtcbiAgICBpZiAob3BlcmF0aW9uVGV4dCA9PT0gJyEnKSB7XG4gICAgICBleGFtcGxlcyA9IHRoaXMuZ2FtZURhdGEuZ2V0TWlzdGFrZXMoKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0TWlzdGFrZXMoW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGFtcGxlcyA9IG5ldyBFeGFtcGxlcyhvcGVyYXRpb25UZXh0KS5yZXR1cm4oKTtcbiAgICB9XG4gICAgdGhpcy50ZW1wRXhhbXBsZXMgPSBleGFtcGxlcztcbiAgfTtcblxuICBtYWtlU2V0dGluZ3NCbG9ja0FjdGl2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldHRpbmdzQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnaW5mb3JtYXRpb25fdW5hY3RpdmUnKTtcbiAgfTtcblxuICBtYWtlU2V0dGluZ3NCbG9ja1VuYWN0aXZlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zZXR0aW5nc0Jsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaW5mb3JtYXRpb25fdW5hY3RpdmUnKSkge1xuICAgICAgdGhpcy5zZXR0aW5nc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uX3VuYWN0aXZlJyk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgYXBwbHlUZW1wU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRPcGVyYXRpb24odGhpcy50ZW1wT3BlcmF0aW9uKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldEV4YW1wbGVzKHRoaXMudGVtcEV4YW1wbGVzKTtcbiAgfTtcblxuICBzZXRFeGFtcGxlcyA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnRlbXBPcGVyYXRpb24gPSBidXR0b24uaW5uZXJIVE1MO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uT3BlcmF0aW9uID0gPEhUTUxFbGVtZW50PihcbiAgICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5kZXNjcmlwdGlvbk9wZXJhdGlvblxuICAgICk7XG4gICAgZGVzY3JpcHRpb25PcGVyYXRpb24udGV4dENvbnRlbnQgPSBidXR0b24uaW5uZXJIVE1MO1xuICAgIHRoaXMubWFrZVNldHRpbmdzQmxvY2tBY3RpdmUoKTtcbiAgICB0aGlzLmFkZEV4YW1wbGVzRGF0YSgpO1xuICAgIGNvbnN0IG51bUV4YW1wbGVzID0gdGhpcy50ZW1wRXhhbXBsZXMubGVuZ3RoO1xuICAgIGNvbnN0IGxhc3ROdW1FeGFtcGxlcyA9IHRoaXMuZ2FtZURhdGEuZ2V0UmVjb3JkcygpWzBdICE9PSB1bmRlZmluZWQgPyB0aGlzLmdhbWVEYXRhLmdldFJlY29yZHMoKVswXS5udW1FeGFtcGxlcyA6IDEwO1xuICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCA9XG4gICAgICBudW1FeGFtcGxlcyA+PSBsYXN0TnVtRXhhbXBsZXMgPyBTdHJpbmcobGFzdE51bUV4YW1wbGVzKSA6IFN0cmluZyhudW1FeGFtcGxlcyk7XG4gIH07XG5cbiAgY2hlY2tBY3RpdmVTZXROdW1CdXR0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG51bUV4YW1wbGVzID0gdGhpcy50ZW1wRXhhbXBsZXMubGVuZ3RoO1xuICAgIGlmIChOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSA9PSBudW1FeGFtcGxlcykge1xuICAgICAgdGhpcy5hZGRPbmVFeGFtcGxlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRPbmVFeGFtcGxlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSArIDEwID4gbnVtRXhhbXBsZXMpIHtcbiAgICAgIHRoaXMuYWRkTWFueUV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRNYW55RXhhbXBsZXNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpICsgNTAgPiBudW1FeGFtcGxlcykge1xuICAgICAgdGhpcy5hZGRNb3N0RXhhbXBsZXNCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZE1vc3RFeGFtcGxlc0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgLSA1MCA8PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSAtIDEwIDw9IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVNYW55RXhhbXBsZXNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpIC0gMSA8PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgc2V0R2FtZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uJykpIHtcbiAgICAgIHRoaXMuc2V0RXhhbXBsZXMoZXZlbnQpO1xuICAgICAgdGhpcy5jaGVja0FjdGl2ZVNldE51bUJ1dHRvbnMoKTtcbiAgICB9XG4gIH07XG5cbiAgY2hhbmdlTnVtRXhhbXBsZXMgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uJykpIHtcbiAgICAgIGlmIChidXR0b24gPT09IHRoaXMucmVtb3ZlT25lRXhhbXBsZUJ1dHRvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQgPSBTdHJpbmcoXG4gICAgICAgICAgTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgLSAxXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiA9PT0gdGhpcy5yZW1vdmVNYW55RXhhbXBsZXNCdXR0b24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50ID0gU3RyaW5nKFxuICAgICAgICAgIE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpIC0gMTBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uID09PSB0aGlzLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQgPSBTdHJpbmcoXG4gICAgICAgICAgTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgLSA1MFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gPT09IHRoaXMuYWRkT25lRXhhbXBsZUJ1dHRvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQgPSBTdHJpbmcoXG4gICAgICAgICAgTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgKyAxXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiA9PT0gdGhpcy5hZGRNYW55RXhhbXBsZXNCdXR0b24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50ID0gU3RyaW5nKFxuICAgICAgICAgIE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpICsgMTBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCA9IFN0cmluZyhcbiAgICAgICAgICBOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSArIDUwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrQWN0aXZlU2V0TnVtQnV0dG9ucygpO1xuICAgIH1cbiAgfTtcblxuICBhcHBseVNldHRpbmdzID0gKCkgPT4ge1xuICAgIHRoaXMudGVtcEV4YW1wbGVzLmxlbmd0aCA9IE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0R2FtZVRpbWUoMCk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXROdW1NaXN0YWtlcygwKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldFNjb3JlKDApO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0TnVtRXhhbXBsZXMoXG4gICAgICBOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KVxuICAgICk7XG4gICAgdGhpcy5hcHBseVRlbXBTZXR0aW5ncygpO1xuICAgIHRoaXMubWFrZVNldHRpbmdzQmxvY2tVbmFjdGl2ZSgpO1xuICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5oaWRlKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRDb250cm9sbGVyR2FtZVBhZ2UoKT8uc3RhcnROZXh0RXhhbXBsZSgpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld0dhbWVQYWdlKCk/LnNob3coKTtcbiAgfTtcblxuICBzdGFydExpc3RlbkJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5idXR0b25XcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zZXRHYW1lKTtcbiAgICB0aGlzLnNldE51bUV4cHJlc3Npb25zQnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMuY2hhbmdlTnVtRXhhbXBsZXNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3NBcHBseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYXBwbHlTZXR0aW5ncyk7XG4gICAgdGhpcy5zZXR0aW5nc0Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgdGhpcy5tYWtlU2V0dGluZ3NCbG9ja1VuYWN0aXZlXG4gICAgKTtcbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICB0aGlzLnZpZXdTZXR0aW5nc1BhZ2Uudmlld0hlbHA/LmhpZGUoKVxuICAgICk7XG4gICAgdGhpcy5uYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLmhpZGUoKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld1N0YXJ0UGFnZSgpPy5zaG93KCk7XG4gICAgfSk7XG4gICAgdGhpcy5uYXZIZWxwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLnZpZXdIZWxwPy5zaG93KCk7XG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IFZpZXdTdGFydFBhZ2UgZnJvbSAnLi4vdmlldy9WaWV3U3RhcnRQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclN0YXJ0UGFnZSB7XG4gIGdhbWVEYXRhOiBHYW1lRGF0YTtcbiAgdmlld1N0YXJ0UGFnZTogVmlld1N0YXJ0UGFnZTtcbiAgYnV0dG9uTmV3R2FtZTogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ1dHRvbkxvYWRHYW1lOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYnV0dG9uUmVjb3JkczogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZ2FtZURhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5nYW1lRGF0YSA9IGdhbWVEYXRhO1xuICAgIHRoaXMudmlld1N0YXJ0UGFnZSA9IDxWaWV3U3RhcnRQYWdlPmdhbWVEYXRhLmdldFZpZXdTdGFydFBhZ2UoKTtcbiAgICB0aGlzLmJ1dHRvbk5ld0dhbWUgPSB0aGlzLnZpZXdTdGFydFBhZ2UuYnV0dG9uTmV3R2FtZTtcbiAgICB0aGlzLmJ1dHRvbkxvYWRHYW1lID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMudmlld1N0YXJ0UGFnZS5idXR0b25Mb2FkR2FtZTtcbiAgICB0aGlzLmJ1dHRvblJlY29yZHMgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy52aWV3U3RhcnRQYWdlLmJ1dHRvblJlY29yZHM7XG4gIH1cbiAgc2hvd1JlY29yZHMgPSAoKSA9PiB7XG4gICAgdGhpcy52aWV3U3RhcnRQYWdlLmhpZGUoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdSZWNvcmRzUGFnZSgpPy5zaG93KCk7XG4gIH07XG4gIHN0YXJ0TmV3R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnZpZXdTdGFydFBhZ2UuaGlkZSgpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld1NldHRpbmdzUGFnZSgpPy5zaG93KCk7XG4gIH07XG4gIHN0YXJ0TG9hZEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy52aWV3U3RhcnRQYWdlLmhpZGUoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldENvbnRyb2xsZXJHYW1lUGFnZSgpPy5zdGFydE5leHRFeGFtcGxlKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3R2FtZVBhZ2UoKT8uc2hvdygpO1xuICB9O1xuICBzdGFydExpc3RlbkJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5idXR0b25OZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGFydE5ld0dhbWUpO1xuICAgIHRoaXMuYnV0dG9uTG9hZEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnN0YXJ0TG9hZEdhbWUpO1xuICAgIHRoaXMuYnV0dG9uUmVjb3Jkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1JlY29yZHMpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZGl2aWRlQXJyYXksIG11bHRpcGxlQXJyLCBzdWJzdHJBcnJheSwgc3VtQXJyYXkgfSBmcm9tICcuL2V4YW1wbGVzQXJyYXlzJztcbmltcG9ydCBpRXhhbXBsZSBmcm9tICcuL2lFeGFtcGxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZXMge1xuICBleGFtcGxlc0FycjogaUV4YW1wbGVbXTtcblxuICBjb25zdHJ1Y3RvcihvcGVyYXRpb246IHN0cmluZykge1xuICAgIHRoaXMuZXhhbXBsZXNBcnIgPVxuICAgICAgb3BlcmF0aW9uID09PSAnKydcbiAgICAgICAgPyBzdW1BcnJheVxuICAgICAgICA6IG9wZXJhdGlvbiA9PT0gJy0nXG4gICAgICAgICAgPyBzdWJzdHJBcnJheVxuICAgICAgICAgICAgOiBvcGVyYXRpb24gPT09ICfDlydcbiAgICAgICAgICAgICAgPyBtdWx0aXBsZUFycjpcbiAgICAgICAgICAgICAgZGl2aWRlQXJyYXk7XG4gIH1cblxuICBwcml2YXRlIHNodWZmbGUgPSAoKTogaUV4YW1wbGVbXSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBpRXhhbXBsZVtdID0gW107XG4gICAgZm9yICg7IHRoaXMuZXhhbXBsZXNBcnIubGVuZ3RoID4gMDsgKSB7XG4gICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmV4YW1wbGVzQXJyLmxlbmd0aCk7XG4gICAgICByZXN1bHQucHVzaCh0aGlzLmV4YW1wbGVzQXJyW3JhbmRvbU51bV0pO1xuICAgICAgdGhpcy5leGFtcGxlc0FyciA9IFtcbiAgICAgICAgLi4udGhpcy5leGFtcGxlc0Fyci5zbGljZSgwLCByYW5kb21OdW0pLFxuICAgICAgICAuLi50aGlzLmV4YW1wbGVzQXJyLnNsaWNlKHJhbmRvbU51bSArIDEsIHRoaXMuZXhhbXBsZXNBcnIubGVuZ3RoKSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuKCkge1xuICAgIHJldHVybiB0aGlzLnNodWZmbGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbnRyb2xsZXJHYW1lUGFnZSBmcm9tICcuLi9jb250cm9sbGVyL0NvbnRyb2xsZXJHYW1lUGFnZSc7XG5pbXBvcnQgQ29udHJvbGxlclJlY29yZHNQYWdlIGZyb20gJy4uL2NvbnRyb2xsZXIvQ29udHJvbGxlclJlY29yZHNQYWdlJztcbmltcG9ydCBDb250cm9sbGVyU2V0dGluZ3NQYWdlIGZyb20gJy4uL2NvbnRyb2xsZXIvQ29udHJvbGxlclNldHRpbmdzUGFnZSc7XG5pbXBvcnQgQ29udHJvbGxlclN0YXJ0UGFnZSBmcm9tICcuLi9jb250cm9sbGVyL0NvbnRyb2xsZXJTdGFydFBhZ2UnO1xuaW1wb3J0IFZpZXdHYW1lUGFnZSBmcm9tICcuLi92aWV3L1ZpZXdHYW1lUGFnZSc7XG5pbXBvcnQgVmlld1JlY29yZHNQYWdlIGZyb20gJy4uL3ZpZXcvVmlld1JlY29yZHNQYWdlJztcbmltcG9ydCBWaWV3U2V0dGluZ3NQYWdlIGZyb20gJy4uL3ZpZXcvVmlld1NldHRpbmdzUGFnZSc7XG5pbXBvcnQgVmlld1N0YXJ0UGFnZSBmcm9tICcuLi92aWV3L1ZpZXdTdGFydFBhZ2UnO1xuaW1wb3J0IGlFeGFtcGxlIGZyb20gJy4vaUV4YW1wbGUnO1xuaW1wb3J0IGlSZWNvcmQgZnJvbSAnLi9pUmVjb3JkJztcbmltcG9ydCBTdG9yYWdlR2FtZURhdGEgZnJvbSAnLi9TdG9yYWdlR2FtZURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRGF0YSB7XG4gIHByaXZhdGUgY29udHJvbGxlckdhbWVQYWdlOiBDb250cm9sbGVyR2FtZVBhZ2UgfCBudWxsO1xuICBwcml2YXRlIGNvbnRyb2xsZXJSZWNvcmRzUGFnZTogQ29udHJvbGxlclJlY29yZHNQYWdlIHwgbnVsbDtcbiAgcHJpdmF0ZSBjb250cm9sbGVyU2V0dGluZ3NQYWdlOiBDb250cm9sbGVyU2V0dGluZ3NQYWdlIHwgbnVsbDtcbiAgcHJpdmF0ZSBjb250cm9sbGVyU3RhcnRQYWdlOiBDb250cm9sbGVyU3RhcnRQYWdlIHwgbnVsbDtcbiAgcHJpdmF0ZSBleGFtcGxlczogaUV4YW1wbGVbXTtcbiAgcHJpdmF0ZSBnYW1lVGltZTogbnVtYmVyO1xuICBwcml2YXRlIG1pc3Rha2VzOiBpRXhhbXBsZVtdO1xuICBwcml2YXRlIG51bUV4YW1wbGVzOiBudW1iZXI7XG4gIHByaXZhdGUgbnVtTWlzdGFrZXM6IG51bWJlcjtcbiAgcHJpdmF0ZSBvcGVyYXRpb246IHN0cmluZztcbiAgcHJpdmF0ZSByZWNvcmRzOiBpUmVjb3JkW107XG4gIHByaXZhdGUgc2NvcmU6IG51bWJlcjtcbiAgcHVibGljIHN0b3JhZ2VHYW1lRGF0YTogU3RvcmFnZUdhbWVEYXRhO1xuICBwcml2YXRlIHZpZXdHYW1lUGFnZTogVmlld0dhbWVQYWdlIHwgbnVsbDtcbiAgcHJpdmF0ZSB2aWV3UmVjb3Jkc1BhZ2U6IFZpZXdSZWNvcmRzUGFnZSB8IG51bGw7XG4gIHByaXZhdGUgdmlld1NldHRpbmdzUGFnZTogVmlld1NldHRpbmdzUGFnZSB8IG51bGw7XG4gIHByaXZhdGUgdmlld1N0YXJ0UGFnZTogVmlld1N0YXJ0UGFnZSB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250cm9sbGVyR2FtZVBhZ2UgPSBudWxsO1xuICAgIHRoaXMuY29udHJvbGxlclJlY29yZHNQYWdlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgPSBudWxsO1xuICAgIHRoaXMuY29udHJvbGxlclN0YXJ0UGFnZSA9IG51bGw7XG4gICAgdGhpcy5leGFtcGxlcyA9IFtdO1xuICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xuICAgIHRoaXMubWlzdGFrZXMgPSBbXTtcbiAgICB0aGlzLm51bUV4YW1wbGVzID0gMDtcbiAgICB0aGlzLm51bU1pc3Rha2VzID0gMDtcbiAgICB0aGlzLm9wZXJhdGlvbiA9ICcnO1xuICAgIHRoaXMucmVjb3JkcyA9IFtdO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuc3RvcmFnZUdhbWVEYXRhID0gbmV3IFN0b3JhZ2VHYW1lRGF0YSgpO1xuICAgIHRoaXMudmlld0dhbWVQYWdlID0gbnVsbDtcbiAgICB0aGlzLnZpZXdSZWNvcmRzUGFnZSA9IG51bGw7XG4gICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlID0gbnVsbDtcbiAgICB0aGlzLnZpZXdTdGFydFBhZ2UgPSBudWxsO1xuICB9XG5cbiAgc2V0Vmlld1JlY29yZHNQYWdlID0gKHZpZXdSZWNvcmRzUGFnZTogVmlld1JlY29yZHNQYWdlKSA9PiB7XG4gICAgdGhpcy52aWV3UmVjb3Jkc1BhZ2UgPSB2aWV3UmVjb3Jkc1BhZ2U7XG4gIH07XG5cbiAgZ2V0Vmlld1JlY29yZHNQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdSZWNvcmRzUGFnZTtcbiAgfTtcblxuICBzZXRDb250cm9sbGVyUmVjb3Jkc1BhZ2UgPSAoY29udHJvbGxlclJlY29yZHNQYWdlOiBDb250cm9sbGVyUmVjb3Jkc1BhZ2UpID0+IHtcbiAgICB0aGlzLmNvbnRyb2xsZXJSZWNvcmRzUGFnZSA9IGNvbnRyb2xsZXJSZWNvcmRzUGFnZTtcbiAgfTtcblxuICBnZXRDb250cm9sbGVyUmVjb3Jkc1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlclJlY29yZHNQYWdlO1xuICB9O1xuXG4gIHNldFZpZXdTdGFydFBhZ2UgPSAodmlld1N0YXJ0UGFnZTogVmlld1N0YXJ0UGFnZSkgPT4ge1xuICAgIHRoaXMudmlld1N0YXJ0UGFnZSA9IHZpZXdTdGFydFBhZ2U7XG4gIH07XG5cbiAgZ2V0Vmlld1N0YXJ0UGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52aWV3U3RhcnRQYWdlO1xuICB9O1xuXG4gIHNldFZpZXdTZXR0aW5nc1BhZ2UgPSAodmlld1NldHRpbmdzUGFnZTogVmlld1NldHRpbmdzUGFnZSkgPT4ge1xuICAgIHRoaXMudmlld1NldHRpbmdzUGFnZSA9IHZpZXdTZXR0aW5nc1BhZ2U7XG4gIH07XG5cbiAgZ2V0Vmlld1NldHRpbmdzUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52aWV3U2V0dGluZ3NQYWdlO1xuICB9O1xuXG4gIHNldFZpZXdHYW1lUGFnZSA9ICh2aWV3R2FtZVBhZ2U6IFZpZXdHYW1lUGFnZSkgPT4ge1xuICAgIHRoaXMudmlld0dhbWVQYWdlID0gdmlld0dhbWVQYWdlO1xuICB9O1xuXG4gIGdldFZpZXdHYW1lUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52aWV3R2FtZVBhZ2U7XG4gIH07XG5cbiAgc2V0Q29udHJvbGxlclN0YXJ0UGFnZSA9IChjb250cm9sbGVyU3RhcnRQYWdlOiBDb250cm9sbGVyU3RhcnRQYWdlKSA9PiB7XG4gICAgdGhpcy5jb250cm9sbGVyU3RhcnRQYWdlID0gY29udHJvbGxlclN0YXJ0UGFnZTtcbiAgfTtcblxuICBnZXRDb250cm9sbGVyU3RhcnRQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJTdGFydFBhZ2U7XG4gIH07XG5cbiAgc2V0Q29udHJvbGxlclNldHRpbmdzUGFnZSA9IChcbiAgICBjb250cm9sbGVyU2V0dGluZ3NQYWdlOiBDb250cm9sbGVyU2V0dGluZ3NQYWdlXG4gICkgPT4ge1xuICAgIHRoaXMuY29udHJvbGxlclNldHRpbmdzUGFnZSA9IGNvbnRyb2xsZXJTZXR0aW5nc1BhZ2U7XG4gIH07XG5cbiAgZ2V0Q29udHJvbGxlclNldHRpbmdzUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyU2V0dGluZ3NQYWdlO1xuICB9O1xuXG4gIHNldENvbnRyb2xsZXJHYW1lUGFnZSA9IChjb250cm9sbGVyR2FtZVBhZ2U6IENvbnRyb2xsZXJHYW1lUGFnZSkgPT4ge1xuICAgIHRoaXMuY29udHJvbGxlckdhbWVQYWdlID0gY29udHJvbGxlckdhbWVQYWdlO1xuICB9O1xuXG4gIGdldENvbnRyb2xsZXJHYW1lUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyR2FtZVBhZ2U7XG4gIH07XG5cbiAgc2V0RXhhbXBsZXMgPSAoZXhhbXBsZXM6IGlFeGFtcGxlW10pID0+IHtcbiAgICB0aGlzLmV4YW1wbGVzID0gZXhhbXBsZXM7XG4gIH07XG5cbiAgZ2V0RXhhbXBsZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZXhhbXBsZXM7XG4gIH07XG5cbiAgc2V0TWlzdGFrZXMgPSAobWlzdGFrZXM6IGlFeGFtcGxlW10pID0+IHtcbiAgICB0aGlzLm1pc3Rha2VzID0gbWlzdGFrZXM7XG4gIH07XG5cbiAgZ2V0TWlzdGFrZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubWlzdGFrZXM7XG4gIH07XG5cbiAgc2V0T3BlcmF0aW9uID0gKG9wZXJhdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gIH07XG5cbiAgZ2V0T3BlcmF0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm9wZXJhdGlvbjtcbiAgfTtcblxuICBzZXRTY29yZSA9IChudW06IG51bWJlcikgPT4ge1xuICAgIHRoaXMuc2NvcmUgPSBudW07XG4gIH07XG5cbiAgZ2V0U2NvcmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc2NvcmU7XG4gIH07XG5cbiAgc2V0R2FtZVRpbWUgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICB0aGlzLmdhbWVUaW1lID0gbnVtO1xuICB9O1xuXG4gIGdldEdhbWVUaW1lID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdhbWVUaW1lO1xuICB9O1xuXG4gIHNldE51bU1pc3Rha2VzID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5udW1NaXN0YWtlcyA9IG51bTtcbiAgfTtcblxuICBnZXROdW1NaXN0YWtlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5udW1NaXN0YWtlcztcbiAgfTtcblxuICBhZGRSZWNvcmQgPSAocmVjb3JkOiBpUmVjb3JkKSA9PiB7XG4gICAgaWYgKHRoaXMucmVjb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnJlY29yZHMgPSBbcmVjb3JkLCAuLi50aGlzLnJlY29yZHNdO1xuICAgICAgaWYgKHRoaXMucmVjb3Jkcy5sZW5ndGggPiAxMCkge1xuICAgICAgICB0aGlzLnJlY29yZHMubGVuZ3RoID0gMTA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UmVjb3JkcyhbcmVjb3JkXSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFJlY29yZHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3JkcztcbiAgfTtcblxuICBzZXRSZWNvcmRzID0gKGFyclJlY29yZHM6IGlSZWNvcmRbXSkgPT4ge1xuICAgIHRoaXMucmVjb3JkcyA9IGFyclJlY29yZHM7XG4gIH07XG5cbiAgZ2V0TnVtRXhhbXBsZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubnVtRXhhbXBsZXM7XG4gIH07XG5cbiAgc2V0TnVtRXhhbXBsZXMgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICB0aGlzLm51bUV4YW1wbGVzID0gbnVtO1xuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4vR2FtZURhdGEnO1xuaW1wb3J0IGlFeGFtcGxlIGZyb20gJy4vaUV4YW1wbGUnO1xuaW1wb3J0IGlPYmpGb3JMUyBmcm9tICcuL2lPYmpGb3JMUyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2VHYW1lRGF0YSB7XG4gIHNhdmVUb0xTKGdhbWVEYXRhOiBHYW1lRGF0YSwgZXhhbXBsZTogaUV4YW1wbGUgfCBudWxsKSB7XG4gICAgY29uc3QgZGF0YU9iajogaU9iakZvckxTID0ge1xuICAgICAgZXhhbXBsZXM6IGdhbWVEYXRhLmdldEV4YW1wbGVzKCksXG4gICAgICBnYW1lVGltZTogZ2FtZURhdGEuZ2V0R2FtZVRpbWUoKSxcbiAgICAgIG1pc3Rha2VzOiBnYW1lRGF0YS5nZXRNaXN0YWtlcygpLFxuICAgICAgbnVtRXhhbXBsZXM6IGdhbWVEYXRhLmdldE51bUV4YW1wbGVzKCksXG4gICAgICBudW1NaXN0YWtlczogZ2FtZURhdGEuZ2V0TnVtTWlzdGFrZXMoKSxcbiAgICAgIG9wZXJhdGlvbjogZ2FtZURhdGEuZ2V0T3BlcmF0aW9uKCksXG4gICAgICBzY29yZTogZ2FtZURhdGEuZ2V0U2NvcmUoKSxcbiAgICAgIHJlY29yZHM6IGdhbWVEYXRhLmdldFJlY29yZHMoKSxcbiAgICB9O1xuICAgIGlmIChleGFtcGxlICE9PSBudWxsICYmICFnYW1lRGF0YS5nZXRFeGFtcGxlcygpLmluY2x1ZGVzKGV4YW1wbGUpKSB7XG4gICAgICBkYXRhT2JqLmV4YW1wbGVzLnB1c2goZXhhbXBsZSk7XG4gICAgfVxuICAgIGNvbnN0IHN0clRvU2F2ZSA9IEpTT04uc3RyaW5naWZ5KGRhdGFPYmopO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lRGF0YScsIHN0clRvU2F2ZSk7XG4gIH1cblxuICBsb2FkRnJvbUxTID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0ckZyb21MUyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lRGF0YScpO1xuICAgIHJldHVybiBzdHJGcm9tTFM7XG4gIH07XG59XG4iLCJjb25zdCBzdW1BcnJheSA9IFtcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMSArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMSArIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMSArIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTEsXHJcbiAgICAgIFwic2NvcmVcIjogMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTIsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTMsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTUsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMThcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyICsgMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMiArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyICsgNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMiArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyICsgN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMiArIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyICsgOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMyxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNixcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNyxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyMCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDQsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzICsgMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA1LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDcsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzICsgNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA4LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTEsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzICsgOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMyxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNixcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNyxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAyMCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNCArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNCArIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNCArIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTMsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTUsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1ICsgMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNSArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1ICsgNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNSArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1ICsgNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNSArIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTMsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1ICsgOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNixcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNyxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyMCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDcsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2ICsgMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA4LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTEsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2ICsgNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2ICsgOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNixcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNyxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyAxMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyAxM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyAxNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyMCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNyArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNyArIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTMsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNyArIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgMTNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4ICsgMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOCArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4ICsgM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOCArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTMsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4ICsgNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOCArIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4ICsgOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNyxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOCxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyAxMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyMCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgKyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDNcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOSArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTEsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5ICsgM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgKyA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOSArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5ICsgNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgKyA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOSArIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5ICsgOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOCxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgKyAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOSxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgKyAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyMCxcclxuICAgICAgXCJzY29yZVwiOiA0XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiAyXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMyxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNixcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNyxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOCxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOSxcclxuICAgICAgXCJzY29yZVwiOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTIsXHJcbiAgICAgIFwic2NvcmVcIjogM1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTMsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTUsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTMsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTUsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTUsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTUsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCArIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCArIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNSArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNSArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNSArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNSArIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNSArIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNiArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTcsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNiArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNiArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNiArIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNyArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNyArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNyArIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxOCArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTksXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxOCArIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxOSArIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNFxyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IHN1YnN0ckFycmF5ID0gW1xyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE5LFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE4LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSA5XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDExLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMThcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxOCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMThcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNyxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA4LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA1LFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDExLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNyAtIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgLSA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNiAtIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMTNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMTRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMTVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxNCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNSAtIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA1LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSAxMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSAxM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSAxNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDExLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCAtIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCAtIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gMTNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMixcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTMgLSA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyAtIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTMgLSA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMyAtIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gMTFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gMTJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgLSA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiAtIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgLSA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiAtIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgLSAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgLSAxMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgLSAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSAtIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExIC0gNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgLSA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSAtIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExIC0gN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgLSA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMSAtIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExIC0gMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIC0gMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDRcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgLSAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMCAtIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIC0gNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgLSA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMCAtIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIC0gN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgLSA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMCAtIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOSAtIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgLSA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOSAtIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgLSA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOCAtIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggLSAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA1LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOCAtIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggLSA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOCAtIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA1LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNyAtIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgLSA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IC0gNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNyAtIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNiAtIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgLSA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IC0gNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNSAtIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgLSAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IC0gM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNSAtIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNCAtIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgLSAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzIC0gMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMiAtIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgbXVsdGlwbGVBcnIgPSBbXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxIMOXIDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgw5cgMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMSDDlyAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxIMOXIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgw5cgNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA1LFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMSDDlyA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxIMOXIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgw5cgOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA4LFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMSDDlyA5XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxIMOXIDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMiDDlyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgw5cgM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMiDDlyA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzIMOXIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgw5cgM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDE4LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyA4XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDI0LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyA5XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDI3LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzMCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgw5cgMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDVcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNCDDlyAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDQwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNSDDlyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTUsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjUsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzAsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzUsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDAsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDUsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNiDDlyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzAsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNTQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNyDDlyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDcsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjEsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzUsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDksXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNTYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNjMsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDcwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOCDDlyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDAsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNTYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNjQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNzIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOSDDlyAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogNVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjcsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMzYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNDUsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNTQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNjMsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNzIsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogODEsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDkwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgw5cgMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA1XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMjAsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMCDDlyAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgw5cgNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0MCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNTAsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMCDDlyA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgw5cgN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA3MCxcclxuICAgICAgXCJzY29yZVwiOiA2XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogODAsXHJcbiAgICAgIFwic2NvcmVcIjogNlxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMCDDlyA5XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDkwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgw5cgMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAwLFxyXG4gICAgICBcInNjb3JlXCI6IDZcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IGRpdmlkZUFycmF5ID0gW1xyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAwIDogMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5MCA6IDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5MCA6IDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4MSA6IDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOSxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjgwIDogOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjgwIDogMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcyIDogOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNzIgOiA5XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3MCA6IDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3MCA6IDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDcsXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2NCA6IDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYzIDogN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNjMgOiA5XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDcsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2MCA6IDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2MCA6IDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1NiA6IDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjU2IDogOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNTQgOiA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1NCA6IDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUwIDogNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxMCxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUwIDogMTBcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA4XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQ5IDogN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNDggOiA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0OCA6IDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQ1IDogNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNDUgOiA5XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0MiA6IDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNyxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQyIDogN1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNDAgOiA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNDAgOiAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNDAgOiA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0MCA6IDhcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjM2IDogNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA5LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMzYgOiA5XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDQsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzNiA6IDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNixcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjM1IDogNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMzUgOiA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzMiA6IDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMyIDogOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMzAgOiAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMzAgOiAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDhcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMzAgOiA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzMCA6IDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjI4IDogNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjggOiA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDQsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyNyA6IDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOSxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjI3IDogOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjUgOiA1XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyNCA6IDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjI0IDogOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjQgOiA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyNCA6IDZcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIxIDogM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMjEgOiA3XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyMCA6IDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMTAsXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyMCA6IDEwXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogOFxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIyMCA6IDRcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIDogNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA0LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggOiAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxOCA6IDlcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IDogM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTggOiA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNiA6IDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogOCxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IDogOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAyLFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgOiA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDQsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNSA6IDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNSxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IDogNVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgOiAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDcsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxNCA6IDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIDogMlwiLFxyXG4gICAgICBcImFuc3dlclwiOiA2LFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgOiA2XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMiA6IDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIDogNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAzLFxyXG4gICAgICBcInNjb3JlXCI6IDlcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgOiAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgOiAxMFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgOiAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDUsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxMCA6IDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgOiAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDksXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI5IDogOVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOSA6IDNcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggOiAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDgsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI4IDogOFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiOCA6IDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogNCxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggOiA0XCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI3IDogMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA3LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNyA6IDdcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgOiAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDYsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI2IDogNlwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNiA6IDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMyxcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgOiAzXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDIsXHJcbiAgICAgIFwic2NvcmVcIjogOVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI1IDogMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiA1LFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNSA6IDVcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMSxcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgOiAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDQsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCI0IDogNFwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiNCA6IDJcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA5XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgOiAxXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDMsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIzIDogM1wiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9LFxyXG4gIHtcclxuICAgICAgXCJleGFtcGxlXCI6IFwiMiA6IDFcIixcclxuICAgICAgXCJhbnN3ZXJcIjogMixcclxuICAgICAgXCJzY29yZVwiOiA3XHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgOiAyXCIsXHJcbiAgICAgIFwiYW5zd2VyXCI6IDEsXHJcbiAgICAgIFwic2NvcmVcIjogN1xyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImV4YW1wbGVcIjogXCIxIDogMVwiLFxyXG4gICAgICBcImFuc3dlclwiOiAxLFxyXG4gICAgICBcInNjb3JlXCI6IDdcclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCB7c3VtQXJyYXksIHN1YnN0ckFycmF5LCBtdWx0aXBsZUFyciwgZGl2aWRlQXJyYXl9IiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb0Jsb2NrIHtcbiAgaW5mb0Jsb2NrOiBIVE1MRGl2RWxlbWVudDtcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5nYW1lRGF0YSA9IGRhdGE7XG4gICAgdGhpcy5pbmZvQmxvY2sgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy5nYW1lRGF0YS5nZXRWaWV3R2FtZVBhZ2UoKT8uaW5mb0Jsb2NrO1xuICB9XG5cbiAgc2hvd1JpZ2h0QW5zd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQktC10YDQvdC+ISc7XG4gICAgdGhpcy5pbmZvQmxvY2suY2xhc3NMaXN0LmFkZCgnZ2FtZS1pbmZvX19jb3JyZWN0Jyk7XG4gIH07XG5cbiAgc2hvd1dyb25nQW5zd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQndC10L/RgNCw0LLQuNC70YzQvdC+LiDQv9C+0L/RgNC+0LHRg9C5INC10YnQtSDRgNCw0LcuJztcbiAgICB0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuYWRkKCdnYW1lLWluZm9fX3dyb25nJyk7XG4gIH07XG5cbiAgdW5zdHlsZUluZm9CbG9jayA9ICgpID0+IHtcbiAgICBpZih0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWUtaW5mb19fY29ycmVjdCcpKSB7XG4gICAgICB0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLWluZm9fX2NvcnJlY3QnKVxuICAgIH1cbiAgICBpZih0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWUtaW5mb19fd3JvbmcnKSkge1xuICAgICAgdGhpcy5pbmZvQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1pbmZvX193cm9uZycpXG4gICAgfVxuICB9XG5cbiAgc2hvd0luc3RydWN0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMudW5zdHlsZUluZm9CbG9jaygpO1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQktCy0LXQtNC4INGH0LjRgdC70L4g0Lgg0L3QsNC20LzQuCDCq+Kck8K7Lic7XG4gIH07XG5cbiAgc2hvd1N0YXRpc3RpY3MgPSAoKSA9PiB7XG4gICAgdGhpcy51bnN0eWxlSW5mb0Jsb2NrKCk7XG4gICAgY29uc3QgZXhhbXBsZXNOdW0gPSB0aGlzLmdhbWVEYXRhLmdldEV4YW1wbGVzKCkubGVuZ3RoO1xuICAgIGNvbnN0IGkgPSBleGFtcGxlc051bSAlIDEwMDtcbiAgICBjb25zdCBleGFtcGxlc1dvcmQgPVxuICAgICAgaSAlIDEwID09PSAxICYmIChpIDwgMTAgfHwgaSA+IDIwKSAmJiBpICE9PSAxMVxuICAgICAgICA/ICfQv9GA0LjQvNC10YAnXG4gICAgICAgIDogaSAlIDEwIDwgNSAmJiBpICUgMTAgPiAwICYmIChpIDwgMTAgfHwgaSA+IDIwKVxuICAgICAgICAgID8gJ9C/0YDQuNC80LXRgNCwJ1xuICAgICAgICAgIDogJ9C/0YDQuNC80LXRgNC+0LInO1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVySFRNTCA9IGDQntGB0YLQsNC70L7RgdGMINGA0LXRiNC40YLRjCA8YnIvPjxzcGFuIGNsYXNzPVwiZ2FtZV9fc3RhdGlzdGljc1wiPiR7ZXhhbXBsZXNOdW19PC9zcGFuPiAke2V4YW1wbGVzV29yZH0uYDtcbiAgfTtcblxuICBzaG93RW5kR2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmluZm9CbG9jay5pbm5lclRleHQgPSAn0JLRgdC1INC/0YDQuNC80LXRgNGLINGA0LXRiNC10L3Riy4nO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdGb290ZXIge1xyXG4gIGZvb3RlcjogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmZvb3RlciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdmb290ZXInLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3RlciddLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdmb290ZXJfX3dyYXBwZXInXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29weXJpZ2h0ID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgIGNsYXNzZXM6IFsnZm9vdGVyX19ibG9jayddLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHRUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2stdGl0bGUnXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICfCqSwg0LTQuNC30LDQudC9OiAnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHRMaW5rID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2EnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxyXG4gICAgICBhdHRyaWI6IFtcclxuICAgICAgICB7IG5hbWU6ICdocmVmJywgdmFsdWU6ICdodHRwczovL2dpdGh1Yi5jb20vYS12LWdvcicgfSxcclxuICAgICAgICB7IG5hbWU6ICd0YXJnZXQnLCB2YWx1ZTogJ19ibGFuaycgfSxcclxuICAgICAgXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICfQkC7Qk9C+0YDQsdC10L3QutC+JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeWVhciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2snLCAnZm9vdGVyX195ZWFyJ10sXHJcbiAgICAgIHRleHRDb250ZW50OiAnMjAyNCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRlc2lnbiA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2snLCAnZm9vdGVyX19kZXNpZ24nXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGVzaWduVGl0bGUgPSByZXR1cm5FbGVtZW50KHtcclxuICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgY2xhc3NlczogWydmb290ZXJfX2Jsb2NrLXRpdGxlJ10sXHJcbiAgICAgIHRleHRDb250ZW50OiAn0JTQuNC30LDQudC9OiAnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkZXNpZ25MaW5rID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2EnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxyXG4gICAgICBhdHRyaWI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnaHJlZicsXHJcbiAgICAgICAgICB2YWx1ZTpcclxuICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDg0NDkzNjY4NzY5OTIzMjg5L2VkdWNhdGlvbmFsLWtpZHMtZ2FtZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG5hbWU6ICd0YXJnZXQnLCB2YWx1ZTogJ19ibGFuaycgfSxcclxuICAgICAgXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICdOLlBhbmR5YScsXHJcbiAgICB9KTtcclxuICAgIGNvcHlyaWdodC5hcHBlbmQoY29weXJpZ2h0VGl0bGUsIGNvcHlyaWdodExpbmspO1xyXG4gICAgZGVzaWduLmFwcGVuZChkZXNpZ25UaXRsZSwgZGVzaWduTGluayk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZChjb3B5cmlnaHQsIHllYXIsIGRlc2lnbik7XHJcbiAgICB0aGlzLmZvb3Rlci5hcHBlbmQod3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5mb290ZXI7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3SGVscCBmcm9tICcuL1ZpZXdIZWxwJztcbmltcG9ydCBWaWV3TmF2aWdhdGlvbiBmcm9tICcuL1ZpZXdOYXZpZ2F0aW9uJztcbmltcG9ydCBWaWV3UGFnZSBmcm9tICcuL1ZpZXdQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0dhbWVQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBhbnN3ZXJGaWVsZDogSFRNTERpdkVsZW1lbnQ7XG4gIGV4YW1wbGU6IEhUTUxEaXZFbGVtZW50O1xuICBoZWxwQ2xvc2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBpbmZvQmxvY2s6IEhUTUxEaXZFbGVtZW50O1xuICBrZXlzV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG4gIHNjb3JlVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuICB0aXRsZTogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZ2FtZURhdGE6IEdhbWVEYXRhKSB7XG4gICAgc3VwZXIoJ2dhbWVQYWdlJywgZ2FtZURhdGEpO1xuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAnaGVhZGVyX193cmFwcGVyJywgJ2dhbWVfX2hlYWRlci13cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBWaWV3TmF2aWdhdGlvbih0cnVlKTtcbiAgICB0aGlzLm5hdkhvbWUgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhvbWVCdXR0b24oKTtcbiAgICB0aGlzLm5hdkhlbHAgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhlbHBCdXR0b24oKTtcbiAgICBjb25zdCBzY29yZVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3Njb3JlX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3Qgc2NvcmVUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaDInLFxuICAgICAgY2xhc3NlczogWydzY29yZV9fdGl0bGUnXSxcbiAgICAgIHRleHRDb250ZW50OiAn0KHRh9C10YI6JyxcbiAgICB9KTtcbiAgICB0aGlzLnNjb3JlVmFsdWUgPSA8SFRNTFBhcmFncmFwaEVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdwJyxcbiAgICAgIGNsYXNzZXM6IFsnc2NvcmVfX3ZhbHVlJ10sXG4gICAgICB0ZXh0Q29udGVudDogJzAnLFxuICAgIH0pO1xuICAgIHRoaXMudGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gxJyxcbiAgICAgIGNsYXNzZXM6IFsndGl0bGUnXSxcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdnYW1lX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgdGhpcy5pbmZvQmxvY2sgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydnYW1lX19pbmZvJywgXCJnYW1lLWluZm9cIl0sXG4gICAgfSk7XG4gICAgY29uc3QgZXhhbXBsZVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2dhbWVfX2V4YW1wbGUtd3JhcHBlcicsICdleGFtcGxlX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgdGhpcy5leGFtcGxlID0gPEhUTUxEaXZFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZXhhbXBsZV9fdGV4dCddLFxuICAgIH0pO1xuICAgIHRoaXMuYW5zd2VyRmllbGQgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydleGFtcGxlX19pbnB1dCddLFxuICAgIH0pO1xuICAgIGNvbnN0IGtleXNUZXh0c0FyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAga2V5c1RleHRzQXJyLnB1c2goYCR7aX1gKTtcbiAgICB9XG4gICAga2V5c1RleHRzQXJyLnB1c2goJ8OXJywgJzAnLCAn4pyTJyk7XG4gICAgdGhpcy5rZXlzV3JhcHBlciA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2tleXNfX3dyYXBwZXInXSxcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNUZXh0c0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2xhc3Nlc0FyciA9IFsnYnV0dG9uJywgJ2tleXNfX2J1dHRvbiddO1xuICAgICAgaWYgKGtleXNUZXh0c0FycltpXSA9PT0gJ8OXJykge1xuICAgICAgICBjbGFzc2VzQXJyLnB1c2goJ2tleXNfX2NhbmNlbCcpO1xuICAgICAgfVxuICAgICAgaWYgKGtleXNUZXh0c0FycltpXSA9PT0gJ+KckycpIHtcbiAgICAgICAgY2xhc3Nlc0Fyci5wdXNoKCdrZXlzX19zdWJtaXQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleUJ1dHRvbiA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzQXJyLFxuICAgICAgICBhdHRyaWI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB2YWx1ZToga2V5c1RleHRzQXJyW2ldLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRleHRDb250ZW50OiBrZXlzVGV4dHNBcnJbaV0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMua2V5c1dyYXBwZXIuYXBwZW5kKGtleUJ1dHRvbik7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUaXRsZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy52aWV3SGVscCA9IG5ldyBWaWV3SGVscChbXG4gICAgICAn0JzQsNC60YHQuNC80LDQu9GM0L3QviDQstC+0LfQvNC+0LbQvdC+0LUg0YfQuNGB0LvQviDQtNC70Y8g0LLQstC+0LTQsCDigJQgwqsxMDDCuy4g0J/QvtGB0LvQtSDQstCy0L7QtNCwINGH0LjRgdC70LAg0YHQu9C10LTRg9C10YIg0L/QvtC00YLQstC10YDQtNC40YLRjCDRgdCy0L7QuSDQvtGC0LLQtdGCICjQvdCw0LbQsNGC0LjQtdC8INC90LAg0LrQvdC+0L/QutGDIMKr4pyTwrsg0LjQu9C4IMKrRW50ZXLCuyDQvdCwINC60LvQsNCy0LjQsNGC0YPRgNC1KS4nLFxuICAgICAgJ9Cf0YDQuCDQvtGI0LjQsdC60LUg0LzQvtC20L3QviDRgdGC0LXRgNC10YLRjCDQstCy0LXQtNC10L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSAo0L3QsNC20LDRgtC40LXQvCDQvdCwINC60L3QvtC/0LrRgyDCq8OXwrsg0LjQu9C4IMKrRGVsZXRlwrssIMKrQmFja3NwYWNlwrssIMKrRXNjwrsg0L3QsCDQutC70LDQstC40LDRgtGD0YDQtSkuJyxcbiAgICAgICfQmNCz0YDQsCDRgdGH0LjRgtCw0LnQtdGC0YHRjyDQv9GA0L7QudC00LXQvdC90L7QuSDQv9C+0YHQu9C1INGA0LXRiNC10L3QuNGPINCy0YHQtdGFINC/0YDQuNC80LXRgNC+0LIgKNGA0LXQt9GD0LvRjNGC0LDRgiDQt9Cw0L3QvtGB0LjRgtGB0Y8g0LIg0LrQvdC40LPRgyDRgNC10LrQvtGA0LTQvtCyLCDQv9C+0YHQvNC+0YLRgNC10YLRjCDQutC+0YLQvtGA0YPRjiDQvNC+0LbQvdC+INC90LDQttCw0LIgwqvQoNC10LrQvtGA0LTRi8K7INC90LAg0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbRiyDQuNCz0YDRiykuINCV0YHQu9C4INC/0YDQtdGA0LLQsNGC0Ywg0LjQs9GA0YMg0L3QtSDRgNC10YjQuNCyINCy0YHQtSDQv9GA0LjQvNC10YDRiyAo0LfQsNC60YDRi9GC0Ywg0LLQutC70LDQtNC60YMg0LHRgNCw0YPQt9C10YDQsCDQuNC70Lgg0L3QsNC20LDRgtGMINC90LAg0LTQvtC80LjQuiDQsiDQvNC10L3RjiksINGA0LXQt9GD0LvRjNGC0LDRgiDQvdC1INCx0YPQtNC10YIg0YHQvtGF0YDQsNC90LXQvSwg0L3QviDQuNCz0YDQsCDQvdC1INGD0LTQsNC70LjRgtGB0Y8uINCY0LPRgNGDINC80L7QttC90L4g0LfQsNCy0LXRgNGI0LjRgtGMINCyINCx0YPQtNGD0YnQtdC8LCDQstGL0LHRgNCw0LIgwqvQn9GA0L7QtNC+0LvQttC40YLRjCDQuNCz0YDRg8K7INC90LAg0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbQtS4nLFxuICAgIF0pO1xuICAgIHRoaXMuaGVscENsb3NlQnV0dG9uID0gdGhpcy52aWV3SGVscC5yZXR1cm5DbG9zZUJ1dHRvbigpO1xuICAgIGNvbnN0IHZpZXdIZWxwQmxvY2sgPSB0aGlzLnZpZXdIZWxwLnJldHVybkJsb2NrKCk7XG4gICAgc2NvcmVXcmFwcGVyLmFwcGVuZChzY29yZVRpdGxlLCB0aGlzLnNjb3JlVmFsdWUpO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKHRoaXMudGl0bGUsIG5hdmlnYXRpb24ucmV0dXJuRWxlbWVudCgpLCBzY29yZVdyYXBwZXIpO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZChoZWFkZXJXcmFwcGVyKTtcbiAgICBleGFtcGxlV3JhcHBlci5hcHBlbmQodGhpcy5leGFtcGxlLCB0aGlzLmFuc3dlckZpZWxkKTtcbiAgICBnYW1lV3JhcHBlci5hcHBlbmQodGhpcy5pbmZvQmxvY2ssIGV4YW1wbGVXcmFwcGVyLCB0aGlzLmtleXNXcmFwcGVyKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kKHZpZXdIZWxwQmxvY2ssIGdhbWVXcmFwcGVyKTtcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuc2NvcmVWYWx1ZS50ZXh0Q29udGVudCA9IFN0cmluZyh0aGlzLmdhbWVEYXRhLmdldFNjb3JlKCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0hlbHAge1xuICB2aWV3SGVscEJsb2NrOiBIVE1MRWxlbWVudDtcbiAgaGVscENsb3NlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb246IHN0cmluZ1tdKSB7XG4gICAgdGhpcy52aWV3SGVscEJsb2NrID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydoZWxwX19ibG9jaycsICdpbmZvcm1hdGlvbicsICdpbmZvcm1hdGlvbl91bmFjdGl2ZSddLFxuICAgIH0pO1xuICAgIGNvbnN0IHdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAnaGVscF9fd3JhcHBlciddLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdoMicsXG4gICAgICBjbGFzc2VzOiBbJ3RpdGxlJywgJ2hlbHBfX3RpdGxlJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ9Ca0LDQuiDQuNCz0YDQsNGC0YwnLFxuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kKHRpdGxlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc2NyaXB0aW9uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwYXJhZ3JhcGggPSByZXR1cm5FbGVtZW50KHtcbiAgICAgICAgdGFnOiAncCcsXG4gICAgICAgIGNsYXNzZXM6IFsnaGVscF9fcGFyYWdyYXBoJ10sXG4gICAgICAgIHRleHRDb250ZW50OiBkZXNjcmlwdGlvbltpXSxcbiAgICAgIH0pO1xuICAgICAgd3JhcHBlci5hcHBlbmQocGFyYWdyYXBoKTtcbiAgICB9XG5cbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdoZWxwX19jbG9zZS1idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0JfQsNC60YDRi9GC0YwnLFxuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kKHRoaXMuaGVscENsb3NlQnV0dG9uKTtcbiAgICB0aGlzLnZpZXdIZWxwQmxvY2suYXBwZW5kKHdyYXBwZXIpO1xuICB9XG5cbiAgaGlkZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2luZm9ybWF0aW9uX3VuYWN0aXZlJykpIHtcbiAgICAgIHRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbl91bmFjdGl2ZScpO1xuICAgIH1cbiAgfTtcblxuICBzaG93ID0gKCkgPT4ge1xuICAgIHRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvcm1hdGlvbl91bmFjdGl2ZScpO1xuICB9O1xuXG4gIHJldHVybkJsb2NrID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdIZWxwQmxvY2s7XG4gIH07XG5cbiAgcmV0dXJuQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaGVscENsb3NlQnV0dG9uO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld05hdmlnYXRpb24ge1xuICBuYXY6IEhUTUxFbGVtZW50O1xuICBuYXZIb21lOiBIVE1MRWxlbWVudDtcbiAgbmF2SGVscD86IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGhlbHBCdXR0b246IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5hdiA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnbmF2JyxcbiAgICAgIGNsYXNzZXM6IFsnbWVudSddLFxuICAgIH0pO1xuICAgIGNvbnN0IG5hdlVsID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICd1bCcsXG4gICAgICBjbGFzc2VzOiBbJ21lbnVfX3VsJ10sXG4gICAgfSk7XG4gICAgdGhpcy5uYXZIb21lID0gPEhUTUxMSUVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdsaScsXG4gICAgICBjbGFzc2VzOiBbJ21lbnVfX2l0ZW0nLCAnbWVudV9faG9tZSddLFxuICAgIH0pO1xuXG4gICAgbmF2VWwuYXBwZW5kKHRoaXMubmF2SG9tZSk7XG4gICAgaWYgKGhlbHBCdXR0b24gPT09IHRydWUpIHtcbiAgICAgIHRoaXMubmF2SGVscCA9IDxIVE1MTElFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdsaScsXG4gICAgICAgIGNsYXNzZXM6IFsnbWVudV9faXRlbScsICdtZW51X19pbnN0cnVjdGlvbiddLFxuICAgICAgfSk7XG4gICAgICBuYXZVbC5hcHBlbmQodGhpcy5uYXZIZWxwKTtcbiAgICB9XG4gICAgdGhpcy5uYXYuYXBwZW5kKG5hdlVsKTtcbiAgfVxuXG4gIHJldHVybkVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2O1xuICB9XG5cbiAgcmV0dXJuSG9tZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZIb21lO1xuICB9XG5cbiAgcmV0dXJuSGVscEJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZIZWxwO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3Rm9vdGVyIGZyb20gJy4vVmlld0Zvb3Rlcic7XG5pbXBvcnQgVmlld0hlbHAgZnJvbSAnLi9WaWV3SGVscCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFZpZXdQYWdlIHtcbiAgYm9keTogSFRNTEJvZHlFbGVtZW50O1xuICBidXR0b25Mb2FkR2FtZT86IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25SZWNvcmRzPzogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ1dHRvblNldEZpeD86IEhUTUxCdXR0b25FbGVtZW50O1xuICBmb290ZXI6IEhUTUxFbGVtZW50O1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIGhlYWRlcjogSFRNTEVsZW1lbnQ7XG4gIG1haW46IEhUTUxFbGVtZW50O1xuICBuYXZIZWxwPzogSFRNTExJRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgbmF2SG9tZT86IEhUTUxMSUVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIHBhZ2VOYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZVRpdGxlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHZpZXdIZWxwPzogVmlld0hlbHA7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuYm9keSA9IDxIVE1MQm9keUVsZW1lbnQ+ZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmhlYWRlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaGVhZGVyJyxcbiAgICAgIGNsYXNzZXM6IFsnaGVhZGVyJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1haW4gPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ21haW4nLFxuICAgICAgY2xhc3NlczogWydtYWluJ10sXG4gICAgfSk7XG5cbiAgICBjb25zdCB2aWV3Rm9vdGVyID0gbmV3IFZpZXdGb290ZXIoKTtcblxuICAgIHRoaXMuZm9vdGVyID0gdmlld0Zvb3Rlci5yZXR1cm4oKTtcbiAgICB0aGlzLnBhZ2VOYW1lID0gbmFtZTtcbiAgICB0aGlzLmdhbWVEYXRhID0gZGF0YTtcbiAgfVxuICBzaG93ID0gKCkgPT4ge1xuICAgIHRoaXMuYm9keS5hcHBlbmQodGhpcy5oZWFkZXIsIHRoaXMubWFpbiwgdGhpcy5mb290ZXIpO1xuXG4gICAgaWYgKHRoaXMucGFnZU5hbWUgPT09ICdzdGFydFBhZ2UnKSB7XG4gICAgICBjb25zdCBidXR0b25Mb2FkR2FtZSA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJ1dHRvbkxvYWRHYW1lO1xuICAgICAgY29uc3QgYnV0dG9uUmVjb3JkcyA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJ1dHRvblJlY29yZHM7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZ2V0RXhhbXBsZXMoKSA9PT0gbnVsbCB8fFxuICAgICAgICB0aGlzLmdhbWVEYXRhLmdldEV4YW1wbGVzKCkubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgYnV0dG9uTG9hZEdhbWUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uTG9hZEdhbWUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdhbWVEYXRhLmdldFJlY29yZHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGJ1dHRvblJlY29yZHMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvblJlY29yZHMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2VOYW1lID09PSAnc2V0dGluZ3NQYWdlJykge1xuICAgICAgY29uc3QgZml4QnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuYnV0dG9uU2V0Rml4O1xuICAgICAgaWYgKHRoaXMuZ2FtZURhdGEuZ2V0TWlzdGFrZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZml4QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpeEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2VOYW1lID09PSAnZ2FtZVBhZ2UnKSB7XG4gICAgICBjb25zdCB1cGRhdGVUaXRsZSA9IHRoaXMuZ2FtZURhdGEuZ2V0Vmlld0dhbWVQYWdlKCk/LnVwZGF0ZVRpdGxlO1xuICAgICAgaWYgKHVwZGF0ZVRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXBkYXRlVGl0bGUodGhpcy5nYW1lRGF0YS5nZXRPcGVyYXRpb24oKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdHYW1lUGFnZSgpPy51cGRhdGVTY29yZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhZ2VOYW1lID09PSAncmVjb3Jkc1BhZ2UnKSB7XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdSZWNvcmRzUGFnZSgpPy51cGRhdGVSZWNvcmRzKCk7XG4gICAgfVxuICB9O1xuICBoaWRlKCkge1xuICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSAnJztcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcbmltcG9ydCBpUmVjb3JkIGZyb20gJy4uL21vZGVsL2lSZWNvcmQnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3TmF2aWdhdGlvbiBmcm9tICcuL1ZpZXdOYXZpZ2F0aW9uJztcbmltcG9ydCBWaWV3UGFnZSBmcm9tICcuL1ZpZXdQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1JlY29yZHNQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBhcnJSZWNvcmRzOiBpUmVjb3JkW107XG4gIHJlY29yZHNXcmFwcGVyOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihnYW1lRGF0YTogR2FtZURhdGEpIHtcbiAgICBzdXBlcigncmVjb3Jkc1BhZ2UnLCBnYW1lRGF0YSk7XG4gICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdoZWFkZXJfX3dyYXBwZXInXSxcbiAgICB9KTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gbmV3IFZpZXdOYXZpZ2F0aW9uKGZhbHNlKTtcbiAgICB0aGlzLm5hdkhvbWUgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhvbWVCdXR0b24oKTtcbiAgICBjb25zdCB0aXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaDEnLFxuICAgICAgY2xhc3NlczogWyd0aXRsZSddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQoNC10LrQvtGA0LTRiycsXG4gICAgfSk7XG4gICAgdGhpcy5yZWNvcmRzV3JhcHBlciA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAncmVjb3Jkc19fd3JhcHBlciddLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hcnJSZWNvcmRzID0gZ2FtZURhdGEuZ2V0UmVjb3JkcygpO1xuXG4gICAgdGhpcy5tYWluLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX21haW4nKTtcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZCh0aXRsZSwgbmF2aWdhdGlvbi5yZXR1cm5FbGVtZW50KCkpO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZChoZWFkZXJXcmFwcGVyKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kKHRoaXMucmVjb3Jkc1dyYXBwZXIpO1xuICB9XG5cbiAgdXBkYXRlUmVjb3JkcyA9ICgpID0+IHtcbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5nYW1lRGF0YS5nZXRSZWNvcmRzKCk7XG4gICAgY29uc3QgdGFibGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3RhYmxlJywgJ3JlY29yZHMnXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJldHVyblRleHRFbGVtZW50ID0gKHRleHQ6IHN0cmluZykgPT5cbiAgICAgIHJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ3JlY29yZHNfX3RleHQnXSxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRleHQsXG4gICAgICB9KTtcblxuICAgIHJlY29yZHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjb3JkRWxlbWVudCA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBjbGFzc2VzOiBbJ3JlY29yZHNfX3JlY29yZCddLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXR1cm5Fc3RlZW1UZXh0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzb2x2ZUV4YW1wbGVUaW1lID0gTWF0aC5jZWlsKFxuICAgICAgICAgIGVsZW1lbnQudGltZSAvIGVsZW1lbnQubnVtRXhhbXBsZXMgLyAxMDAwXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzb2x2ZUV4YW1wbGVUaW1lIDw9IDQgJiZcbiAgICAgICAgICAoZWxlbWVudC5udW1NaXN0YWtlcyA9PT0gMCB8fFxuICAgICAgICAgICAgZWxlbWVudC5udW1NaXN0YWtlcyAvIGVsZW1lbnQubnVtRXhhbXBsZXMgPD0gMC4xKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gJ9Ce0YLQu9C40YfQvdC+ISc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc29sdmVFeGFtcGxlVGltZSA8PSA1LjUgJiZcbiAgICAgICAgICAoZWxlbWVudC5udW1NaXN0YWtlcyA9PT0gMCB8fFxuICAgICAgICAgICAgZWxlbWVudC5udW1NaXN0YWtlcyAvIGVsZW1lbnQubnVtRXhhbXBsZXMgPD0gMC41KVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gJ9Cl0L7RgNC+0YjQvi4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAn0J3QtdC/0LvQvtGF0L4uJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpbWVTdHlsZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHtcbiAgICAgICAgdGltZVN0eWxlOiAnc2hvcnQnLFxuICAgICAgICBkYXRlU3R5bGU6ICdsb25nJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0ZSA9IHJldHVyblRleHRFbGVtZW50KHRpbWVTdHlsZS5mb3JtYXQobmV3IERhdGUoZWxlbWVudC5kYXRlKSkpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX19kYXRlJyk7XG4gICAgICBjb25zdCBvcGVyYXRpb24gPSByZXR1cm5UZXh0RWxlbWVudChlbGVtZW50Lm9wZXJhdGlvbik7XG4gICAgICBvcGVyYXRpb24uY2xhc3NMaXN0LmFkZCgncmVjb3Jkc19fb3BlcmF0aW9uJyk7XG4gICAgICBjb25zdCBudW1FeGFtcGxlcyA9IHJldHVyblRleHRFbGVtZW50KFxuICAgICAgICBg0J/RgNC40LzQtdGA0L7QsjogJHtTdHJpbmcoZWxlbWVudC5udW1FeGFtcGxlcyl9YFxuICAgICAgKTtcbiAgICAgIG51bUV4YW1wbGVzLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX251bS1leGFtcGxlcycpO1xuICAgICAgY29uc3QgbnVtTWlzdGFrZXMgPSByZXR1cm5UZXh0RWxlbWVudChcbiAgICAgICAgYNCe0YjQuNCx0L7QujogJHtTdHJpbmcoZWxlbWVudC5udW1NaXN0YWtlcyl9YFxuICAgICAgKTtcbiAgICAgIG51bU1pc3Rha2VzLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX251bS1taXN0YWtlcycpO1xuICAgICAgY29uc3QgdGltZSA9IHJldHVyblRleHRFbGVtZW50KFxuICAgICAgICBg0JLRgNC10LzRjzogJHtTdHJpbmcoTWF0aC5jZWlsKGVsZW1lbnQudGltZSAvIDEwMDApKX0g0YHQtdC6LmBcbiAgICAgICk7XG4gICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX3RpbWUnKTtcbiAgICAgIGNvbnN0IHNjb3JlID0gcmV0dXJuVGV4dEVsZW1lbnQoYNCh0YfRkdGCOiAke1N0cmluZyhlbGVtZW50LnNjb3JlKX1gKTtcbiAgICAgIHNjb3JlLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX3Njb3JlJyk7XG4gICAgICBjb25zdCBlc3RlZW0gPSByZXR1cm5UZXh0RWxlbWVudChg0J7RhtC10L3QutCwOiAke3JldHVybkVzdGVlbVRleHQoKX1gKTtcbiAgICAgIGlmIChlc3RlZW0udGV4dENvbnRlbnQgPT09ICfQntGG0LXQvdC60LA6INCe0YLQu9C40YfQvdC+IScpIHtcbiAgICAgICAgZXN0ZWVtLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX3BlcmZlY3QnKTtcbiAgICAgIH0gZWxzZSBpZiAoZXN0ZWVtLnRleHRDb250ZW50ID09PSAn0J7RhtC10L3QutCwOiDQpdC+0YDQvtGI0L4uJykge1xuICAgICAgICBlc3RlZW0uY2xhc3NMaXN0LmFkZCgncmVjb3Jkc19fZ29vZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXN0ZWVtLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX25vdC1iYWQnKTtcbiAgICAgIH1cbiAgICAgIHJlY29yZEVsZW1lbnQuYXBwZW5kKFxuICAgICAgICBkYXRlLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIG51bUV4YW1wbGVzLFxuICAgICAgICBudW1NaXN0YWtlcyxcbiAgICAgICAgdGltZSxcbiAgICAgICAgc2NvcmUsXG4gICAgICAgIGVzdGVlbVxuICAgICAgKTtcbiAgICAgIHRhYmxlLmFwcGVuZChyZWNvcmRFbGVtZW50KTtcbiAgICB9KTtcbiAgICB0aGlzLnJlY29yZHNXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMucmVjb3Jkc1dyYXBwZXIuYXBwZW5kKHRhYmxlKTtcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL3JldHVybkVsZW1lbnQnO1xuaW1wb3J0IFZpZXdIZWxwIGZyb20gJy4vVmlld0hlbHAnO1xuaW1wb3J0IFZpZXdOYXZpZ2F0aW9uIGZyb20gJy4vVmlld05hdmlnYXRpb24nO1xuaW1wb3J0IFZpZXdQYWdlIGZyb20gJy4vVmlld1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2V0dGluZ3NQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBhZGRNYW55RXhhbXBsZXNCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBhZGRNb3N0RXhhbXBsZXNCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBhZGRPbmVFeGFtcGxlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYnV0dG9uU2V0RGl2aWRlOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYnV0dG9uU2V0TXVsdGlwbGU6IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25TZXRTdWJzdHI6IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25TZXRTdW06IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25XcmFwcGVyOiBIVE1MRGl2RWxlbWVudDtcbiAgZGVzY3JpcHRpb25OdW1FeGFtcGxlczogSFRNTERpdkVsZW1lbnQ7XG4gIGRlc2NyaXB0aW9uT3BlcmF0aW9uOiBIVE1MRGl2RWxlbWVudDtcbiAgaGVscENsb3NlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgaW5mb0Nsb3NlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlT25lRXhhbXBsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHNldE51bUV4cHJlc3Npb25zQnV0dG9uczogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIHNldHRpbmdzQXBwbHlCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZXR0aW5nc0Jsb2NrOiBIVE1MRGl2RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihnYW1lRGF0YTogR2FtZURhdGEpIHtcbiAgICBzdXBlcignc2V0dGluZ3NQYWdlJywgZ2FtZURhdGEpO1xuXG4gICAgY29uc3QgdGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gxJyxcbiAgICAgIGNsYXNzZXM6IFsndGl0bGUnXSxcbiAgICAgIHRleHRDb250ZW50OiAn0J3QvtCy0LDRjyDQuNCz0YDQsCcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXJXcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWyd3cmFwcGVyJywgJ2hlYWRlcl9fd3JhcHBlciddLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBWaWV3TmF2aWdhdGlvbih0cnVlKTtcblxuICAgIHRoaXMubmF2SG9tZSA9IDxIVE1MTElFbGVtZW50Pm5hdmlnYXRpb24ucmV0dXJuSG9tZUJ1dHRvbigpO1xuICAgIHRoaXMubmF2SGVscCA9IDxIVE1MTElFbGVtZW50Pm5hdmlnYXRpb24ucmV0dXJuSGVscEJ1dHRvbigpO1xuXG4gICAgdGhpcy5idXR0b25XcmFwcGVyID0gPEhUTUxEaXZFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uLXdyYXBwZXInXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYnV0dG9uU2V0U3VtID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJysg0KHQu9C+0LbQtdC90LjQtScsXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblNldFN1YnN0ciA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICctINCS0YvRh9C40YLQsNC90LjQtScsXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblNldE11bHRpcGxlID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ8OXINCj0LzQvdC+0LbQtdC90LjQtScsXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblNldERpdmlkZSA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICc6INCU0LXQu9C10L3QuNC1JyxcbiAgICB9KTtcblxuICAgIHRoaXMuYnV0dG9uU2V0Rml4ID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ2J1dHRvbi1taXN0YWtlcyddLFxuICAgICAgdGV4dENvbnRlbnQ6ICchINCe0YjQuNCx0LrQuCcsXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldHRpbmdzQmxvY2sgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydzZXR0aW5ncycsICdpbmZvcm1hdGlvbicsICdpbmZvcm1hdGlvbl91bmFjdGl2ZSddLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NXcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydzZXR0aW5nc19fd3JhcHBlciddLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2V0dGluZ3NEZXNjcmlwdGlvbnMgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3NldHRpbmdzX19kZXNjcmlwdC1saXN0JywgJ2Rlc2NyaXB0LWxpc3QnXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uT3BlcmF0aW9uV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZGVzY3JpcHQtbGlzdF9fZGVzY3Itd3JhcHBlciddLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGVybWluT3BlcmF0aW9uID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydkZXNjcmlwdC1saXN0X190ZXJtJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ9CU0LXQudGB0YLQstC40LU6ICcsXG4gICAgfSk7XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uT3BlcmF0aW9uID0gPEhUTUxEaXZFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZGVzY3JpcHQtbGlzdF9fZGVzY3InXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTnVtRXhhbXBsZXNXcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydkZXNjcmlwdC1saXN0X19kZXNjci13cmFwcGVyJ10sXG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXJtaW5OdW1FeGFtcGxlcyA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZGVzY3JpcHQtbGlzdF9fdGVybSddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQmtC+0LvQuNGH0LXRgdGC0LLQviDQv9GA0LjQvNC10YDQvtCyOicsXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldE51bUV4cHJlc3Npb25zQnV0dG9ucyA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZGVzY3JpcHQtbGlzdF9fYnV0dG9ucy13cmFwJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdkZXNjcmlwdC1saXN0X19idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnLS0tJyxcbiAgICB9KTtcblxuICAgIHRoaXMucmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ2Rlc2NyaXB0LWxpc3RfX2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICctLScsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nLCAnZGVzY3JpcHQtbGlzdF9fYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJy0nLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRPbmVFeGFtcGxlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ2Rlc2NyaXB0LWxpc3RfX2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICcrJyxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkTWFueUV4YW1wbGVzQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ2Rlc2NyaXB0LWxpc3RfX2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICcrKycsXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZE1vc3RFeGFtcGxlc0J1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdkZXNjcmlwdC1saXN0X19idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnKysrJyxcbiAgICB9KTtcblxuICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcyA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX2Rlc2NyJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldHRpbmdzQXBwbHlCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nLCAnc2V0dGluZ3NfX2FwcGx5LWJ1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQn9GA0LjQvNC10L3QuNGC0YwnLFxuICAgIH0pO1xuICAgIHRoaXMuaW5mb0Nsb3NlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ3NldHRpbmdzX19jbG9zZS1idXR0b24nXSxcbiAgICB9KTtcblxuICAgIHRoaXMudmlld0hlbHAgPSBuZXcgVmlld0hlbHAoW1xuICAgICAgYNCU0LvRjyDQstGL0LHQvtGA0LAg0LzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60L7QuSDQvtC/0LXRgNCw0YbQuNC4ICjRgdC70L7QttC10L3QuNC1LCDQstGL0YfQuNGC0LDQvdC40LUsINGD0LzQvdC+0LbQtdC90LjQtSkg0L3QsNC20LzQuNGC0LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnRg9GOINC60L3QvtC/0LrRgy5gLFxuICAgICAgJ9CV0YHQu9C4INCw0LrRgtC40LLQvdCwINC60L3QvtC/0LrQsCDCqyEg0J7RiNC40LHQutC4wrssINC/0L4g0L3QsNC20LDRgtC40Y4g0L3QsCDQvdC10LUg0LzQvtC20L3QviDQv9GA0LjRgdGC0YPQv9C40YLRjCDQuiDRgNCw0LHQvtGC0LUg0L3QsNC0INC+0YjQuNCx0LrQsNC80LgsINC00L7Qv9GD0YnQtdC90L3Ri9C80Lgg0YDQsNC90LXQtS4nLFxuICAgICAgJ9CSINGB0LvQtdC00YPRjtGJ0LXQvCDQvtC60L3QtSDQstGL0LHQtdGA0LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC/0YDQuNC80LXRgNC+0LIg0LTQu9GPINGA0LXRiNC10L3QuNGPICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAyMCkuINCa0L3QvtC/0LrQuCDCqy0tLcK7LCDCqy0twrsg0Lggwqstwrsg0YPQvNC10L3RjNGI0LDRjtGCINGH0LjRgdC70L4g0L3QsCA1MCwgMTAg0LggMSDRgdC+0L7RgtCy0LXRgtGB0YLQstC10L3QvdC+LiDQmtC90L7Qv9C60Lgg0L/RgNC40LHQsNCy0LvQtdC90LjRjyDQtNC10LnRgdGC0LLRg9GO0YIg0LDQvdCw0LvQvtCz0LjRh9C90L4g0LIg0YHRgtC+0YDQvtC90YMg0YPQstC10LvQuNGH0LXQvdC40Y8g0YfQuNGB0LvQsC4nLFxuICAgICAgJ9Cd0LDQttCw0YLQuNC10Lwg0L3QsCDQutC90L7Qv9C60YMgwqvQn9GA0LjQvNC10L3QuNGC0YzCuyDQvdCw0YfQvdC40YLQtSDQuNCz0YDRgy4nLFxuICAgIF0pO1xuICAgIHRoaXMuaGVscENsb3NlQnV0dG9uID0gdGhpcy52aWV3SGVscC5yZXR1cm5DbG9zZUJ1dHRvbigpO1xuXG4gICAgY29uc3Qgdmlld0hlbHBCbG9jayA9IHRoaXMudmlld0hlbHAucmV0dXJuQmxvY2soKTtcblxuICAgIHRoaXMuc2V0TnVtRXhwcmVzc2lvbnNCdXR0b25zLmFwcGVuZChcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcyxcbiAgICAgIHRoaXMucmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uLFxuICAgICAgdGhpcy5yZW1vdmVNYW55RXhhbXBsZXNCdXR0b24sXG4gICAgICB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24sXG4gICAgICB0aGlzLmFkZE9uZUV4YW1wbGVCdXR0b24sXG4gICAgICB0aGlzLmFkZE1hbnlFeGFtcGxlc0J1dHRvbixcbiAgICAgIHRoaXMuYWRkTW9zdEV4YW1wbGVzQnV0dG9uXG4gICAgKTtcbiAgICBkZXNjcmlwdGlvbk51bUV4YW1wbGVzV3JhcHBlci5hcHBlbmQoXG4gICAgICB0ZXJtaW5OdW1FeGFtcGxlcyxcbiAgICAgIHRoaXMuc2V0TnVtRXhwcmVzc2lvbnNCdXR0b25zXG4gICAgKTtcbiAgICBkZXNjcmlwdGlvbk9wZXJhdGlvbldyYXBwZXIuYXBwZW5kKFxuICAgICAgdGVybWluT3BlcmF0aW9uLFxuICAgICAgdGhpcy5kZXNjcmlwdGlvbk9wZXJhdGlvblxuICAgICk7XG4gICAgc2V0dGluZ3NEZXNjcmlwdGlvbnMuYXBwZW5kKFxuICAgICAgZGVzY3JpcHRpb25PcGVyYXRpb25XcmFwcGVyLFxuICAgICAgZGVzY3JpcHRpb25OdW1FeGFtcGxlc1dyYXBwZXJcbiAgICApO1xuICAgIHNldHRpbmdzV3JhcHBlci5hcHBlbmQoXG4gICAgICBzZXR0aW5nc0Rlc2NyaXB0aW9ucyxcbiAgICAgIHRoaXMuc2V0dGluZ3NBcHBseUJ1dHRvbixcbiAgICAgIHRoaXMuaW5mb0Nsb3NlQnV0dG9uXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzQmxvY2suYXBwZW5kKHNldHRpbmdzV3JhcHBlcik7XG5cbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZCh0aXRsZSwgbmF2aWdhdGlvbi5yZXR1cm5FbGVtZW50KCkpO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZChoZWFkZXJXcmFwcGVyKTtcblxuICAgIHRoaXMuYnV0dG9uV3JhcHBlci5hcHBlbmQoXG4gICAgICB0aGlzLmJ1dHRvblNldFN1bSxcbiAgICAgIHRoaXMuYnV0dG9uU2V0U3Vic3RyLFxuICAgICAgdGhpcy5idXR0b25TZXRNdWx0aXBsZSxcbiAgICAgIHRoaXMuYnV0dG9uU2V0RGl2aWRlLFxuICAgICAgdGhpcy5idXR0b25TZXRGaXgsXG4gICAgKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kKHZpZXdIZWxwQmxvY2ssIHRoaXMuYnV0dG9uV3JhcHBlciwgdGhpcy5zZXR0aW5nc0Jsb2NrKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcbmltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vcmV0dXJuRWxlbWVudCc7XG5pbXBvcnQgVmlld1BhZ2UgZnJvbSAnLi9WaWV3UGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdTdGFydFBhZ2UgZXh0ZW5kcyBWaWV3UGFnZSB7XG4gIGJ1dHRvbk5ld0dhbWU6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGdhbWVEYXRhOiBHYW1lRGF0YSkge1xuICAgIHN1cGVyKCdzdGFydFBhZ2UnLCBnYW1lRGF0YSk7XG4gICAgdGhpcy5idXR0b25OZXdHYW1lID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycsXG4gICAgfSk7XG4gICAgdGhpcy5idXR0b25Mb2FkR2FtZSA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQn9GA0L7QtNC+0LvQttC40YLRjCDQuNCz0YDRgycsXG4gICAgfSk7XG4gICAgdGhpcy5idXR0b25SZWNvcmRzID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ9Cg0LXQutC+0YDQtNGLJyxcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25XcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWyd3cmFwcGVyJywgJ2J1dHRvbi13cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGVXcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydoZWFkZXJfX3RpdGxlLXdyYXBwZXInXSxcbiAgICB9KTtcbiAgICBjb25zdCB0aXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaDEnLFxuICAgICAgY2xhc3NlczogWyd0aXRsZScsICdoZWFkZXJfX3RpdGxlJ10sXG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGVTdHJpbmcgPSAn0K7QvdGL0Lkg0LzQsNGC0LXQvNCw0YLQuNC6JztcbiAgICB0aXRsZVN0cmluZy5zcGxpdCgnJykubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGlmICghbGV0dGVyLm1hdGNoKC9cXHMvKSkge1xuICAgICAgICBjb25zdCBsZXR0ZXJFbGVtZW50ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgY2xhc3NlczogWyd0aXRsZV9fbGV0dGVyJ10sXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IGxldHRlcixcbiAgICAgICAgfSk7XG4gICAgICAgIHRpdGxlLmFwcGVuZChsZXR0ZXJFbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlLmFwcGVuZChsZXR0ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGl0bGVXcmFwcGVyLmFwcGVuZCh0aXRsZSk7XG4gICAgdGhpcy5oZWFkZXIuYXBwZW5kKHRpdGxlV3JhcHBlcik7XG4gICAgYnV0dG9uV3JhcHBlci5hcHBlbmQoXG4gICAgICB0aGlzLmJ1dHRvbk5ld0dhbWUsXG4gICAgICB0aGlzLmJ1dHRvbkxvYWRHYW1lLFxuICAgICAgdGhpcy5idXR0b25SZWNvcmRzXG4gICAgKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kKGJ1dHRvbldyYXBwZXIpO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgSUVsZW1EYXRhIHtcbiAgdGFnOiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgaWQ/OiBzdHJpbmc7XG4gIGF0dHJpYj86IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH1bXTtcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmc7XG4gIHNyYz86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuRWxlbWVudChlbGVtRGF0YTogSUVsZW1EYXRhKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtRGF0YS50YWcpO1xuICBpZiAoZWxlbURhdGEuY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbURhdGEuY2xhc3Nlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGVsZW1EYXRhLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LmlkID0gZWxlbURhdGEuaWQ7XG4gIH1cbiAgaWYgKGVsZW1EYXRhLmF0dHJpYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbURhdGEuYXR0cmliLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGkubmFtZSwgaS52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGVsZW1EYXRhLnRleHRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbURhdGEudGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGVsZW1EYXRhLnRhZyA9PT0gJ2ltZycgJiYgZWxlbURhdGEuc3JjICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgZWxlbURhdGEuc3JjKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hc3NldHMvdHMvQXBwJztcbmltcG9ydCBHYW1lRGF0YSBmcm9tICcuL2Fzc2V0cy90cy9tb2RlbC9HYW1lRGF0YSc7XG5cbmNvbnN0IGdhbWVEYXRhID0gbmV3IEdhbWVEYXRhKCk7XG5jb25zdCBhcHAgPSBuZXcgQXBwKGdhbWVEYXRhKTtcbmFwcC5uZXcoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==