
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/IPrizeShowSymbolBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '331b1hPOmZJfoyYJE3Q10PU', 'IPrizeShowSymbolBoard');
// Script/modules/@mogafa/slots/lib/IPrizeShowSymbolBoard.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxJUHJpemVTaG93U3ltYm9sQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXplU2hvd1N0YXR1cyB9IGZyb20gXCIuL1ByaXplU2hvd1N0YXR1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSVByaXplU2hvd1N5bWJvbEJvYXJkIHtcbiAgICAvKipcbiAgICAgKiDkuK3lpZblsZXnpLrml7bmmK/lkKblj6/lj5FzcGlu6K+35rGCXG4gICAgICovXG4gICAgLy9jYW5CZVNwaW5SZXF1ZXN0V2hlblByaXplU2hvdzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDkuK3lpZbmlYjmnpzlsZXnpLrnirbmgIFcbiAgICAgKi9cbiAgICBwcml6ZVNob3dTdGF0dXM6IFByaXplU2hvd1N0YXR1cztcbiAgICAvKipcbiAgICAgKiDnrbnnoIHmo4vlrZDlpZblirFcbiAgICAgKi9cbiAgICByZWFkb25seSBjaGlwQ2VsbFJld2FyZHM6IHsgcG9zaXRpb246IG51bWJlcjsgc3ltYm9sQ29kZTogbnVtYmVyOyByZXdhcmRzOiBudW1iZXIgfVtdO1xuICAgIC8qKlxuICAgICAqIGphY2twb3Tmo4vlrZDlpZblirFcbiAgICAgKi9cbiAgICByZWFkb25seSBqYWNrcG90Q2VsbFJld2FyZHM6IHsgcG9zaXRpb246IG51bWJlcjsgc3ltYm9sQ29kZTogbnVtYmVyOyByZXdhcmRzOiBudW1iZXIgfVtdO1xuICAgIC8qKlxuICAgICAqIOi/nue6v1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hdGNoZWRMaW5lczogbnVtYmVyW11bXTtcbiAgICAvKipcbiAgICAgKiA144CBNuOAgTfov57lsZXnpLpcbiAgICAgKlxuICAgICAqIEBwYXJhbSBudW1iZXIg55u45ZCM5qOL5a2Q5pWwXG4gICAgICovXG4gICAgb2ZBS2luZFNob3cobnVtYmVyOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIOWxleekuui/nue6v1xuICAgICAqIEBwYXJhbSBsaW5lcyDov57nur/liJfooahcbiAgICAgKiBAcGFyYW0gdGltZXMg5bGV56S65qyh5pWwXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOWxleekuuWujOaIkOWQjueahOWbnuiwg1xuICAgICAqL1xuICAgIHByaXplTGluZVNob3cobGluZXM6IG51bWJlcltdW10sIHRpbWVzOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIOetueeggee7k+eul1xuICAgICAqXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIOS9jee9rlxuICAgICAqIEBwYXJhbSBzeW1ib2xDb2RlIOaji+WtkOe8luWPt1xuICAgICAqIEBwYXJhbSBhc3NldHMg6LWE5LqnXG4gICAgICovXG4gICAgcHJpemVDaGlwQ2VsbFNldHRsZShwb3NpdGlvbjogbnVtYmVyLCBzeW1ib2xDb2RlOiBudW1iZXIsIGFzc2V0czogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBqYWNrcG906K6h566XXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24g5L2N572uXG4gICAgICogQHBhcmFtIHN5bWJvbENvZGUg5qOL5a2Q57yW5Y+3XG4gICAgICogQHBhcmFtIGFzc2V0cyDotYTkuqdcbiAgICAgKi9cbiAgICBwcml6ZUphY2twb3RDZWxsU2V0dGxlKHBvc2l0aW9uOiBudW1iZXIsIHN5bWJvbENvZGU6IG51bWJlciwgYXNzZXRzOiBudW1iZXIpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICog5o6l5pS25omA5pyJ5Y2V5YWD5qC85aWW5Yqx57uT566X5a6M5oiQXG4gICAgICovXG4gICAgcmVjZWl2ZUFsbENlbGxSZXdhcmRzU2V0dGxlZCgpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gaW50ZXJ2YWxcbiAgICAgKiBAcGFyYW0gcmVwZWF0XG4gICAgICogQHBhcmFtIGRlbGF5XG4gICAgICovXG4gICAgc2NoZWR1bGUoY2FsbGJhY2s6IEZ1bmN0aW9uLCBpbnRlcnZhbD86IG51bWJlciwgcmVwZWF0PzogbnVtYmVyLCBkZWxheT86IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICB1bnNjaGVkdWxlKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzlvZPlrozmiJDkuIDmrKHkuK3lpZblsZXnpLpcbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciDnm5HlkKzlh73mlbBcbiAgICAgKiBAcGFyYW0gW3RhcmdldF0g57uR5a6a55uu5qCHXG4gICAgICovXG4gICAgb25Qcml6ZUxpbmVTaG93Q29tcGxldGVkT25jZShsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICog5Y+W5raI55uR5ZCs5b2T5a6M5oiQ5LiA5qyh5Lit5aWW5bGV56S6XG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gICAgICogQHBhcmFtIHRhcmdldCDnu5Hlrprnm67moIdcbiAgICAgKi9cbiAgICBvZmZQcml6ZUxpbmVTaG93Q29tcGxldGVkT25jZShsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICog5riF6Zmk5a6M5oiQ5LiA5qyh5Lit5aWW5bGV56S655uR5ZCsXG4gICAgICovXG4gICAgY2xlYXJQcml6ZUxpbmVTaG93Q29tcGxldGVkT25jZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIOebkeWQrOagvOWtkOWlluWKsee7k+eul+WujOaIkOS4gOasoVxuICAgICAqIOavlOWmgnJlc3BpbuS4reetueeggeaji+WtkOe7k+eul++8jOagvOWtkGpw5by556qX5bGV56S6XG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gICAgICogQHBhcmFtIHRhcmdldCDnu5Hlrprnm67moIdcbiAgICAgKi9cbiAgICBvbkNlbGxSZXdhcmRTZXR0bGVkT25jZShsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICog5Y+W5raI55uR5ZCs5qC85a2Q5aWW5Yqx57uT566XXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIg55uR5ZCs5Ye95pWwXG4gICAgICogQHBhcmFtIHRhcmdldCDnu5Hlrprnm67moIdcbiAgICAgKi9cbiAgICBvZmZDZWxsUmV3YXJkU2V0dGxlZE9uY2UobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIOa4hemZpOagvOWtkOWlluWKsee7k+eul+eahOaJgOacieebkeWQrFxuICAgICAqL1xuICAgIGNsZWFyQ2VsbFJld2FyZFNldHRsZWRPbmNlKCk6IHZvaWQ7XG5cbiAgICBsaW5lSW5kZXg6bnVtYmVyXG59XG4iXX0=