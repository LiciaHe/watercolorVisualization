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

var svg_div=addDiv(content_expDiv,svgId+"_div",additionalClass="col-9 img-responsive");

var exp_div=addDiv(addDiv(content_expDiv,"exp_div",additionalClass="col-3 bg-primary"),"exp_container",additionalClass="container-fluid");
var firstPanel=addDiv(exp_div,"intro_div","row bg-warning");
firstPanel.height(window.innerHeight);


var baseLoc="data/";
var fileName="mini_c (1)_20.json";

d3.json(baseLoc+fileName,function (error,data) {
    if (error) throw error;
    var svg_g=createSvg_withoutMargin(svgId+"_div",innerWidth,innerHeight,svgId);
    var filterLim=20;
    var filteredData=data["data"].filter(function (d) { return arraySum([d.r,d.g,d.b])>filterLim });
    var circles=addCircles_for_update(svg_g,filteredData,filterLim);
    organizeTransform(svg_g,data);
    var controller=initController();
    $(function () {
        takeMeWithYou(svgId,"intro_div",window.innerHeight/2,controller)
    })

    // initScale(data["size"]);

    // plotIntoSquare(filteredData,data["size"],circles)
});

