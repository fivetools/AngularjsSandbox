var config = require("./modules/core/core.config.js")[0](); 

var ngModule = angular.module("Dashboard", [
        "ngAnimate", "ngRoute", "ngMessages", "ngCookies","ngSanitize", "ngResource",
        "ui.bootstrap", "ui.bootstrap.pagination","ui.bootstrap.tpls",
        "underscore",
        "CoreModule", "CommonModule", "HomeModule",
        "LoginModule", "LogoffModule", "NavModule", "ErrorModule"
    ])
    .config(require("./modules/config/routes.js"))
    .controller({
        "mainController": require("./modules/common/main.controller.js")
    })
    .run(function($rootScope, resourcesService) {
        $rootScope.res = function(classKey, key) {
            return resourcesService.resource({
                classKey: classKey,
                resourceKey: key
            });
        }
    });

angular.module("HomeModule", ["CoreModule"])
    .controller({"homeController": require("./modules/home/home.controller.js") });

angular.module("LoginModule", ["CoreModule"])
    .controller({ "loginController": require("./modules/login/login.controller.js") });

angular.module("LogoffModule", ["CoreModule"])
    .controller({ "logoffController": require("./modules/login/logoff.controller.js") });

angular.module("NavModule", ["CoreModule"])
    .controller({ "navController": require("./modules/home/nav.controller.js") });

angular.module("ErrorModule", ["CoreModule"])
    .controller({ "errorController": require("./modules/home/error.controller.js") });

angular.module("CommonModule", ["CoreModule"])
    .directive("includeReplace", require('./modules/directives/include_replace.directive.js'));
 
angular.module("CoreModule", [])
    .controller({
        "coreController": require("./modules/core/core.controller.js")
    })
    .factory("coreConfig", require("./modules/core/core.config.js"))
    .factory("userService", require("./modules/services/user.service.js"))
    .factory("resourcesService", require("./modules/services/resources.service.js"))
    .factory("loggingService", require("./modules/services/logging.service.js"))
    .factory("utilityService", require("./modules/services/utility.service.js"))
    .factory("$exceptionHandler", function (loggingService) {
        return function (exception, cause) {
            loggingService.logError(exception, cause);
            throw exception;
        };
    }); 


angular.module("underscore", [])
    .factory("_", function () {
        return window._; // assumes underscore has already been loaded on the page
    });


