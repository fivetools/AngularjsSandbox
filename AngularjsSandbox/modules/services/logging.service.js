
module.exports = ["coreConfig","$log",loggingService];

function loggingService(coreConfig, $log) {
    return {
        logError: logError
    };


    function logError(exception, cause) {


            // preserve the default behaviour which will log the error
            // to the console, and allow the application to continue running.
            $log.error.apply($log, arguments);

            // now try to log the error to the server side.
            try{
                var errorMessage = cause ? cause : exception.toString();             

                // use our traceService to generate a stack trace
               

				if(coreConfig.isProduction()){
                // use AJAX (in this example jQuery) and NOT 
                // an angular service such as $http 
	                //$.ajax({
	                //    type: "POST",
	                //    url: "/WPApi/Log", 
	                //    contentType: "application/json",
	                //    data: angular.toJson({
	                //        level : "Error",
	                //        url: $window.location.href,
	                //        message: errorMessage,
	                //        type: "exception",
	                //        stackTrace: exception.stack,
	                //        cause: ( cause || "")
	                //    })
	                //});
            	}else{
                    $log.error(errorMessage + " [Exception :] " +  exception.stack);

            	}
            } catch (loggingError){
                $log.warn("Error server-side logging failed");
                $log.log(loggingError);
                $log.log(loggingError);
            }
        }
};




