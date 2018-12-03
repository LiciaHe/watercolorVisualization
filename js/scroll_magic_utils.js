
function initController() {
    var controller = new ScrollMagic.Controller();
    return controller
}

function initScene(elementId,triggerId,offset,duration,controller) {
    return new ScrollMagic.Scene({triggerElement: "#"+triggerId,offset:offset,duration:duration}).addTo(controller)

}
function tweenScene(elementId,triggerId,offset,duration,controller,tween) {
    var scene=initScene(elementId,triggerId,offset,duration,controller);
    scene.setTween(tween);
    return scene
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
    var scene=tweenScene(elementId,triggerId,offset,duration,controller,opacityTween);
    // scene.addIndicators({name:"opacity"})
    return scene
}

function enterAndLeave(elementId,triggerId,offset,duration,controller,startFunction,endFunction) {
    var scene=initScene(elementId,triggerId,offset,duration,controller)
        .on("enter",function () {
            startFunction()
        })
        .on("leave",function () {
            endFunction()
        });
    return scene
}
function startAndEnd(elementId,triggerId,offset,duration,controller,startFunction,endFunction) {
    var scene=initScene(elementId,triggerId,offset,duration,controller)
        .on("start",function () {
            startFunction()
        })
        .on("end",function () {
            endFunction()
        });
    return scene
}