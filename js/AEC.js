var COLORS = ['black', 'red', 'green', 'yellow', 'blue', 'purple', 'cyan', 'white'];
var MODIFI = ['normal', 'bold', 'normal', 'normal', 'under'];
var BGADD = 'bg-';

function AEC(s) {
    'use strict';
    var modi = null,
        colr = null,
        bkgc = null,
        clss = [],
		segmentArray = s.split(';'),
        numberOfSegments = segmentArray.length,
        firstSegment = null,
        secondSegment = null,
        thirdSegment = null;
			
	// assign variables according to the number of modifiers present
	// 3 = [bold/underline] + overall color + background color
	// 2 = [bold/underline] + overall color
	// 1 = background color only
    if (numberOfSegments === 3) {
        firstSegment = segmentArray[0];
        secondSegment = segmentArray[1];
        thirdSegment = segmentArray[2];
        
        modi = MODIFI[firstSegment];
        colr = COLORS[secondSegment[secondSegment.length - 1]];
        bkgc = BGADD + COLORS[thirdSegment[thirdSegment.length - 2]];
		
		clss.push(modi);
		clss.push(colr);
		clss.push(bkgc);
    } else if (numberOfSegments === 2) {
        firstSegment = segmentArray[0];
        secondSegment = segmentArray[1];
        
        modi = MODIFI[firstSegment];
        colr = COLORS[secondSegment[secondSegment.length - 2]];
		
		clss.push(modi);
		clss.push(colr);
    } else if (numberOfSegments === 1) {
        thirdSegment = segmentArray[0];
        bkgc = BGADD + COLORS[thirdSegment[thirdSegment.length - 2]];
		
		clss.push(bkgc);
    } else {
    	console.log('Error creating AEC object.')
    }
    
	// methods to access private variables (read only)
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