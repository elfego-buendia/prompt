var COLORS = ['black', 'red', 'green', 'yellow', 'blue', 'purple', 'cyan', 'white'];
var MODIFI = ['normal', 'bold', 'normal', 'normal', 'under']; 

function AEC (s) {
    var type = null;
    var modi = null;
    var colr = null;
    var bkgc = null;
    var clss = [];
    
    function construct() {
        var retri = '((0|1|4);3[0-7];4[0-7])m';
        var ret   = new RegExp(retri);
        
        var retwo = '(0|1|4);3[0-7]m';
        var retw  = new RegExp(retwo);
        
        var reone = '4[0-7]m';
        var reo   = new RegExp(reone);
        
        if (ret.test(s)) {
            type = 'triple';
        } else if (retw.test(s)) {
            type = 'double';
        } else if (reo.test(s)) {
            type = 'single';
        }
        
        var sarray = s.split(';');
        if (type === 'triple') {
            modi = MODIFI[sarray[0]];
            colr = COLORS[sarray[1][sarray.length-1]];
            bkgc = COLORS[sarray[2][sarray.length-2]];
        } else if (type === 'double') {
            modi = MODIFI[sarray[0]];
            colr = COLORS[sarray[1][sarray.length-2]];
        } else if (type === 'single') {
            bkgc = COLORS[sarray[0][sarray.length-2]];
        }
        
        if (modi) {
            clss.push(modi);
        } else if (colr) {
            clss.push(colr);
        } else if (bkgc) {
            clss.push(bkgc);
        }
    } construct();
    
    this.getType = function() {
        return type;
    }
    this.getClass = function() {
        return clss;
    }
}