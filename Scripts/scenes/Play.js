"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.img1 = '1';
            _this.img2 = '2';
            _this.img3 = '3';
            _this.img4 = '4';
            _this.img5 = '5';
            _this.img6 = '6';
            _this.result = ["", ""];
            _this.rollBotton = new objects.Button();
            _this.diceResult1 = new objects.Label();
            _this.diceResult2 = new objects.Label();
            _this.dice1 = new objects.Button();
            _this.dice2 = new objects.Button();
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Play.prototype.Roll = function () {
            var roll = [];
            for (var i = 0; i < 2; i++) {
                //Generate random number between 1-6
                roll[i] = util.Mathf.RandomRange(1, 6);
                switch (roll[i]) {
                    case 1:
                        this.result[i] = this.img1;
                        break;
                    case 2:
                        this.result[i] = this.img2;
                        break;
                    case 3:
                        this.result[i] = this.img3;
                        break;
                    case 4:
                        this.result[i] = this.img4;
                        break;
                    case 5:
                        this.result[i] = this.img5;
                        break;
                    default:
                        this.result[i] = this.img6;
                        break;
                }
            }
        };
        Play.prototype.DisplayResult = function () {
            this.removeChild(this.dice1);
            this.removeChild(this.dice2);
            this.removeChild(this.diceResult1);
            this.removeChild(this.diceResult2);
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.result[0]), 150, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult(this.result[1]), 150, 200, true);
            this.diceResult1 = new objects.Label(this.result[0], "12", "Consolas", "#000000", 200, 200, true);
            this.diceResult2 = new objects.Label(this.result[1], "12", "Consolas", "#000000", 201, 201, true);
            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.diceResult1);
            this.addChild(this.diceResult2);
        };
        //initialize and instatiate
        Play.prototype.Start = function () {
            this.rollBotton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this.rollBotton);
            this.rollBotton.on("click", function () { _this.Roll(); });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map