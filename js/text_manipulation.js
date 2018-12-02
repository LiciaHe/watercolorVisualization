//store all things related to text
//use big text
function getTextId(text) {
    return text.slice(0,2)+text.slice(text.length-3,text.length-1)
}
function addBigText(selector,text) {
    var id=getTextId(text);
    selector.append('<span id="'+id+'">'+text+"</span>");
    selector.bigtext();
}