var innerWidth=window.innerWidth;
var innerHeight=window.innerHeight;
window.margins={"l":100,"r":60,"t":20,"b":80};
var svgId="main_svg";

var topDiv=createMainAndEdge();


var panelCt=7;
var content_expDiv=addDiv(topDiv[0],"content_exp",additionalClass="row");
content_expDiv.height(panelCt*window.innerHeight);

var content_container=addDiv(addDiv(content_expDiv,"content_col",additionalClass="col-9"),"content_container","container-fluid h-100");
createTitlePanel(content_container);

var exp_div=addDiv(addDiv(content_expDiv,"exp_div",additionalClass="col-3 gray_bg"),"exp_container",additionalClass="container-fluid");


var svg_div=addDiv(content_container,svgId+"_div",additionalClass="row h-100");

var panels=createAllPanels(exp_div,panelCt);

var baseLoc="data/";
var fileName="mini_c (1)_20.json";
var sepNames=getFileName(fileName);
addTextToPanel(panels);
d3.json(baseLoc+fileName,function (error,data) {
    if (error) throw error;
    window.data=data;
    var svg_width = $("#" + svgId + "_div").width();
    var svg_g = createSvg_withoutMargin(svgId + "_div", svg_width, innerHeight, svgId);


    window.filteredData = initiateFilteredData();
    window.dataAltered=false;
    var imgLoc = baseLoc + sepNames[0].slice(0, sepNames[0].length - 3) + ".jpg";
    var imgId = "original_img";
    d3.select("#"+svgId)
        .append("g")
        .append("image")
        .attrs({"id": imgId, "xlink:href": imgLoc, "x": 0, "y": 0, "width": svg_width, "height": "100%"});

    var circle_g=svg_g.append("g")
        .attr("id","circle_g")
        .style("opacity",0);
    var circles = addCircles_for_update(circle_g);
    organizeTransform(svg_g, data, svgId + "_div");
    var controller = initController();
    $(function () {
        takeMeWithYou(svgId, "panel_1", window.innerHeight / 2, controller);
        transparentToZero(imgId, "panel_2", 0, window.innerHeight / 2, controller);
        transparentFromZero("circle_g", "panel_2", 0, window.innerHeight / 2, controller);
        startAndEnd("circle_g","panel_3",-window.innerHeight/4,window.innerHeight / 4,controller,backToOriginalCircle,indexSquare);
        // startAndEnd("circle_g","panel_4",-window.innerHeight/4,window.innerHeight / 4,controller,indexSquare,diagonalSquare)
    });
    // startAndEnd("circle_g","panel_5",-window.innerHeight/4,window.innerHeight / 4,controller,restoreOriginalDataOrder,sortByRed)

});

