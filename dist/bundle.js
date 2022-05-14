/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/components/InfoPanel.ts":
/*!*************************************!*\
  !*** ./src/components/InfoPanel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoPanel": () => (/* binding */ InfoPanel)
/* harmony export */ });
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");


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
    <div class="info-title">${_data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.INFO_TITLE}</div>
    <div class="info-subtitle">${_data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.INFO_SUBTITLE}</div>`;
        this.contentElement = document.createElement('div');
        this.contentElement.classList.add('info-content');
        top.appendChild(this.contentElement);
        this.contentElement.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.INFO_DESCRIPTION;
        let button = document.createElement('button');
        button.classList.add('close-button');
        this.element.appendChild(button);
        button.innerHTML = 'X';
        button.addEventListener('click', () => this.hidden = true);
        this.element.style.display = 'none';
    }
    get hidden() {
        return this.element.style.display === 'none';
    }
    set hidden(b) {
        if (b) {
            // this.element.style.display = 'none';
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_1__.animateDiv)(this.element, _services_animateDiv__WEBPACK_IMPORTED_MODULE_1__.AnimationType.SHRINK_OUT);
        }
        else {
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_1__.animateDiv)(this.element, _services_animateDiv__WEBPACK_IMPORTED_MODULE_1__.AnimationType.GROW_IN);
            this.element.style.removeProperty('display');
        }
    }
}


/***/ }),

/***/ "./src/components/TimerCircle.ts":
/*!***************************************!*\
  !*** ./src/components/TimerCircle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerCircle": () => (/* binding */ TimerCircle)
/* harmony export */ });
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");


class TimerCircle {
    constructor(showControls = true) {
        this.paused = false;
        this.endNow = () => {
            this.paused = true;
            this._onComplete && this._onComplete();
            this._onComplete = null;
            // if (this._canSkip) this.tween.stop(true);
        };
        this.pauseTimer = () => {
            if (!this._canSkip)
                return;
            if (this.paused) {
                this.start();
            }
            else {
                this.pause();
            }
        };
        this.tickTimer = () => {
            if (this.paused)
                return;
            this.currentSeconds--;
            this.timer.innerHTML = Math.ceil(this.currentSeconds).toString();
            if (this.currentSeconds === 0) {
                this._onComplete && this._onComplete();
                this._onComplete = null;
            }
            else {
                window.setTimeout(this.tickTimer, 1000);
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeDiv('timer-container');
        this.timer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeText('99', 'timer');
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.addElements(this.element, this.timer);
        // this.tween = new JMTween<TimerCircle>(this, 99000).to({currentSeconds: 0})
        //   .onComplete(() => this._onComplete && this._onComplete())
        //   .onUpdate(this.onUpdate);
        if (showControls) {
            this.skipButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.BUTTON_SKIP, 'small-button', this.endNow);
            this.pauseButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.BUTTON_PAUSE, 'small-button', this.pauseTimer);
            _services_ElementFactory__WEBPACK_IMPORTED_MODULE_1__.El.addElements(this.element, this.skipButton, this.pauseButton);
        }
    }
    set canSkip(b) {
        this._canSkip = b;
        if (b) {
            this.pauseButton.style.removeProperty('display');
            this.skipButton.style.removeProperty('display');
        }
        else {
            this.pauseButton.style.display = 'none';
            this.skipButton.style.display = 'none';
        }
    }
    destroy() {
        this.paused = true;
        this._onComplete = null;
    }
    reset(seconds) {
        if (seconds) {
            this.totalSeconds = seconds;
        }
        this.currentSeconds = this.totalSeconds;
        this.timer.innerHTML = this.currentSeconds.toString();
        // this.tween.reset();
        // this.tween.over(this.totalSeconds * 1000);
        return this;
    }
    start() {
        if (!this.paused)
            return;
        this.paused = false;
        this.currentSeconds++;
        this.tickTimer();
        // this.tween.start();
        this.pauseButton && (this.pauseButton.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.BUTTON_PAUSE);
        return this;
    }
    pause() {
        this.pauseButton && (this.pauseButton.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_0__.StringData.BUTTON_RESUME);
        this.paused = true;
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

"use strict";
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

/***/ "./src/data/Fonts.ts":
/*!***************************!*\
  !*** ./src/data/Fonts.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontArray": () => (/* binding */ FontArray),
/* harmony export */   "Fonts": () => (/* binding */ Fonts)
/* harmony export */ });
const Fonts = {
    UI: 'Roboto',
    FLYING: 'Coda Caption',
    // SCORE: 'Odibee Sans',
};
const FontArray = ['Roboto', 'Cedarville Cursive', 'Macondo'];


/***/ }),

/***/ "./src/data/ImageUrl.ts":
/*!******************************!*\
  !*** ./src/data/ImageUrl.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUrl": () => (/* binding */ ImageUrl)
/* harmony export */ });
const ImageUrl = {
    ToJam: './img/ToJam.png',
    GameHive: './img/GameHive.jpg',
};


/***/ }),

/***/ "./src/data/StringData.ts":
/*!********************************!*\
  !*** ./src/data/StringData.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnglishStringData": () => (/* binding */ EnglishStringData),
/* harmony export */   "StringData": () => (/* binding */ StringData)
/* harmony export */ });
const EnglishStringData = {
    GAME_TITLE: 'Squabble Squabble!',
    SETUP_TITLE: 'Game Setup',
    SETUP_PLAYER_TITLE: 'Players',
    SETUP_OPTIONS_TITLE: 'How to Play',
    SETUP_OPTIONS_TEXT: `Each round, two players face off.<br> Players 
  `,
    GAME_OVER_TITLE: 'Game Over',
    RESULT_WINNER: 'And the winner is...',
    TABLE_NAME: 'Name',
    TABLE_SCORE: 'Score',
    ROUND_VS: 'vs',
    ROUND_INTRO_TITLE: 'Who Will Win?',
    ROUND_INTRO_TEXT: 'Get ready to fight...',
    ROUND_PLAY_TITLE: 'What do you do?',
    ROUND_WINS: 'Wins',
    ROUND_TIE: 'Tie',
    ROUND_LEFT_TEXT: ``,
    ROUND_RIGHT_TEXT: ``,
    ROUND_VOTE_TITLE: 'Who Will Win?',
    ROUND_VOTE_TEXT: 'Any last words..?<br>Vote Now!',
    ROUND_VOTE_TITLE2: 'Choose Now!',
    ROUND_VOTE_TEXT2: 'Tally up the votes and select the winner.',
    ROUND_TIE_TITLE: 'Tie Game!',
    ROUND_TIE_TEXT: 'You each get half a point.',
    ROUND_TITLE: 'Round',
    BUTTON_ADD: 'Add',
    BUTTON_START: 'Start Game!',
    BUTTON_SKIP: 'skip',
    BUTTON_PAUSE: 'pause',
    BUTTON_RESUME: 'resume',
    BUTTON_HOME: 'Home',
    BUTTON_NEW_GAME: 'New Game',
    BUTTON_INSTRUCTIONS: 'Instructions',
    BUTTON_MAIN_MENU: 'Main Menu',
    BUTTON_PLAY_AGAIN: 'Play Again!',
    INFO_TITLE: 'Instructions',
    INFO_SUBTITLE: 'How To Play',
    INFO_DESCRIPTION: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    BOTTOM_DESCRIPTION: 'Created by Jeremy Moshe and Debbie Chan, 2022, as part of TO Jam.',
    DEFAULT_NAMES: [
        'Debbie',
        'Jeremy',
        'Rambo',
        'Josh',
        'Pascal',
        'Bob',
    ],
};
const StringData = EnglishStringData;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Facade": () => (/* binding */ Facade),
/* harmony export */   "interactionMode": () => (/* binding */ interactionMode)
/* harmony export */ });
/* harmony import */ var _components_InfoPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/InfoPanel */ "./src/components/InfoPanel.ts");
/* harmony import */ var _pages_RoundUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/RoundUI */ "./src/pages/RoundUI.ts");
/* harmony import */ var _services_FontLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/FontLoader */ "./src/services/FontLoader.ts");
/* harmony import */ var _data_Fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/Fonts */ "./src/data/Fonts.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ElementFactory */ "./src/services/ElementFactory.ts");
var _a;





let interactionMode = 'desktop';
let Facade = new (_a = class FacadeInner {
        constructor() {
            if (FacadeInner.exists)
                throw new Error('Cannot instatiate more than one Facade Singleton.');
            FacadeInner.exists = true;
            try {
                document.createEvent('TouchEvent');
                interactionMode = 'mobile';
            }
            catch (e) {
            }
            this.element = document.getElementById('main');
            this.instructions = new _components_InfoPanel__WEBPACK_IMPORTED_MODULE_0__.InfoPanel();
            this.bottomBar = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.ElFactory.makeBottomBar();
            let body = document.body;
            body.appendChild(this.bottomBar);
            this.homeButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.ElFactory.makeHomeButton();
            body.appendChild(this.homeButton);
            _services_FontLoader__WEBPACK_IMPORTED_MODULE_2__.FontLoader.load(_data_Fonts__WEBPACK_IMPORTED_MODULE_3__.FontArray);
            window.requestAnimationFrame(() => this.init());
        }
        init() {
            // this.navTo(new MainUI());
            // this.navTo(new SetupUI());
            this.navTo(new _pages_RoundUI__WEBPACK_IMPORTED_MODULE_1__.RoundUI());
            // this.navTo(new EndUI());
        }
        navTo(nextPage) {
            if (this.currentPage) {
                this.currentPage.navOut();
            }
            // this.element.innerHTML = '';
            this.currentPage = nextPage;
            this.element.appendChild(nextPage.element);
            nextPage.navIn();
        }
        showInstructions() {
            this.instructions.hidden = false;
        }
        showHome(b) {
            if (b) {
                this.homeButton.style.removeProperty('display');
            }
            else {
                this.homeButton.style.display = 'none';
            }
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndUI": () => (/* binding */ EndUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
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
        let title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.GAME_OVER_TITLE, 'title');
        let mainSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('content');
        let table = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('table-container');
        let buttonContainer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeDiv('button-box');
        let button1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_MAIN_MENU, 'info-button', this.navHome);
        let button2 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_PLAY_AGAIN, 'info-button', this.navGame);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(true);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(this.element, title, mainSection, buttonContainer);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(mainSection, table);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.addElements(buttonContainer, button1, button2);
        let tableInner = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.ElFactory.makeLeaderboard();
        table.appendChild(tableInner);
    }
    navIn() {
        // animateDiv(this.element, AnimationType.GROW_IN);
    }
    navOut() {
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_2__.El.destroy(this.element);
        // animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
        // new JMTween({}, 1000).to({}).start().onComplete(() => {
        //   this.element.parentElement.removeChild(this.element);
        // });
    }
}


/***/ }),

/***/ "./src/pages/MainUI.ts":
/*!*****************************!*\
  !*** ./src/pages/MainUI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainUI": () => (/* binding */ MainUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../JMGE/JMTween */ "./src/JMGE/JMTween.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _SetupUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SetupUI */ "./src/pages/SetupUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");







class MainUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_6__.BaseUI {
    constructor() {
        super();
        this.navigateStart = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _SetupUI__WEBPACK_IMPORTED_MODULE_5__.SetupUI());
        };
        this.openInstructions = () => {
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.showInstructions();
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeDiv('main-ui');
        this.title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.GAME_TITLE, 'title');
        let buttonContainer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeDiv('button-box');
        this.button1 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_NEW_GAME, 'info-button', this.navigateStart);
        this.button2 = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_1__.StringData.BUTTON_INSTRUCTIONS, 'info-button', this.openInstructions);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(false);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.addElements(buttonContainer, this.button1, this.button2);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.addElements(this.element, this.title, buttonContainer);
    }
    navIn() {
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.title, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.BASIC_POP, 300);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.button1, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.BASIC_POP, 600);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.button2, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.BASIC_POP, 900);
    }
    navOut() {
        // animateDiv(this.title, AnimationType.BACK_OUT, 100);
        // animateDiv(this.button1, AnimationType.BACK_OUT, 200);
        // animateDiv(this.button2, AnimationType.BACK_OUT, 200);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.element, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.SLIDE_OUT);
        new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_2__.JMTween({}, 1000).to({}).start().onComplete(() => {
            this.element.parentElement.removeChild(this.element);
        });
    }
}


/***/ }),

/***/ "./src/pages/RoundUI.ts":
/*!******************************!*\
  !*** ./src/pages/RoundUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoundUI": () => (/* binding */ RoundUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _components_TimerCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TimerCircle */ "./src/components/TimerCircle.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JMGE/JMTween */ "./src/JMGE/JMTween.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _EndUI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EndUI */ "./src/pages/EndUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");










class RoundUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_9__.BaseUI {
    constructor() {
        super();
        this.names = [];
        this.cards = [[], []];
        this.canVote = false;
        this.phaseIntro = () => {
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_4__.JMTween({}, 300).to({}).start().onComplete(() => {
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.addElements(this.topSection, this.leftSection, this.vs, this.rightSection);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.leftSection, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.names[0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.BIG_IN, 0);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.vs, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN, 1000);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.rightSection, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN, 1500);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.names[1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.BIG_IN, 1500);
                this.cards[0][0].classList.add('card-back-character');
                this.cards[0][1].classList.add('card-back-power');
                this.cards[1][0].classList.add('card-back-character');
                this.cards[1][1].classList.add('card-back-power');
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[0][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN, 2500, () => (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[0][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.FLIP_A, 0, () => {
                    this.cards[0][0].classList.remove('card-back-character');
                    this.cards[0][0].innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][0];
                    (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[0][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.FLIP_B);
                }));
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[0][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN, 2600, () => (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[0][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.FLIP_A, 0, () => {
                    this.cards[0][1].classList.remove('card-back-power');
                    this.cards[0][1].innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][1];
                    (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[0][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.FLIP_B);
                }));
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[1][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN, 3000, () => (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[1][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.FLIP_A, 0, () => {
                    this.cards[1][0].classList.remove('card-back-character');
                    this.cards[1][0].innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][0];
                    (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[1][0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.FLIP_B);
                }));
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[1][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN, 3100, () => (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[1][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.FLIP_A, 0, () => {
                    this.cards[1][1].classList.remove('card-back-power');
                    this.cards[1][1].innerHTML = _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][1];
                    (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.cards[1][1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.FLIP_B);
                }));
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.names[0], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.BIG_OUT, 5000);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.names[1], _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.BIG_OUT, 5000);
                this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_INTRO_TITLE;
                this.bottomText.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_INTRO_TEXT;
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN, 3500);
                (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.bottomText, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN, 3800);
            });
            // El.addElements(this.topSection, this.leftSection, this.vs, this.rightSection);
            this.timer.reset(10).onComplete(this.phaseLeftPlay).start();
            this.timer.canSkip = false;
        };
        this.phaseLeftPlay = () => {
            this.bottomTitle.innerHTML = `${_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0]}, ${_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_PLAY_TITLE}`;
            this.bottomText.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_LEFT_TEXT;
            this.leftSection.classList.add('highlighted');
            this.timer.reset(15).onComplete(this.phaseRightPlay).start();
            this.timer.canSkip = true;
            this.timer.element.style.position = 'relative';
            this.timer.element.style.top = '0px';
            this.leftSection.appendChild(this.timer.element);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.SPIN);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.leftSection, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.PULSE);
        };
        this.phaseRightPlay = () => {
            this.bottomTitle.innerHTML = `${_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1]}, ${_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_PLAY_TITLE}`;
            this.bottomText.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_RIGHT_TEXT;
            this.leftSection.classList.remove('highlighted');
            this.rightSection.classList.add('highlighted');
            this.timer.reset(15).onComplete(this.phaseVote).start();
            this.timer.element.style.position = 'relative';
            this.timer.element.style.top = '0px';
            this.rightSection.appendChild(this.timer.element);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.SPIN);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.rightSection, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.PULSE);
        };
        this.phaseVote = () => {
            this.canVote = true;
            this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_VOTE_TITLE;
            this.bottomText.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_VOTE_TEXT;
            this.rightSection.classList.remove('highlighted');
            this.leftVote.style.removeProperty('display');
            this.rightVote.style.removeProperty('display');
            this.tieVote.style.removeProperty('display');
            this.timer.reset(50).onComplete(this.phaseVote2).start();
            this.timer.element.style.removeProperty('position');
            this.timer.element.style.removeProperty('top');
            this.element.appendChild(this.timer.element);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.bottomTitle, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.BASIC_POP);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.bottomText, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.BASIC_POP, 200);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.leftVote, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.SLIDE_IN, 100);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.rightVote, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.SLIDE_IN, 200);
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.tieVote, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.SLIDE_IN, 300);
        };
        this.phaseVote2 = () => {
            this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_VOTE_TITLE2;
            this.bottomText.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_VOTE_TEXT2;
            this.timer.reset(10).onComplete(this.phaseLeaderboard).start();
        };
        this.phaseLeaderboard = () => {
            this.canVote = false;
            if (!this.winner && this.winner !== 0)
                this.winner = -1;
            _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.winner = this.winner;
            _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.destroyThese(this.leftVote, this.rightVote, this.tieVote, this.vs);
            this.timer.reset(10).onComplete(this.navGame).start();
            if (this.winner === 0) {
                _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.winner]);
                let leaderboard = this.addLeaderboard();
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.destroyThese(this.bottomSection, this.rightSection);
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.addElements(this.topSection, leaderboard);
            }
            else if (this.winner === 1) {
                _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.winner]);
                let leaderboard = this.addLeaderboard();
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.destroyThese(this.bottomSection, this.leftSection);
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.addElements(this.topSection, leaderboard, this.rightSection);
            }
            else {
                _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0], 0.5);
                _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.scorePlayer(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1], 0.5);
                let leaderboard = this.addLeaderboard();
                this.bottomTitle.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_TIE_TITLE;
                this.bottomText.innerHTML = _data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_TIE_TEXT;
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.destroyThese(this.leftSection, this.rightSection);
                _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.addElements(this.topSection, leaderboard);
            }
        };
        this.navGame = () => {
            if (_services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.isGameOver()) {
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _EndUI__WEBPACK_IMPORTED_MODULE_8__.EndUI());
            }
            else {
                ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new RoundUI());
            }
        };
        this.onKeyDown = (e) => {
            console.log(e.key);
            if (e.key === 'Enter' || e.key === ' ') {
                this.timer.endNow();
            }
            else if (e.key === 'p') {
                this.timer.pauseTimer();
            }
            else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === '1') {
                this.setWinner(0);
            }
            else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === '2') {
                this.setWinner(1);
            }
            else if (e.key === 'ArrowDown' || e.key === 's' || e.key === '3') {
                this.setWinner(-1);
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeDiv('round-ui');
        let round = ++_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.round;
        _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.resetRound();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0] = _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.selectPlayer();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1] = _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.selectPlayer();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][0] = _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.selectCharacter();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][0] = _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.selectCharacter();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][1] = _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.selectPower();
        _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][1] = _services_GameController__WEBPACK_IMPORTED_MODULE_7__.GameController.selectPower();
        this.title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeText(`${_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_TITLE} ${round}`, 'title');
        this.topSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeDiv('round-top');
        this.bottomSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeDiv('round-bottom');
        this.bottomTitle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeText('', 'round-title');
        this.bottomText = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeText('', 'round-text');
        [this.leftSection, this.names[0], this.cards[0][0], this.cards[0][1]] = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.ElFactory.makePlayerSection(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0], _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][0], _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[0][1]);
        [this.rightSection, this.names[1], this.cards[1][0], this.cards[1][1]] = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.ElFactory.makePlayerSection(_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1], _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][0], _Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.cards[1][1]);
        this.vs = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_VS, 'round-vs');
        let voteContainer = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeDiv('vote-container');
        this.leftVote = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeButton(`${_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[0]} ${_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_WINS}`, 'vote-button', () => this.setWinner(0));
        this.rightVote = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeButton(`${_Config__WEBPACK_IMPORTED_MODULE_2__.RoundData.players[1]} ${_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_WINS}`, 'vote-button', () => this.setWinner(1));
        this.tieVote = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.ROUND_TIE, 'vote-button', () => this.setWinner(-1));
        this.leftVote.style.display = 'none';
        this.rightVote.style.display = 'none';
        this.tieVote.style.display = 'none';
        this.timer = new _components_TimerCircle__WEBPACK_IMPORTED_MODULE_1__.TimerCircle();
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(true);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.addElements(this.element, this.title, this.topSection, this.bottomSection, this.timer.element);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.addElements(this.bottomSection, this.bottomTitle, this.bottomText, voteContainer, this.tieVote);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.addElements(voteContainer, this.leftVote, this.rightVote);
        this.phaseIntro();
    }
    navIn() {
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.animateDiv)(this.title, _services_animateDiv__WEBPACK_IMPORTED_MODULE_5__.AnimationType.GROW_IN);
        // animateDiv(this.element, AnimationType.GROW_IN);
        window.addEventListener('keydown', this.onKeyDown);
    }
    navOut() {
        this.timer.destroy();
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.destroy(this.element);
        //   animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
        //   new JMTween({}, 1000).to({}).start().onComplete(() => {
        //     this.element.parentElement.removeChild(this.element);
        //   });
        window.removeEventListener('keydown', this.onKeyDown);
    }
    addLeaderboard() {
        this.leaderboard = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.El.makeDiv('table-container');
        let tableInner = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_6__.ElFactory.makeLeaderboard();
        this.leaderboard.appendChild(tableInner);
        return this.leaderboard;
    }
    setWinner(player) {
        if (!this.canVote)
            return;
        if (this.winner === player) {
            this.phaseLeaderboard();
        }
        else {
            this.winner = player;
            if (player === 0) {
                this.leftVote.classList.add('highlighted');
                this.rightVote.classList.remove('highlighted');
                this.tieVote.classList.remove('highlighted');
            }
            else if (player === 1) {
                this.rightVote.classList.add('highlighted');
                this.leftVote.classList.remove('highlighted');
                this.tieVote.classList.remove('highlighted');
            }
            else {
                this.rightVote.classList.remove('highlighted');
                this.leftVote.classList.remove('highlighted');
                this.tieVote.classList.add('highlighted');
            }
        }
    }
}


/***/ }),

/***/ "./src/pages/SetupUI.ts":
/*!******************************!*\
  !*** ./src/pages/SetupUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupUI": () => (/* binding */ SetupUI)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/animateDiv */ "./src/services/animateDiv.ts");
/* harmony import */ var _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ElementFactory */ "./src/services/ElementFactory.ts");
/* harmony import */ var _services_GameController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/GameController */ "./src/services/GameController.ts");
/* harmony import */ var _RoundUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RoundUI */ "./src/pages/RoundUI.ts");
/* harmony import */ var _BaseUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_BaseUI */ "./src/pages/_BaseUI.ts");








class SetupUI extends _BaseUI__WEBPACK_IMPORTED_MODULE_7__.BaseUI {
    constructor() {
        super();
        this.names = [];
        this.navGame = () => {
            this.updatePlayers();
            ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _RoundUI__WEBPACK_IMPORTED_MODULE_6__.RoundUI());
        };
        this.addNameElement = (name) => {
            let last = this.names[this.names.length - 1];
            if (last && last.input.value === '')
                return;
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
            let element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeDiv();
            let input = document.createElement('input');
            input.classList.add('name-element');
            let m = { input, element };
            let deleteB = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeButton('X', 'delete-button', () => this.removeNameElement(m));
            element.appendChild(deleteB);
            _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.addElements(element, input, deleteB);
            return m;
        };
        this.updatePlayers = () => {
            _services_GameController__WEBPACK_IMPORTED_MODULE_5__.GameController.resetSession(this.names.map(el => el.input.value));
        };
        this.onKeyDown = (e) => {
            if (e.key === 'Enter') {
                let selected = document.getSelection().focusNode;
                console.log(selected);
                let index = this.names.findIndex(el => el.element === selected);
                if (index >= 0 && index < this.names.length - 1) {
                    let next = this.names[index + 1];
                    next.input.focus();
                }
                else {
                    let newEl = this.addNameElement();
                    if (newEl)
                        newEl.input.focus();
                }
                console.log(index);
            }
        };
        this.element = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeDiv('setup-ui');
        this.title = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.SETUP_TITLE, 'title');
        let middle = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeDiv('horizontal-stack');
        let leftSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeDiv('vertical-stack');
        let rightSection = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeDiv('vertical-stack');
        this.nameContainer = leftSection;
        this.leftHeader = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.SETUP_PLAYER_TITLE, 'sub-title');
        this.rightHeader = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.SETUP_OPTIONS_TITLE, 'sub-title');
        this.rightContent = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.SETUP_OPTIONS_TEXT, 'big-text');
        this.addButton = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.BUTTON_ADD, 'info-button', () => this.addNameElement());
        this.startGame = _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.BUTTON_START, 'info-button', this.navGame);
        ___WEBPACK_IMPORTED_MODULE_0__.Facade.showHome(true);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.addElements(leftSection, this.leftHeader, this.addButton);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.addElements(rightSection, this.rightHeader, this.rightContent, this.startGame);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.addElements(middle, leftSection, rightSection);
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.addElements(this.element, this.title, middle);
        leftSection.style.justifyContent = 'flex-start';
        leftSection.style.gap = '10px';
        this.loadNames();
        // this.names.forEach(el => el.element.style.transition = "transform 2s");
        // this.addButton.style.transition = 'all 2s';
    }
    navIn() {
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.title, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.GROW_IN);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.leftHeader, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.SLIDE_IN);
        let nameDelay = 100;
        this.names.forEach(name => {
            (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(name.element, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.SLIDE_IN, nameDelay);
            nameDelay += 100;
        });
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.addButton, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.SLIDE_IN, nameDelay);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.rightHeader, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.SLIDE_IN, 200);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.rightContent, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.SLIDE_IN, 300);
        (0,_services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.animateDiv)(this.startGame, _services_animateDiv__WEBPACK_IMPORTED_MODULE_3__.AnimationType.SLIDE_IN, nameDelay + 100);
        // animateDiv(this.element, AnimationType.GROW_IN);
        window.addEventListener('keydown', this.onKeyDown);
    }
    navOut() {
        // animateDiv(this.element, AnimationType.SHRINK_OUT, 200);
        // animateDiv(this.title, AnimationType.SHRINK_OUT);
        // new JMTween({}, 1000).to({}).start().onComplete(() => {
        //   this.element.parentElement.removeChild(this.element);
        // });
        _services_ElementFactory__WEBPACK_IMPORTED_MODULE_4__.El.destroy(this.element);
        window.removeEventListener('keydown', this.onKeyDown);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseUI": () => (/* binding */ BaseUI)
/* harmony export */ });
class BaseUI {
    navIn() { }
    navOut() { }
}


/***/ }),

/***/ "./src/services/ElementFactory.ts":
/*!****************************************!*\
  !*** ./src/services/ElementFactory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "El": () => (/* binding */ El),
/* harmony export */   "ElFactory": () => (/* binding */ ElFactory)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ImageUrl */ "./src/data/ImageUrl.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");
/* harmony import */ var _pages_MainUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/MainUI */ "./src/pages/MainUI.ts");





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
    makeImg: (url, className) => {
        let el = document.createElement('img');
        if (className)
            el.classList.add(className);
        el.src = url;
        return el;
    },
    addElements(source, ...children) {
        children.forEach(child => source.appendChild(child));
    },
    destroy(el) {
        let parent = el.parentElement;
        if (parent)
            parent.removeChild(el);
    },
    destroyThese(...els) {
        els.forEach(el => El.destroy(el));
    },
};
const ElFactory = {
    makeAlert: (content) => {
        let element = document.createElement('div');
        element.classList.add('info-popup');
        element.innerHTML = content;
        document.body.appendChild(element);
        window.setTimeout(() => document.body.removeChild(element), 1500);
    },
    makeBottomBar: () => {
        let bottom = El.makeDiv('bottom-bar');
        let bottomText = El.makeText(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.BOTTOM_DESCRIPTION);
        let TOGraphic = El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.ToJam, 'bottom-image');
        let GHGraphic = El.makeImg(_data_ImageUrl__WEBPACK_IMPORTED_MODULE_2__.ImageUrl.GameHive, 'bottom-image');
        El.addElements(bottom, bottomText, GHGraphic, TOGraphic);
        return bottom;
    },
    makeHomeButton: () => {
        let home = El.makeButton(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.BUTTON_HOME, 'home-button', () => ___WEBPACK_IMPORTED_MODULE_0__.Facade.navTo(new _pages_MainUI__WEBPACK_IMPORTED_MODULE_4__.MainUI()));
        return home;
    },
    makeLeaderboard: () => {
        let tableInner = document.createElement('table');
        tableInner.classList.add('leaderboard');
        let head = tableInner.createTHead();
        let row = head.insertRow();
        let th0 = document.createElement('th');
        let th1 = document.createElement('th');
        th0.appendChild(document.createTextNode(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.TABLE_NAME));
        th1.appendChild(document.createTextNode(_data_StringData__WEBPACK_IMPORTED_MODULE_3__.StringData.TABLE_SCORE));
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
        return tableInner;
    },
    makePlayerSection: (name, card1, card2) => {
        let section = El.makeDiv('player-section');
        let cardSection = El.makeDiv('card-section');
        let nameTitle = El.makeText(name, 'name-title');
        let card1El = El.makeDiv('card');
        let card2El = El.makeDiv('card');
        // card1El.innerHTML = card1;
        // card2El.innerHTML = card2;
        El.addElements(cardSection, card1El, card2El);
        El.addElements(section, nameTitle, cardSection);
        return [section, nameTitle, card1El, card2El];
    },
};


/***/ }),

/***/ "./src/services/FontLoader.ts":
/*!************************************!*\
  !*** ./src/services/FontLoader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontLoader": () => (/* binding */ FontLoader)
/* harmony export */ });
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_0__);

class FontLoader {
    static load(fonts) {
        webfontloader__WEBPACK_IMPORTED_MODULE_0__.load({
            google: {
                families: fonts,
            },
        });
    }
    static loadPromise(fonts) {
        // specifically loads GOOGLE fonts through WebFont with a simple interface.
        // Can extend this to cover other platforms but why bother?
        return new Promise(resolve => {
            webfontloader__WEBPACK_IMPORTED_MODULE_0__.load({
                google: {
                    families: fonts,
                },
                active: () => resolve(),
                inactive: () => resolve(),
            });
        });
    }
}


/***/ }),

/***/ "./src/services/GameController.ts":
/*!****************************************!*\
  !*** ./src/services/GameController.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameController": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config */ "./src/Config.ts");
/* harmony import */ var _data_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/Cards */ "./src/data/Cards.ts");
/* harmony import */ var _data_StringData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/StringData */ "./src/data/StringData.ts");



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
    scorePlayer: (name, amount = 1) => {
        let player = _Config__WEBPACK_IMPORTED_MODULE_0__.SessionData.players.find(el => el.slug === name);
        player.score += amount;
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
GameController.resetSession(_data_StringData__WEBPACK_IMPORTED_MODULE_2__.StringData.DEFAULT_NAMES);


/***/ }),

/***/ "./src/services/animateDiv.ts":
/*!************************************!*\
  !*** ./src/services/animateDiv.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationType": () => (/* binding */ AnimationType),
/* harmony export */   "animateDiv": () => (/* binding */ animateDiv)
/* harmony export */ });
/* harmony import */ var _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../JMGE/JMTween */ "./src/JMGE/JMTween.ts");

var AnimationType;
(function (AnimationType) {
    AnimationType[AnimationType["BASIC_POP"] = 0] = "BASIC_POP";
    AnimationType[AnimationType["WAVE"] = 1] = "WAVE";
    AnimationType[AnimationType["SPIN"] = 2] = "SPIN";
    AnimationType[AnimationType["SPLASH"] = 3] = "SPLASH";
    AnimationType[AnimationType["STRAIGHT_SPLASH"] = 4] = "STRAIGHT_SPLASH";
    AnimationType[AnimationType["BIG_IN"] = 5] = "BIG_IN";
    AnimationType[AnimationType["BIG_OUT"] = 6] = "BIG_OUT";
    AnimationType[AnimationType["BACK_OUT"] = 7] = "BACK_OUT";
    AnimationType[AnimationType["SLIDE_IN"] = 8] = "SLIDE_IN";
    AnimationType[AnimationType["SLIDE_OUT"] = 9] = "SLIDE_OUT";
    AnimationType[AnimationType["GROW_IN"] = 10] = "GROW_IN";
    AnimationType[AnimationType["SHRINK_OUT"] = 11] = "SHRINK_OUT";
    AnimationType[AnimationType["PULSE"] = 12] = "PULSE";
    AnimationType[AnimationType["FLIP_A"] = 13] = "FLIP_A";
    AnimationType[AnimationType["FLIP_B"] = 14] = "FLIP_B";
})(AnimationType || (AnimationType = {}));
function animateDiv(element, index, delay = 0, onComplete) {
    let obj = { height: 1, width: 1, rotation: 0, x: 0, y: 0 };
    switch (index) {
        case AnimationType.WAVE:
            obj.y = 50;
            obj.height = 0;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween({ percent: 0 }, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 300).wait(delay).to({ height: 1, y: -20, rotation: 30 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).start()
                .chain(obj, 100).wait(200).to({ rotation: 20 }).yoyo(true, 3)
                .chain(obj, 300).wait(100).to({ height: 1, rotation: 0, y: 0 });
            break;
        case AnimationType.SPIN:
            obj.rotation = 700;
            obj.height = 0.3;
            obj.width = 0.3;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ rotation: 0 }).start().onUpdate(data => applyTransform(element, data))
                .onComplete(() => { element.style.transform = ''; onComplete && onComplete(); });
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 300).wait(delay).to({ height: 0.8, width: 0.8 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quadratic.InOut).start()
                .chain(obj, 200).to({ height: 1, width: 1 });
            break;
        case AnimationType.SPLASH:
            obj.width = 0.1;
            obj.height = 0.1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween({ percent: 0 }, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ width: 1.3, height: 1.3, rotation: 15 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).start()
                .chain(obj, 1000).wait(500).to({ width: 1, height: 1, rotation: 0 });
            break;
        case AnimationType.STRAIGHT_SPLASH:
            obj.width = 0.1;
            obj.height = 0.1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween({ percent: 0 }, 2000).wait(delay).onUpdate(() => applyTransform(element, obj)).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ width: 1.8, height: 1.8 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).start()
                .chain(obj, 1000).wait(500).to({ width: 1, height: 1 });
            break;
        case AnimationType.BIG_IN:
            obj.width = 1;
            obj.height = 1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ width: 1.8, height: 1.8 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).onUpdate(() => applyTransform(element, obj)).start().onComplete(() => (onComplete && onComplete()));
            break;
        case AnimationType.BIG_OUT:
            obj.width = 1.8;
            obj.height = 1.8;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 500).wait(delay).to({ width: 1, height: 1 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Linear.None).onUpdate(() => applyTransform(element, obj)).start().onComplete(() => { element.style.transform = ''; onComplete && onComplete(); });
            break;
        case AnimationType.BACK_OUT:
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 1000).wait(delay).to({ x: -10, y: -1500 }).onUpdate(() => applyTransform(element, obj)).onComplete(() => { element.style.display = 'none'; onComplete && onComplete(); }).start();
            break;
        case AnimationType.SLIDE_IN:
            obj.x = 300;
            obj.y = 3500;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 1000).wait(delay).to({ x: 0, y: 0 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quintic.InOut).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.SLIDE_OUT:
            obj.x = 0;
            obj.y = 0;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 1000).wait(delay).to({ x: -300, y: -3500 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quintic.InOut).onComplete(() => { element.style.display = 'none'; onComplete && onComplete(); }).start();
            break;
        case AnimationType.GROW_IN:
            obj.width = 0.01;
            obj.height = 0.01;
            obj.y = 1000;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 400).wait(delay).to({ width: 1, height: 1, y: 0 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.SHRINK_OUT:
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 400).wait(delay).to({ width: 0, height: 0, y: 1000 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.In).onComplete(() => { element.style.display = 'none'; onComplete && onComplete(); }).start();
            break;
        case AnimationType.PULSE:
            obj.width = 1;
            obj.height = 1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 250).wait(delay).to({ width: 1.3, height: 1.3 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Quadratic.InOut).yoyo(true, 1).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.FLIP_A:
            obj.width = 1;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 250).wait(delay).to({ width: 0 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Linear.None).onComplete(() => { onComplete && onComplete(); }).start();
            break;
        case AnimationType.FLIP_B:
            obj.width = 0;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 400).wait(delay).to({ width: 1 }).onUpdate(() => applyTransform(element, obj)).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Linear.None).onComplete(() => { element.style.transform = ''; onComplete && onComplete(); }).start();
            break;
        case AnimationType.BASIC_POP:
        default:
            obj.height = 0;
            obj.width = 0;
            applyTransform(element, obj);
            new _JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMTween(obj, 700).wait(delay).to({ height: 1, width: 1 }).easing(_JMGE_JMTween__WEBPACK_IMPORTED_MODULE_0__.JMEasing.Back.Out).start()
                .onUpdate(data => applyTransform(element, data))
                .onComplete(() => { element.style.transform = ''; onComplete && onComplete(); });
            break;
    }
}
// export function tweenTo(element: HTMLDivElement, time: number, data: Partial<ITransformData>) {
//   data.width = data.width || 0;
//   data.height = data.height || 0;
//   data.x = data.x || 0;
//   data.y = data.y || 0;
//   data.rotation = data.rotation || 0;
//   new JMTween(element, time).to(data)
// }
function applyTransform(element, data) {
    element.style.transform = `scaleX(${data.width}) scaleY(${data.height}) translateX(${data.x}px) translateY(${data.y}px) rotate(${data.rotation}deg)`;
}


/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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