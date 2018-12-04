
function addScrollProcedure(svgId,imgId) {
    $(function () {
        if(window.controller!=undefined){
            window.controller.destroy(true)
        }
        window.controller = initController();
        stay_for_a_while(svgId, "panel_1", window.innerHeight / 2,window.innerHeight*(panelCt-2),controller);
        transparentToZero(imgId+"_g", "panel_2", 0, window.innerHeight / 2, controller);
        transparentFromZero("circle_g", "panel_2", 0, window.innerHeight / 2, controller);
        startAndEnd("circle_g","panel_3",-window.innerHeight/4,window.innerHeight / 4,controller,backToOriginalCircle,diagonalSquare);
        startAndEnd("circle_g","panel_4",-window.innerHeight/4,window.innerHeight / 4,controller,diagonalSquare,indexSquare);
        startAndEnd("circle_g","panel_5",-window.innerHeight/4,window.innerHeight / 4,controller,restoreToIndex,sortByRed);
        startAndEnd("circle_g","panel_6",-window.innerHeight/4,window.innerHeight / 4,controller,removeHighlight,highlightWhiteDot);
        startAndEnd("circle_g","panel_7",-window.innerHeight/4,window.innerHeight / 4,controller,removeHighlightAndBackToRedSort,sortByRGBsum);
        var endScene=transparentToZero("circle_g", "panel_8", -window.innerHeight/4, window.innerHeight, controller);
        endScene.on("leave",function () {
            this.refresh()
        })
    });
}

function appendImg(baseLoc,sepNames,svgId,svg_width,imgId) {
    var imgLoc = baseLoc + sepNames[0].slice(0, sepNames[0].length - 3) + ".jpg";

    window.img_g.append("image")
        .attrs({"id": imgId, "xlink:href": imgLoc, "x": 0, "y": 0, "width": svg_width, "height": "100%"});

}

function addImageAndFullProcedure(baseLoc,fileName,sepNames) {
    // console.log(baseLoc+fileName);
    d3.json(baseLoc+fileName,function (error,data) {
        if (error) throw error;
        window.data=data;
        window.dataAltered=false;
        appendImg(baseLoc,sepNames,window.svgId,window.svg_width,window.imgId);
        var circle_g=svg_g.append("g")
            .attr("id","circle_g")
            .style("opacity",0);
        addCircles_for_update(circle_g);
        organizeTransform(window.svg_g, data, window.svgId + "_div");
        addScrollProcedure(window.svgId,window.imgId);
    });
}
function makeName(selectedId) {
    return "mini_c ("+selectedId+")_20.json"
}
function getNewName(prevSelectedId) {
    var newVal=getRandomInt(window.fileNameRange[0],window.fileNameRange[1]);
    while (newVal=== prevSelectedId){
        newVal=getRandomInt(window.fileNameRange[0],window.fileNameRange[1])
    }
    return newVal
}
function emptySvg() {
    window.img_g.selectAll("image").remove();
    window.svg_g.selectAll("g").remove();
}
function switchNewImage() {
    emptySvg();
    window.selectedId=getNewName(window.selectedId);
    var fileName=makeName(window.selectedId);
    // console.log(window.selectedId,fileName);
    var sepNames=getFileName(fileName);
    addImageAndFullProcedure(window.baseLoc,fileName,sepNames);
    $('html, body').animate({ scrollTop: 0 }, 'fast');
}