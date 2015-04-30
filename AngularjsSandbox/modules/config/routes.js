var coreConfig = require("../core/core.config.js")[0]();

module.exports = ["$httpProvider", "$routeProvider", function ($httpProvider, $routeProvider) {

    //$httpProvider.defaults.useXDomain = true;
    if (coreConfig.isProduction()) {
        //$httpProvider.interceptors.push("WidgetServiceInterceptor");
    }

    //delete $httpProvider.defaults.headers.common["X-Requested-With"];

    $routeProvider
        .when("/", {
            controller: "loginController",
            templateUrl: coreConfig.path() + "/modules/login/login.tmpl.html"
        });
}];


