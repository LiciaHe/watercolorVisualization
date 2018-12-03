var innerWidth=window.innerWidth;
var innerHeight=window.innerHeight;
window.margins={"l":100,"r":60,"t":20,"b":80};
var svgId="main_svg";

var topDiv=createMainAndEdge();
createTitlePanel(topDiv[2]);

// var downloadDiv=addDiv(titleDiv,"download_div","center-block");
// addDownloadButton(downloadDiv,svgId);
var panelCt=5;
var content_expDiv=addDiv(topDiv[0],"content_exp",additionalClass="row");
content_expDiv.height(panelCt*window.innerHeight);

var svg_div=addDiv(content_expDiv,svgId+"_div",additionalClass="col-9");

var exp_div=addDiv(addDiv(content_expDiv,"exp_div",additionalClass="col-3 bg-primary"),"exp_container",additionalClass="container-fluid");

var panels=createAllPanels(exp_div,panelCt);

var baseLoc="data/";
var fileName="mini_c (1)_20.json";
var sepNames=getFileName(fileName);
addTextToPanel(panels);
d3.json(baseLoc+fileName,function (error,data) {
    if (error) throw error;
    var svg_width=$("#"+svgId+"_div").width();
    var svg_g=createSvg_withoutMargin(svgId+"_div",svg_width,innerHeight,svgId);

    var filterLim=20;
    var filteredData=data["data"].filter(function (d) { return arraySum([d.r,d.g,d.b])>filterLim });
    // svg_div.append('<img src="'+(baseLoc+sepNames[0].slice(0,sepNames[0].length-3)+".jpg")+'">');
    var imgLoc=baseLoc+sepNames[0].slice(0,sepNames[0].length-3)+".jpg";
    svg_g.append("image")
        .attrs({"xlink:href":imgLoc,"x":0,"y":0,"width":svg_width,"height":window.innerHeight});
    // var circles=addCircles_for_update(svg_g,filteredData,filterLim);
    // organizeTransform(svg_g,data,svgId+"_div");
    var controller=initController();
    $(function () {
        takeMeWithYou(svgId,"panel_0",window.innerHeight/2,controller)
    })

    // initScale(data["size"]);

    // plotIntoSquare(filteredData,data["size"],circles)
});

