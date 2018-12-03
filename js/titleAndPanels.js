
function createMainAndEdge() {
    var mainContainer=addDiv($('body'),"main_container","container-fluid h-100");
    var edge=addDiv(mainContainer,"edge",'row h-100');
    var edgeContainer=addDiv(edge,"edge_container",'container h-100');
    return [mainContainer,edge,edgeContainer]
}
function createTitlePanel(edgeContainer) {
    var titleDiv=addDiv(edgeContainer,"title_div",additionalClass="row h-75");
    addBigText(titleDiv,"Reimagining");
    addBigText(titleDiv,"Watercolor");
    addBigText(titleDiv,"Designing new ways to view, analyze, and create watercolor");
    addBigText(titleDiv,"Test #1: All About Sort")
    // addBigText(titleDiv,"Licia He   X  DOIIIT @UMSI");
}
function createAllPanels(selecter,panelCount) {
    var panelStorage=[];
    for (var i=0;i<panelCount;i++){
        var panel=addDiv(selecter,"panel_"+i,"row");
        panel.height(window.innerHeight);
        panelStorage.push(panel);
    }
    return panelStorage
}

/**
 * add big text to panels
 * @param panels
 */
function addTextToPanel(panels) {
    //# 1 intro
    //here's an watercolor I drew
    panels[0].append("<span class='vcenter'><h1>Here's an abstract watercolor painting.</h1></span>");
    panels[1].append("<h1 class='vcenter'>To reduce complexity for web display and animation, let's convert it into colored dots.</h1>")
}