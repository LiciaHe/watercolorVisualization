/**
 * required cx, cy and r /r,g,b in dataset
 * @param selector
 * @param data
 * @param r
 * @param attrs
 */
function addCircles_for_update(selector) {

    window.circles=selector.selectAll("circle")
        .data(window.filteredData)
        .enter()
        .append("circle")
        .attr("cx",function (d) {
            return d.cx
        })
        .attr("cy",function (d) {
            return d.cy
        })
        .attr("r",function (d) {
            return d.radius
        })
        .attr("fill",function (d) {
            var rgbString="rgb("+d.r+','+d.g+","+d.b+")";
            return rgbString
        });
    // .attr("opacity",0);
    return circles
}

/**
 * make sure the plot fits window size by transform g
 * @param svg_g
 * @param data
 */
function organizeTransform(svg_g,data,divId) {
    var wh=data["size"];
    // var windowWH=[window.innerWidth,window.innerHeight];
    var windowWH=[$("#"+divId).width(),window.innerHeight];


    var ratios=[windowWH[0]/wh[0],windowWH[1]/wh[1]];
    // console.log(windowWH,divWidth);
    if (ratios[0]>ratios[1]){
        //shrink according to height, translate width
        var scaleRatio=ratios[1];
        var t=[(windowWH[0]-wh[0]*scaleRatio)/2,0]

    }else{
        var scaleRatio=ratios[0];
        var t=[0,(windowWH[1]-wh[1]*scaleRatio)/2]
    }
    svg_g.attr("transform","scale("+(scaleRatio+0.01)+','+(scaleRatio+0.01)+") translate("+t[0]+","+t[1]+")");
    return scaleRatio
}
/*
by default, create linear scales
 */
function initScale(size) {
    window.x_Scale=d3.scaleLinear().range([0,size[0]]);
    window.y_scale=d3.scaleLinear().range([0,size[1]]);
}

/**
 * assume data is filtered into desired order
 * calculate the width, height according the ratio
 * @param filteredData
 * @param size
 */
function backToOriginalCircle(){
    window.circles.transition()
        .duration(5000)
        .attr("cx",function (d) {
            return d.cx
        })
        .attr("cy",function (d) {
            return d.cy
        })
}

function calculateRectScale() {
    if(window.rectScale!=undefined){
        return
    }
    var size=window.data["size"];
    var r=window.filteredData[0]["radius"];
    var x_ct=Math.floor(size[0]/(2*r));
    var y_ct=Math.ceil(window.filteredData.length/x_ct);
    var y_height=y_ct*2*r;
    var yRange=[(size[1]-y_height)/2,(size[1]-y_height)/2+y_height];
    var xScale=d3.scaleBand()
        .range([0,size[0]])
        .domain(range(x_ct))
        .padding(0);
    var yScale=d3.scaleBand()
        .range(yRange)
        .domain(range(y_ct))
        .padding(0);
    window.rectScale={"x_ct":x_ct,"y_ct":y_ct,"xScale":xScale,"yScale":yScale};
}
function diagonalSquare() {
    calculateRectScale();
    window.circles.enter();
    window.circles.exit();
    window.circles
        .transition()
        .duration(5000)
        .attr("cx",function (d,i) {
            return window.rectScale.xScale(i%window.rectScale.x_ct)
        })
        .attr("cy",function (d,i) {
            return window.rectScale.yScale(i%rectScale.y_ct)
        })
}

/**
 * so the dot corresponds to index
 */
function indexSquare() {
    calculateRectScale();
    console.log("index square");
    window.circles.transition()
        .duration(5000)
        .attr("cx",function (d,i) {
            console.log(i,window.rectScale.xScale(i%window.rectScale.x_ct));
            return window.rectScale.xScale(i%window.rectScale.x_ct)
        })
        .attr("cy",function (d,i) {
            return window.rectScale.yScale(Math.floor(i/rectScale.x_ct))
        })
}

/**
 * initiate Filtered data
 */
function initiateFilteredData() {
    var filterLim = 20;
    var filteredData=window.data["data"].filter(function (d) {
        return arraySum([d.r, d.g, d.b]) > filterLim
    });
    return filteredData
}
function restoreOriginalDataOrder() {
    if (window.dataAltered){
        window.filteredData = initiateFilteredData();
        window.dataAltered=false
    }
}

function sortByRed() {
    console.log(window.filteredData.slice(0,10));
    window.filteredData.sort(function (a,b) {
        return a.r - b.r
    });
    window.dataAltered=true;
    console.log(window.filteredData.slice(0,10));
    diagonalSquare()
}