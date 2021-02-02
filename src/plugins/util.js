import Vue from "vue";
const _equal = require('deep-equal');

Plugin.install = function(Vue, options) {
    Vue.equal = _equal;
    window.equal = _equal;
    Object.defineProperties(Vue.prototype, {
        equal: {
            get() {
                return _equal;
            }
        },
        $equal: {
            get() {
                return _equal;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;
