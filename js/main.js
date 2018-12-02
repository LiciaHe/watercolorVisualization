var innerWidth=window.innerWidth;
var innerHeight=window.innerHeight;
window.margins={"l":100,"r":60,"t":20,"b":80};
var svgId="main_svg";

var mainContainer=initiateContainerDiv($('body'),"main_container","h-100");
var downloadDiv=addDiv(mainContainer,"download_div",additionalClass="row");
addDownloadButton(downloadDiv,svgId);

var svg_div=addDiv(mainContainer,svgId+"_div",additionalClass="row img-responsive");

var baseLoc="data/";
var fileName="mini_c (1)_20.json";
// C:\licia\research\generative_art\dot_visualizer\data\
d3.json(baseLoc+fileName,function (error,data) {
    if (error) throw error;
    var svg_g=createSvg_withoutMargin(svgId+"_div",innerWidth,innerHeight,svgId);
    var filterLim=20;
    var filteredData=data["data"].filter(function (d) { return arraySum([d.r,d.g,d.b])>filterLim });
    var circles=addCircles_for_update(svg_g,filteredData,filterLim);
    organizeTransform(svg_g,data);
    initScale(data["size"]);
    plotIntoSquare(filteredData,data["size"],circles)
});

