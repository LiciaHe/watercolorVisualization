var blackStroke={stroke:"black"};
var redFill={fill:"Red"};
var blueStroke={stroke:"blue",fill:"none"};
var redStroke={fill:"none", stroke:"red"};
var greenFill={fill:"green"};
function add(a,b) {
    return a+b
}
function arraySum(array) {
    return array.reduce(add,0)
}

function download(id) {
    var svg=document.getElementById(id);
    svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
    var svg=$("#"+id);
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +svg[0].outerHTML);
    var t=new Date().getTime();
    element.setAttribute('download', "spirograph_simulation"+t+".svg");
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        element.dispatchEvent(event);
    }
    else {
        element.click();
    }
}
function addDownloadButton(selector,svgId) {
    selector.append("<span class=\"input-group-btn\">\n" +
        "        <button id=\"download\" class=\"btn btn-secondary\" type=\"button\">Download</button></span>");
    $("#download").click(function () {
        download(svgId)
    });
}
function sample(arr, size) {
    /**
     * ref https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
     * @type {T[] | Uint8ClampedArray | Uint32Array | Blob | Int16Array | Float64Array | any}
     */
    if(size>arr.length){
        return arr
    }
    var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function range(size, startAt = 0) {
    /**
     * https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
     */
    return [...Array(size).keys()].map(i => i + startAt);
}

function getCountDict(arr) {
    var counts = {};

    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return arr
}
function getRandomInt(min, max) {
    /**
     * max is inclusive
     */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

