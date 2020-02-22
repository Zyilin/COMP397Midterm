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
                console.log(roll[i]);
                this.result[i] = roll[i].toString();
            }
            this.DisplayResult();
        };
        Play.prototype.DisplayResult = function () {
            this.removeChild(this.dice1);
            this.removeChild(this.dice2);
            this.removeChild(this.diceResult1);
            this.removeChild(this.diceResult2);
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.result[0]), 170, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult(this.result[1]), 500, 200, true);
            this.diceResult1 = new objects.Label(this.result[0], "20px", "Consolas", "#FF0000", 170, 330, true);
            this.diceResult2 = new objects.Label(this.result[1], "20px", "Consolas", "#FF0000", 500, 330, true);
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