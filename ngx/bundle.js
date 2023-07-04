'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var AppUpdate = /** @class */ (function (_super) {
    tslib.__extends(AppUpdate, _super);
    function AppUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdate.prototype.checkAppUpdate = function (updateUrl, options) { return core.cordova(this, "checkAppUpdate", { "sync": true }, arguments); };
    AppUpdate.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppUpdate, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AppUpdate.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppUpdate });
    AppUpdate.pluginName = "AppUpdate";
    AppUpdate.plugin = "cordova-plugin-app-update";
    AppUpdate.pluginRef = "AppUpdate";
    AppUpdate.repo = "https://github.com/albergoniSivaf/cordova-plugin-app-update";
    AppUpdate.install = "";
    AppUpdate.installVariables = [];
    AppUpdate.platforms = ["Android"];
    AppUpdate = tslib.__decorate([], AppUpdate);
    return AppUpdate;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AppUpdate, decorators: [{
            type: i0.Injectable
        }], propDecorators: { checkAppUpdate: [] } });

exports.AppUpdate = AppUpdate;
