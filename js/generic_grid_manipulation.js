
function addDiv(selector,id,additionalClass="") {
    selector.append($('<div/>',{
        id:id,
        class:additionalClass
    }));
    return $("#"+id)
}

function initiateContainerDiv(selector,id,additionalClass="") {
    additionalClass+=" container";
    return addDiv(selector,id,additionalClass)
}