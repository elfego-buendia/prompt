var COLORS = ['black', 'red', 'green', 'yellow', 'blue', 'purple', 'cyan', 'white'];
var MODIFI = ['normal', 'bold', 'normal', 'normal', 'under'];
var BGADD = 'bg-';

function AEC(s) {
    'use strict';
    var modi = null,
        colr = null,
        bkgc = null,
        clss = [];
    
    function construct() {
        var segmentArray = s.split(';'),
            numberOfSegments = segmentArray.length,
            firstSegment = null,
            secondSegment = null,
            thirdSegment = null;
        
        if (numberOfSegments === 3) {
            firstSegment = segmentArray[0];
            secondSegment = segmentArray[1];
            thirdSegment = segmentArray[2];
            
            modi = MODIFI[firstSegment];
            colr = COLORS[secondSegment[secondSegment.length - 1]];
            bkgc = BGADD + COLORS[thirdSegment[thirdSegment.length - 2]];
        } else if (numberOfSegments === 2) {
            firstSegment = segmentArray[0];
            secondSegment = segmentArray[1];
            
            modi = MODIFI[firstSegment];
            colr = COLORS[secondSegment[secondSegment.length - 2]];
        } else if (numberOfSegments === 1) {
            thirdSegment = segmentArray[0];
            bkgc = BGADD + COLORS[thirdSegment[thirdSegment.length - 2]];
        }
        
        if (modi) {
            clss.push(modi);
        }
        if (colr) {
            clss.push(colr);
        }
        if (bkgc) {
            clss.push(bkgc);
        }
    }
    construct();
    
    this.getModi = function () {
        return modi;
    };
    this.getColor = function () {
        return colr;
    };
    this.getBG = function () {
        return bkgc;
    };
    this.getClass = function () {
        return clss;
    };
}