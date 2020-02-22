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
    var Next = /** @class */ (function (_super) {
        __extends(Next, _super);
        //constructor
        function Next() {
            var _this = _super.call(this) || this;
            _this.result = ["", "", "", ""];
            _this.roll = [1, 1, 1, 1];
            _this.rollButton = new objects.Button();
            _this.backButton = new objects.Button();
            _this.finalResult = new objects.Label();
            _this.dice1 = new objects.Button();
            _this.dice2 = new objects.Button();
            _this.dice3 = new objects.Button();
            _this.dice4 = new objects.Button();
            _this.Start();
            return _this;
        }
        // Public Methods
        Next.prototype.Roll = function () {
            for (var i = 0; i < 4; i++) {
                //Generate random number between 1-6
                this.roll[i] = util.Mathf.RandomRange(1, 6);
                // console.log(roll[i]);
                this.result[i] = this.roll[i].toString();
            }
        };
        Next.prototype.AnalysResult = function () {
        };
        Next.prototype.DisplayResult = function () {
            this.removeChild(this.dice1);
            this.removeChild(this.dice2);
            this.removeChild(this.dice3);
            this.removeChild(this.dice4);
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.result[0]), 170, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult(this.result[1]), 500, 200, true);
            this.dice3 = new objects.Button(config.Game.ASSETS.getResult(this.result[2]), 170, 405, true);
            this.dice4 = new objects.Button(config.Game.ASSETS.getResult(this.result[3]), 500, 405, true);
            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.dice3);
            this.addChild(this.dice4);
        };
        Next.prototype.Start = function () {
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult("blank"), 170, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult("blank"), 500, 200, true);
            this.dice3 = new objects.Button(config.Game.ASSETS.getResult("blank"), 170, 405, true);
            this.dice4 = new objects.Button(config.Game.ASSETS.getResult("blank"), 500, 405, true);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 430, 620, true);
            this.Main();
        };
        Next.prototype.Update = function () {
        };
        Next.prototype.Main = function () {
            var _this = this;
            this.addChild(this.dice1);
            this.addChild(this.dice2);
            this.addChild(this.dice3);
            this.addChild(this.dice4);
            this.rollButton.on("click", function () { _this.Roll(); });
        };
        return Next;
    }(objects.Scene));
    scenes.Next = Next;
})(scenes || (scenes = {}));
//# sourceMappingURL=Next.js.map