import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface AppUpdateOptions {
    authType?: string;
    username?: string;
    password?: string;
    skipPromptDialog?: boolean;
    skipProgressDialog?: boolean;
}
/**
 * @name App Update
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { AppUpdate } from '@awesome-cordova-plugins/app-update';
 *
 *
 * constructor(private appUpdate: AppUpdate) { }
 *
 * ...
 *
 *
 * this.appUpdate.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class AppUpdateOriginal extends AwesomeCordovaNativePlugin {
    /**
    * Check and update
    * @param {string} updateUrl update api url
    * @param {AppUpdateOptions} [options] options
    * @return {Promise<any>} Returns a promise that resolves when something happens
    */
    checkAppUpdate(updateUrl: string, options?: AppUpdateOptions): Promise<any>;
}

export declare const AppUpdate: AppUpdateOriginal;