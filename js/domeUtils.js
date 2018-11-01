/**
 * Created by web on 2018/3/14.
 */
// ref https://github.com/WICG/EventListenerOptions/pull/30
function isPassive() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {  //passive 提高页面流畅度
            get: function () {
                supportsPassiveOption = true;
            }
        }));
    } catch(e) {}
    return supportsPassiveOption;
}
