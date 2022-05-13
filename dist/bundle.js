/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundData": () => (/* binding */ RoundData),
/* harmony export */   "SessionData": () => (/* binding */ SessionData)
/* harmony export */ });
const SessionData = {
    players: [],
    cardChoice: 'Random',
    gameStructure: 'Round Robin',
    gameLength: 'Play Twice',
    characterDeck: [],
    powerDeck: [],
};
const RoundData = {
    round: 0,
    players: [],
    cards: [[], []],
    winner: null,
};


/***/ }),

/***/ "./src/JMGE/JMTween.ts":
/*!*****************************!*\
  !*** ./src/JMGE/JMTween.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JMEasing": () => (/* binding */ JMEasing),
/* harmony export */   "JMTween": () => (/* binding */ JMTween)
/* harmony export */ });
class JMTween {
    constructor(object, totalTime = 200) {
        this.object = object;
        this.totalTime = totalTime;
        this.running = false;
        this.properties = [];
        this.onUpdate = (callback) => {
            this.onUpdateCallback = callback;
            return this;
        };
        this.onComplete = (callback) => {
            this.onCompleteCallback = callback;
            return this;
        };
        this.onWaitComplete = (callback) => {
            this.onWaitCompleteCallback = callback;
            return this;
        };
        this.yoyo = (b = true, repeat = 1) => {
            this._Yoyo = b;
            this._Repeat = repeat - 0.5;
            return this;
        };
        this.loop = (b = true, repeat = Infinity) => {
            this._Loop = b;
            this._Repeat = repeat;
            return this;
        };
        this.stop = (andComplete) => {
            if (andComplete) {
                this.complete(this.endTime);
            }
            else {
                this.running = false;
                JMTween._remove(this);
            }
            return this;
        };
        this.reset = () => {
            this.tickThis = this.firstTick;
            if (this.waitTime)
                this.hasWait = true;
            return this;
        };
        this.wait = (time) => {
            this.waitTime = time;
            this.hasWait = true;
            return this;
        };
        this.over = (time) => {
            this.totalTime = time;
            return this;
        };
        this.start = () => {
            this.running = true;
            this.properties.forEach(property => {
                if (property.to || property.to === 0) {
                    // @ts-ignore
                    property.start = this.object[property.key] || 0;
                    property.end = property.to;
                }
                else if (property.from || property.from === 0) {
                    property.start = property.from;
                    // @ts-ignore
                    property.end = this.object[property.key] || 0;
                }
                if (property.isColor) {
                    property.incR = Math.floor(property.end / 0x010000) - Math.floor(property.start / 0x010000);
                    property.incG = Math.floor((property.end % 0x010000) / 0x000100) - Math.floor((property.start % 0x010000) / 0x000100);
                    property.incB = Math.floor(property.end % 0x000100) - Math.floor(property.start % 0x000100);
                }
                else {
                    property.inc = property.end - property.start;
                }
                // @ts-ignore
                this.object[property.key] = property.start;
            });
            JMTween._add(this);
            return this;
        };
        this.to = (props, eased = true) => {
            for (let key of Object.keys(props)) {
                // @ts-ignore
                this.properties.push({ key, eased, to: props[key] });
            }
            return this;
        };
        this.from = (props, eased = true) => {
            for (let key of Object.keys(props)) {
                // @ts-ignore
                this.properties.push({ key, eased, from: props[key] });
            }
            return this;
        };
        this.colorTo = (props, eased = true) => {
            for (let key of Object.keys(props)) {
                // @ts-ignore
                this.properties.push({ key, eased, to: props[key], isColor: true });
            }
            return this;
        };
        this.colorFrom = (props, eased = true) => {
            for (let key of Object.keys(props)) {
                // @ts-ignore
                this.properties.push({ key, eased, from: props[key], isColor: true });
            }
            return this;
        };
        this.easing = (func) => {
            this._Easing = func;
            return this;
        };
        this.complete = (time) => {
            this.properties.forEach(property => {
                // @ts-ignore
                this.object[property.key] = property.end;
            });
            if (this._Loop && this._Repeat > 0) {
                this._Repeat--;
                this.reset();
                this.startTime = time;
                this.endTime = this.startTime + (this.totalTime || 0);
            }
            else if (this._Yoyo && this._Repeat > 0) {
                this._Repeat -= 0.5;
                this.reverseProps();
                this.startTime = time;
                this.endTime = this.startTime + (this.totalTime || 0);
            }
            else {
                this.running = false;
                JMTween._remove(this);
                this.tickThis = () => { };
                if (this.onCompleteCallback)
                    this.onCompleteCallback(this.object);
                if (this.nextTween) {
                    this.nextTween.reset();
                    this.nextTween.start();
                    this.nextTween.tickThis(time);
                }
            }
            return this;
        };
        this.firstTick = (time) => {
            if (this.hasWait) {
                this.startTime = time + this.waitTime / (JMTween.speedFactor || 1);
            }
            else {
                this.startTime = time;
            }
            this.endTime = this.startTime + (this.totalTime / (JMTween.speedFactor || 1) || 0);
            this.tickThis = this.tailTick;
        };
        this.tailTick = (time) => {
            if (this.hasWait && time > this.startTime) {
                this.hasWait = false;
                if (this.onWaitCompleteCallback)
                    this.onWaitCompleteCallback(this.object);
            }
            if (time > this.endTime) {
                this.complete(time);
            }
            else if (time > this.startTime) {
                let raw = (time - this.startTime) / (this.endTime - this.startTime);
                let eased = this._Easing ? this._Easing(raw) : raw;
                this.properties.forEach(property => {
                    let percent = property.eased ? eased : raw;
                    if (property.isColor) {
                        // @ts-ignore
                        this.object[property.key] = Math.round(property.start +
                            Math.floor(property.incR * percent) * 0x010000 +
                            Math.floor(property.incG * percent) * 0x000100 +
                            Math.floor(property.incB * percent));
                    }
                    else {
                        // @ts-ignore
                        this.object[property.key] = property.start + property.inc * percent;
                    }
                });
                if (this.onUpdateCallback)
                    this.onUpdateCallback(this.object);
            }
        };
        this.reverseProps = () => {
            this.properties.forEach(property => {
                let start = property.start;
                property.start = property.end;
                property.end = start;
                if (property.isColor) {
                    property.incR = Math.floor(property.end / 0x010000) - Math.floor(property.start / 0x010000);
                    property.incG = Math.floor((property.end % 0x010000) / 0x000100) - Math.floor((property.start % 0x010000) / 0x000100);
                    property.incB = Math.floor(property.end % 0x000100) - Math.floor(property.start % 0x000100);
                }
                else {
                    property.inc = property.end - property.start;
                }
            });
        };
        this.tickThis = this.firstTick;
    }
    chain(nextObj, totalTime) {
        this.nextTween = new JMTween(nextObj, totalTime);
        return this.nextTween;
    }
    chainTween(tween) {
        this.nextTween = tween;
        return tween;
    }
}
JMTween.speedFactor = 1;
JMTween.running = false;
JMTween.tweens = [];
JMTween._add = (tween) => {
    JMTween.tweens.push(tween);
    JMTween._tryRun();
};
JMTween._remove = (tween) => {
    let index = JMTween.tweens.indexOf(tween);
    if (index >= 0) {
        JMTween.tweens.splice(index, 1);
    }
};
JMTween._tryRun = () => {
    if (!JMTween.running && JMTween.tweens.length > 0) {
        JMTween.running = true;
        requestAnimationFrame(JMTween._tick);
    }
};
JMTween._tick = (time) => {
    JMTween.running = false;
    JMTween.tweens.forEach(tween => tween.tickThis(time));
    if (!JMTween.running && JMTween.tweens.length > 0) {
        JMTween.running = true;
        requestAnimationFrame(JMTween._tick);
    }
};
const JMEasing = {
    Linear: {
        None: (k) => {
            return k;
        },
    },
    Quadratic: {
        In: (k) => {
            return k * k;
        },
        Out: (k) => {
            return k * (2 - k);
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return 0.5 * k * k;
            }
            return -0.5 * (--k * (k - 2) - 1);
        },
    },
    Cubic: {
        In: (k) => {
            return k * k * k;
        },
        Out: (k) => {
            return --k * k * k + 1;
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return 0.5 * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k + 2);
        },
    },
    Quartic: {
        In: (k) => {
            return k * k * k * k;
        },
        Out: (k) => {
            return 1 - (--k * k * k * k);
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return 0.5 * k * k * k * k;
            }
            return -0.5 * ((k -= 2) * k * k * k - 2);
        },
    },
    Quintic: {
        In: (k) => {
            return k * k * k * k * k;
        },
        Out: (k) => {
            return --k * k * k * k * k + 1;
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return 0.5 * k * k * k * k * k;
            }
            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        },
    },
    Sinusoidal: {
        In: (k) => {
            return 1 - Math.cos(k * Math.PI / 2);
        },
        Out: (k) => {
            return Math.sin(k * Math.PI / 2);
        },
        InOut: (k) => {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        },
    },
    Exponential: {
        In: (k) => {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        Out: (k) => {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        InOut: (k) => {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            k *= 2;
            if (k < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        },
    },
    Circular: {
        In: (k) => {
            return 1 - Math.sqrt(1 - k * k);
        },
        Out: (k) => {
            return Math.sqrt(1 - (--k * k));
        },
        InOut: (k) => {
            k *= 2;
            if (k < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        },
    },
    Elastic: {
        In: (k) => {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        },
        Out: (k) => {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: (k) => {
            if (k === 0) {
                return 0;
            }
            if (k === 1) {
                return 1;
            }
            k *= 2;
            if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: (k) => {
            let s = 1.70158;
            return k * k * ((s + 1) * k - s);
        },
        Out: (k) => {
            let s = 1.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        },
        InOut: (k) => {
            let s = 1.70158 * 1.525;
            k *= 2;
            if (k < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }
            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        },
    },
    Bounce: {
        In: (k) => {
            return 1 - JMEasing.Bounce.Out(1 - k);
        },
        Out: (k) => {
            if (k < (1 / 2.75)) {
                return 7.5625 * k * k;
            }
            else if (k < (2 / 2.75)) {
                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
            }
            else if (k < (2.5 / 2.75)) {
                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
            }
            else {
                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            }
        },
        InOut: (k) => {
            if (k < 0.5) {
                return JMEasing.Bounce.In(k * 2) * 0.5;
            }
            return JMEasing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        },
    },
};


/***/ }),

/***/ "./src/components/domui/InfoPanel.ts":
/*!*******************************************!*\
  !*** ./src/components/domui/InfoPanel.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPanel": () => (/* binding */ InfoPanel)
/* harmony export */ });
class InfoPanel {
    constructor() {
        this.destroy = () => {
            document.body.removeChild(this.element);
        };
        this.element = document.createElement('div');
        this.element.classList.add('info-panel');
        document.body.appendChild(this.element);
        let top = document.createElement('div');
        top.classList.add('top');
        this.element.appendChild(top);
        top.innerHTML = `
    <div class="info-title">Instructions</div>
    <div class="info-subtitle">How To Play</div>`;
        this.contentElement = document.createElement('div');
        this.contentElement.classList.add('info-content');
        top.appendChild(this.contentElement);
        this.contentElement.innerHTML = 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ';
        let button = document.createElement('button');
        button.classList.add('close-button');
        this.element.appendChild(button);
        button.innerHTML = 'X';
        button.addEventListener('click', () => this.hidden = true);
        this.hidden = true;
    }
    get hidden() {
        return this.element.style.display === 'none';
    }
    set hidden(b) {
        if (b) {
            this.element.style.display = 'none';
        }
        else {
            this.element.style.removeProperty('display');
        }
    }
}


/***/ }),

/***/ "./src/components/domui/TimerCircle.ts":
/*!*********************************************!*\
  !*** ./src/components/domui/TimerCircle.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerCircle": () => (/* binding */ TimerCircle)
/* harmony export */ });
/* harmony import */ var _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../JMGE/JMTween */ "./src/JMGE/JMTween.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ElementFactory */ "./src/services/ElementFactory.ts");


class TimerCircle {
    constructor() {
        this.endNow = () => {
            console.log('a');
            this.tween.stop(true);
        };
        this.onUpdate = () => {
            this.element.innerHTML = Math.ceil(this.currentSeconds).toString();
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeText('99', 'timer');
        this.tween = new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(this, 99000).to({ currentSeconds: 0 })
            .onComplete(() => this._onComplete())
            .onUpdate(this.onUpdate);
    }
    reset(seconds) {
        if (seconds) {
            this.totalSeconds = seconds;
        }
        this.currentSeconds = this.totalSeconds;
        this.element.innerHTML = this.currentSeconds.toString();
        this.tween.reset();
        this.tween.over(this.totalSeconds * 1000);
        return this;
    }
    start() {
        this.tween.start();
        return this;
    }
    pause() {
        this.tween.stop();
    }
    onComplete(func) {
        this._onComplete = func;
        return this;
    }
}


/***/ }),

/***/ "./src/data/Cards.ts":
/*!***************************!*\
  !*** ./src/data/Cards.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cards": () => (/* binding */ Cards)
/* harmony export */ });
const Cards = {
    Characters: [
        'Human',
        'Mouse',
        'Elephant',
        'Cat',
        'Wolf',
        'Anaconda',
        'Tiger',
        'Amoeba',
        'Poison Frog',
        'Tardigrade',
        'Great White Shark',
        'Blue Whale',
        'Goat',
        'Mosquito',
        'Fire Dragon',
        'Pegasus',
        'T-Rex',
        'Gorilla',
        'Satan',
        'Zeus',
        'Venus Fly Trap',
        'Covid Particle',
        'Raven',
        'Bat',
        'Grizzly Bear',
        'Rabbit',
        'Scorpion/Lobster',
        'Cerberus?',
        'Electric Eel',
        'Armadillo or Porcupine',
        'Giraffe',
        'Hippopotamus',
        'Moose',
        'Swarm of Wasps',
        'Koala',
        'Badger',
        'Seal',
        'Ant Army',
        'Ghost',
        'Alien',
        'Robot',
        'Wizard',
    ],
    Powers: [
        'x100 Size',
        'Ant size',
        'Travel at Speed of Light',
        'Superman Strength',
        'X1000 clones',
        'Teleport',
        'Bazooka',
        'Katana',
        'Thumbtack',
        'Rocketship',
        'Hammer (Mjolnir)',
        'Jet Pack',
        'Mech Suit',
        'Ninja Stars',
        'Super Brain (Mojo jojo)',
        'Wildcard (hi-tech device)',
        'Forcefield',
        'Elemental Powers (Fire/Water/Air/Earth)',
        'Weather Control',
        'Gravity Control',
        'Swiss Army Knife',
        'Laser Beam?',
        'Fighter Jet',
        'Concert Speakers',
        'Pan of Bacon Grease',
        'Summoning (any object)',
        'Anvil? Anchor?',
        'Grenade',
        'Regenerating Body',
        'Psychic',
        'Shapeshifting',
        'Counter??',
        'Irresistible Cuteness',
        'Jeff Bezo’s Credit Card',
        'Time Control',
        'Wolverine Claws',
        '9 lives',
        'Invisibility',
        'Chainsaw',
        'Super Lucky',
        'Bear Trap',
    ],
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Facade": () => (/* binding */ Facade),
/* harmony export */   "interactionMode": () => (/* binding */ interactionMode)
/* harmony export */ });
/* harmony import */ var _components_domui_InfoPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/domui/InfoPanel */ "./src/components/domui/InfoPanel.ts");
/* harmony import */ var _pages_MainUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/MainUI */ "./src/pages/MainUI.ts");
var _a;


let interactionMode = 'desktop';
let Facade = new (_a = class FacadeInner {
        constructor() {
            console.warn = (a) => { };
            if (FacadeInner.exists)
                throw new Error('Cannot instatiate more than one Facade Singleton.');
            FacadeInner.exists = true;
            try {
                document.createEvent('TouchEvent');
                interactionMode = 'mobile';
            }
            catch (e) {
            }
            // Setup PIXI
            this.element = document.getElementById('main');
            this.navTo(new _pages_MainUI__WEBPACK_IMPORTED_MODULE_1__.MainUI());
            this.instructions = new _components_domui_InfoPanel__WEBPACK_IMPORTED_MODULE_0__.InfoPanel();
            // FontLoader.load(FontArray).then(() => console.log('Fonts Loaded'));
            // let fonts: string[] = _.map(Fonts);
            // // load fonts then preloader!
            // // window.requestAnimationFrame(() => FontLoader.load(fonts).then(this.init));
            // window.requestAnimationFrame(() => this.init());
        }
        navTo(nextPage) {
            if (this.currentPage) {
                this.currentPage.navOut();
            }
            this.element.innerHTML = '';
            this.currentPage = nextPage;
            this.element.appendChild(nextPage.element);
            nextPage.navIn();
        }
        showInstructions() {
            this.instructions.hidden = false;
        }
    },
    _a.exists = false,
    _a)();


/***/ }),

/***/ "./src/pages/EndUI.ts":
/*!****************************!*\
  !*** ./src/pages/EndUI.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndUI": () => (/* binding */ EndUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _MainUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainUI */ "./src/pages/MainUI.ts");
/* harmony import */ var _RoundUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoundUI */ "./src/pages/RoundUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");







class EndUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_6__.BaseUI {
    constructor() {
        super();
        this.navHome = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _MainUI__WEBPACK_IMPORTED_MODULE_4__.MainUI());
        };
        this.navGame = () => {
            _services_GameController__WEBPACK_IMPORTED_MODULE_3__.GameController.restartGame();
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _RoundUI__WEBPACK_IMPORTED_MODULE_5__.RoundUI());
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('end-ui');
        let title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeText(`Game Over`, 'title');
        let mainSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('content');
        let table = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('table-container');
        let home = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton('Home', 'home-button', this.navHome);
        let buttonContainer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('button-box');
        let button1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton('Main Menu', 'info-button', this.navHome);
        let button2 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton('Play Again!', 'info-button', this.navGame);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(this.element, title, mainSection, buttonContainer, home);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(mainSection, table);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(buttonContainer, button1, button2);
        let tableInner = document.createElement('table');
        tableInner.classList.add('leaderboard');
        table.appendChild(tableInner);
        let head = tableInner.createTHead();
        let row = head.insertRow();
        let th0 = document.createElement('th');
        let th1 = document.createElement('th');
        th0.appendChild(document.createTextNode('Name'));
        th1.appendChild(document.createTextNode('Score'));
        row.appendChild(th0);
        row.appendChild(th1);
        _Config__WEBPACK_IMPORTED_MODULE_1__.SessionData.players.forEach((el, i) => {
            let score = _Config__WEBPACK_IMPORTED_MODULE_1__.SessionData.players[i].score;
            row = tableInner.insertRow();
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(el.slug));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(score.toString()));
        });
    }
}


/***/ }),

/***/ "./src/pages/MainUI.ts":
/*!*****************************!*\
  !*** ./src/pages/MainUI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUI": () => (/* binding */ MainUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _SetupUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SetupUI */ "./src/pages/SetupUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");




class MainUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_3__.BaseUI {
    constructor() {
        super();
        this.navigateStart = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _SetupUI__WEBPACK_IMPORTED_MODULE_2__.SetupUI());
        };
        this.openInstructions = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.showInstructions();
            // new InfoPopup('Instruction!');
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeDiv('main-ui');
        let title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeText('Who Will Win?', 'title');
        let buttonContainer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeDiv('button-box');
        let button1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeButton('New Game', 'info-button', this.navigateStart);
        let button2 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeButton('Instructions', 'info-button', this.openInstructions);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.addElements(buttonContainer, button1, button2);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.addElements(this.element, title, buttonContainer);
    }
    navIn() {
    }
    navOut() {
    }
    destroy() {
    }
}


/***/ }),

/***/ "./src/pages/RoundUI.ts":
/*!******************************!*\
  !*** ./src/pages/RoundUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundUI": () => (/* binding */ RoundUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_domui_TimerCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/domui/TimerCircle */ "./src/components/domui/TimerCircle.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _MainUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainUI */ "./src/pages/MainUI.ts");
/* harmony import */ var _ScoreUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ScoreUI */ "./src/pages/ScoreUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");








class RoundUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_7__.BaseUI {
    constructor() {
        super();
        this.paused = false;
        this.phaseIntro = () => {
            this.bottomTitle.innerHTML = 'Who Will Win?';
            this.bottomText.innerHTML = 'Get ready to fight...';
            this.timer.reset(10).onComplete(this.phaseLeftPlay).start();
        };
        this.phaseLeftPlay = () => {
            this.bottomTitle.innerHTML = `${_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0]}'s Turn!`;
            this.bottomText.innerHTML = `
      - Tell us about your character<br>
      - What can you do?<br>
      - What do you do?<br>
      - How do you beat your foe?`;
            this.timer.reset(15).onComplete(this.phaseRightPlay).start();
        };
        this.phaseRightPlay = () => {
            this.bottomTitle.innerHTML = `${_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1]}'s Turn!`;
            this.bottomText.innerHTML = `
      - Tell us about your character<br>
      - What can you do?<br>
      - What do you do?<br>
      - How do you respond to your foe?`;
            this.timer.reset(15).onComplete(this.phaseVote).start();
        };
        this.phaseVote = () => {
            this.bottomTitle.innerHTML = `Who will win?`;
            this.bottomText.innerHTML = `Cast your vote!`;
            this.leftVote.style.removeProperty('display');
            this.rightVote.style.removeProperty('display');
            this.timer.reset(60).onComplete(this.navEnd).start();
        };
        this.navHome = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _MainUI__WEBPACK_IMPORTED_MODULE_5__.MainUI());
        };
        this.navEnd = () => {
            _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.winner = this.winner || 0;
            _services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.winner]);
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _ScoreUI__WEBPACK_IMPORTED_MODULE_6__.ScoreUI());
        };
        this.pauseTimer = () => {
            this.paused = !this.paused;
            if (this.paused) {
                this.pauseButton.innerHTML = 'resume';
                this.timer.pause();
            }
            else {
                this.pauseButton.innerHTML = 'pause';
                this.timer.start();
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('round-ui');
        let round = ++_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.round;
        _services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.resetRound();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0] = _services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.selectPlayer();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1] = _services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.selectPlayer();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][0] = _services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.selectCharacter();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][0] = _services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.selectCharacter();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][1] = _services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.selectPower();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][1] = _services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.selectPower();
        let title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(`Round ${round}`, 'title');
        let topSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('round-top');
        let bottomSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('round-bottom');
        this.leftSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('player-section');
        this.rightSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('player-section');
        let leftCards = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card-section');
        let rightCards = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card-section');
        this.bottomTitle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText('Who Will Win?', 'title');
        this.bottomText = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText('Get ready to fight...', 'big-text');
        let leftName = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0], 'name-title');
        let rightName = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1], 'name-title');
        let leftCard1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        let leftCard2 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        let rightCard1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        let rightCard2 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        leftCard1.innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][0];
        leftCard2.innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][1];
        rightCard1.innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][0];
        rightCard2.innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][1];
        let vs = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText('vs', 'title');
        let home = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton('Home', 'home-button', this.navHome);
        let voteContainer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('vote-container');
        this.leftVote = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton(`${_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0]} Wins`, 'vote-button', () => this.setWinner(0));
        this.rightVote = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton(`${_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1]} Wins`, 'vote-button', () => this.setWinner(1));
        this.leftVote.style.display = 'none';
        this.rightVote.style.display = 'none';
        this.timer = new _components_domui_TimerCircle__WEBPACK_IMPORTED_MODULE_1__.TimerCircle();
        this.skipButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton('skip', 'small-button', this.timer.endNow);
        this.pauseButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton('pause', 'small-button', this.pauseTimer);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.element, title, topSection, bottomSection, home, this.timer.element);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(topSection, this.leftSection, vs, this.rightSection);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(bottomSection, this.bottomTitle, this.bottomText, voteContainer);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.leftSection, leftName, leftCards);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.rightSection, rightName, rightCards);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(leftCards, leftCard1, leftCard2);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(rightCards, rightCard1, rightCard2);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(voteContainer, this.leftVote, this.rightVote);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(bottomSection, this.skipButton, this.pauseButton);
        this.phaseIntro();
    }
    setWinner(player) {
        if (this.winner === player)
            return;
        this.winner = player;
        if (player === 0) {
            this.leftVote.classList.add('highlighted');
            this.rightVote.classList.remove('highlighted');
        }
        else {
            this.rightVote.classList.add('highlighted');
            this.leftVote.classList.remove('highlighted');
        }
    }
}


/***/ }),

/***/ "./src/pages/ScoreUI.ts":
/*!******************************!*\
  !*** ./src/pages/ScoreUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreUI": () => (/* binding */ ScoreUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_domui_TimerCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/domui/TimerCircle */ "./src/components/domui/TimerCircle.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _EndUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EndUI */ "./src/pages/EndUI.ts");
/* harmony import */ var _MainUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainUI */ "./src/pages/MainUI.ts");
/* harmony import */ var _RoundUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RoundUI */ "./src/pages/RoundUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");









class ScoreUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_8__.BaseUI {
    constructor() {
        super();
        this.paused = false;
        this.navHome = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _MainUI__WEBPACK_IMPORTED_MODULE_6__.MainUI());
        };
        this.navGame = () => {
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_4__.GameController.isGameOver()) {
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _EndUI__WEBPACK_IMPORTED_MODULE_5__.EndUI());
            }
            else {
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _RoundUI__WEBPACK_IMPORTED_MODULE_7__.RoundUI());
            }
        };
        this.pauseTimer = () => {
            this.paused = !this.paused;
            if (this.paused) {
                this.pauseButton.innerHTML = 'resume';
                this.timer.pause();
            }
            else {
                this.pauseButton.innerHTML = 'pause';
                this.timer.start();
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('score-ui');
        let round = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.round;
        let player = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.winner];
        let title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(`Round ${round}`, 'title');
        let mainSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('content');
        let leftTitle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText('And the winner is...', 'bigger-text');
        let leftSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('left');
        let table = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('table-container');
        let playerSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('player-section');
        let playerName = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeText(player, 'name-title');
        let playerCards = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card-section');
        let card1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        let card2 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeDiv('card');
        card1.innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.winner][0];
        card2.innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.winner][1];
        let home = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton('Home', 'home-button', this.navHome);
        this.timer = new _components_domui_TimerCircle__WEBPACK_IMPORTED_MODULE_1__.TimerCircle();
        this.skipButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton('skip', 'small-button', this.timer.endNow);
        this.pauseButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.makeButton('pause', 'small-button', this.pauseTimer);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(this.element, title, mainSection, home, this.timer.element);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(mainSection, leftSection, table);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(leftSection, leftTitle, playerSection, this.skipButton, this.pauseButton);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(playerSection, playerName, playerCards);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_3__.El.addElements(playerCards, card1, card2);
        this.timer.reset(10).onComplete(this.navGame).start();
        let tableInner = document.createElement('table');
        tableInner.classList.add('leaderboard');
        table.appendChild(tableInner);
        let head = tableInner.createTHead();
        let row = head.insertRow();
        let th0 = document.createElement('th');
        let th1 = document.createElement('th');
        th0.appendChild(document.createTextNode('Name'));
        th1.appendChild(document.createTextNode('Score'));
        row.appendChild(th0);
        row.appendChild(th1);
        _Config__WEBPACK_IMPORTED_MODULE_2__.SessionData.players.forEach((el, i) => {
            let score = _Config__WEBPACK_IMPORTED_MODULE_2__.SessionData.players[i].score;
            row = tableInner.insertRow();
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(el.slug));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(score.toString()));
        });
    }
}


/***/ }),

/***/ "./src/pages/SetupUI.ts":
/*!******************************!*\
  !*** ./src/pages/SetupUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupUI": () => (/* binding */ SetupUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _MainUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainUI */ "./src/pages/MainUI.ts");
/* harmony import */ var _RoundUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoundUI */ "./src/pages/RoundUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");







class SetupUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_6__.BaseUI {
    constructor() {
        super();
        this.names = [];
        this.navHome = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _MainUI__WEBPACK_IMPORTED_MODULE_4__.MainUI());
        };
        this.navGame = () => {
            this.updatePlayers();
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _RoundUI__WEBPACK_IMPORTED_MODULE_5__.RoundUI());
        };
        this.addNameElement = (name) => {
            let el = this.makeNameElement();
            this.nameContainer.appendChild(el.element);
            this.nameContainer.appendChild(this.addButton);
            this.names.push(el);
            if (name)
                el.input.value = name;
            return el;
        };
        this.removeNameElement = (el) => {
            if (this.names.length <= 1)
                return;
            this.nameContainer.removeChild(el.element);
            let i = this.names.indexOf(el);
            this.names.splice(i, 1);
        };
        this.makeNameElement = () => {
            let element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv();
            let input = document.createElement('input');
            input.classList.add('name-element');
            let m = { input, element };
            let deleteB = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton('X', 'delete-button', () => this.removeNameElement(m));
            element.appendChild(deleteB);
            _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(element, input, deleteB);
            return m;
        };
        this.updatePlayers = () => {
            _services_GameController__WEBPACK_IMPORTED_MODULE_3__.GameController.resetSession(this.names.map(el => el.input.value));
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('setup-ui');
        let title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeText(`Game Setup`, 'title');
        let middle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('horizontal-stack');
        let leftSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('vertical-stack');
        let rightSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('vertical-stack');
        this.nameContainer = leftSection;
        let leftHeader = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeText('Players:', 'sub-title');
        let rightHeader = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeText('Options:', 'sub-title');
        this.addButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton('Add', 'info-button', () => this.addNameElement());
        let home = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton('Home', 'home-button', this.navHome);
        let startGame = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton('Start Game!', 'info-button', this.navGame);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(leftSection, leftHeader, this.addButton);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(rightSection, rightHeader, startGame);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(middle, leftSection, rightSection);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(this.element, title, middle, home);
        leftSection.style.justifyContent = 'flex-start';
        leftSection.style.gap = '10px';
        this.loadNames();
    }
    loadNames() {
        _Config__WEBPACK_IMPORTED_MODULE_1__.SessionData.players.forEach(el => {
            this.addNameElement(el.slug);
        });
        this.addNameElement();
    }
}


/***/ }),

/***/ "./src/pages/_BaseUI.ts":
/*!******************************!*\
  !*** ./src/pages/_BaseUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseUI": () => (/* binding */ BaseUI)
/* harmony export */ });
class BaseUI {
    navIn() { }
    navOut() { }
    destroy() { }
}


/***/ }),

/***/ "./src/services/ElementFactory.ts":
/*!****************************************!*\
  !*** ./src/services/ElementFactory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "El": () => (/* binding */ El)
/* harmony export */ });
const El = {
    makeText: (title, className) => {
        let el = document.createElement('div');
        if (className)
            el.classList.add(className);
        el.innerHTML = title;
        return el;
    },
    makeDiv: (className) => {
        let el = document.createElement('div');
        if (className)
            el.classList.add(className);
        return el;
    },
    makeButton: (title, className, onClick) => {
        let el = document.createElement('button');
        if (className)
            el.classList.add(className);
        el.innerHTML = title;
        el.addEventListener('click', onClick);
        return el;
    },
    addElements(source, ...children) {
        children.forEach(child => source.appendChild(child));
    },
};


/***/ }),

/***/ "./src/services/GameController.ts":
/*!****************************************!*\
  !*** ./src/services/GameController.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameController": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/Cards */ "./src/data/Cards.ts");


const GameController = {
    selectPlayer: () => {
        let minPlay = Math.min(..._Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.map(el => el.plays));
        let pool = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.filter(el => el.plays === minPlay && !_Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.players.includes(el.slug));
        let index = Math.floor(Math.random() * pool.length);
        let player = pool[index];
        player.plays++;
        console.log(_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData);
        console.log(pool, index, player);
        return player.slug;
    },
    scorePlayer: (name) => {
        let player = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.find(el => el.slug === name);
        player.score++;
    },
    resetSession: (players) => {
        _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players = players.filter(el => el !== '').map(slug => ({ slug, score: 0, plays: 0 }));
        console.log(_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players);
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.round = 0;
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.players = [];
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.cards = [[], []];
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.winner = null;
    },
    selectCharacter: () => {
        if (_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck.length === 0) {
            _data_Cards__WEBPACK_IMPORTED_MODULE_1__.Cards.Characters.forEach(card => _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck.push(card));
        }
        let index = Math.floor(Math.random() * _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck.length);
        let m = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck[index];
        _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.characterDeck.splice(index, 1);
        return m;
    },
    selectPower: () => {
        if (_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck.length === 0) {
            _data_Cards__WEBPACK_IMPORTED_MODULE_1__.Cards.Powers.forEach(card => _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck.push(card));
        }
        let index = Math.floor(Math.random() * _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck.length);
        let m = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck[index];
        _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.powerDeck.splice(index, 1);
        return m;
    },
    resetRound: () => {
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.players = [];
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.cards = [[], []];
        _Config__WEBPACK_IMPORTED_MODULE_0__.RoundData.winner = null;
    },
    restartGame: () => {
        GameController.resetSession(_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.map(el => el.slug));
    },
    isGameOver: () => {
        return !_Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.some(el => el.plays < 2);
    },
};
GameController.resetSession([
    'Debbie',
    'Jeremy',
    'Rambo',
    'Josh',
    'Pascal',
    'Bob',
]);


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map