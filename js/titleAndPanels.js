
/////
function createMainAndEdge() {
    var mainContainer=addDiv($('body'),"main_container","container-fluid");
    // var edge=addDiv(mainContainer,"edge",'row h-100');
    // var edgeContainer=addDiv(edge,"edge_container",'container h-100');
    return [mainContainer]
}

function createTitlePanel(containerSelector) {
    var titleRow=addDiv(containerSelector,"title_div",additionalClass="row");
    titleRow.height(window.innerHeight);
    var titleContainer=addDiv(titleRow,"title_container",additionalClass="container-fluid h-100");
    var line0=addDiv(titleContainer,"line0",additionalClass="row h-30");
    addBigText(line0,"Reimagine");    var line0_1=addDiv(titleContainer,"line0_1",additionalClass="row h-30");
    addBigText(line0_1,"Watercolor");
    //
    var line1=addDiv(titleContainer,"line1",additionalClass="row h-20");
    addBigText(line1,"Designing new ways to view, analyze, and create watercolor");
    //
    var line2=addDiv(titleContainer,"line2",additionalClass="row h-20");
    addBigText(line2,"Test #1: All About Sort");
}
function createAllPanels(selecter,panelCount) {
    var panelStorage=[];
    for (var i=0;i<panelCount;i++){
        var panel=addDiv(selecter,"panel_"+i,"row center_text");
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
    panels[0].append("<span class='vcenter'><h1>Another side project by Licia.</h1></span>");
    panels[1].append("<span class='vcenter'><h1>Here's an abstract watercolor painting.</h1></span>");
    panels[2].append("<h1 class='vcenter'>To reduce complexity (web! animation!), let's convert it into colored dots.</h1>");
    panels[3].append("<h1 class='vcenter'>Here's a way to transform the circle into a rectangle.</h1>");
    panels[4].append("<h1 class='vcenter'>And another way.</h1>");
    panels[5].append("<h1 class='vcenter'>Fun things start to happen when we sort these dots. Let's see sort by how RED the dot is.</h1>");
    panels[6].append("<h1>Because red + green +blue = white in the RGB world, you will see some 'white' dots in the most Red area. </h1>");
    panels[7].append("<h1>Sorting by the sum of RGB gives us a different image.</h1>");
    panels[8].append("<h1>There are really infinite ways to use these information, and here are some examples</h1>")
}
function updateFooter(footer) {
    addDiv(footer,"footer_spacer","row h-20");
    var container=addDiv(footer,"footer_text","row h-40");
    addBigText(container, "Have fun experimenting!");
    addBigText(container, "To see more examples, click on the shuffle button below");
    var btn_div=addDiv(addDiv(footer,"btn_div","row h-40"),"btn_col","col align-self-center");
    addButton(btn_div,"shuffle_btn","btn-light btn-lg","Get A New Piece of Watercolor"," large_font");
    $("#shuffle_btn").click(function () {
        switchNewImage();
    })
}
