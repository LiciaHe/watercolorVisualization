//store all things related to text
//use big text
function getTextId(text) {
    return text.slice(0,2)+text.slice(text.length-3,text.length-1)
}

/**
 * new versions are not using big text any more
 * @param selector
 * @param text
 */
function addBigText(selector,text) {
    var id=getTextId(text);
    selector.append('<span id="'+id+'">'+text+"</span>");
    selector.bigtext({maxfontsize: 150 });
}

/**
 * require textfill plugin
 * need to initialize window.fullTextList
 * should be called the last
 */
function initFullText() {
    for (var i=0;i<window.fullTextList.length;i++){
        var elem="#"+window.fullTextList[i];
        $(elem).textfill()
    }
}
