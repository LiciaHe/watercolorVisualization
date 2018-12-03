
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

function tweenScene(elementId,triggerId,offset,duration,controller,tween) {
    var scene=new ScrollMagic.Scene({triggerElement: "#"+triggerId,offset:offset,duration:duration})
        .setTween(tween)
        .addTo(controller);
    return scene
}

/**
 * remove an element gradually
 * @param elementId
 * @param triggerId
 * @param offset
 * @param duration
 * @param controller
 */
function transparentToZero(elementId,triggerId,offset,duration,controller) {
    var opacityTween=TweenMax.fromTo("#"+elementId,1,{opacity:1},{opacity:0});
    return tweenScene(elementId,triggerId,offset,duration,controller,opacityTween)
    // var scene=new ScrollMagic.Scene({triggerElement: "#"+triggerId,offset:offset,duration:duration})
    //     .setTween(opacityTween)
    //     // .on("leave",function () {
    //     //     // $("#"+elementId).remove();
    //     //     additionalFunction();
    //     // })
    //     // .addIndicators({name:"opacity"})
    //     .addTo(controller);
}
function transparentFromZero(elementId,triggerId,offset,duration,controller) {
    var opacityTween=TweenMax.fromTo("#"+elementId,1,{opacity:0},{opacity:1});
    console.log(opacityTween);
    scene=tweenScene(elementId,triggerId,offset,duration,controller,opacityTween);
    scene.addIndicators({name:"opacity"})
}