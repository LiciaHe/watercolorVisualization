
function initController() {
    var controller = new ScrollMagic.Controller();
    return controller
}

/**
 * should be called after the window is ready
 * @param triggerID
 * @param duration
 * @param pinId
 */
function stay_for_a_while(triggerID,duration,pinId,offset,controller) {
    var scene = new ScrollMagic.Scene({triggerElement: "#"+triggerID, duration: duration,offset:offset})
        .setPin("#"+pinId)
        // .addIndicators({name:"1(duration:)"+duration})
        .addTo(controller);
    return scene
}
function takeMeWithYou(pinId,triggerId,offset,controller) {
    var scene = new ScrollMagic.Scene({triggerElement: "#"+triggerId,offset:offset})
        .setPin("#"+pinId)
        // .addIndicators({name:"takeMe"})
        .addTo(controller);
    return scene
}