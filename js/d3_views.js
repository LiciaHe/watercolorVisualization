function createSvg(selectorId,width,height,id) {
    window.svg_g=d3.select("#"+selectorId)
        .append("svg")
        .attrs({"width":width,"height":height,"id":id})
        .append("g")
        .attr("id",id+"_g")
        .attr("transform","translate("+margins["l"]+","+margins["t"]+")");
    return svg_g
}
function createSvg_withoutMargin(selectorId,width,height,id) {
    window.svg_g=d3.select("#"+selectorId)
        .append("svg")
        .attrs({"width":width,"height":height,"id":id})
        .append("g")
        .attr("id",id+"_g");
    return svg_g
}

function addCircles(selector,data,r,styles,attrs) {
    selector.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .styles(styles)
        .attrs(attrs)
        .attr("cx",function (d) {
            return d.x
        })
        .attr("cy",function (d) {
            return d.y
        })
        .attr("r",r)
}
function addPolygon(selector,data,styles,attrs) {
    selector.selectAll("polygon")
        .data(data)
        .enter()
        .append("polygon")
        .attr("points",function (d) {
            var toReturn="";
            var points=d.points;
            for(var i=0;i<points.length;i++){
                var p=d.points[i];
                toReturn+=p.x+","+p.y+" ";
            }
            return toReturn
        })
        .attrs(attrs)
        .styles(styles)
}