
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
    // addBigText(titleDiv,"Licia He   X  DOIIIT @UMSI");

}
