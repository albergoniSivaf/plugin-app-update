import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var AppUpdate = /** @class */ (function (_super) {
    __extends(AppUpdate, _super);
    function AppUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppUpdate.prototype.checkAppUpdate = function (updateUrl, options) { return cordova(this, "checkAppUpdate", { "sync": true }, arguments); };
    AppUpdate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppUpdate, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    AppUpdate.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppUpdate });
    AppUpdate.pluginName = "AppUpdate";
    AppUpdate.plugin = "cordova-plugin-app-update";
    AppUpdate.pluginRef = "AppUpdate";
    AppUpdate.repo = "https://github.com/albergoniSivaf/cordova-plugin-app-update";
    AppUpdate.install = "";
    AppUpdate.installVariables = [];
    AppUpdate.platforms = ["Android"];
    AppUpdate = __decorate([], AppUpdate);
    return AppUpdate;
}(AwesomeCordovaNativePlugin));
export { AppUpdate };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AppUpdate, decorators: [{
            type: Injectable
        }], propDecorators: { checkAppUpdate: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLXVwZGF0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7OztJQTBDakgsNkJBQTBCOzs7O0lBV3ZELGtDQUFjLGFBQUMsU0FBaUIsRUFBRSxPQUEwQjsyR0FYakQsU0FBUzsrR0FBVCxTQUFTOzs7Ozs7OztJQUFULFNBQVMsa0JBQVQsU0FBUztvQkF0RHRCO0VBc0QrQiwwQkFBMEI7U0FBNUMsU0FBUzs0RkFBVCxTQUFTO2tCQURyQixVQUFVOzhCQVlULGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcFVwZGF0ZU9wdGlvbnMge1xuICAgIGF1dGhUeXBlPzogc3RyaW5nO1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICAgIHNraXBQcm9tcHREaWFsb2c/OiBib29sZWFuO1xuICAgIHNraXBQcm9ncmVzc0RpYWxvZz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQXBwIFVwZGF0ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwVXBkYXRlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcC11cGRhdGUnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcFVwZGF0ZTogQXBwVXBkYXRlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hcHBVcGRhdGUuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBVcGRhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtdXBkYXRlJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ0FwcFVwZGF0ZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbGJlcmdvbmlTaXZhZi9jb3Jkb3ZhLXBsdWdpbi1hcHAtdXBkYXRlJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBVcGRhdGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICogQ2hlY2sgYW5kIHVwZGF0ZVxuICAqIEBwYXJhbSB7c3RyaW5nfSB1cGRhdGVVcmwgdXBkYXRlIGFwaSB1cmxcbiAgKiBAcGFyYW0ge0FwcFVwZGF0ZU9wdGlvbnN9IFtvcHRpb25zXSBvcHRpb25zXG4gICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGNoZWNrQXBwVXBkYXRlKHVwZGF0ZVVybDogc3RyaW5nLCBvcHRpb25zPzogQXBwVXBkYXRlT3B0aW9ucykgOiBQcm9taXNlPGFueT4ge31cblxufVxuIl19