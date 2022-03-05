"use strict";
exports.__esModule = true;
exports.KhmerDate = void 0;
var KhmerDate = /** @class */ (function () {
    function KhmerDate(date) {
        this.date = new Date();
        this.currentDate = new Date();
        this.date = new Date(date);
        var seconds = this.date.getTime() / 1000;
        this.currentTimeStamp(seconds);
    }
    KhmerDate.prototype.currentTimeStamp = function (seconds) {
        var currentSecond = (this.currentDate.getTime() / 1000) + 7 * 60 * 60;
        var result = currentSecond - seconds;
        if (result >= 0 || result < 60) {
            this.displayTime = "មុននេះបន្តិច";
        }
        else if (result < 3600) {
            this.displayTime = (Math.floor(result / 60)).toString() + "នាទីមុន";
        }
        else if (result < 86400) {
            this.displayTime = (Math.floor(result / 3600)).toString() + "ម៉ោងមុន";
        }
        else if (result < 604800) {
            this.displayTime = (Math.floor(result / 86400)).toString() + "ថ្ងៃមុន";
        }
        else if (result < 2592000) {
            this.displayTime = (Math.floor(result / 604800)).toString() + "សប្តាហ៍មុន";
        }
        else {
            this.displayTime = (Math.floor(result / 2592000)).toString() + "ខែមុន";
        }
        this.replaceNumber();
    };
    KhmerDate.prototype.replaceNumber = function () {
        this.displayTime = this.displayTime.replace('1', '១');
        this.displayTime = this.displayTime.replace('2', '២');
        this.displayTime = this.displayTime.replace('3', '៣');
        this.displayTime = this.displayTime.replace('4', '៤');
        this.displayTime = this.displayTime.replace('5', '៥');
        this.displayTime = this.displayTime.replace('6', '៦');
        this.displayTime = this.displayTime.replace('7', '៧');
        this.displayTime = this.displayTime.replace('8', '៨');
        this.displayTime = this.displayTime.replace('9', '៩');
    };
    KhmerDate.prototype.getDate = function () {
        return this.displayTime;
    };
    return KhmerDate;
}());
exports.KhmerDate = KhmerDate;
