var innerWidth=window.innerWidth;
var innerHeight=window.innerHeight;
window.margins={"l":100,"r":60,"t":20,"b":80};
var svgId="main_svg";

var topDiv=createMainAndEdge();

var panelCt=9;
var content_expDiv=addDiv(topDiv[0],"content_exp",additionalClass="row");
content_expDiv.height(panelCt*window.innerHeight);

var content_container=addDiv(addDiv(content_expDiv,"content_col",additionalClass="col-9"),"content_container","container-fluid h-100");
createTitlePanel(content_container);

var exp_div=addDiv(addDiv(content_expDiv,"exp_div",additionalClass="col-3 gray_bg"),"exp_container",additionalClass="container-fluid");

var svg_div=addDiv(content_container,svgId+"_div",additionalClass="row h-100");

var panels=createAllPanels(exp_div,panelCt);
addTextToPanel(panels);

var footer=addDiv($("body"),"footer","container-fluid h-100 dark_gray_bg light_font");
updateFooter(footer);


window.baseLoc="data/";
window.selectedId=1;
var fileName=makeName(window.selectedId);
var sepNames=getFileName(fileName);
window.fileNameRange=[1,100];

window.svg_width = $("#" + svgId + "_div").width();
window.svg_g = createSvg_withoutMargin(svgId + "_div", window.svg_width, window.innerHeight, window.svgId);
window.imgId = "original_img";
window.img_g=d3.select("#"+window.svgId)
    .append("g")
    .attr("id",imgId+"_g");


addImageAndFullProcedure(window.baseLoc,fileName,sepNames);


