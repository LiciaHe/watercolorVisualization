
function initController() {
    var controller = new ScrollMagic.Controller();
    return controller
}

function initScene(triggerId,offset,duration,controller) {
    return new ScrollMagic.Scene({triggerElement: "#"+triggerId,offset:offset,duration:duration}).addTo(controller)

}
function tweenScene(elementId,triggerId,offset,duration,controller,tween) {
    var scene=initScene(triggerId,offset,duration,controller);
    scene.setTween(tween);
    return scene
}


/**
 * should be called after the window is ready
 * @param triggerID
 * @param duration
 * @param pinId
 */
function stay_for_a_while(pinId,triggerID,offset,duration,controller) {
    var scene=initScene(triggerID,offset,duration,controller)
        .setPin("#"+pinId,{pushFollowers:true});
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
    return tweenScene(elementId,triggerId,offset,duration,controller,opacityTween).addIndicators()
}
function transparentFromZero(elementId,triggerId,offset,duration,controller) {
    var opacityTween=TweenMax.fromTo("#"+elementId,1,{opacity:0},{opacity:1});
    var scene=tweenScene(elementId,triggerId,offset,duration,controller,opacityTween);
    // scene.addIndicators({name:"opacity"})
    return scene
}

function enterAndLeave(elementId,triggerId,offset,duration,controller,startFunction,endFunction) {
    var scene=initScene(triggerId,offset,duration,controller)
        .on("enter",function () {
            startFunction()
        })
        .on("leave",function () {
            endFunction()
        });
    return scene
}
function startAndEnd(elementId,triggerId,offset,duration,controller,startFunction,endFunction) {
    var scene=initScene(triggerId,offset,duration,controller)
        .on("start",function () {
            startFunction()
        })
        .on("end",function () {
            endFunction()
        });
    return scene
}
