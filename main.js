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
/* harmony import */ var _audio_ok_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../audio/ok.mp3 */ "./src/assets/audio/ok.mp3");
/* harmony import */ var _audio_error_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../audio/error.mp3 */ "./src/assets/audio/error.mp3");



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
                    void _this.soundOk.play();
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
                    void _this.soundError.play();
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
        this.soundOk = new Audio(_audio_ok_mp3__WEBPACK_IMPORTED_MODULE_1__);
        this.soundError = new Audio(_audio_error_mp3__WEBPACK_IMPORTED_MODULE_2__);
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
            var lastNumExamples = _this.gameData.getRecords() !== undefined
                ? _this.gameData.getRecords()[0].numExamples
                : 10;
            _this.descriptionNumExamples.textContent =
                numExamples >= lastNumExamples
                    ? String(lastNumExamples)
                    : String(numExamples);
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
            var _a, _b, _c, _d;
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
                if (((_a = _this.gameData.getRecords()) === null || _a === void 0 ? void 0 : _a.length) > 0) {
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
                var updateTitle = (_b = _this.gameData.getViewGamePage()) === null || _b === void 0 ? void 0 : _b.updateTitle;
                if (updateTitle !== undefined) {
                    updateTitle(_this.gameData.getOperation());
                }
                (_c = _this.gameData.getViewGamePage()) === null || _c === void 0 ? void 0 : _c.updateScore();
            }
            if (_this.pageName === 'recordsPage') {
                (_d = _this.gameData.getViewRecordsPage()) === null || _d === void 0 ? void 0 : _d.updateRecords();
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


/***/ }),

/***/ "./src/assets/audio/error.mp3":
/*!************************************!*\
  !*** ./src/assets/audio/error.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07b873397bd181f0fe5b.mp3";

/***/ }),

/***/ "./src/assets/audio/ok.mp3":
/*!*********************************!*\
  !*** ./src/assets/audio/ok.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a97c2a34bee121b1ca5.mp3";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDRixDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUc7SUFDbEI7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsR0FBRztRQUNiLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDRjtBQUVELElBQU0sV0FBVyxHQUFHO0lBQ2xCO1FBQ0ksU0FBUyxFQUFFLFVBQVU7UUFDckIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsUUFBUTtRQUNuQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxTQUFTLEVBQUUsT0FBTztRQUNsQixRQUFRLEVBQUUsQ0FBQztRQUNYLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRDtRQUNJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksU0FBUyxFQUFFLE9BQU87UUFDbEIsUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNiO0NBQ0Y7QUFFdUQ7Ozs7Ozs7Ozs7Ozs7OztBQzkxRnhEO0lBSUUsbUJBQVksSUFBYztRQUExQixpQkFHQzs7UUFFRCxvQkFBZSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUM7UUFFRixvQkFBZSxHQUFHO1lBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLGdDQUFnQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQztRQUVGLHFCQUFnQixHQUFHO1lBQ2pCLElBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1lBQ3ZELENBQUM7WUFDRCxJQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztZQUNyRCxDQUFDO1FBQ0gsQ0FBQztRQUVELG9CQUFlLEdBQUc7WUFDaEIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7UUFDeEQsQ0FBQyxDQUFDO1FBRUYsbUJBQWMsR0FBRztZQUNmLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3ZELElBQU0sQ0FBQyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBTSxZQUFZLEdBQ2hCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzVDLENBQUMsQ0FBQyxRQUFRO2dCQUNWLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDOUMsQ0FBQyxDQUFDLFNBQVM7b0JBQ1gsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNuQixLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxzSUFBdUQsV0FBVyxxQkFBVyxZQUFZLE1BQUcsQ0FBQztRQUMxSCxDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHO1lBQ1osS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7UUFDbkQsQ0FBQyxDQUFDO1FBM0NBLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQW1CLFVBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLDBDQUFFLFNBQVMsQ0FBQztJQUM5RSxDQUFDO0lBMENILGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRDJDO0FBRTVDO0lBRUU7UUFBQSxpQkEwREM7UUFFRCxXQUFNLEdBQUc7WUFDUCxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBN0RBLElBQUksQ0FBQyxNQUFNLEdBQUcsMERBQWEsQ0FBQztZQUMxQixHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFNLE9BQU8sR0FBRywwREFBYSxDQUFDO1lBQzVCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUNILElBQU0sU0FBUyxHQUFHLDBEQUFhLENBQUM7WUFDOUIsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxjQUFjLEdBQUcsMERBQWEsQ0FBQztZQUNuQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUMsQ0FBQztRQUNILElBQU0sYUFBYSxHQUFHLDBEQUFhLENBQUM7WUFDbEMsR0FBRyxFQUFFLEdBQUc7WUFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDekIsTUFBTSxFQUFFO2dCQUNOLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUU7Z0JBQ3JELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2FBQ3BDO1lBQ0QsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxJQUFJLEdBQUcsMERBQWEsQ0FBQztZQUN6QixHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUM7WUFDMUMsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxNQUFNLEdBQUcsMERBQWEsQ0FBQztZQUMzQixHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztTQUM3QyxDQUFDLENBQUM7UUFDSCxJQUFNLFdBQVcsR0FBRywwREFBYSxDQUFDO1lBQ2hDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDaEMsV0FBVyxFQUFFLFVBQVU7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxVQUFVLEdBQUcsMERBQWEsQ0FBQztZQUMvQixHQUFHLEVBQUUsR0FBRztZQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN6QixNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUNILGdGQUFnRjtpQkFDbkY7Z0JBQ0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7YUFDcEM7WUFDRCxXQUFXLEVBQUUsVUFBVTtTQUN4QixDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUtILGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRTJDO0FBQ1Y7QUFDWTtBQUNaO0FBRWxDO0lBQTBDLGdDQUFRO0lBU2hELHNCQUFZLFFBQWtCO1FBQzVCLGtCQUFLLFlBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUFDO1FBa0c5QixpQkFBVyxHQUFHO1lBQ1osS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUM7UUFuR0EsSUFBTSxhQUFhLEdBQUcsMERBQWEsQ0FBQztZQUNsQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztTQUNoRSxDQUFDLENBQUM7UUFDSCxJQUFNLFVBQVUsR0FBRyxJQUFJLHVEQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsS0FBSSxDQUFDLE9BQU8sR0FBa0IsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUQsS0FBSSxDQUFDLE9BQU8sR0FBa0IsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUQsSUFBTSxZQUFZLEdBQUcsMERBQWEsQ0FBQztZQUNqQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQU0sVUFBVSxHQUFHLDBEQUFhLENBQUM7WUFDL0IsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDekIsV0FBVyxFQUFFLE9BQU87U0FDckIsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLFVBQVUsR0FBeUIsMERBQWEsQ0FBQztZQUNwRCxHQUFHLEVBQUUsR0FBRztZQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN6QixXQUFXLEVBQUUsR0FBRztTQUNqQixDQUFDLENBQUM7UUFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLDBEQUFhLENBQUM7WUFDekIsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxXQUFXLEdBQUcsMERBQWEsQ0FBQztZQUNoQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBbUIsMERBQWEsQ0FBQztZQUM3QyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxjQUFjLEdBQUcsMERBQWEsQ0FBQztZQUNuQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDO1NBQ3ZELENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxPQUFPLEdBQW1CLDBEQUFhLENBQUM7WUFDM0MsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLFdBQVcsR0FBbUIsMERBQWEsQ0FBQztZQUMvQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMvQixZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxXQUFXLEdBQW1CLDBEQUFhLENBQUM7WUFDL0MsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQU0sVUFBVSxHQUFHLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQzlDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDNUIsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBQ0QsSUFBTSxTQUFTLEdBQUcsMERBQWEsQ0FBQztnQkFDOUIsR0FBRyxFQUFFLFFBQVE7Z0JBQ2IsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLE1BQU0sRUFBRTtvQkFDTjt3QkFDRSxJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0Y7Z0JBQ0QsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7YUFDN0IsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBQyxLQUFhO1lBQy9CLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLENBQUM7UUFDSCxDQUFDLENBQUM7UUFFRixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaURBQVEsQ0FBQztZQUMzQixxSkFBcUo7WUFDckosc0hBQXNIO1lBQ3RILGtZQUFrWTtTQUNuWSxDQUFDLENBQUM7UUFDSCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6RCxJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzNFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDOztJQUMvQyxDQUFDO0lBS0gsbUJBQUM7QUFBRCxDQUFDLENBL0d5QyxpREFBUSxHQStHakQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckgyQztBQUU1QztJQUdFLGtCQUFZLFdBQXFCO1FBQWpDLGlCQStCQztRQUVELFNBQUksR0FBRztZQUNMLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDO2dCQUNuRSxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMzRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsU0FBSSxHQUFHO1lBQ0wsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDO1FBRUYsZ0JBQVcsR0FBRztZQUNaLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDLENBQUM7UUFFRixzQkFBaUIsR0FBRztZQUNsQixPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQyxDQUFDO1FBaERBLElBQUksQ0FBQyxhQUFhLEdBQUcsMERBQWEsQ0FBQztZQUNqQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsc0JBQXNCLENBQUM7U0FDaEUsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxPQUFPLEdBQUcsMERBQWEsQ0FBQztZQUM1QixHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxLQUFLLEdBQUcsMERBQWEsQ0FBQztZQUMxQixHQUFHLEVBQUUsSUFBSTtZQUNULE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7WUFDakMsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDL0MsSUFBTSxTQUFTLEdBQUcsMERBQWEsQ0FBQztnQkFDOUIsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLEdBQXNCLDBEQUFhLENBQUM7WUFDdEQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUM7WUFDekMsV0FBVyxFQUFFLFNBQVM7U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQW1CSCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RDJDO0FBRTVDO0lBS0Usd0JBQVksVUFBbUI7UUFDN0IsSUFBSSxDQUFDLEdBQUcsR0FBRywwREFBYSxDQUFDO1lBQ3ZCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQU0sS0FBSyxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBa0IsMERBQWEsQ0FBQztZQUMxQyxHQUFHLEVBQUUsSUFBSTtZQUNULE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBa0IsMERBQWEsQ0FBQztnQkFDMUMsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixDQUFDO2FBQzdDLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUMyQztBQUNOO0FBR3RDO0lBZUUsa0JBQVksSUFBWSxFQUFFLElBQWM7UUFBeEMsaUJBaUJDO1FBQ0QsU0FBSSxHQUFHOztZQUNMLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdEQsSUFBSSxLQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUNsQyxJQUFNLGNBQWMsR0FBc0IsS0FBSSxDQUFDLGNBQWMsQ0FBQztnQkFDOUQsSUFBTSxhQUFhLEdBQXNCLEtBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzVELElBQ0UsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJO29CQUNwQyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ3hDLENBQUM7b0JBQ0QsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2pDLENBQUM7cUJBQU0sQ0FBQztvQkFDTixjQUFjLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxJQUFJLFlBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLDBDQUFFLE1BQU0sSUFBRyxDQUFDLEVBQUUsQ0FBQztvQkFDM0MsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pDLENBQUM7cUJBQU0sQ0FBQztvQkFDTixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEMsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLEtBQUksQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7Z0JBQ3JDLElBQU0sU0FBUyxHQUFzQixLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN2RCxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUM3QyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDNUIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksS0FBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUUsQ0FBQztnQkFDakMsSUFBTSxXQUFXLEdBQUcsV0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsMENBQUUsV0FBVyxDQUFDO2dCQUNqRSxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDOUIsV0FBVyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxXQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSwwQ0FBRSxXQUFXLEVBQUUsQ0FBQztZQUNqRCxDQUFDO1lBRUQsSUFBSSxLQUFJLENBQUMsUUFBUSxLQUFLLGFBQWEsRUFBRSxDQUFDO2dCQUNwQyxXQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLDBDQUFFLGFBQWEsRUFBRSxDQUFDO1lBQ3RELENBQUM7UUFDSCxDQUFDLENBQUM7UUExREEsSUFBSSxDQUFDLElBQUksR0FBb0IsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDcEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksR0FBRywwREFBYSxDQUFDO1lBQ3hCLEdBQUcsRUFBRSxNQUFNO1lBQ1gsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztRQUVILElBQU0sVUFBVSxHQUFHLElBQUksbURBQVUsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUEyQ0QsdUJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRjJDO0FBQ0U7QUFDWjtBQUVsQztJQUE2QyxtQ0FBUTtJQUluRCx5QkFBWSxRQUFrQjtRQUM1QixrQkFBSyxZQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsU0FBQztRQXlCakMsbUJBQWEsR0FBRztZQUNkLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDM0MsSUFBTSxLQUFLLEdBQUcsMERBQWEsQ0FBQztnQkFDMUIsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUM5QixDQUFDLENBQUM7WUFFSCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsSUFBWTtnQkFDckMsaUVBQWEsQ0FBQztvQkFDWixHQUFHLEVBQUUsS0FBSztvQkFDVixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQzFCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDO1lBSkYsQ0FJRSxDQUFDO1lBRUwsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ3RCLElBQU0sYUFBYSxHQUFHLDBEQUFhLENBQUM7b0JBQ2xDLEdBQUcsRUFBRSxLQUFLO29CQUNWLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3QixDQUFDLENBQUM7Z0JBQ0gsSUFBTSxnQkFBZ0IsR0FBRztvQkFDdkIsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUNoQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUMxQyxDQUFDO29CQUNGLElBQ0UsZ0JBQWdCLElBQUksQ0FBQzt3QkFDckIsQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsRUFDbkQsQ0FBQzt3QkFDRCxPQUFPLFVBQVUsQ0FBQztvQkFDcEIsQ0FBQzt5QkFBTSxJQUNMLGdCQUFnQixJQUFJLEdBQUc7d0JBQ3ZCLENBQUMsT0FBTyxDQUFDLFdBQVcsS0FBSyxDQUFDOzRCQUN4QixPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLEVBQ25ELENBQUM7d0JBQ0QsT0FBTyxTQUFTLENBQUM7b0JBQ25CLENBQUM7eUJBQU0sQ0FBQzt3QkFDTixPQUFPLFVBQVUsQ0FBQztvQkFDcEIsQ0FBQztnQkFDSCxDQUFDLENBQUM7Z0JBQ0YsSUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtvQkFDOUMsU0FBUyxFQUFFLE9BQU87b0JBQ2xCLFNBQVMsRUFBRSxNQUFNO2lCQUNsQixDQUFDLENBQUM7Z0JBQ0gsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDcEMsSUFBTSxTQUFTLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM5QyxJQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FDbkMsNERBQWEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBRSxDQUMzQyxDQUFDO2dCQUNGLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ25ELElBQU0sV0FBVyxHQUFHLGlCQUFpQixDQUNuQyxnREFBVyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFFLENBQ3pDLENBQUM7Z0JBQ0YsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDbkQsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQzVCLDBDQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMseUJBQU8sQ0FDeEQsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDcEMsSUFBTSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsb0NBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUM7Z0JBQ2xFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3RDLElBQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLGdEQUFXLGdCQUFnQixFQUFFLENBQUUsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssa0JBQWtCLEVBQUUsQ0FBQztvQkFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztxQkFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssaUJBQWlCLEVBQUUsQ0FBQztvQkFDcEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7cUJBQU0sQ0FBQztvQkFDTixNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELGFBQWEsQ0FBQyxNQUFNLENBQ2xCLElBQUksRUFDSixTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWCxJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sQ0FDUCxDQUFDO2dCQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBMUdBLElBQU0sYUFBYSxHQUFHLDBEQUFhLENBQUM7WUFDbEMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxVQUFVLEdBQUcsSUFBSSx1REFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLEtBQUksQ0FBQyxPQUFPLEdBQWtCLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVELElBQU0sS0FBSyxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDbEIsV0FBVyxFQUFFLFNBQVM7U0FDdkIsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGNBQWMsR0FBbUIsMERBQWEsQ0FBQztZQUNsRCxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQztTQUN6QyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUV4QyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDeEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztJQUN4QyxDQUFDO0lBcUZILHNCQUFDO0FBQUQsQ0FBQyxDQWpINEMsaURBQVEsR0FpSHBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIMkM7QUFDVjtBQUNZO0FBQ1o7QUFFbEM7SUFBOEMsb0NBQVE7SUFvQnBELDBCQUFZLFFBQWtCO1FBQzVCLGtCQUFLLFlBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxTQUFDO1FBRWhDLElBQU0sS0FBSyxHQUFHLDBEQUFhLENBQUM7WUFDMUIsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDbEIsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBTSxhQUFhLEdBQUcsMERBQWEsQ0FBQztZQUNsQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztTQUN4QyxDQUFDLENBQUM7UUFFSCxJQUFNLFVBQVUsR0FBRyxJQUFJLHVEQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMsS0FBSSxDQUFDLE9BQU8sR0FBa0IsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUQsS0FBSSxDQUFDLE9BQU8sR0FBa0IsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFNUQsS0FBSSxDQUFDLGFBQWEsR0FBbUIsMERBQWEsQ0FBQztZQUNqRCxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxZQUFZLEdBQXNCLDBEQUFhLENBQUM7WUFDbkQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkIsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLGVBQWUsR0FBc0IsMERBQWEsQ0FBQztZQUN0RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsaUJBQWlCLEdBQXNCLDBEQUFhLENBQUM7WUFDeEQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkIsV0FBVyxFQUFFLGFBQWE7U0FDM0IsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLGVBQWUsR0FBc0IsMERBQWEsQ0FBQztZQUN0RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsWUFBWSxHQUFzQiwwREFBYSxDQUFDO1lBQ25ELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDO1lBQ3RDLFdBQVcsRUFBRSxVQUFVO1NBQ3hCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxhQUFhLEdBQW1CLDBEQUFhLENBQUM7WUFDakQsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO1NBQzdELENBQUMsQ0FBQztRQUVILElBQU0sZUFBZSxHQUFHLDBEQUFhLENBQUM7WUFDcEMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFFSCxJQUFNLG9CQUFvQixHQUFHLDBEQUFhLENBQUM7WUFDekMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxlQUFlLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBRUgsSUFBTSwyQkFBMkIsR0FBRywwREFBYSxDQUFDO1lBQ2hELEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDMUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxlQUFlLEdBQUcsMERBQWEsQ0FBQztZQUNwQyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxvQkFBb0IsR0FBbUIsMERBQWEsQ0FBQztZQUN4RCxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUVILElBQU0sNkJBQTZCLEdBQUcsMERBQWEsQ0FBQztZQUNsRCxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzFDLENBQUMsQ0FBQztRQUVILElBQU0saUJBQWlCLEdBQUcsMERBQWEsQ0FBQztZQUN0QyxHQUFHLEVBQUUsS0FBSztZQUNWLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLFdBQVcsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLHdCQUF3QixHQUFHLDBEQUFhLENBQUM7WUFDNUMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUN6QyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsd0JBQXdCLEdBQXNCLDBEQUFhLENBQUM7WUFDL0QsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUM7WUFDNUMsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLHdCQUF3QixHQUFzQiwwREFBYSxDQUFDO1lBQy9ELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDO1lBQzVDLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxzQkFBc0IsR0FBc0IsMERBQWEsQ0FBQztZQUM3RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQztZQUM1QyxXQUFXLEVBQUUsR0FBRztTQUNqQixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsbUJBQW1CLEdBQXNCLDBEQUFhLENBQUM7WUFDMUQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUM7WUFDNUMsV0FBVyxFQUFFLEdBQUc7U0FDakIsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLHFCQUFxQixHQUFzQiwwREFBYSxDQUFDO1lBQzVELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDO1lBQzVDLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxxQkFBcUIsR0FBc0IsMERBQWEsQ0FBQztZQUM1RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQztZQUM1QyxXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsc0JBQXNCLEdBQW1CLDBEQUFhLENBQUM7WUFDMUQsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsbUJBQW1CLEdBQXNCLDBEQUFhLENBQUM7WUFDMUQsR0FBRyxFQUFFLFFBQVE7WUFDYixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUM7WUFDN0MsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGVBQWUsR0FBc0IsMERBQWEsQ0FBQztZQUN0RCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQztTQUM5QyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksaURBQVEsQ0FBQztZQUMzQiw4Z0JBQXFHO1lBQ3JHLDhHQUE4RztZQUM5Ryx5TkFBeU47WUFDek4sOENBQThDO1NBQy9DLENBQUMsQ0FBQztRQUNILEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpELElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbEQsS0FBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FDbEMsS0FBSSxDQUFDLHNCQUFzQixFQUMzQixLQUFJLENBQUMsd0JBQXdCLEVBQzdCLEtBQUksQ0FBQyx3QkFBd0IsRUFDN0IsS0FBSSxDQUFDLHNCQUFzQixFQUMzQixLQUFJLENBQUMsbUJBQW1CLEVBQ3hCLEtBQUksQ0FBQyxxQkFBcUIsRUFDMUIsS0FBSSxDQUFDLHFCQUFxQixDQUMzQixDQUFDO1FBQ0YsNkJBQTZCLENBQUMsTUFBTSxDQUNsQyxpQkFBaUIsRUFDakIsS0FBSSxDQUFDLHdCQUF3QixDQUM5QixDQUFDO1FBQ0YsMkJBQTJCLENBQUMsTUFBTSxDQUNoQyxlQUFlLEVBQ2YsS0FBSSxDQUFDLG9CQUFvQixDQUMxQixDQUFDO1FBQ0Ysb0JBQW9CLENBQUMsTUFBTSxDQUN6QiwyQkFBMkIsRUFDM0IsNkJBQTZCLENBQzlCLENBQUM7UUFDRixlQUFlLENBQUMsTUFBTSxDQUNwQixvQkFBb0IsRUFDcEIsS0FBSSxDQUFDLG1CQUFtQixFQUN4QixLQUFJLENBQUMsZUFBZSxDQUNyQixDQUFDO1FBQ0YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFM0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDeEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQ3ZCLEtBQUksQ0FBQyxZQUFZLEVBQ2pCLEtBQUksQ0FBQyxlQUFlLEVBQ3BCLEtBQUksQ0FBQyxpQkFBaUIsRUFDdEIsS0FBSSxDQUFDLGVBQWUsRUFDcEIsS0FBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztRQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7SUFDMUUsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxDQTlONkMsaURBQVEsR0E4TnJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTzJDO0FBQ1Y7QUFFbEM7SUFBMkMsaUNBQVE7SUFHakQsdUJBQVksUUFBa0I7UUFDNUIsa0JBQUssWUFBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLFNBQUM7UUFDN0IsS0FBSSxDQUFDLGFBQWEsR0FBc0IsMERBQWEsQ0FBQztZQUNwRCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDLENBQUM7UUFDSCxLQUFJLENBQUMsY0FBYyxHQUFzQiwwREFBYSxDQUFDO1lBQ3JELEdBQUcsRUFBRSxRQUFRO1lBQ2IsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ25CLFdBQVcsRUFBRSxpQkFBaUI7U0FDL0IsQ0FBQyxDQUFDO1FBQ0gsS0FBSSxDQUFDLGFBQWEsR0FBc0IsMERBQWEsQ0FBQztZQUNwRCxHQUFHLEVBQUUsUUFBUTtZQUNiLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQixXQUFXLEVBQUUsU0FBUztTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFNLGFBQWEsR0FBRywwREFBYSxDQUFDO1lBQ2xDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDO1NBQ3ZDLENBQUMsQ0FBQztRQUNILElBQU0sWUFBWSxHQUFHLDBEQUFhLENBQUM7WUFDakMsR0FBRyxFQUFFLEtBQUs7WUFDVixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNuQyxDQUFDLENBQUM7UUFDSCxJQUFNLEtBQUssR0FBRywwREFBYSxDQUFDO1lBQzFCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFDSCxJQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU07WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsSUFBTSxhQUFhLEdBQUcsMERBQWEsQ0FBQztvQkFDbEMsR0FBRyxFQUFFLE1BQU07b0JBQ1gsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixXQUFXLEVBQUUsTUFBTTtpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxhQUFhLENBQUMsTUFBTSxDQUNsQixLQUFJLENBQUMsYUFBYSxFQUNsQixLQUFJLENBQUMsY0FBYyxFQUNuQixLQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO1FBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBQ2xDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQ0F2RDBDLGlEQUFRLEdBdURsRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEYyxTQUFTLGFBQWEsQ0FBQyxRQUFtQjtJQUN2RCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDbkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDekQsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJrQztBQUNJO0FBQ1k7QUFFbEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxpRUFBUSxFQUFFLENBQUM7QUFDaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSwrQ0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzcz9iMzc2Iiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL0FwcC50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9jb250cm9sbGVyL0NvbnRyb2xsZXJHYW1lUGFnZS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9jb250cm9sbGVyL0NvbnRyb2xsZXJSZWNvcmRzUGFnZS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9jb250cm9sbGVyL0NvbnRyb2xsZXJTZXR0aW5nc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvY29udHJvbGxlci9Db250cm9sbGVyU3RhcnRQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL21vZGVsL0V4YW1wbGVzLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL21vZGVsL0dhbWVEYXRhLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL21vZGVsL1N0b3JhZ2VHYW1lRGF0YS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy9tb2RlbC9leGFtcGxlc0FycmF5cy50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy92aWV3L0luZm9CbG9jay50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy92aWV3L1ZpZXdGb290ZXIudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9WaWV3R2FtZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9WaWV3SGVscC50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy92aWV3L1ZpZXdOYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld1BhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9WaWV3UmVjb3Jkc1BhZ2UudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy8uL3NyYy9hc3NldHMvdHMvdmlldy9WaWV3U2V0dGluZ3NQYWdlLnRzIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvYXNzZXRzL3RzL3ZpZXcvVmlld1N0YXJ0UGFnZS50cyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzLy4vc3JjL2Fzc2V0cy90cy92aWV3L3JldHVybkVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWF0aC1mb3Ita2lkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYXRoLWZvci1raWRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21hdGgtZm9yLWtpZHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IENvbnRyb2xsZXJHYW1lUGFnZSBmcm9tICcuL2NvbnRyb2xsZXIvQ29udHJvbGxlckdhbWVQYWdlJztcbmltcG9ydCBDb250cm9sbGVyUmVjb3Jkc1BhZ2UgZnJvbSAnLi9jb250cm9sbGVyL0NvbnRyb2xsZXJSZWNvcmRzUGFnZSc7XG5pbXBvcnQgQ29udHJvbGxlclNldHRpbmdzUGFnZSBmcm9tICcuL2NvbnRyb2xsZXIvQ29udHJvbGxlclNldHRpbmdzUGFnZSc7XG5pbXBvcnQgQ29udHJvbGxlclN0YXJ0UGFnZSBmcm9tICcuL2NvbnRyb2xsZXIvQ29udHJvbGxlclN0YXJ0UGFnZSc7XG5pbXBvcnQgR2FtZURhdGEgZnJvbSAnLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgaU9iakZvckxTIGZyb20gJy4vbW9kZWwvaU9iakZvckxTJztcbmltcG9ydCBWaWV3R2FtZVBhZ2UgZnJvbSAnLi92aWV3L1ZpZXdHYW1lUGFnZSc7XG5pbXBvcnQgVmlld1JlY29yZHNQYWdlIGZyb20gJy4vdmlldy9WaWV3UmVjb3Jkc1BhZ2UnO1xuaW1wb3J0IFZpZXdTZXR0aW5nc1BhZ2UgZnJvbSAnLi92aWV3L1ZpZXdTZXR0aW5nc1BhZ2UnO1xuaW1wb3J0IFZpZXdTdGFydFBhZ2UgZnJvbSAnLi92aWV3L1ZpZXdTdGFydFBhZ2UnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5nYW1lRGF0YSA9IGRhdGE7XG4gIH1cblxuICBwcml2YXRlIGFkZFBhZ2VzVmlld3MoKSB7XG4gICAgY29uc3Qgdmlld1N0YXJ0UGFnZSA9IG5ldyBWaWV3U3RhcnRQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Vmlld1N0YXJ0UGFnZSh2aWV3U3RhcnRQYWdlKTtcbiAgICBjb25zdCB2aWV3U2V0dGluZ3NQYWdlID0gbmV3IFZpZXdTZXR0aW5nc1BhZ2UodGhpcy5nYW1lRGF0YSk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRWaWV3U2V0dGluZ3NQYWdlKHZpZXdTZXR0aW5nc1BhZ2UpO1xuICAgIGNvbnN0IHZpZXdHYW1lUGFnZSA9IG5ldyBWaWV3R2FtZVBhZ2UodGhpcy5nYW1lRGF0YSk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRWaWV3R2FtZVBhZ2Uodmlld0dhbWVQYWdlKTtcbiAgICBjb25zdCB2aWV3UmVjb3Jkc1BhZ2UgPSBuZXcgVmlld1JlY29yZHNQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Vmlld1JlY29yZHNQYWdlKHZpZXdSZWNvcmRzUGFnZSk7XG4gIH1cblxuICBwcml2YXRlIGFkZENvbnRyb2xsZXJzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xsZXJTdGFydFBhZ2UgPSBuZXcgQ29udHJvbGxlclN0YXJ0UGFnZSh0aGlzLmdhbWVEYXRhKTtcbiAgICBjb25zdCBjb250cm9sbGVyU2V0dGluZ3NQYWdlID0gbmV3IENvbnRyb2xsZXJTZXR0aW5nc1BhZ2UodGhpcy5nYW1lRGF0YSk7XG4gICAgY29uc3QgY29udHJvbGxlckdhbWVQYWdlID0gbmV3IENvbnRyb2xsZXJHYW1lUGFnZSh0aGlzLmdhbWVEYXRhKTtcbiAgICBjb25zdCBjb250cm9sbGVyUmVjb3Jkc1BhZ2UgPSBuZXcgQ29udHJvbGxlclJlY29yZHNQYWdlKHRoaXMuZ2FtZURhdGEpO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0Q29udHJvbGxlclN0YXJ0UGFnZShjb250cm9sbGVyU3RhcnRQYWdlKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldENvbnRyb2xsZXJTZXR0aW5nc1BhZ2UoY29udHJvbGxlclNldHRpbmdzUGFnZSk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRDb250cm9sbGVyR2FtZVBhZ2UoY29udHJvbGxlckdhbWVQYWdlKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldENvbnRyb2xsZXJSZWNvcmRzUGFnZShjb250cm9sbGVyUmVjb3Jkc1BhZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3R1YWxpemVEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0cmluZ0RhdGE6IHN0cmluZyB8IG51bGwgPVxuICAgICAgdGhpcy5nYW1lRGF0YS5zdG9yYWdlR2FtZURhdGEubG9hZEZyb21MUygpO1xuICAgIGxldCBwYXJzZWRPYmplY3Q6IGlPYmpGb3JMUyA9IHtcbiAgICAgIGV4YW1wbGVzOiBbXSxcbiAgICAgIG1pc3Rha2VzOiBbXSxcbiAgICAgIG9wZXJhdGlvbjogJycsXG4gICAgICBzY29yZTogMCxcbiAgICAgIGdhbWVUaW1lOiAwLFxuICAgICAgbnVtTWlzdGFrZXM6IDAsXG4gICAgICBudW1FeGFtcGxlczogMCxcbiAgICAgIHJlY29yZHM6IFtdLFxuICAgIH07XG4gICAgaWYgKHN0cmluZ0RhdGEgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlZE9iamVjdCA9IDxpT2JqRm9yTFM+SlNPTi5wYXJzZShzdHJpbmdEYXRhKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0RXhhbXBsZXMocGFyc2VkT2JqZWN0LmV4YW1wbGVzKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0TWlzdGFrZXMocGFyc2VkT2JqZWN0Lm1pc3Rha2VzKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0T3BlcmF0aW9uKHBhcnNlZE9iamVjdC5vcGVyYXRpb24pO1xuICAgICAgdGhpcy5nYW1lRGF0YS5zZXRTY29yZShwYXJzZWRPYmplY3Quc2NvcmUpO1xuICAgICAgdGhpcy5nYW1lRGF0YS5zZXRSZWNvcmRzKHBhcnNlZE9iamVjdC5yZWNvcmRzKTtcbiAgICB9XG4gIH07XG5cbiAgbmV3KCkge1xuICAgIHRoaXMuYWN0dWFsaXplRGF0YSgpO1xuICAgIHRoaXMuYWRkUGFnZXNWaWV3cygpO1xuICAgIHRoaXMuYWRkQ29udHJvbGxlcnMoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldENvbnRyb2xsZXJTdGFydFBhZ2UoKT8uc3RhcnRMaXN0ZW5CdXR0b25zKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRDb250cm9sbGVyU2V0dGluZ3NQYWdlKCk/LnN0YXJ0TGlzdGVuQnV0dG9ucygpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Q29udHJvbGxlckdhbWVQYWdlKCk/LnN0YXJ0TGlzdGVuRXZlbnRzKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRDb250cm9sbGVyUmVjb3Jkc1BhZ2UoKT8uc3RhcnRMaXN0ZW5NZW51KCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3U3RhcnRQYWdlKCk/LnNob3coKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcbmltcG9ydCBpRXhhbXBsZSBmcm9tICcuLi9tb2RlbC9pRXhhbXBsZSc7XG5pbXBvcnQgaVJlY29yZCBmcm9tICcuLi9tb2RlbC9pUmVjb3JkJztcbmltcG9ydCBJbmZvQmxvY2sgZnJvbSAnLi4vdmlldy9JbmZvQmxvY2snO1xuaW1wb3J0IFZpZXdHYW1lUGFnZSBmcm9tICcuLi92aWV3L1ZpZXdHYW1lUGFnZSc7XG5pbXBvcnQgYXVkaW9PayBmcm9tICcuLi8uLi9hdWRpby9vay5tcDMnO1xuaW1wb3J0IGF1ZGlvRXJyIGZyb20gJy4uLy4uL2F1ZGlvL2Vycm9yLm1wMyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJHYW1lUGFnZSB7XG4gIHNvdW5kT2s6IEhUTUxBdWRpb0VsZW1lbnQ7XG4gIHNvdW5kRXJyb3I6IEhUTUxBdWRpb0VsZW1lbnQ7XG4gIGdhbWVEYXRhOiBHYW1lRGF0YTtcbiAgdmlld0dhbWVQYWdlOiBWaWV3R2FtZVBhZ2U7XG4gIGFuc3dlckZpZWxkOiBIVE1MRGl2RWxlbWVudDtcbiAgaW5mb0Jsb2NrOiBJbmZvQmxvY2s7XG4gIGN1cnJlbnRFeGFtcGxlOiBpRXhhbXBsZSB8IG51bGw7XG4gIG5hdkhvbWU6IEhUTUxMSUVsZW1lbnQ7XG4gIG5hdkhlbHA6IEhUTUxMSUVsZW1lbnQ7XG4gIGhlbHBDbG9zZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGtleXNXcmFwcGVyOiBIVE1MRGl2RWxlbWVudDtcbiAgYXJyRXhhbXBsZXM6IGlFeGFtcGxlW107XG4gIHN0YXJ0RXhhbXBsZVRpbWU6IERhdGUgfCBudWxsO1xuICBibG9ja0J1dHRvbnM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZ2FtZURhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5nYW1lRGF0YSA9IGdhbWVEYXRhO1xuICAgIHRoaXMudmlld0dhbWVQYWdlID0gPFZpZXdHYW1lUGFnZT5nYW1lRGF0YS5nZXRWaWV3R2FtZVBhZ2UoKTtcbiAgICB0aGlzLmFuc3dlckZpZWxkID0gdGhpcy52aWV3R2FtZVBhZ2UuYW5zd2VyRmllbGQ7XG4gICAgdGhpcy5pbmZvQmxvY2sgPSBuZXcgSW5mb0Jsb2NrKGdhbWVEYXRhKTtcbiAgICB0aGlzLmN1cnJlbnRFeGFtcGxlID0gbnVsbDtcbiAgICB0aGlzLm5hdkhvbWUgPSA8SFRNTExJRWxlbWVudD50aGlzLnZpZXdHYW1lUGFnZS5uYXZIb21lO1xuICAgIHRoaXMubmF2SGVscCA9IDxIVE1MTElFbGVtZW50PnRoaXMudmlld0dhbWVQYWdlLm5hdkhlbHA7XG4gICAgdGhpcy5rZXlzV3JhcHBlciA9IHRoaXMudmlld0dhbWVQYWdlLmtleXNXcmFwcGVyO1xuICAgIHRoaXMuYXJyRXhhbXBsZXMgPSBbXTtcbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbiA9IHRoaXMudmlld0dhbWVQYWdlLmhlbHBDbG9zZUJ1dHRvbjtcbiAgICB0aGlzLnN0YXJ0RXhhbXBsZVRpbWUgPSBudWxsO1xuICAgIHRoaXMuYmxvY2tCdXR0b25zID0gZmFsc2U7XG4gICAgdGhpcy5zb3VuZE9rID0gbmV3IEF1ZGlvKGF1ZGlvT2spO1xuICAgIHRoaXMuc291bmRFcnJvciA9IG5ldyBBdWRpbyhhdWRpb0Vycik7XG4gIH1cblxuICBzdGFydE5leHRFeGFtcGxlID0gKCkgPT4ge1xuICAgIHRoaXMuYXJyRXhhbXBsZXMgPSB0aGlzLmdhbWVEYXRhLmdldEV4YW1wbGVzKCk7XG4gICAgY29uc3QgZXhhbXBsZTogSFRNTERpdkVsZW1lbnQgPSB0aGlzLnZpZXdHYW1lUGFnZS5leGFtcGxlO1xuICAgIGlmICh0aGlzLmFyckV4YW1wbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLmdhbWVEYXRhLmdldFNjb3JlKCkgPT09IDApIHtcbiAgICAgICAgdGhpcy5pbmZvQmxvY2suc2hvd0luc3RydWN0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZm9CbG9jay5zaG93U3RhdGlzdGljcygpO1xuICAgICAgfVxuICAgICAgdGhpcy52aWV3R2FtZVBhZ2UudXBkYXRlU2NvcmUoKTtcbiAgICAgIHRoaXMuc3RhcnRFeGFtcGxlVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBuZXh0RXhhbXBsZSA9IDxpRXhhbXBsZT50aGlzLmFyckV4YW1wbGVzLnBvcCgpO1xuICAgICAgdGhpcy5jdXJyZW50RXhhbXBsZSA9IG5leHRFeGFtcGxlO1xuICAgICAgZXhhbXBsZS5pbm5lclRleHQgPSBgJHtuZXh0RXhhbXBsZS5leGFtcGxlfSA9YDtcbiAgICAgIHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0ID0gJz8/JztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjb3JkOiBpUmVjb3JkID0ge1xuICAgICAgICBvcGVyYXRpb246IHRoaXMuZ2FtZURhdGEuZ2V0T3BlcmF0aW9uKCksXG4gICAgICAgIG51bUV4YW1wbGVzOiB0aGlzLmdhbWVEYXRhLmdldE51bUV4YW1wbGVzKCksXG4gICAgICAgIG51bU1pc3Rha2VzOiB0aGlzLmdhbWVEYXRhLmdldE51bU1pc3Rha2VzKCksXG4gICAgICAgIHNjb3JlOiB0aGlzLmdhbWVEYXRhLmdldFNjb3JlKCksXG4gICAgICAgIHRpbWU6IHRoaXMuZ2FtZURhdGEuZ2V0R2FtZVRpbWUoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIH07XG4gICAgICB0aGlzLmdhbWVEYXRhLmFkZFJlY29yZChyZWNvcmQpO1xuICAgICAgdGhpcy5pbmZvQmxvY2suc2hvd0VuZEdhbWUoKTtcbiAgICAgIGV4YW1wbGUuaW5uZXJUZXh0ID0gYNCc0L7Qu9C+0LTQtdGGYDtcbiAgICAgIHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0ID0gJyEhISc7XG4gICAgICB0aGlzLmN1cnJlbnRFeGFtcGxlID0gbnVsbDtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0RXhhbXBsZXMoW10pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudmlld0dhbWVQYWdlLmhpZGUoKTtcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3UmVjb3Jkc1BhZ2UoKT8uc2hvdygpO1xuICAgICAgfSwgMzUwMCk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgYWRkRXhhbXBsZVRvTWlzdGFrZXMgPSAoZXhhbXBsZTogaUV4YW1wbGUpID0+IHtcbiAgICBjb25zdCBhcnJNaXN0YWtlcyA9XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldE1pc3Rha2VzKCkgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IFtdXG4gICAgICAgIDogdGhpcy5nYW1lRGF0YS5nZXRNaXN0YWtlcygpO1xuICAgIGNvbnN0IGV4YW1wbGVzVGV4dHM6IHN0cmluZ1tdID0gW107XG4gICAgYXJyTWlzdGFrZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZXhhbXBsZXNUZXh0cy5wdXNoKGl0ZW0uZXhhbXBsZSk7XG4gICAgfSk7XG4gICAgaWYgKCFleGFtcGxlc1RleHRzLmluY2x1ZGVzKGV4YW1wbGUuZXhhbXBsZSkpIHtcbiAgICAgIGFyck1pc3Rha2VzLnB1c2goZXhhbXBsZSk7XG4gICAgICB0aGlzLmdhbWVEYXRhLnNldE1pc3Rha2VzKGFyck1pc3Rha2VzKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBpbmNyZWFzZVNjb3JlID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFNjb3JlID0gdGhpcy5nYW1lRGF0YS5nZXRTY29yZSgpO1xuICAgIGNvbnN0IG5ld1Njb3JlID0gY3VycmVudFNjb3JlICsgbnVtO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0U2NvcmUobmV3U2NvcmUpO1xuICB9O1xuXG4gIHByaXZhdGUgY2hlY2tBbnN3ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuY3VycmVudEV4YW1wbGUgIT09IG51bGwgJiYgdGhpcy5hbnN3ZXJGaWVsZC50ZXh0Q29udGVudCAhPT0gJz8/Jykge1xuICAgICAgaWYgKE51bWJlcih0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCkgPT09IHRoaXMuY3VycmVudEV4YW1wbGUuYW5zd2VyKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0RXhhbXBsZVRpbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzb2x2ZVRpbWUgPVxuICAgICAgICAgICAgbmV3IERhdGUoKS52YWx1ZU9mKCkgLSB0aGlzLnN0YXJ0RXhhbXBsZVRpbWUudmFsdWVPZigpO1xuICAgICAgICAgIGNvbnN0IGdhbWVUaW1lID0gdGhpcy5nYW1lRGF0YS5nZXRHYW1lVGltZSgpO1xuICAgICAgICAgIHRoaXMuZ2FtZURhdGEuc2V0R2FtZVRpbWUoZ2FtZVRpbWUgKyBzb2x2ZVRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZURhdGEuc2V0RXhhbXBsZXModGhpcy5hcnJFeGFtcGxlcyk7XG4gICAgICAgIHRoaXMuaW5mb0Jsb2NrLnNob3dSaWdodEFuc3dlcigpO1xuICAgICAgICB2b2lkIHRoaXMuc291bmRPay5wbGF5KCk7XG4gICAgICAgIHRoaXMuaW5jcmVhc2VTY29yZSh0aGlzLmN1cnJlbnRFeGFtcGxlLnNjb3JlKTtcbiAgICAgICAgdGhpcy52aWV3R2FtZVBhZ2UudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgdGhpcy5ibG9ja0J1dHRvbnMgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXJ0TmV4dEV4YW1wbGUoKTtcbiAgICAgICAgICB0aGlzLmJsb2NrQnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICB9LCAxMTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRFeGFtcGxlLnNjb3JlID4gMCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEV4YW1wbGUuc2NvcmUgLT0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV4YW1wbGVUb01pc3Rha2VzKHRoaXMuY3VycmVudEV4YW1wbGUpO1xuICAgICAgICB0aGlzLmluZm9CbG9jay5zaG93V3JvbmdBbnN3ZXIoKTtcbiAgICAgICAgdm9pZCB0aGlzLnNvdW5kRXJyb3IucGxheSgpO1xuICAgICAgICB0aGlzLmJsb2NrQnV0dG9ucyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYmxvY2tCdXR0b25zID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pbmZvQmxvY2suc2hvd0luc3RydWN0aW9uKCk7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJGaWVsZC5pbm5lclRleHQgPSAnPz8nO1xuICAgICAgICB9LCAxMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBjb250cm9sUHJlc3NlZEtleSA9IChrZXlWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRoaXMuYmxvY2tCdXR0b25zID09PSBmYWxzZSkge1xuICAgICAgc3dpdGNoIChrZXlWYWx1ZSkge1xuICAgICAgICBjYXNlICfDlyc6XG4gICAgICAgICAgdGhpcy5hbnN3ZXJGaWVsZC5pbm5lclRleHQgPSAnPz8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICfinJMnOlxuICAgICAgICAgIHRoaXMuY2hlY2tBbnN3ZXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAodGhpcy5hbnN3ZXJGaWVsZC5pbm5lclRleHQubGVuZ3RoID4gMSAmJlxuICAgICAgICAgICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCAhPT0gJzEwJykgfHxcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyRmllbGQuaW5uZXJUZXh0ID09PSAnPz8nXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCA9IGtleVZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuc3dlckZpZWxkLmlubmVyVGV4dCArPSBrZXlWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgY2hlY2tQcmVzc2VkQnV0dG9uID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbicpKSB7XG4gICAgICBidXR0b24uYmx1cigpO1xuICAgICAgdGhpcy5jb250cm9sUHJlc3NlZEtleShidXR0b24ubmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgc3RhcnRMaXN0ZW5OdW1CdXR0b25zID0gKCkgPT4ge1xuICAgIHRoaXMua2V5c1dyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgdGhpcy5jaGVja1ByZXNzZWRCdXR0b24oZXZlbnQpXG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIGNoZWNrS2V5Ym9hcmRCdXR0b25zID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgIGlmICgha2V5Lm1hdGNoKC9cXEQvZykpIHtcbiAgICAgIHRoaXMuY29udHJvbFByZXNzZWRLZXkoa2V5KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0JhY2tzcGFjZScgfHwga2V5ID09PSAnRGVsZXRlJyB8fCBrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkS2V5KCfDlycpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmNvbnRyb2xQcmVzc2VkS2V5KCfinJMnKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGFydExpc3RlbktleWJvYXJkQnV0dG9ucyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0tleWJvYXJkQnV0dG9ucyhldmVudCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGFydExpc3Rlbk1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5uYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5nYW1lRGF0YS5zdG9yYWdlR2FtZURhdGEuc2F2ZVRvTFMoXG4gICAgICAgIHRoaXMuZ2FtZURhdGEsXG4gICAgICAgIDxpRXhhbXBsZT50aGlzLmN1cnJlbnRFeGFtcGxlXG4gICAgICApO1xuICAgICAgdGhpcy52aWV3R2FtZVBhZ2UuaGlkZSgpO1xuICAgICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3U3RhcnRQYWdlKCk/LnNob3coKTtcbiAgICB9KTtcbiAgICB0aGlzLm5hdkhlbHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnZpZXdHYW1lUGFnZS52aWV3SGVscD8uc2hvdygpO1xuICAgIH0pO1xuICAgIHRoaXMuaGVscENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIHRoaXMudmlld0dhbWVQYWdlLnZpZXdIZWxwPy5oaWRlKClcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgc3RhcnRMaXN0ZW5DbG9zZVdpbmRvdyA9ICgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5nYW1lRGF0YS5zdG9yYWdlR2FtZURhdGEuc2F2ZVRvTFMoXG4gICAgICAgIHRoaXMuZ2FtZURhdGEsXG4gICAgICAgIDxpRXhhbXBsZT50aGlzLmN1cnJlbnRFeGFtcGxlXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHN0YXJ0TGlzdGVuRXZlbnRzKCkge1xuICAgIHRoaXMuc3RhcnRMaXN0ZW5OdW1CdXR0b25zKCk7XG4gICAgdGhpcy5zdGFydExpc3RlbktleWJvYXJkQnV0dG9ucygpO1xuICAgIHRoaXMuc3RhcnRMaXN0ZW5NZW51KCk7XG4gICAgdGhpcy5zdGFydExpc3RlbkNsb3NlV2luZG93KCk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgVmlld1JlY29yZHNQYWdlIGZyb20gJy4uL3ZpZXcvVmlld1JlY29yZHNQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclJlY29yZHNQYWdlIHtcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xuICB2aWV3UmVjb3Jkc1BhZ2U6IFZpZXdSZWNvcmRzUGFnZTtcbiAgbmF2SG9tZTogSFRNTExJRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZ2FtZURhdGEgPSBkYXRhO1xuICAgIHRoaXMudmlld1JlY29yZHNQYWdlID0gPFZpZXdSZWNvcmRzUGFnZT50aGlzLmdhbWVEYXRhLmdldFZpZXdSZWNvcmRzUGFnZSgpO1xuICAgIHRoaXMubmF2SG9tZSA9IDxIVE1MTElFbGVtZW50PnRoaXMuZ2FtZURhdGEuZ2V0Vmlld1JlY29yZHNQYWdlKCk/Lm5hdkhvbWU7XG4gIH1cblxuICBzdGFydExpc3Rlbk1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5uYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy52aWV3UmVjb3Jkc1BhZ2UuaGlkZSgpO1xuICAgICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3U3RhcnRQYWdlKCk/LnNob3coKTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCBFeGFtcGxlcyBmcm9tICcuLi9tb2RlbC9FeGFtcGxlcyc7XG5pbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IGlFeGFtcGxlIGZyb20gJy4uL21vZGVsL2lFeGFtcGxlJztcbmltcG9ydCBWaWV3U2V0dGluZ3NQYWdlIGZyb20gJy4uL3ZpZXcvVmlld1NldHRpbmdzUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJTZXR0aW5nc1BhZ2Uge1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIGJ1dHRvbldyYXBwZXI6IEhUTUxEaXZFbGVtZW50O1xuICBuYXZIb21lOiBIVE1MTElFbGVtZW50O1xuICBuYXZIZWxwOiBIVE1MTElFbGVtZW50O1xuICBoZWxwQ2xvc2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZXROdW1FeHByZXNzaW9uc0J1dHRvbnM6IEhUTUxEaXZFbGVtZW50O1xuICBkZXNjcmlwdGlvbk51bUV4YW1wbGVzOiBIVE1MRGl2RWxlbWVudDtcbiAgcmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcmVtb3ZlT25lRXhhbXBsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGFkZE1vc3RFeGFtcGxlc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGFkZE1hbnlFeGFtcGxlc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGFkZE9uZUV4YW1wbGVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZXR0aW5nc0FwcGx5QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgc2V0dGluZ3NDbG9zZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHNldHRpbmdzQmxvY2s6IEhUTUxEaXZFbGVtZW50O1xuICB2aWV3U2V0dGluZ3NQYWdlOiBWaWV3U2V0dGluZ3NQYWdlO1xuICB0ZW1wT3BlcmF0aW9uOiBzdHJpbmc7XG4gIHRlbXBFeGFtcGxlczogaUV4YW1wbGVbXTtcblxuICBjb25zdHJ1Y3RvcihnYW1lRGF0YTogR2FtZURhdGEpIHtcbiAgICB0aGlzLmdhbWVEYXRhID0gZ2FtZURhdGE7XG4gICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlID0gPFZpZXdTZXR0aW5nc1BhZ2U+Z2FtZURhdGEuZ2V0Vmlld1NldHRpbmdzUGFnZSgpO1xuICAgIHRoaXMuYnV0dG9uV3JhcHBlciA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5idXR0b25XcmFwcGVyO1xuICAgIHRoaXMubmF2SG9tZSA9IDxIVE1MTElFbGVtZW50PnRoaXMudmlld1NldHRpbmdzUGFnZS5uYXZIb21lO1xuICAgIHRoaXMubmF2SGVscCA9IDxIVE1MTElFbGVtZW50PnRoaXMudmlld1NldHRpbmdzUGFnZS5uYXZIZWxwO1xuICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcyA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5kZXNjcmlwdGlvbk51bUV4YW1wbGVzO1xuICAgIHRoaXMuc2V0TnVtRXhwcmVzc2lvbnNCdXR0b25zID0gPEhUTUxEaXZFbGVtZW50PihcbiAgICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5zZXROdW1FeHByZXNzaW9uc0J1dHRvbnNcbiAgICApO1xuICAgIHRoaXMucmVtb3ZlTW9zdEV4YW1wbGVzQnV0dG9uID1cbiAgICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5yZW1vdmVNb3N0RXhhbXBsZXNCdXR0b247XG4gICAgdGhpcy5yZW1vdmVNYW55RXhhbXBsZXNCdXR0b24gPVxuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLnJlbW92ZU1hbnlFeGFtcGxlc0J1dHRvbjtcbiAgICB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24gPSB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UucmVtb3ZlT25lRXhhbXBsZUJ1dHRvbjtcbiAgICB0aGlzLmFkZE1vc3RFeGFtcGxlc0J1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5hZGRNb3N0RXhhbXBsZXNCdXR0b247XG4gICAgdGhpcy5hZGRNYW55RXhhbXBsZXNCdXR0b24gPSB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UuYWRkTWFueUV4YW1wbGVzQnV0dG9uO1xuICAgIHRoaXMuYWRkT25lRXhhbXBsZUJ1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5hZGRPbmVFeGFtcGxlQnV0dG9uO1xuICAgIHRoaXMuc2V0dGluZ3NBcHBseUJ1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5zZXR0aW5nc0FwcGx5QnV0dG9uO1xuICAgIHRoaXMuc2V0dGluZ3NDbG9zZUJ1dHRvbiA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5pbmZvQ2xvc2VCdXR0b247XG4gICAgdGhpcy5oZWxwQ2xvc2VCdXR0b24gPSB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UuaGVscENsb3NlQnV0dG9uO1xuICAgIHRoaXMuc2V0dGluZ3NCbG9jayA9IHRoaXMudmlld1NldHRpbmdzUGFnZS5zZXR0aW5nc0Jsb2NrO1xuICAgIHRoaXMudGVtcE9wZXJhdGlvbiA9ICcnO1xuICAgIHRoaXMudGVtcEV4YW1wbGVzID0gW107XG4gIH1cblxuICBhZGRFeGFtcGxlc0RhdGEgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3BlcmF0aW9uVGV4dCA9IHRoaXMudGVtcE9wZXJhdGlvbi5zbGljZSgwLCAxKTtcbiAgICBsZXQgZXhhbXBsZXMgPSBbXTtcbiAgICBpZiAob3BlcmF0aW9uVGV4dCA9PT0gJyEnKSB7XG4gICAgICBleGFtcGxlcyA9IHRoaXMuZ2FtZURhdGEuZ2V0TWlzdGFrZXMoKTtcbiAgICAgIHRoaXMuZ2FtZURhdGEuc2V0TWlzdGFrZXMoW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGFtcGxlcyA9IG5ldyBFeGFtcGxlcyhvcGVyYXRpb25UZXh0KS5yZXR1cm4oKTtcbiAgICB9XG4gICAgdGhpcy50ZW1wRXhhbXBsZXMgPSBleGFtcGxlcztcbiAgfTtcblxuICBtYWtlU2V0dGluZ3NCbG9ja0FjdGl2ZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldHRpbmdzQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnaW5mb3JtYXRpb25fdW5hY3RpdmUnKTtcbiAgfTtcblxuICBtYWtlU2V0dGluZ3NCbG9ja1VuYWN0aXZlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zZXR0aW5nc0Jsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaW5mb3JtYXRpb25fdW5hY3RpdmUnKSkge1xuICAgICAgdGhpcy5zZXR0aW5nc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2luZm9ybWF0aW9uX3VuYWN0aXZlJyk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgYXBwbHlUZW1wU2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRPcGVyYXRpb24odGhpcy50ZW1wT3BlcmF0aW9uKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldEV4YW1wbGVzKHRoaXMudGVtcEV4YW1wbGVzKTtcbiAgfTtcblxuICBzZXRFeGFtcGxlcyA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnRlbXBPcGVyYXRpb24gPSBidXR0b24uaW5uZXJIVE1MO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uT3BlcmF0aW9uID0gPEhUTUxFbGVtZW50PihcbiAgICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5kZXNjcmlwdGlvbk9wZXJhdGlvblxuICAgICk7XG4gICAgZGVzY3JpcHRpb25PcGVyYXRpb24udGV4dENvbnRlbnQgPSBidXR0b24uaW5uZXJIVE1MO1xuICAgIHRoaXMubWFrZVNldHRpbmdzQmxvY2tBY3RpdmUoKTtcbiAgICB0aGlzLmFkZEV4YW1wbGVzRGF0YSgpO1xuICAgIGNvbnN0IG51bUV4YW1wbGVzID0gdGhpcy50ZW1wRXhhbXBsZXMubGVuZ3RoO1xuICAgIGNvbnN0IGxhc3ROdW1FeGFtcGxlcyA9XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldFJlY29yZHMoKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5nYW1lRGF0YS5nZXRSZWNvcmRzKClbMF0ubnVtRXhhbXBsZXNcbiAgICAgICAgOiAxMDtcbiAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQgPVxuICAgICAgbnVtRXhhbXBsZXMgPj0gbGFzdE51bUV4YW1wbGVzXG4gICAgICAgID8gU3RyaW5nKGxhc3ROdW1FeGFtcGxlcylcbiAgICAgICAgOiBTdHJpbmcobnVtRXhhbXBsZXMpO1xuICB9O1xuXG4gIGNoZWNrQWN0aXZlU2V0TnVtQnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBudW1FeGFtcGxlcyA9IHRoaXMudGVtcEV4YW1wbGVzLmxlbmd0aDtcbiAgICBpZiAoTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgPT0gbnVtRXhhbXBsZXMpIHtcbiAgICAgIHRoaXMuYWRkT25lRXhhbXBsZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkT25lRXhhbXBsZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgKyAxMCA+IG51bUV4YW1wbGVzKSB7XG4gICAgICB0aGlzLmFkZE1hbnlFeGFtcGxlc0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkTWFueUV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSArIDUwID4gbnVtRXhhbXBsZXMpIHtcbiAgICAgIHRoaXMuYWRkTW9zdEV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRNb3N0RXhhbXBsZXNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpIC0gNTAgPD0gMCkge1xuICAgICAgdGhpcy5yZW1vdmVNb3N0RXhhbXBsZXNCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgLSAxMCA8PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZU1hbnlFeGFtcGxlc0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSAtIDEgPD0gMCkge1xuICAgICAgdGhpcy5yZW1vdmVPbmVFeGFtcGxlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVPbmVFeGFtcGxlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHNldEdhbWUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IDxIVE1MQnV0dG9uRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbicpKSB7XG4gICAgICB0aGlzLnNldEV4YW1wbGVzKGV2ZW50KTtcbiAgICAgIHRoaXMuY2hlY2tBY3RpdmVTZXROdW1CdXR0b25zKCk7XG4gICAgfVxuICB9O1xuXG4gIGNoYW5nZU51bUV4YW1wbGVzID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IDxIVE1MQnV0dG9uRWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbicpKSB7XG4gICAgICBpZiAoYnV0dG9uID09PSB0aGlzLnJlbW92ZU9uZUV4YW1wbGVCdXR0b24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50ID0gU3RyaW5nKFxuICAgICAgICAgIE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpIC0gMVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gPT09IHRoaXMucmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCA9IFN0cmluZyhcbiAgICAgICAgICBOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSAtIDEwXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiA9PT0gdGhpcy5yZW1vdmVNb3N0RXhhbXBsZXNCdXR0b24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50ID0gU3RyaW5nKFxuICAgICAgICAgIE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpIC0gNTBcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uID09PSB0aGlzLmFkZE9uZUV4YW1wbGVCdXR0b24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50ID0gU3RyaW5nKFxuICAgICAgICAgIE51bWJlcih0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQpICsgMVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gPT09IHRoaXMuYWRkTWFueUV4YW1wbGVzQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCA9IFN0cmluZyhcbiAgICAgICAgICBOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KSArIDEwXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMudGV4dENvbnRlbnQgPSBTdHJpbmcoXG4gICAgICAgICAgTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudCkgKyA1MFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja0FjdGl2ZVNldE51bUJ1dHRvbnMoKTtcbiAgICB9XG4gIH07XG5cbiAgYXBwbHlTZXR0aW5ncyA9ICgpID0+IHtcbiAgICB0aGlzLnRlbXBFeGFtcGxlcy5sZW5ndGggPSBOdW1iZXIodGhpcy5kZXNjcmlwdGlvbk51bUV4YW1wbGVzLnRleHRDb250ZW50KTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldEdhbWVUaW1lKDApO1xuICAgIHRoaXMuZ2FtZURhdGEuc2V0TnVtTWlzdGFrZXMoMCk7XG4gICAgdGhpcy5nYW1lRGF0YS5zZXRTY29yZSgwKTtcbiAgICB0aGlzLmdhbWVEYXRhLnNldE51bUV4YW1wbGVzKFxuICAgICAgTnVtYmVyKHRoaXMuZGVzY3JpcHRpb25OdW1FeGFtcGxlcy50ZXh0Q29udGVudClcbiAgICApO1xuICAgIHRoaXMuYXBwbHlUZW1wU2V0dGluZ3MoKTtcbiAgICB0aGlzLm1ha2VTZXR0aW5nc0Jsb2NrVW5hY3RpdmUoKTtcbiAgICB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UuaGlkZSgpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Q29udHJvbGxlckdhbWVQYWdlKCk/LnN0YXJ0TmV4dEV4YW1wbGUoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdHYW1lUGFnZSgpPy5zaG93KCk7XG4gIH07XG5cbiAgc3RhcnRMaXN0ZW5CdXR0b25zID0gKCkgPT4ge1xuICAgIHRoaXMuYnV0dG9uV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2V0R2FtZSk7XG4gICAgdGhpcy5zZXROdW1FeHByZXNzaW9uc0J1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLmNoYW5nZU51bUV4YW1wbGVzXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzQXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGx5U2V0dGluZ3MpO1xuICAgIHRoaXMuc2V0dGluZ3NDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIHRoaXMubWFrZVNldHRpbmdzQmxvY2tVbmFjdGl2ZVxuICAgICk7XG4gICAgdGhpcy5oZWxwQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgdGhpcy52aWV3U2V0dGluZ3NQYWdlLnZpZXdIZWxwPy5oaWRlKClcbiAgICApO1xuICAgIHRoaXMubmF2SG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS5oaWRlKCk7XG4gICAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdTdGFydFBhZ2UoKT8uc2hvdygpO1xuICAgIH0pO1xuICAgIHRoaXMubmF2SGVscC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMudmlld1NldHRpbmdzUGFnZS52aWV3SGVscD8uc2hvdygpO1xuICAgIH0pO1xuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcbmltcG9ydCBWaWV3U3RhcnRQYWdlIGZyb20gJy4uL3ZpZXcvVmlld1N0YXJ0UGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJTdGFydFBhZ2Uge1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIHZpZXdTdGFydFBhZ2U6IFZpZXdTdGFydFBhZ2U7XG4gIGJ1dHRvbk5ld0dhbWU6IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25Mb2FkR2FtZTogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ1dHRvblJlY29yZHM6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGdhbWVEYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuZ2FtZURhdGEgPSBnYW1lRGF0YTtcbiAgICB0aGlzLnZpZXdTdGFydFBhZ2UgPSA8Vmlld1N0YXJ0UGFnZT5nYW1lRGF0YS5nZXRWaWV3U3RhcnRQYWdlKCk7XG4gICAgdGhpcy5idXR0b25OZXdHYW1lID0gdGhpcy52aWV3U3RhcnRQYWdlLmJ1dHRvbk5ld0dhbWU7XG4gICAgdGhpcy5idXR0b25Mb2FkR2FtZSA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLnZpZXdTdGFydFBhZ2UuYnV0dG9uTG9hZEdhbWU7XG4gICAgdGhpcy5idXR0b25SZWNvcmRzID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMudmlld1N0YXJ0UGFnZS5idXR0b25SZWNvcmRzO1xuICB9XG4gIHNob3dSZWNvcmRzID0gKCkgPT4ge1xuICAgIHRoaXMudmlld1N0YXJ0UGFnZS5oaWRlKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3UmVjb3Jkc1BhZ2UoKT8uc2hvdygpO1xuICB9O1xuICBzdGFydE5ld0dhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy52aWV3U3RhcnRQYWdlLmhpZGUoKTtcbiAgICB0aGlzLmdhbWVEYXRhLmdldFZpZXdTZXR0aW5nc1BhZ2UoKT8uc2hvdygpO1xuICB9O1xuICBzdGFydExvYWRHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMudmlld1N0YXJ0UGFnZS5oaWRlKCk7XG4gICAgdGhpcy5nYW1lRGF0YS5nZXRDb250cm9sbGVyR2FtZVBhZ2UoKT8uc3RhcnROZXh0RXhhbXBsZSgpO1xuICAgIHRoaXMuZ2FtZURhdGEuZ2V0Vmlld0dhbWVQYWdlKCk/LnNob3coKTtcbiAgfTtcbiAgc3RhcnRMaXN0ZW5CdXR0b25zID0gKCkgPT4ge1xuICAgIHRoaXMuYnV0dG9uTmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3RhcnROZXdHYW1lKTtcbiAgICB0aGlzLmJ1dHRvbkxvYWRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGFydExvYWRHYW1lKTtcbiAgICB0aGlzLmJ1dHRvblJlY29yZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dSZWNvcmRzKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGRpdmlkZUFycmF5LCBtdWx0aXBsZUFyciwgc3Vic3RyQXJyYXksIHN1bUFycmF5IH0gZnJvbSAnLi9leGFtcGxlc0FycmF5cyc7XG5pbXBvcnQgaUV4YW1wbGUgZnJvbSAnLi9pRXhhbXBsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGVzIHtcbiAgZXhhbXBsZXNBcnI6IGlFeGFtcGxlW107XG5cbiAgY29uc3RydWN0b3Iob3BlcmF0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmV4YW1wbGVzQXJyID1cbiAgICAgIG9wZXJhdGlvbiA9PT0gJysnXG4gICAgICAgID8gc3VtQXJyYXlcbiAgICAgICAgOiBvcGVyYXRpb24gPT09ICctJ1xuICAgICAgICAgID8gc3Vic3RyQXJyYXlcbiAgICAgICAgICAgIDogb3BlcmF0aW9uID09PSAnw5cnXG4gICAgICAgICAgICAgID8gbXVsdGlwbGVBcnI6XG4gICAgICAgICAgICAgIGRpdmlkZUFycmF5O1xuICB9XG5cbiAgcHJpdmF0ZSBzaHVmZmxlID0gKCk6IGlFeGFtcGxlW10gPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogaUV4YW1wbGVbXSA9IFtdO1xuICAgIGZvciAoOyB0aGlzLmV4YW1wbGVzQXJyLmxlbmd0aCA+IDA7ICkge1xuICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5leGFtcGxlc0Fyci5sZW5ndGgpO1xuICAgICAgcmVzdWx0LnB1c2godGhpcy5leGFtcGxlc0FycltyYW5kb21OdW1dKTtcbiAgICAgIHRoaXMuZXhhbXBsZXNBcnIgPSBbXG4gICAgICAgIC4uLnRoaXMuZXhhbXBsZXNBcnIuc2xpY2UoMCwgcmFuZG9tTnVtKSxcbiAgICAgICAgLi4udGhpcy5leGFtcGxlc0Fyci5zbGljZShyYW5kb21OdW0gKyAxLCB0aGlzLmV4YW1wbGVzQXJyLmxlbmd0aCksXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybigpIHtcbiAgICByZXR1cm4gdGhpcy5zaHVmZmxlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBDb250cm9sbGVyR2FtZVBhZ2UgZnJvbSAnLi4vY29udHJvbGxlci9Db250cm9sbGVyR2FtZVBhZ2UnO1xuaW1wb3J0IENvbnRyb2xsZXJSZWNvcmRzUGFnZSBmcm9tICcuLi9jb250cm9sbGVyL0NvbnRyb2xsZXJSZWNvcmRzUGFnZSc7XG5pbXBvcnQgQ29udHJvbGxlclNldHRpbmdzUGFnZSBmcm9tICcuLi9jb250cm9sbGVyL0NvbnRyb2xsZXJTZXR0aW5nc1BhZ2UnO1xuaW1wb3J0IENvbnRyb2xsZXJTdGFydFBhZ2UgZnJvbSAnLi4vY29udHJvbGxlci9Db250cm9sbGVyU3RhcnRQYWdlJztcbmltcG9ydCBWaWV3R2FtZVBhZ2UgZnJvbSAnLi4vdmlldy9WaWV3R2FtZVBhZ2UnO1xuaW1wb3J0IFZpZXdSZWNvcmRzUGFnZSBmcm9tICcuLi92aWV3L1ZpZXdSZWNvcmRzUGFnZSc7XG5pbXBvcnQgVmlld1NldHRpbmdzUGFnZSBmcm9tICcuLi92aWV3L1ZpZXdTZXR0aW5nc1BhZ2UnO1xuaW1wb3J0IFZpZXdTdGFydFBhZ2UgZnJvbSAnLi4vdmlldy9WaWV3U3RhcnRQYWdlJztcbmltcG9ydCBpRXhhbXBsZSBmcm9tICcuL2lFeGFtcGxlJztcbmltcG9ydCBpUmVjb3JkIGZyb20gJy4vaVJlY29yZCc7XG5pbXBvcnQgU3RvcmFnZUdhbWVEYXRhIGZyb20gJy4vU3RvcmFnZUdhbWVEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURhdGEge1xuICBwcml2YXRlIGNvbnRyb2xsZXJHYW1lUGFnZTogQ29udHJvbGxlckdhbWVQYWdlIHwgbnVsbDtcbiAgcHJpdmF0ZSBjb250cm9sbGVyUmVjb3Jkc1BhZ2U6IENvbnRyb2xsZXJSZWNvcmRzUGFnZSB8IG51bGw7XG4gIHByaXZhdGUgY29udHJvbGxlclNldHRpbmdzUGFnZTogQ29udHJvbGxlclNldHRpbmdzUGFnZSB8IG51bGw7XG4gIHByaXZhdGUgY29udHJvbGxlclN0YXJ0UGFnZTogQ29udHJvbGxlclN0YXJ0UGFnZSB8IG51bGw7XG4gIHByaXZhdGUgZXhhbXBsZXM6IGlFeGFtcGxlW107XG4gIHByaXZhdGUgZ2FtZVRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBtaXN0YWtlczogaUV4YW1wbGVbXTtcbiAgcHJpdmF0ZSBudW1FeGFtcGxlczogbnVtYmVyO1xuICBwcml2YXRlIG51bU1pc3Rha2VzOiBudW1iZXI7XG4gIHByaXZhdGUgb3BlcmF0aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVjb3JkczogaVJlY29yZFtdO1xuICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XG4gIHB1YmxpYyBzdG9yYWdlR2FtZURhdGE6IFN0b3JhZ2VHYW1lRGF0YTtcbiAgcHJpdmF0ZSB2aWV3R2FtZVBhZ2U6IFZpZXdHYW1lUGFnZSB8IG51bGw7XG4gIHByaXZhdGUgdmlld1JlY29yZHNQYWdlOiBWaWV3UmVjb3Jkc1BhZ2UgfCBudWxsO1xuICBwcml2YXRlIHZpZXdTZXR0aW5nc1BhZ2U6IFZpZXdTZXR0aW5nc1BhZ2UgfCBudWxsO1xuICBwcml2YXRlIHZpZXdTdGFydFBhZ2U6IFZpZXdTdGFydFBhZ2UgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udHJvbGxlckdhbWVQYWdlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2xsZXJSZWNvcmRzUGFnZSA9IG51bGw7XG4gICAgdGhpcy5jb250cm9sbGVyU2V0dGluZ3NQYWdlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRyb2xsZXJTdGFydFBhZ2UgPSBudWxsO1xuICAgIHRoaXMuZXhhbXBsZXMgPSBbXTtcbiAgICB0aGlzLmdhbWVUaW1lID0gMDtcbiAgICB0aGlzLm1pc3Rha2VzID0gW107XG4gICAgdGhpcy5udW1FeGFtcGxlcyA9IDA7XG4gICAgdGhpcy5udW1NaXN0YWtlcyA9IDA7XG4gICAgdGhpcy5vcGVyYXRpb24gPSAnJztcbiAgICB0aGlzLnJlY29yZHMgPSBbXTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnN0b3JhZ2VHYW1lRGF0YSA9IG5ldyBTdG9yYWdlR2FtZURhdGEoKTtcbiAgICB0aGlzLnZpZXdHYW1lUGFnZSA9IG51bGw7XG4gICAgdGhpcy52aWV3UmVjb3Jkc1BhZ2UgPSBudWxsO1xuICAgIHRoaXMudmlld1NldHRpbmdzUGFnZSA9IG51bGw7XG4gICAgdGhpcy52aWV3U3RhcnRQYWdlID0gbnVsbDtcbiAgfVxuXG4gIHNldFZpZXdSZWNvcmRzUGFnZSA9ICh2aWV3UmVjb3Jkc1BhZ2U6IFZpZXdSZWNvcmRzUGFnZSkgPT4ge1xuICAgIHRoaXMudmlld1JlY29yZHNQYWdlID0gdmlld1JlY29yZHNQYWdlO1xuICB9O1xuXG4gIGdldFZpZXdSZWNvcmRzUGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy52aWV3UmVjb3Jkc1BhZ2U7XG4gIH07XG5cbiAgc2V0Q29udHJvbGxlclJlY29yZHNQYWdlID0gKGNvbnRyb2xsZXJSZWNvcmRzUGFnZTogQ29udHJvbGxlclJlY29yZHNQYWdlKSA9PiB7XG4gICAgdGhpcy5jb250cm9sbGVyUmVjb3Jkc1BhZ2UgPSBjb250cm9sbGVyUmVjb3Jkc1BhZ2U7XG4gIH07XG5cbiAgZ2V0Q29udHJvbGxlclJlY29yZHNQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJSZWNvcmRzUGFnZTtcbiAgfTtcblxuICBzZXRWaWV3U3RhcnRQYWdlID0gKHZpZXdTdGFydFBhZ2U6IFZpZXdTdGFydFBhZ2UpID0+IHtcbiAgICB0aGlzLnZpZXdTdGFydFBhZ2UgPSB2aWV3U3RhcnRQYWdlO1xuICB9O1xuXG4gIGdldFZpZXdTdGFydFBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmlld1N0YXJ0UGFnZTtcbiAgfTtcblxuICBzZXRWaWV3U2V0dGluZ3NQYWdlID0gKHZpZXdTZXR0aW5nc1BhZ2U6IFZpZXdTZXR0aW5nc1BhZ2UpID0+IHtcbiAgICB0aGlzLnZpZXdTZXR0aW5nc1BhZ2UgPSB2aWV3U2V0dGluZ3NQYWdlO1xuICB9O1xuXG4gIGdldFZpZXdTZXR0aW5nc1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmlld1NldHRpbmdzUGFnZTtcbiAgfTtcblxuICBzZXRWaWV3R2FtZVBhZ2UgPSAodmlld0dhbWVQYWdlOiBWaWV3R2FtZVBhZ2UpID0+IHtcbiAgICB0aGlzLnZpZXdHYW1lUGFnZSA9IHZpZXdHYW1lUGFnZTtcbiAgfTtcblxuICBnZXRWaWV3R2FtZVBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMudmlld0dhbWVQYWdlO1xuICB9O1xuXG4gIHNldENvbnRyb2xsZXJTdGFydFBhZ2UgPSAoY29udHJvbGxlclN0YXJ0UGFnZTogQ29udHJvbGxlclN0YXJ0UGFnZSkgPT4ge1xuICAgIHRoaXMuY29udHJvbGxlclN0YXJ0UGFnZSA9IGNvbnRyb2xsZXJTdGFydFBhZ2U7XG4gIH07XG5cbiAgZ2V0Q29udHJvbGxlclN0YXJ0UGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyU3RhcnRQYWdlO1xuICB9O1xuXG4gIHNldENvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgPSAoXG4gICAgY29udHJvbGxlclNldHRpbmdzUGFnZTogQ29udHJvbGxlclNldHRpbmdzUGFnZVxuICApID0+IHtcbiAgICB0aGlzLmNvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgPSBjb250cm9sbGVyU2V0dGluZ3NQYWdlO1xuICB9O1xuXG4gIGdldENvbnRyb2xsZXJTZXR0aW5nc1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlclNldHRpbmdzUGFnZTtcbiAgfTtcblxuICBzZXRDb250cm9sbGVyR2FtZVBhZ2UgPSAoY29udHJvbGxlckdhbWVQYWdlOiBDb250cm9sbGVyR2FtZVBhZ2UpID0+IHtcbiAgICB0aGlzLmNvbnRyb2xsZXJHYW1lUGFnZSA9IGNvbnRyb2xsZXJHYW1lUGFnZTtcbiAgfTtcblxuICBnZXRDb250cm9sbGVyR2FtZVBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlckdhbWVQYWdlO1xuICB9O1xuXG4gIHNldEV4YW1wbGVzID0gKGV4YW1wbGVzOiBpRXhhbXBsZVtdKSA9PiB7XG4gICAgdGhpcy5leGFtcGxlcyA9IGV4YW1wbGVzO1xuICB9O1xuXG4gIGdldEV4YW1wbGVzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmV4YW1wbGVzO1xuICB9O1xuXG4gIHNldE1pc3Rha2VzID0gKG1pc3Rha2VzOiBpRXhhbXBsZVtdKSA9PiB7XG4gICAgdGhpcy5taXN0YWtlcyA9IG1pc3Rha2VzO1xuICB9O1xuXG4gIGdldE1pc3Rha2VzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm1pc3Rha2VzO1xuICB9O1xuXG4gIHNldE9wZXJhdGlvbiA9IChvcGVyYXRpb246IHN0cmluZykgPT4ge1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICB9O1xuXG4gIGdldE9wZXJhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVyYXRpb247XG4gIH07XG5cbiAgc2V0U2NvcmUgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICB0aGlzLnNjb3JlID0gbnVtO1xuICB9O1xuXG4gIGdldFNjb3JlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNjb3JlO1xuICB9O1xuXG4gIHNldEdhbWVUaW1lID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5nYW1lVGltZSA9IG51bTtcbiAgfTtcblxuICBnZXRHYW1lVGltZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nYW1lVGltZTtcbiAgfTtcblxuICBzZXROdW1NaXN0YWtlcyA9IChudW06IG51bWJlcikgPT4ge1xuICAgIHRoaXMubnVtTWlzdGFrZXMgPSBudW07XG4gIH07XG5cbiAgZ2V0TnVtTWlzdGFrZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubnVtTWlzdGFrZXM7XG4gIH07XG5cbiAgYWRkUmVjb3JkID0gKHJlY29yZDogaVJlY29yZCkgPT4ge1xuICAgIGlmICh0aGlzLnJlY29yZHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZWNvcmRzID0gW3JlY29yZCwgLi4udGhpcy5yZWNvcmRzXTtcbiAgICAgIGlmICh0aGlzLnJlY29yZHMubGVuZ3RoID4gMTApIHtcbiAgICAgICAgdGhpcy5yZWNvcmRzLmxlbmd0aCA9IDEwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFJlY29yZHMoW3JlY29yZF0pO1xuICAgIH1cbiAgfTtcblxuICBnZXRSZWNvcmRzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnJlY29yZHM7XG4gIH07XG5cbiAgc2V0UmVjb3JkcyA9IChhcnJSZWNvcmRzOiBpUmVjb3JkW10pID0+IHtcbiAgICB0aGlzLnJlY29yZHMgPSBhcnJSZWNvcmRzO1xuICB9O1xuXG4gIGdldE51bUV4YW1wbGVzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm51bUV4YW1wbGVzO1xuICB9O1xuXG4gIHNldE51bUV4YW1wbGVzID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5udW1FeGFtcGxlcyA9IG51bTtcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuL0dhbWVEYXRhJztcbmltcG9ydCBpRXhhbXBsZSBmcm9tICcuL2lFeGFtcGxlJztcbmltcG9ydCBpT2JqRm9yTFMgZnJvbSAnLi9pT2JqRm9yTFMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlR2FtZURhdGEge1xuICBzYXZlVG9MUyhnYW1lRGF0YTogR2FtZURhdGEsIGV4YW1wbGU6IGlFeGFtcGxlIHwgbnVsbCkge1xuICAgIGNvbnN0IGRhdGFPYmo6IGlPYmpGb3JMUyA9IHtcbiAgICAgIGV4YW1wbGVzOiBnYW1lRGF0YS5nZXRFeGFtcGxlcygpLFxuICAgICAgZ2FtZVRpbWU6IGdhbWVEYXRhLmdldEdhbWVUaW1lKCksXG4gICAgICBtaXN0YWtlczogZ2FtZURhdGEuZ2V0TWlzdGFrZXMoKSxcbiAgICAgIG51bUV4YW1wbGVzOiBnYW1lRGF0YS5nZXROdW1FeGFtcGxlcygpLFxuICAgICAgbnVtTWlzdGFrZXM6IGdhbWVEYXRhLmdldE51bU1pc3Rha2VzKCksXG4gICAgICBvcGVyYXRpb246IGdhbWVEYXRhLmdldE9wZXJhdGlvbigpLFxuICAgICAgc2NvcmU6IGdhbWVEYXRhLmdldFNjb3JlKCksXG4gICAgICByZWNvcmRzOiBnYW1lRGF0YS5nZXRSZWNvcmRzKCksXG4gICAgfTtcbiAgICBpZiAoZXhhbXBsZSAhPT0gbnVsbCAmJiAhZ2FtZURhdGEuZ2V0RXhhbXBsZXMoKS5pbmNsdWRlcyhleGFtcGxlKSkge1xuICAgICAgZGF0YU9iai5leGFtcGxlcy5wdXNoKGV4YW1wbGUpO1xuICAgIH1cbiAgICBjb25zdCBzdHJUb1NhdmUgPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZURhdGEnLCBzdHJUb1NhdmUpO1xuICB9XG5cbiAgbG9hZEZyb21MUyA9ICgpID0+IHtcbiAgICBjb25zdCBzdHJGcm9tTFMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZURhdGEnKTtcbiAgICByZXR1cm4gc3RyRnJvbUxTO1xuICB9O1xufVxuIiwiY29uc3Qgc3VtQXJyYXkgPSBbXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyAxXCIsXG4gICAgICBcImFuc3dlclwiOiAyLFxuICAgICAgXCJzY29yZVwiOiAyXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyAzXCIsXG4gICAgICBcImFuc3dlclwiOiA0LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyA0XCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyA2XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyA3XCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyA5XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDExLFxuICAgICAgXCJzY29yZVwiOiAyXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyAxMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDNcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMSArIDEyXCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyAxNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMSArIDE1XCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgKyAxN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMSArIDE4XCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxICsgMTlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxXCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiA0LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAzXCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyA0XCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyA2XCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyA3XCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyICsgOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMiArIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAxMixcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyICsgMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTQsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMiArIDEzXCIsXG4gICAgICBcImFuc3dlclwiOiAxNSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyICsgMTRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTcsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMiArIDE2XCIsXG4gICAgICBcImFuc3dlclwiOiAxOCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyICsgMTdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE5LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgKyAxOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMjAsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDQsXG4gICAgICBcInNjb3JlXCI6IDNcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDcsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxMSxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzICsgOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzICsgMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDEzXCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzICsgMTRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgKyAxNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyArIDE2XCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzICsgMTdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyAxXCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyAzXCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyA0XCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNCArIDhcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyA5XCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyAxMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNCArIDEyXCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgKyAxNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNCArIDE1XCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0ICsgMTZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxXCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAzXCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyA0XCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1ICsgNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNSArIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1ICsgOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTQsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNSArIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAxNSxcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1ICsgMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTcsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNSArIDEzXCIsXG4gICAgICBcImFuc3dlclwiOiAxOCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1ICsgMTRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE5LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgKyAxNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMjAsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDcsXG4gICAgICBcInNjb3JlXCI6IDNcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxMSxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2ICsgNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxNCxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2ICsgOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2ICsgMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgKyAxMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiArIDEzXCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2ICsgMTRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyAxXCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNyArIDVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTQsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNyArIDhcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyA5XCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgKyAxMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNyArIDEyXCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3ICsgMTNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyAxXCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4ICsgM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOCArIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4ICsgNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTQsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOCArIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4ICsgOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTcsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOCArIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAxOCxcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4ICsgMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE5LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggKyAxMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMjAsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOSArIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxMSxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5ICsgM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOSArIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxNCxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5ICsgNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOSArIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxNyxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5ICsgOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOSArIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5ICsgMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDJcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxMixcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMCArIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTQsXG4gICAgICBcInNjb3JlXCI6IDNcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxNSxcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMCArIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTcsXG4gICAgICBcInNjb3JlXCI6IDNcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxOCxcbiAgICAgIFwic2NvcmVcIjogM1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMCArIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE5LFxuICAgICAgXCJzY29yZVwiOiAzXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwICsgMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiAyXG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExICsgMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDNcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExICsgNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExICsgN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMSArIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyICsgMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTMsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxNCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyICsgNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTYsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxNyxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMiArIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE4LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyICsgN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTksXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgKyA4XCIsXG4gICAgICBcImFuc3dlclwiOiAyMCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzICsgMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTMgKyAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzICsgNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTMgKyA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMyArIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0ICsgMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNCArIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0ICsgNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNCArIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1ICsgMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTYsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxNyxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNSArIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE4LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1ICsgNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTksXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgKyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAyMCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNiArIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2ICsgMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgKyAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNiArIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3ICsgMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxOSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNyArIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4ICsgMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTksXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTggKyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAyMCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOSArIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA0XG4gIH1cbl07XG5cbmNvbnN0IHN1YnN0ckFycmF5ID0gW1xuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyMCAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE5LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTgsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxNyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyMCAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxNCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyMCAtIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSA5XCIsXG4gICAgICBcImFuc3dlclwiOiAxMSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyMCAtIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyMCAtIDExXCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSAxM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyMCAtIDE0XCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMTVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSAxNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyMCAtIDE3XCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIC0gMThcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgLSAxOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOSAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE4LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTcsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTkgLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOSAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTQsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTkgLSA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOSAtIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTkgLSA5XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOSAtIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTkgLSAxMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOSAtIDEzXCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTkgLSAxNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOSAtIDE2XCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE5IC0gMTdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTkgLSAxOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOCAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE3LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTYsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxNSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOCAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTMsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxMixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOCAtIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDExLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTAsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSA5XCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOCAtIDEyXCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gMTNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOCAtIDE1XCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IC0gMTZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTggLSAxN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNyAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE2LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxNCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNyAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNyAtIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNyAtIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSAxMFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNyAtIDExXCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSAxM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNyAtIDE0XCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE3IC0gMTVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTcgLSAxNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNiAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE1LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTQsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxMyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNiAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgLSA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNiAtIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgLSA4XCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNiAtIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgLSAxMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNiAtIDEzXCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IC0gMTRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgLSAxNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNSAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTMsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxMixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNSAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDExLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTAsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSA2XCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogOCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNSAtIDhcIixcbiAgICAgIFwiYW5zd2VyXCI6IDcsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSA5XCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSAxMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNSAtIDEyXCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IC0gMTNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgLSAxNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNCAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEzLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNCAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNCAtIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSA3XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNCAtIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSAxMFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNCAtIDExXCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE0IC0gMTJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgLSAxM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMyAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTEsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTMgLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMyAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTMgLSA1XCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMyAtIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTMgLSA4XCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMyAtIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEzIC0gMTFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTMgLSAxMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMiAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDExLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTAsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgLSAzXCIsXG4gICAgICBcImFuc3dlclwiOiA5LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogOCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMiAtIDVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDcsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgLSA2XCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMiAtIDhcIixcbiAgICAgIFwiYW5zd2VyXCI6IDQsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgLSA5XCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIC0gMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgLSAxMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMSAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExIC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMSAtIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgLSA0XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExIC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMSAtIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgLSA3XCIsXG4gICAgICBcImFuc3dlclwiOiA0LFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjExIC0gOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMSAtIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTEgLSAxMFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMCAtIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDRcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgLSAyXCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIC0gM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMCAtIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgLSA1XCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIC0gNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMCAtIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDMsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgLSA4XCIsXG4gICAgICBcImFuc3dlclwiOiAyLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIC0gOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogOCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IC0gOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IC0gN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IC0gMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IC0gM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IC0gNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IC0gNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IC0gMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IC0gM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IC0gNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IC0gNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IC0gMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IC0gM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IC0gNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IC0gMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IC0gM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzIC0gMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzIC0gMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyIC0gMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9XG5dO1xuXG5jb25zdCBtdWx0aXBsZUFyciA9IFtcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMSDDlyAxXCIsXG4gICAgICBcImFuc3dlclwiOiAxLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgw5cgMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxIMOXIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDMsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMSDDlyA0XCIsXG4gICAgICBcImFuc3dlclwiOiA0LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgw5cgNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxIMOXIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMSDDlyA3XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEgw5cgOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogOCxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxIMOXIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMSDDlyAxMFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTAsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMiDDlyAxXCIsXG4gICAgICBcImFuc3dlclwiOiAyLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgw5cgMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMiDDlyA0XCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgw5cgNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTAsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMiDDlyA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxMixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIgw5cgOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTYsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMiDDlyA5XCIsXG4gICAgICBcImFuc3dlclwiOiAxOCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyIMOXIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAyMCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzIMOXIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDMsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyAyXCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgw5cgM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzIMOXIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEyLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgw5cgNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTUsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyA2XCIsXG4gICAgICBcImFuc3dlclwiOiAxOCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzIMOXIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIxLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMgw5cgOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMjQsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMyDDlyA5XCIsXG4gICAgICBcImFuc3dlclwiOiAyNyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzIMOXIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAzMCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDQsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNCDDlyAyXCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgw5cgM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMTIsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNCDDlyA0XCIsXG4gICAgICBcImFuc3dlclwiOiAxNixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgw5cgNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMjQsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNCDDlyA3XCIsXG4gICAgICBcImFuc3dlclwiOiAyOCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IMOXIDhcIixcbiAgICAgIFwiYW5zd2VyXCI6IDMyLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQgw5cgOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMzYsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNCDDlyAxMFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNDAsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNSDDlyAxXCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgw5cgMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTAsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNSDDlyAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxNSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgw5cgNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMjUsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNSDDlyA2XCIsXG4gICAgICBcImFuc3dlclwiOiAzMCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDM1LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjUgw5cgOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNDAsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNSDDlyA5XCIsXG4gICAgICBcImFuc3dlclwiOiA0NSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IMOXIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiA1MCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYsXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiDDlyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxMixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE4LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgw5cgNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMjQsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiDDlyA1XCIsXG4gICAgICBcImFuc3dlclwiOiAzMCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDM2LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgw5cgN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNDIsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNiDDlyA4XCIsXG4gICAgICBcImFuc3dlclwiOiA0OCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IMOXIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDU0LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYgw5cgMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgw5cgMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogNVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDE0LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgw5cgM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMjEsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNyDDlyA0XCIsXG4gICAgICBcImFuc3dlclwiOiAyOCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDM1LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgw5cgNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNDIsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNyDDlyA3XCIsXG4gICAgICBcImFuc3dlclwiOiA0OSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IMOXIDhcIixcbiAgICAgIFwiYW5zd2VyXCI6IDU2LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcgw5cgOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNjMsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNyDDlyAxMFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNzAsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOCDDlyAxXCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggw5cgMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTYsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOCDDlyAzXCIsXG4gICAgICBcImFuc3dlclwiOiAyNCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDMyLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggw5cgNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNDAsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOCDDlyA2XCIsXG4gICAgICBcImFuc3dlclwiOiA0OCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDU2LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjggw5cgOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNjQsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOCDDlyA5XCIsXG4gICAgICBcImFuc3dlclwiOiA3MixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IMOXIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiA4MCxcbiAgICAgIFwic2NvcmVcIjogNlxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDVcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOSDDlyAyXCIsXG4gICAgICBcImFuc3dlclwiOiAxOCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDI3LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgw5cgNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMzYsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOSDDlyA1XCIsXG4gICAgICBcImFuc3dlclwiOiA0NSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDU0LFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgw5cgN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNjMsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOSDDlyA4XCIsXG4gICAgICBcImFuc3dlclwiOiA3MixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IMOXIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgxLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkgw5cgMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDkwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA1XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDMwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDQwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDcwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDhcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDkwLFxuICAgICAgXCJzY29yZVwiOiA2XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIMOXIDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAxMDAsXG4gICAgICBcInNjb3JlXCI6IDZcbiAgfVxuXVxuXG5jb25zdCBkaXZpZGVBcnJheSA9IFtcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTAwIDogMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjkwIDogOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTAsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiOTAgOiAxMFwiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4MSA6IDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiODAgOiA4XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4MCA6IDEwXCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjcyIDogOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3MiA6IDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNzAgOiA3XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3MCA6IDEwXCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjY0IDogOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogOCxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2MyA6IDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNjMgOiA5XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjYwIDogNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMTAsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNjAgOiAxMFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1NiA6IDdcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNTYgOiA4XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjU0IDogNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1NCA6IDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDYsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNTAgOiA1XCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1MCA6IDEwXCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQ5IDogN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0OCA6IDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNDggOiA4XCIsXG4gICAgICBcImFuc3dlclwiOiA2LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQ1IDogNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0NSA6IDlcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNDIgOiA2XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQyIDogN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0MCA6IDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQwIDogMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDQsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiNDAgOiA1XCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjQwIDogOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzNiA6IDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMzYgOiA5XCIsXG4gICAgICBcImFuc3dlclwiOiA0LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjM2IDogNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzNSA6IDVcIixcbiAgICAgIFwiYW5zd2VyXCI6IDcsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMzUgOiA3XCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMyIDogNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogOCxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzMiA6IDhcIixcbiAgICAgIFwiYW5zd2VyXCI6IDQsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMzAgOiAzXCIsXG4gICAgICBcImFuc3dlclwiOiAxMCxcbiAgICAgIFwic2NvcmVcIjogOFxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzMCA6IDEwXCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjMwIDogNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzMCA6IDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDUsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjggOiA0XCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjI4IDogN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyNyA6IDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjcgOiA5XCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjI1IDogNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyNCA6IDNcIixcbiAgICAgIFwiYW5zd2VyXCI6IDgsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjQgOiA4XCIsXG4gICAgICBcImFuc3dlclwiOiAzLFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjI0IDogNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyNCA6IDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDQsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjEgOiAzXCIsXG4gICAgICBcImFuc3dlclwiOiA3LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIxIDogN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyMCA6IDJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA4XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIDogMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDhcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMjAgOiA0XCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjIwIDogNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOCA6IDJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDksXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTggOiA5XCIsXG4gICAgICBcImFuc3dlclwiOiAyLFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE4IDogM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxOCA6IDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDMsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTYgOiAyXCIsXG4gICAgICBcImFuc3dlclwiOiA4LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE2IDogOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNiA6IDRcIixcbiAgICAgIFwiYW5zd2VyXCI6IDQsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTUgOiAzXCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjE1IDogNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxNCA6IDJcIixcbiAgICAgIFwiYW5zd2VyXCI6IDcsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTQgOiA3XCIsXG4gICAgICBcImFuc3dlclwiOiAyLFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIDogMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMiA6IDZcIixcbiAgICAgIFwiYW5zd2VyXCI6IDIsXG4gICAgICBcInNjb3JlXCI6IDlcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTIgOiAzXCIsXG4gICAgICBcImFuc3dlclwiOiA0LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEyIDogNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxMCA6IDFcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEwLFxuICAgICAgXCJzY29yZVwiOiA3XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIDogMTBcIixcbiAgICAgIFwiYW5zd2VyXCI6IDEsXG4gICAgICBcInNjb3JlXCI6IDdcbiAgfSxcbiAge1xuICAgICAgXCJleGFtcGxlXCI6IFwiMTAgOiAyXCIsXG4gICAgICBcImFuc3dlclwiOiA1LFxuICAgICAgXCJzY29yZVwiOiA5XG4gIH0sXG4gIHtcbiAgICAgIFwiZXhhbXBsZVwiOiBcIjEwIDogNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogOSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IDogOVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI5IDogM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogOCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IDogOFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IDogMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI4IDogNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI3IDogN1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IDogNlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IDogMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI2IDogM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI1IDogNVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogNCxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IDogNFwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCI0IDogMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogOVxuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzIDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMyxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIzIDogM1wiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyIDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMixcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIyIDogMlwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9LFxuICB7XG4gICAgICBcImV4YW1wbGVcIjogXCIxIDogMVwiLFxuICAgICAgXCJhbnN3ZXJcIjogMSxcbiAgICAgIFwic2NvcmVcIjogN1xuICB9XG5dXG5cbmV4cG9ydCB7c3VtQXJyYXksIHN1YnN0ckFycmF5LCBtdWx0aXBsZUFyciwgZGl2aWRlQXJyYXl9IiwiaW1wb3J0IEdhbWVEYXRhIGZyb20gJy4uL21vZGVsL0dhbWVEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb0Jsb2NrIHtcbiAgaW5mb0Jsb2NrOiBIVE1MRGl2RWxlbWVudDtcbiAgZ2FtZURhdGE6IEdhbWVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEdhbWVEYXRhKSB7XG4gICAgdGhpcy5nYW1lRGF0YSA9IGRhdGE7XG4gICAgdGhpcy5pbmZvQmxvY2sgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy5nYW1lRGF0YS5nZXRWaWV3R2FtZVBhZ2UoKT8uaW5mb0Jsb2NrO1xuICB9XG5cbiAgc2hvd1JpZ2h0QW5zd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQktC10YDQvdC+ISc7XG4gICAgdGhpcy5pbmZvQmxvY2suY2xhc3NMaXN0LmFkZCgnZ2FtZS1pbmZvX19jb3JyZWN0Jyk7XG4gIH07XG5cbiAgc2hvd1dyb25nQW5zd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQndC10L/RgNCw0LLQuNC70YzQvdC+LiDQv9C+0L/RgNC+0LHRg9C5INC10YnQtSDRgNCw0LcuJztcbiAgICB0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuYWRkKCdnYW1lLWluZm9fX3dyb25nJyk7XG4gIH07XG5cbiAgdW5zdHlsZUluZm9CbG9jayA9ICgpID0+IHtcbiAgICBpZih0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWUtaW5mb19fY29ycmVjdCcpKSB7XG4gICAgICB0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lLWluZm9fX2NvcnJlY3QnKVxuICAgIH1cbiAgICBpZih0aGlzLmluZm9CbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWUtaW5mb19fd3JvbmcnKSkge1xuICAgICAgdGhpcy5pbmZvQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1pbmZvX193cm9uZycpXG4gICAgfVxuICB9XG5cbiAgc2hvd0luc3RydWN0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMudW5zdHlsZUluZm9CbG9jaygpO1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVyVGV4dCA9ICfQktCy0LXQtNC4INGH0LjRgdC70L4g0Lgg0L3QsNC20LzQuCDCq+Kck8K7Lic7XG4gIH07XG5cbiAgc2hvd1N0YXRpc3RpY3MgPSAoKSA9PiB7XG4gICAgdGhpcy51bnN0eWxlSW5mb0Jsb2NrKCk7XG4gICAgY29uc3QgZXhhbXBsZXNOdW0gPSB0aGlzLmdhbWVEYXRhLmdldEV4YW1wbGVzKCkubGVuZ3RoO1xuICAgIGNvbnN0IGkgPSBleGFtcGxlc051bSAlIDEwMDtcbiAgICBjb25zdCBleGFtcGxlc1dvcmQgPVxuICAgICAgaSAlIDEwID09PSAxICYmIChpIDwgMTAgfHwgaSA+IDIwKSAmJiBpICE9PSAxMVxuICAgICAgICA/ICfQv9GA0LjQvNC10YAnXG4gICAgICAgIDogaSAlIDEwIDwgNSAmJiBpICUgMTAgPiAwICYmIChpIDwgMTAgfHwgaSA+IDIwKVxuICAgICAgICAgID8gJ9C/0YDQuNC80LXRgNCwJ1xuICAgICAgICAgIDogJ9C/0YDQuNC80LXRgNC+0LInO1xuICAgIHRoaXMuaW5mb0Jsb2NrLmlubmVySFRNTCA9IGDQntGB0YLQsNC70L7RgdGMINGA0LXRiNC40YLRjCA8YnIvPjxzcGFuIGNsYXNzPVwiZ2FtZV9fc3RhdGlzdGljc1wiPiR7ZXhhbXBsZXNOdW19PC9zcGFuPiAke2V4YW1wbGVzV29yZH0uYDtcbiAgfTtcblxuICBzaG93RW5kR2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmluZm9CbG9jay5pbm5lclRleHQgPSAn0JLRgdC1INC/0YDQuNC80LXRgNGLINGA0LXRiNC10L3Riy4nO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdGb290ZXIge1xyXG4gIGZvb3RlcjogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmZvb3RlciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdmb290ZXInLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3RlciddLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdmb290ZXJfX3dyYXBwZXInXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29weXJpZ2h0ID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2RpdicsXHJcbiAgICAgIGNsYXNzZXM6IFsnZm9vdGVyX19ibG9jayddLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHRUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2stdGl0bGUnXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICfCqSwg0LTQuNC30LDQudC9OiAnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHRMaW5rID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2EnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxyXG4gICAgICBhdHRyaWI6IFtcclxuICAgICAgICB7IG5hbWU6ICdocmVmJywgdmFsdWU6ICdodHRwczovL2dpdGh1Yi5jb20vYS12LWdvcicgfSxcclxuICAgICAgICB7IG5hbWU6ICd0YXJnZXQnLCB2YWx1ZTogJ19ibGFuaycgfSxcclxuICAgICAgXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICfQkC7Qk9C+0YDQsdC10L3QutC+JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeWVhciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2snLCAnZm9vdGVyX195ZWFyJ10sXHJcbiAgICAgIHRleHRDb250ZW50OiAnMjAyNCcsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRlc2lnbiA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgICB0YWc6ICdkaXYnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fYmxvY2snLCAnZm9vdGVyX19kZXNpZ24nXSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGVzaWduVGl0bGUgPSByZXR1cm5FbGVtZW50KHtcclxuICAgICAgdGFnOiAnZGl2JyxcclxuICAgICAgY2xhc3NlczogWydmb290ZXJfX2Jsb2NrLXRpdGxlJ10sXHJcbiAgICAgIHRleHRDb250ZW50OiAn0JTQuNC30LDQudC9OiAnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkZXNpZ25MaW5rID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2EnLFxyXG4gICAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluayddLFxyXG4gICAgICBhdHRyaWI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnaHJlZicsXHJcbiAgICAgICAgICB2YWx1ZTpcclxuICAgICAgICAgICAgJ2h0dHBzOi8vd3d3LmZpZ21hLmNvbS9jb21tdW5pdHkvZmlsZS8xMDg0NDkzNjY4NzY5OTIzMjg5L2VkdWNhdGlvbmFsLWtpZHMtZ2FtZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG5hbWU6ICd0YXJnZXQnLCB2YWx1ZTogJ19ibGFuaycgfSxcclxuICAgICAgXSxcclxuICAgICAgdGV4dENvbnRlbnQ6ICdOLlBhbmR5YScsXHJcbiAgICB9KTtcclxuICAgIGNvcHlyaWdodC5hcHBlbmQoY29weXJpZ2h0VGl0bGUsIGNvcHlyaWdodExpbmspO1xyXG4gICAgZGVzaWduLmFwcGVuZChkZXNpZ25UaXRsZSwgZGVzaWduTGluayk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZChjb3B5cmlnaHQsIHllYXIsIGRlc2lnbik7XHJcbiAgICB0aGlzLmZvb3Rlci5hcHBlbmQod3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5mb290ZXI7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3SGVscCBmcm9tICcuL1ZpZXdIZWxwJztcbmltcG9ydCBWaWV3TmF2aWdhdGlvbiBmcm9tICcuL1ZpZXdOYXZpZ2F0aW9uJztcbmltcG9ydCBWaWV3UGFnZSBmcm9tICcuL1ZpZXdQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0dhbWVQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBhbnN3ZXJGaWVsZDogSFRNTERpdkVsZW1lbnQ7XG4gIGV4YW1wbGU6IEhUTUxEaXZFbGVtZW50O1xuICBoZWxwQ2xvc2VCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBpbmZvQmxvY2s6IEhUTUxEaXZFbGVtZW50O1xuICBrZXlzV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG4gIHNjb3JlVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuICB0aXRsZTogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZ2FtZURhdGE6IEdhbWVEYXRhKSB7XG4gICAgc3VwZXIoJ2dhbWVQYWdlJywgZ2FtZURhdGEpO1xuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAnaGVhZGVyX193cmFwcGVyJywgJ2dhbWVfX2hlYWRlci13cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBWaWV3TmF2aWdhdGlvbih0cnVlKTtcbiAgICB0aGlzLm5hdkhvbWUgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhvbWVCdXR0b24oKTtcbiAgICB0aGlzLm5hdkhlbHAgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhlbHBCdXR0b24oKTtcbiAgICBjb25zdCBzY29yZVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3Njb3JlX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3Qgc2NvcmVUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaDInLFxuICAgICAgY2xhc3NlczogWydzY29yZV9fdGl0bGUnXSxcbiAgICAgIHRleHRDb250ZW50OiAn0KHRh9C10YI6JyxcbiAgICB9KTtcbiAgICB0aGlzLnNjb3JlVmFsdWUgPSA8SFRNTFBhcmFncmFwaEVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdwJyxcbiAgICAgIGNsYXNzZXM6IFsnc2NvcmVfX3ZhbHVlJ10sXG4gICAgICB0ZXh0Q29udGVudDogJzAnLFxuICAgIH0pO1xuICAgIHRoaXMudGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gxJyxcbiAgICAgIGNsYXNzZXM6IFsndGl0bGUnXSxcbiAgICB9KTtcbiAgICBjb25zdCBnYW1lV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdnYW1lX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgdGhpcy5pbmZvQmxvY2sgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydnYW1lX19pbmZvJywgXCJnYW1lLWluZm9cIl0sXG4gICAgfSk7XG4gICAgY29uc3QgZXhhbXBsZVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2dhbWVfX2V4YW1wbGUtd3JhcHBlcicsICdleGFtcGxlX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgdGhpcy5leGFtcGxlID0gPEhUTUxEaXZFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZXhhbXBsZV9fdGV4dCddLFxuICAgIH0pO1xuICAgIHRoaXMuYW5zd2VyRmllbGQgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydleGFtcGxlX19pbnB1dCddLFxuICAgIH0pO1xuICAgIGNvbnN0IGtleXNUZXh0c0FyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAga2V5c1RleHRzQXJyLnB1c2goYCR7aX1gKTtcbiAgICB9XG4gICAga2V5c1RleHRzQXJyLnB1c2goJ8OXJywgJzAnLCAn4pyTJyk7XG4gICAgdGhpcy5rZXlzV3JhcHBlciA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2tleXNfX3dyYXBwZXInXSxcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNUZXh0c0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2xhc3Nlc0FyciA9IFsnYnV0dG9uJywgJ2tleXNfX2J1dHRvbiddO1xuICAgICAgaWYgKGtleXNUZXh0c0FycltpXSA9PT0gJ8OXJykge1xuICAgICAgICBjbGFzc2VzQXJyLnB1c2goJ2tleXNfX2NhbmNlbCcpO1xuICAgICAgfVxuICAgICAgaWYgKGtleXNUZXh0c0FycltpXSA9PT0gJ+KckycpIHtcbiAgICAgICAgY2xhc3Nlc0Fyci5wdXNoKCdrZXlzX19zdWJtaXQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleUJ1dHRvbiA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzQXJyLFxuICAgICAgICBhdHRyaWI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB2YWx1ZToga2V5c1RleHRzQXJyW2ldLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRleHRDb250ZW50OiBrZXlzVGV4dHNBcnJbaV0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMua2V5c1dyYXBwZXIuYXBwZW5kKGtleUJ1dHRvbik7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUaXRsZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy52aWV3SGVscCA9IG5ldyBWaWV3SGVscChbXG4gICAgICAn0JzQsNC60YHQuNC80LDQu9GM0L3QviDQstC+0LfQvNC+0LbQvdC+0LUg0YfQuNGB0LvQviDQtNC70Y8g0LLQstC+0LTQsCDigJQgwqsxMDDCuy4g0J/QvtGB0LvQtSDQstCy0L7QtNCwINGH0LjRgdC70LAg0YHQu9C10LTRg9C10YIg0L/QvtC00YLQstC10YDQtNC40YLRjCDRgdCy0L7QuSDQvtGC0LLQtdGCICjQvdCw0LbQsNGC0LjQtdC8INC90LAg0LrQvdC+0L/QutGDIMKr4pyTwrsg0LjQu9C4IMKrRW50ZXLCuyDQvdCwINC60LvQsNCy0LjQsNGC0YPRgNC1KS4nLFxuICAgICAgJ9Cf0YDQuCDQvtGI0LjQsdC60LUg0LzQvtC20L3QviDRgdGC0LXRgNC10YLRjCDQstCy0LXQtNC10L3QvdC+0LUg0LfQvdCw0YfQtdC90LjQtSAo0L3QsNC20LDRgtC40LXQvCDQvdCwINC60L3QvtC/0LrRgyDCq8OXwrsg0LjQu9C4IMKrRGVsZXRlwrssIMKrQmFja3NwYWNlwrssIMKrRXNjwrsg0L3QsCDQutC70LDQstC40LDRgtGD0YDQtSkuJyxcbiAgICAgICfQmNCz0YDQsCDRgdGH0LjRgtCw0LnQtdGC0YHRjyDQv9GA0L7QudC00LXQvdC90L7QuSDQv9C+0YHQu9C1INGA0LXRiNC10L3QuNGPINCy0YHQtdGFINC/0YDQuNC80LXRgNC+0LIgKNGA0LXQt9GD0LvRjNGC0LDRgiDQt9Cw0L3QvtGB0LjRgtGB0Y8g0LIg0LrQvdC40LPRgyDRgNC10LrQvtGA0LTQvtCyLCDQv9C+0YHQvNC+0YLRgNC10YLRjCDQutC+0YLQvtGA0YPRjiDQvNC+0LbQvdC+INC90LDQttCw0LIgwqvQoNC10LrQvtGA0LTRi8K7INC90LAg0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbRiyDQuNCz0YDRiykuINCV0YHQu9C4INC/0YDQtdGA0LLQsNGC0Ywg0LjQs9GA0YMg0L3QtSDRgNC10YjQuNCyINCy0YHQtSDQv9GA0LjQvNC10YDRiyAo0LfQsNC60YDRi9GC0Ywg0LLQutC70LDQtNC60YMg0LHRgNCw0YPQt9C10YDQsCDQuNC70Lgg0L3QsNC20LDRgtGMINC90LAg0LTQvtC80LjQuiDQsiDQvNC10L3RjiksINGA0LXQt9GD0LvRjNGC0LDRgiDQvdC1INCx0YPQtNC10YIg0YHQvtGF0YDQsNC90LXQvSwg0L3QviDQuNCz0YDQsCDQvdC1INGD0LTQsNC70LjRgtGB0Y8uINCY0LPRgNGDINC80L7QttC90L4g0LfQsNCy0LXRgNGI0LjRgtGMINCyINCx0YPQtNGD0YnQtdC8LCDQstGL0LHRgNCw0LIgwqvQn9GA0L7QtNC+0LvQttC40YLRjCDQuNCz0YDRg8K7INC90LAg0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbQtS4nLFxuICAgIF0pO1xuICAgIHRoaXMuaGVscENsb3NlQnV0dG9uID0gdGhpcy52aWV3SGVscC5yZXR1cm5DbG9zZUJ1dHRvbigpO1xuICAgIGNvbnN0IHZpZXdIZWxwQmxvY2sgPSB0aGlzLnZpZXdIZWxwLnJldHVybkJsb2NrKCk7XG4gICAgc2NvcmVXcmFwcGVyLmFwcGVuZChzY29yZVRpdGxlLCB0aGlzLnNjb3JlVmFsdWUpO1xuICAgIGhlYWRlcldyYXBwZXIuYXBwZW5kKHRoaXMudGl0bGUsIG5hdmlnYXRpb24ucmV0dXJuRWxlbWVudCgpLCBzY29yZVdyYXBwZXIpO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZChoZWFkZXJXcmFwcGVyKTtcbiAgICBleGFtcGxlV3JhcHBlci5hcHBlbmQodGhpcy5leGFtcGxlLCB0aGlzLmFuc3dlckZpZWxkKTtcbiAgICBnYW1lV3JhcHBlci5hcHBlbmQodGhpcy5pbmZvQmxvY2ssIGV4YW1wbGVXcmFwcGVyLCB0aGlzLmtleXNXcmFwcGVyKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kKHZpZXdIZWxwQmxvY2ssIGdhbWVXcmFwcGVyKTtcbiAgfVxuXG4gIHVwZGF0ZVNjb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuc2NvcmVWYWx1ZS50ZXh0Q29udGVudCA9IFN0cmluZyh0aGlzLmdhbWVEYXRhLmdldFNjb3JlKCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld0hlbHAge1xuICB2aWV3SGVscEJsb2NrOiBIVE1MRWxlbWVudDtcbiAgaGVscENsb3NlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb246IHN0cmluZ1tdKSB7XG4gICAgdGhpcy52aWV3SGVscEJsb2NrID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydoZWxwX19ibG9jaycsICdpbmZvcm1hdGlvbicsICdpbmZvcm1hdGlvbl91bmFjdGl2ZSddLFxuICAgIH0pO1xuICAgIGNvbnN0IHdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAnaGVscF9fd3JhcHBlciddLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdoMicsXG4gICAgICBjbGFzc2VzOiBbJ3RpdGxlJywgJ2hlbHBfX3RpdGxlJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ9Ca0LDQuiDQuNCz0YDQsNGC0YwnLFxuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kKHRpdGxlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc2NyaXB0aW9uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwYXJhZ3JhcGggPSByZXR1cm5FbGVtZW50KHtcbiAgICAgICAgdGFnOiAncCcsXG4gICAgICAgIGNsYXNzZXM6IFsnaGVscF9fcGFyYWdyYXBoJ10sXG4gICAgICAgIHRleHRDb250ZW50OiBkZXNjcmlwdGlvbltpXSxcbiAgICAgIH0pO1xuICAgICAgd3JhcHBlci5hcHBlbmQocGFyYWdyYXBoKTtcbiAgICB9XG5cbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdoZWxwX19jbG9zZS1idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0JfQsNC60YDRi9GC0YwnLFxuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kKHRoaXMuaGVscENsb3NlQnV0dG9uKTtcbiAgICB0aGlzLnZpZXdIZWxwQmxvY2suYXBwZW5kKHdyYXBwZXIpO1xuICB9XG5cbiAgaGlkZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2luZm9ybWF0aW9uX3VuYWN0aXZlJykpIHtcbiAgICAgIHRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbl91bmFjdGl2ZScpO1xuICAgIH1cbiAgfTtcblxuICBzaG93ID0gKCkgPT4ge1xuICAgIHRoaXMudmlld0hlbHBCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvcm1hdGlvbl91bmFjdGl2ZScpO1xuICB9O1xuXG4gIHJldHVybkJsb2NrID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdIZWxwQmxvY2s7XG4gIH07XG5cbiAgcmV0dXJuQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuaGVscENsb3NlQnV0dG9uO1xuICB9O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld05hdmlnYXRpb24ge1xuICBuYXY6IEhUTUxFbGVtZW50O1xuICBuYXZIb21lOiBIVE1MRWxlbWVudDtcbiAgbmF2SGVscD86IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKGhlbHBCdXR0b246IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5hdiA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnbmF2JyxcbiAgICAgIGNsYXNzZXM6IFsnbWVudSddLFxuICAgIH0pO1xuICAgIGNvbnN0IG5hdlVsID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICd1bCcsXG4gICAgICBjbGFzc2VzOiBbJ21lbnVfX3VsJ10sXG4gICAgfSk7XG4gICAgdGhpcy5uYXZIb21lID0gPEhUTUxMSUVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdsaScsXG4gICAgICBjbGFzc2VzOiBbJ21lbnVfX2l0ZW0nLCAnbWVudV9faG9tZSddLFxuICAgIH0pO1xuXG4gICAgbmF2VWwuYXBwZW5kKHRoaXMubmF2SG9tZSk7XG4gICAgaWYgKGhlbHBCdXR0b24gPT09IHRydWUpIHtcbiAgICAgIHRoaXMubmF2SGVscCA9IDxIVE1MTElFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgICB0YWc6ICdsaScsXG4gICAgICAgIGNsYXNzZXM6IFsnbWVudV9faXRlbScsICdtZW51X19pbnN0cnVjdGlvbiddLFxuICAgICAgfSk7XG4gICAgICBuYXZVbC5hcHBlbmQodGhpcy5uYXZIZWxwKTtcbiAgICB9XG4gICAgdGhpcy5uYXYuYXBwZW5kKG5hdlVsKTtcbiAgfVxuXG4gIHJldHVybkVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2O1xuICB9XG5cbiAgcmV0dXJuSG9tZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZIb21lO1xuICB9XG5cbiAgcmV0dXJuSGVscEJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZIZWxwO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3Rm9vdGVyIGZyb20gJy4vVmlld0Zvb3Rlcic7XG5pbXBvcnQgVmlld0hlbHAgZnJvbSAnLi9WaWV3SGVscCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFZpZXdQYWdlIHtcbiAgYm9keTogSFRNTEJvZHlFbGVtZW50O1xuICBidXR0b25Mb2FkR2FtZT86IEhUTUxCdXR0b25FbGVtZW50O1xuICBidXR0b25SZWNvcmRzPzogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ1dHRvblNldEZpeD86IEhUTUxCdXR0b25FbGVtZW50O1xuICBmb290ZXI6IEhUTUxFbGVtZW50O1xuICBnYW1lRGF0YTogR2FtZURhdGE7XG4gIGhlYWRlcjogSFRNTEVsZW1lbnQ7XG4gIG1haW46IEhUTUxFbGVtZW50O1xuICBuYXZIZWxwPzogSFRNTExJRWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgbmF2SG9tZT86IEhUTUxMSUVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gIHBhZ2VOYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZVRpdGxlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHZpZXdIZWxwPzogVmlld0hlbHA7XG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkYXRhOiBHYW1lRGF0YSkge1xuICAgIHRoaXMuYm9keSA9IDxIVE1MQm9keUVsZW1lbnQ+ZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmhlYWRlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnaGVhZGVyJyxcbiAgICAgIGNsYXNzZXM6IFsnaGVhZGVyJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1haW4gPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ21haW4nLFxuICAgICAgY2xhc3NlczogWydtYWluJ10sXG4gICAgfSk7XG5cbiAgICBjb25zdCB2aWV3Rm9vdGVyID0gbmV3IFZpZXdGb290ZXIoKTtcblxuICAgIHRoaXMuZm9vdGVyID0gdmlld0Zvb3Rlci5yZXR1cm4oKTtcbiAgICB0aGlzLnBhZ2VOYW1lID0gbmFtZTtcbiAgICB0aGlzLmdhbWVEYXRhID0gZGF0YTtcbiAgfVxuICBzaG93ID0gKCkgPT4ge1xuICAgIHRoaXMuYm9keS5hcHBlbmQodGhpcy5oZWFkZXIsIHRoaXMubWFpbiwgdGhpcy5mb290ZXIpO1xuXG4gICAgaWYgKHRoaXMucGFnZU5hbWUgPT09ICdzdGFydFBhZ2UnKSB7XG4gICAgICBjb25zdCBidXR0b25Mb2FkR2FtZSA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJ1dHRvbkxvYWRHYW1lO1xuICAgICAgY29uc3QgYnV0dG9uUmVjb3JkcyA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJ1dHRvblJlY29yZHM7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZ2FtZURhdGEuZ2V0RXhhbXBsZXMoKSA9PT0gbnVsbCB8fFxuICAgICAgICB0aGlzLmdhbWVEYXRhLmdldEV4YW1wbGVzKCkubGVuZ3RoID09PSAwXG4gICAgICApIHtcbiAgICAgICAgYnV0dG9uTG9hZEdhbWUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uTG9hZEdhbWUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmdhbWVEYXRhLmdldFJlY29yZHMoKT8ubGVuZ3RoID4gMCkge1xuICAgICAgICBidXR0b25SZWNvcmRzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b25SZWNvcmRzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlTmFtZSA9PT0gJ3NldHRpbmdzUGFnZScpIHtcbiAgICAgIGNvbnN0IGZpeEJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmJ1dHRvblNldEZpeDtcbiAgICAgIGlmICh0aGlzLmdhbWVEYXRhLmdldE1pc3Rha2VzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZpeEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXhCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlTmFtZSA9PT0gJ2dhbWVQYWdlJykge1xuICAgICAgY29uc3QgdXBkYXRlVGl0bGUgPSB0aGlzLmdhbWVEYXRhLmdldFZpZXdHYW1lUGFnZSgpPy51cGRhdGVUaXRsZTtcbiAgICAgIGlmICh1cGRhdGVUaXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHVwZGF0ZVRpdGxlKHRoaXMuZ2FtZURhdGEuZ2V0T3BlcmF0aW9uKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3R2FtZVBhZ2UoKT8udXBkYXRlU2NvcmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYWdlTmFtZSA9PT0gJ3JlY29yZHNQYWdlJykge1xuICAgICAgdGhpcy5nYW1lRGF0YS5nZXRWaWV3UmVjb3Jkc1BhZ2UoKT8udXBkYXRlUmVjb3JkcygpO1xuICAgIH1cbiAgfTtcbiAgaGlkZSgpIHtcbiAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgaVJlY29yZCBmcm9tICcuLi9tb2RlbC9pUmVjb3JkJztcbmltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vcmV0dXJuRWxlbWVudCc7XG5pbXBvcnQgVmlld05hdmlnYXRpb24gZnJvbSAnLi9WaWV3TmF2aWdhdGlvbic7XG5pbXBvcnQgVmlld1BhZ2UgZnJvbSAnLi9WaWV3UGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdSZWNvcmRzUGFnZSBleHRlbmRzIFZpZXdQYWdlIHtcbiAgYXJyUmVjb3JkczogaVJlY29yZFtdO1xuICByZWNvcmRzV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZ2FtZURhdGE6IEdhbWVEYXRhKSB7XG4gICAgc3VwZXIoJ3JlY29yZHNQYWdlJywgZ2FtZURhdGEpO1xuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ3dyYXBwZXInLCAnaGVhZGVyX193cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBWaWV3TmF2aWdhdGlvbihmYWxzZSk7XG4gICAgdGhpcy5uYXZIb21lID0gPEhUTUxMSUVsZW1lbnQ+bmF2aWdhdGlvbi5yZXR1cm5Ib21lQnV0dG9uKCk7XG4gICAgY29uc3QgdGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gxJyxcbiAgICAgIGNsYXNzZXM6IFsndGl0bGUnXSxcbiAgICAgIHRleHRDb250ZW50OiAn0KDQtdC60L7RgNC00YsnLFxuICAgIH0pO1xuICAgIHRoaXMucmVjb3Jkc1dyYXBwZXIgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWyd3cmFwcGVyJywgJ3JlY29yZHNfX3dyYXBwZXInXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYXJyUmVjb3JkcyA9IGdhbWVEYXRhLmdldFJlY29yZHMoKTtcblxuICAgIHRoaXMubWFpbi5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX19tYWluJyk7XG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmQodGl0bGUsIG5hdmlnYXRpb24ucmV0dXJuRWxlbWVudCgpKTtcbiAgICB0aGlzLmhlYWRlci5hcHBlbmQoaGVhZGVyV3JhcHBlcik7XG4gICAgdGhpcy5tYWluLmFwcGVuZCh0aGlzLnJlY29yZHNXcmFwcGVyKTtcbiAgfVxuXG4gIHVwZGF0ZVJlY29yZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuZ2FtZURhdGEuZ2V0UmVjb3JkcygpO1xuICAgIGNvbnN0IHRhYmxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWyd0YWJsZScsICdyZWNvcmRzJ10sXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXR1cm5UZXh0RWxlbWVudCA9ICh0ZXh0OiBzdHJpbmcpID0+XG4gICAgICByZXR1cm5FbGVtZW50KHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWydyZWNvcmRzX190ZXh0J10sXG4gICAgICAgIHRleHRDb250ZW50OiB0ZXh0LFxuICAgICAgfSk7XG5cbiAgICByZWNvcmRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlY29yZEVsZW1lbnQgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgY2xhc3NlczogWydyZWNvcmRzX19yZWNvcmQnXSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmV0dXJuRXN0ZWVtVGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc29sdmVFeGFtcGxlVGltZSA9IE1hdGguY2VpbChcbiAgICAgICAgICBlbGVtZW50LnRpbWUgLyBlbGVtZW50Lm51bUV4YW1wbGVzIC8gMTAwMFxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc29sdmVFeGFtcGxlVGltZSA8PSA0ICYmXG4gICAgICAgICAgKGVsZW1lbnQubnVtTWlzdGFrZXMgPT09IDAgfHxcbiAgICAgICAgICAgIGVsZW1lbnQubnVtTWlzdGFrZXMgLyBlbGVtZW50Lm51bUV4YW1wbGVzIDw9IDAuMSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuICfQntGC0LvQuNGH0L3QviEnO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHNvbHZlRXhhbXBsZVRpbWUgPD0gNS41ICYmXG4gICAgICAgICAgKGVsZW1lbnQubnVtTWlzdGFrZXMgPT09IDAgfHxcbiAgICAgICAgICAgIGVsZW1lbnQubnVtTWlzdGFrZXMgLyBlbGVtZW50Lm51bUV4YW1wbGVzIDw9IDAuNSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuICfQpdC+0YDQvtGI0L4uJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ9Cd0LXQv9C70L7RhdC+Lic7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB0aW1lU3R5bGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7XG4gICAgICAgIHRpbWVTdHlsZTogJ3Nob3J0JyxcbiAgICAgICAgZGF0ZVN0eWxlOiAnbG9uZycsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGUgPSByZXR1cm5UZXh0RWxlbWVudCh0aW1lU3R5bGUuZm9ybWF0KG5ldyBEYXRlKGVsZW1lbnQuZGF0ZSkpKTtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgncmVjb3Jkc19fZGF0ZScpO1xuICAgICAgY29uc3Qgb3BlcmF0aW9uID0gcmV0dXJuVGV4dEVsZW1lbnQoZWxlbWVudC5vcGVyYXRpb24pO1xuICAgICAgb3BlcmF0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX29wZXJhdGlvbicpO1xuICAgICAgY29uc3QgbnVtRXhhbXBsZXMgPSByZXR1cm5UZXh0RWxlbWVudChcbiAgICAgICAgYNCf0YDQuNC80LXRgNC+0LI6ICR7U3RyaW5nKGVsZW1lbnQubnVtRXhhbXBsZXMpfWBcbiAgICAgICk7XG4gICAgICBudW1FeGFtcGxlcy5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX19udW0tZXhhbXBsZXMnKTtcbiAgICAgIGNvbnN0IG51bU1pc3Rha2VzID0gcmV0dXJuVGV4dEVsZW1lbnQoXG4gICAgICAgIGDQntGI0LjQsdC+0Lo6ICR7U3RyaW5nKGVsZW1lbnQubnVtTWlzdGFrZXMpfWBcbiAgICAgICk7XG4gICAgICBudW1NaXN0YWtlcy5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX19udW0tbWlzdGFrZXMnKTtcbiAgICAgIGNvbnN0IHRpbWUgPSByZXR1cm5UZXh0RWxlbWVudChcbiAgICAgICAgYNCS0YDQtdC80Y86ICR7U3RyaW5nKE1hdGguY2VpbChlbGVtZW50LnRpbWUgLyAxMDAwKSl9INGB0LXQui5gXG4gICAgICApO1xuICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX190aW1lJyk7XG4gICAgICBjb25zdCBzY29yZSA9IHJldHVyblRleHRFbGVtZW50KGDQodGH0ZHRgjogJHtTdHJpbmcoZWxlbWVudC5zY29yZSl9YCk7XG4gICAgICBzY29yZS5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX19zY29yZScpO1xuICAgICAgY29uc3QgZXN0ZWVtID0gcmV0dXJuVGV4dEVsZW1lbnQoYNCe0YbQtdC90LrQsDogJHtyZXR1cm5Fc3RlZW1UZXh0KCl9YCk7XG4gICAgICBpZiAoZXN0ZWVtLnRleHRDb250ZW50ID09PSAn0J7RhtC10L3QutCwOiDQntGC0LvQuNGH0L3QviEnKSB7XG4gICAgICAgIGVzdGVlbS5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX19wZXJmZWN0Jyk7XG4gICAgICB9IGVsc2UgaWYgKGVzdGVlbS50ZXh0Q29udGVudCA9PT0gJ9Ce0YbQtdC90LrQsDog0KXQvtGA0L7RiNC+LicpIHtcbiAgICAgICAgZXN0ZWVtLmNsYXNzTGlzdC5hZGQoJ3JlY29yZHNfX2dvb2QnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVzdGVlbS5jbGFzc0xpc3QuYWRkKCdyZWNvcmRzX19ub3QtYmFkJyk7XG4gICAgICB9XG4gICAgICByZWNvcmRFbGVtZW50LmFwcGVuZChcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICBudW1FeGFtcGxlcyxcbiAgICAgICAgbnVtTWlzdGFrZXMsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIHNjb3JlLFxuICAgICAgICBlc3RlZW1cbiAgICAgICk7XG4gICAgICB0YWJsZS5hcHBlbmQocmVjb3JkRWxlbWVudCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWNvcmRzV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnJlY29yZHNXcmFwcGVyLmFwcGVuZCh0YWJsZSk7XG4gIH07XG59XG4iLCJpbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vbW9kZWwvR2FtZURhdGEnO1xuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCBWaWV3SGVscCBmcm9tICcuL1ZpZXdIZWxwJztcbmltcG9ydCBWaWV3TmF2aWdhdGlvbiBmcm9tICcuL1ZpZXdOYXZpZ2F0aW9uJztcbmltcG9ydCBWaWV3UGFnZSBmcm9tICcuL1ZpZXdQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1NldHRpbmdzUGFnZSBleHRlbmRzIFZpZXdQYWdlIHtcbiAgYWRkTWFueUV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYWRkTW9zdEV4YW1wbGVzQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYWRkT25lRXhhbXBsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ1dHRvblNldERpdmlkZTogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGJ1dHRvblNldE11bHRpcGxlOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYnV0dG9uU2V0U3Vic3RyOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYnV0dG9uU2V0U3VtOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgYnV0dG9uV3JhcHBlcjogSFRNTERpdkVsZW1lbnQ7XG4gIGRlc2NyaXB0aW9uTnVtRXhhbXBsZXM6IEhUTUxEaXZFbGVtZW50O1xuICBkZXNjcmlwdGlvbk9wZXJhdGlvbjogSFRNTERpdkVsZW1lbnQ7XG4gIGhlbHBDbG9zZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGluZm9DbG9zZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHJlbW92ZU1hbnlFeGFtcGxlc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHJlbW92ZU9uZUV4YW1wbGVCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICBzZXROdW1FeHByZXNzaW9uc0J1dHRvbnM6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuICBzZXR0aW5nc0FwcGx5QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgc2V0dGluZ3NCbG9jazogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoZ2FtZURhdGE6IEdhbWVEYXRhKSB7XG4gICAgc3VwZXIoJ3NldHRpbmdzUGFnZScsIGdhbWVEYXRhKTtcblxuICAgIGNvbnN0IHRpdGxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdoMScsXG4gICAgICBjbGFzc2VzOiBbJ3RpdGxlJ10sXG4gICAgICB0ZXh0Q29udGVudDogJ9Cd0L7QstCw0Y8g0LjQs9GA0LAnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVyV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdoZWFkZXJfX3dyYXBwZXInXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBuZXcgVmlld05hdmlnYXRpb24odHJ1ZSk7XG5cbiAgICB0aGlzLm5hdkhvbWUgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhvbWVCdXR0b24oKTtcbiAgICB0aGlzLm5hdkhlbHAgPSA8SFRNTExJRWxlbWVudD5uYXZpZ2F0aW9uLnJldHVybkhlbHBCdXR0b24oKTtcblxuICAgIHRoaXMuYnV0dG9uV3JhcHBlciA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbi13cmFwcGVyJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblNldFN1bSA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICcrINCh0LvQvtC20LXQvdC40LUnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5idXR0b25TZXRTdWJzdHIgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnLSDQktGL0YfQuNGC0LDQvdC40LUnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5idXR0b25TZXRNdWx0aXBsZSA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfDlyDQo9C80L3QvtC20LXQvdC40LUnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5idXR0b25TZXREaXZpZGUgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnOiDQlNC10LvQtdC90LjQtScsXG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1dHRvblNldEZpeCA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdidXR0b24tbWlzdGFrZXMnXSxcbiAgICAgIHRleHRDb250ZW50OiAnISDQntGI0LjQsdC60LgnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXR0aW5nc0Jsb2NrID0gPEhUTUxEaXZFbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnc2V0dGluZ3MnLCAnaW5mb3JtYXRpb24nLCAnaW5mb3JtYXRpb25fdW5hY3RpdmUnXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldHRpbmdzV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnc2V0dGluZ3NfX3dyYXBwZXInXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldHRpbmdzRGVzY3JpcHRpb25zID0gcmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydzZXR0aW5nc19fZGVzY3JpcHQtbGlzdCcsICdkZXNjcmlwdC1saXN0J10sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbk9wZXJhdGlvbldyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX2Rlc2NyLXdyYXBwZXInXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRlcm1pbk9wZXJhdGlvbiA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZGVzY3JpcHQtbGlzdF9fdGVybSddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQlNC10LnRgdGC0LLQuNC1OiAnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5kZXNjcmlwdGlvbk9wZXJhdGlvbiA9IDxIVE1MRGl2RWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX2Rlc2NyJ10sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbk51bUV4YW1wbGVzV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnZGVzY3JpcHQtbGlzdF9fZGVzY3Itd3JhcHBlciddLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGVybWluTnVtRXhhbXBsZXMgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX3Rlcm0nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0JrQvtC70LjRh9C10YHRgtCy0L4g0L/RgNC40LzQtdGA0L7QsjonLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXROdW1FeHByZXNzaW9uc0J1dHRvbnMgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2RpdicsXG4gICAgICBjbGFzc2VzOiBbJ2Rlc2NyaXB0LWxpc3RfX2J1dHRvbnMtd3JhcCddLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdmVNb3N0RXhhbXBsZXNCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nLCAnZGVzY3JpcHQtbGlzdF9fYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJy0tLScsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbW92ZU1hbnlFeGFtcGxlc0J1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdkZXNjcmlwdC1saXN0X19idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnLS0nLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdmVPbmVFeGFtcGxlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ2Rlc2NyaXB0LWxpc3RfX2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICctJyxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkT25lRXhhbXBsZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdkZXNjcmlwdC1saXN0X19idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnKycsXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZE1hbnlFeGFtcGxlc0J1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdkZXNjcmlwdC1saXN0X19idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAnKysnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRNb3N0RXhhbXBsZXNCdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nLCAnZGVzY3JpcHQtbGlzdF9fYnV0dG9uJ10sXG4gICAgICB0ZXh0Q29udGVudDogJysrKycsXG4gICAgfSk7XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMgPSA8SFRNTERpdkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdkaXYnLFxuICAgICAgY2xhc3NlczogWydkZXNjcmlwdC1saXN0X19kZXNjciddLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXR0aW5nc0FwcGx5QnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgIGNsYXNzZXM6IFsnYnV0dG9uJywgJ3NldHRpbmdzX19hcHBseS1idXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0J/RgNC40LzQtdC90LjRgtGMJyxcbiAgICB9KTtcbiAgICB0aGlzLmluZm9DbG9zZUJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbicsICdzZXR0aW5nc19fY2xvc2UtYnV0dG9uJ10sXG4gICAgfSk7XG5cbiAgICB0aGlzLnZpZXdIZWxwID0gbmV3IFZpZXdIZWxwKFtcbiAgICAgIGDQlNC70Y8g0LLRi9Cx0L7RgNCwINC80LDRgtC10LzQsNGC0LjRh9C10YHQutC+0Lkg0L7Qv9C10YDQsNGG0LjQuCAo0YHQu9C+0LbQtdC90LjQtSwg0LLRi9GH0LjRgtCw0L3QuNC1LCDRg9C80L3QvtC20LXQvdC40LUpINC90LDQttC80LjRgtC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0YPRjiDQutC90L7Qv9C60YMuYCxcbiAgICAgICfQldGB0LvQuCDQsNC60YLQuNCy0L3QsCDQutC90L7Qv9C60LAgwqshINCe0YjQuNCx0LrQuMK7LCDQv9C+INC90LDQttCw0YLQuNGOINC90LAg0L3QtdC1INC80L7QttC90L4g0L/RgNC40YHRgtGD0L/QuNGC0Ywg0Log0YDQsNCx0L7RgtC1INC90LDQtCDQvtGI0LjQsdC60LDQvNC4LCDQtNC+0L/Rg9GJ0LXQvdC90YvQvNC4INGA0LDQvdC10LUuJyxcbiAgICAgICfQkiDRgdC70LXQtNGD0Y7RidC10Lwg0L7QutC90LUg0LLRi9Cx0LXRgNC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9GA0LjQvNC10YDQvtCyINC00LvRjyDRgNC10YjQtdC90LjRjyAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gMjApLiDQmtC90L7Qv9C60LggwqstLS3CuywgwqstLcK7INC4IMKrLcK7INGD0LzQtdC90YzRiNCw0Y7RgiDRh9C40YHQu9C+INC90LAgNTAsIDEwINC4IDEg0YHQvtC+0YLQstC10YLRgdGC0LLQtdC90L3Qvi4g0JrQvdC+0L/QutC4INC/0YDQuNCx0LDQstC70LXQvdC40Y8g0LTQtdC50YHRgtCy0YPRjtGCINCw0L3QsNC70L7Qs9C40YfQvdC+INCyINGB0YLQvtGA0L7QvdGDINGD0LLQtdC70LjRh9C10L3QuNGPINGH0LjRgdC70LAuJyxcbiAgICAgICfQndCw0LbQsNGC0LjQtdC8INC90LAg0LrQvdC+0L/QutGDIMKr0J/RgNC40LzQtdC90LjRgtGMwrsg0L3QsNGH0L3QuNGC0LUg0LjQs9GA0YMuJyxcbiAgICBdKTtcbiAgICB0aGlzLmhlbHBDbG9zZUJ1dHRvbiA9IHRoaXMudmlld0hlbHAucmV0dXJuQ2xvc2VCdXR0b24oKTtcblxuICAgIGNvbnN0IHZpZXdIZWxwQmxvY2sgPSB0aGlzLnZpZXdIZWxwLnJldHVybkJsb2NrKCk7XG5cbiAgICB0aGlzLnNldE51bUV4cHJlc3Npb25zQnV0dG9ucy5hcHBlbmQoXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uTnVtRXhhbXBsZXMsXG4gICAgICB0aGlzLnJlbW92ZU1vc3RFeGFtcGxlc0J1dHRvbixcbiAgICAgIHRoaXMucmVtb3ZlTWFueUV4YW1wbGVzQnV0dG9uLFxuICAgICAgdGhpcy5yZW1vdmVPbmVFeGFtcGxlQnV0dG9uLFxuICAgICAgdGhpcy5hZGRPbmVFeGFtcGxlQnV0dG9uLFxuICAgICAgdGhpcy5hZGRNYW55RXhhbXBsZXNCdXR0b24sXG4gICAgICB0aGlzLmFkZE1vc3RFeGFtcGxlc0J1dHRvblxuICAgICk7XG4gICAgZGVzY3JpcHRpb25OdW1FeGFtcGxlc1dyYXBwZXIuYXBwZW5kKFxuICAgICAgdGVybWluTnVtRXhhbXBsZXMsXG4gICAgICB0aGlzLnNldE51bUV4cHJlc3Npb25zQnV0dG9uc1xuICAgICk7XG4gICAgZGVzY3JpcHRpb25PcGVyYXRpb25XcmFwcGVyLmFwcGVuZChcbiAgICAgIHRlcm1pbk9wZXJhdGlvbixcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25PcGVyYXRpb25cbiAgICApO1xuICAgIHNldHRpbmdzRGVzY3JpcHRpb25zLmFwcGVuZChcbiAgICAgIGRlc2NyaXB0aW9uT3BlcmF0aW9uV3JhcHBlcixcbiAgICAgIGRlc2NyaXB0aW9uTnVtRXhhbXBsZXNXcmFwcGVyXG4gICAgKTtcbiAgICBzZXR0aW5nc1dyYXBwZXIuYXBwZW5kKFxuICAgICAgc2V0dGluZ3NEZXNjcmlwdGlvbnMsXG4gICAgICB0aGlzLnNldHRpbmdzQXBwbHlCdXR0b24sXG4gICAgICB0aGlzLmluZm9DbG9zZUJ1dHRvblxuICAgICk7XG4gICAgdGhpcy5zZXR0aW5nc0Jsb2NrLmFwcGVuZChzZXR0aW5nc1dyYXBwZXIpO1xuXG4gICAgaGVhZGVyV3JhcHBlci5hcHBlbmQodGl0bGUsIG5hdmlnYXRpb24ucmV0dXJuRWxlbWVudCgpKTtcbiAgICB0aGlzLmhlYWRlci5hcHBlbmQoaGVhZGVyV3JhcHBlcik7XG5cbiAgICB0aGlzLmJ1dHRvbldyYXBwZXIuYXBwZW5kKFxuICAgICAgdGhpcy5idXR0b25TZXRTdW0sXG4gICAgICB0aGlzLmJ1dHRvblNldFN1YnN0cixcbiAgICAgIHRoaXMuYnV0dG9uU2V0TXVsdGlwbGUsXG4gICAgICB0aGlzLmJ1dHRvblNldERpdmlkZSxcbiAgICAgIHRoaXMuYnV0dG9uU2V0Rml4LFxuICAgICk7XG4gICAgdGhpcy5tYWluLmFwcGVuZCh2aWV3SGVscEJsb2NrLCB0aGlzLmJ1dHRvbldyYXBwZXIsIHRoaXMuc2V0dGluZ3NCbG9jayk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lRGF0YSBmcm9tICcuLi9tb2RlbC9HYW1lRGF0YSc7XG5pbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL3JldHVybkVsZW1lbnQnO1xuaW1wb3J0IFZpZXdQYWdlIGZyb20gJy4vVmlld1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U3RhcnRQYWdlIGV4dGVuZHMgVmlld1BhZ2Uge1xuICBidXR0b25OZXdHYW1lOiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihnYW1lRGF0YTogR2FtZURhdGEpIHtcbiAgICBzdXBlcignc3RhcnRQYWdlJywgZ2FtZURhdGEpO1xuICAgIHRoaXMuYnV0dG9uTmV3R2FtZSA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQndCw0YfQsNGC0Ywg0LjQs9GA0YMnLFxuICAgIH0pO1xuICAgIHRoaXMuYnV0dG9uTG9hZEdhbWUgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+cmV0dXJuRWxlbWVudCh7XG4gICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgY2xhc3NlczogWydidXR0b24nXSxcbiAgICAgIHRleHRDb250ZW50OiAn0J/RgNC+0LTQvtC70LbQuNGC0Ywg0LjQs9GA0YMnLFxuICAgIH0pO1xuICAgIHRoaXMuYnV0dG9uUmVjb3JkcyA9IDxIVE1MQnV0dG9uRWxlbWVudD5yZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICBjbGFzc2VzOiBbJ2J1dHRvbiddLFxuICAgICAgdGV4dENvbnRlbnQ6ICfQoNC10LrQvtGA0LTRiycsXG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnd3JhcHBlcicsICdidXR0b24td3JhcHBlciddLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAnZGl2JyxcbiAgICAgIGNsYXNzZXM6IFsnaGVhZGVyX190aXRsZS13cmFwcGVyJ10sXG4gICAgfSk7XG4gICAgY29uc3QgdGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gxJyxcbiAgICAgIGNsYXNzZXM6IFsndGl0bGUnLCAnaGVhZGVyX190aXRsZSddLFxuICAgIH0pO1xuICAgIGNvbnN0IHRpdGxlU3RyaW5nID0gJ9Cu0L3Ri9C5INC80LDRgtC10LzQsNGC0LjQuic7XG4gICAgdGl0bGVTdHJpbmcuc3BsaXQoJycpLm1hcCgobGV0dGVyKSA9PiB7XG4gICAgICBpZiAoIWxldHRlci5tYXRjaCgvXFxzLykpIHtcbiAgICAgICAgY29uc3QgbGV0dGVyRWxlbWVudCA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIGNsYXNzZXM6IFsndGl0bGVfX2xldHRlciddLFxuICAgICAgICAgIHRleHRDb250ZW50OiBsZXR0ZXIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aXRsZS5hcHBlbmQobGV0dGVyRWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZS5hcHBlbmQobGV0dGVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRpdGxlV3JhcHBlci5hcHBlbmQodGl0bGUpO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZCh0aXRsZVdyYXBwZXIpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kKFxuICAgICAgdGhpcy5idXR0b25OZXdHYW1lLFxuICAgICAgdGhpcy5idXR0b25Mb2FkR2FtZSxcbiAgICAgIHRoaXMuYnV0dG9uUmVjb3Jkc1xuICAgICk7XG4gICAgdGhpcy5tYWluLmFwcGVuZChidXR0b25XcmFwcGVyKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIElFbGVtRGF0YSB7XG4gIHRhZzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nW107XG4gIGlkPzogc3RyaW5nO1xuICBhdHRyaWI/OiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9W107XG4gIHRleHRDb250ZW50Pzogc3RyaW5nO1xuICBzcmM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVybkVsZW1lbnQoZWxlbURhdGE6IElFbGVtRGF0YSk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbURhdGEudGFnKTtcbiAgaWYgKGVsZW1EYXRhLmNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1EYXRhLmNsYXNzZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGl0ZW0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtRGF0YS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC5pZCA9IGVsZW1EYXRhLmlkO1xuICB9XG4gIGlmIChlbGVtRGF0YS5hdHRyaWIgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1EYXRhLmF0dHJpYi5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShpLm5hbWUsIGkudmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtRGF0YS50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1EYXRhLnRleHRDb250ZW50O1xuICB9XG4gIGlmIChlbGVtRGF0YS50YWcgPT09ICdpbWcnICYmIGVsZW1EYXRhLnNyYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGVsZW1EYXRhLnNyYyk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hc3NldHMvdHMvQXBwJztcbmltcG9ydCBHYW1lRGF0YSBmcm9tICcuL2Fzc2V0cy90cy9tb2RlbC9HYW1lRGF0YSc7XG5cbmNvbnN0IGdhbWVEYXRhID0gbmV3IEdhbWVEYXRhKCk7XG5jb25zdCBhcHAgPSBuZXcgQXBwKGdhbWVEYXRhKTtcbmFwcC5uZXcoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==