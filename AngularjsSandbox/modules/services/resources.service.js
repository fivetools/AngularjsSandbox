module.exports = ["coreConfig", "$http", "_", resourcesService];

function resourcesService(coreConfig, $http, _) {
	    var loadedResources;
   
        if(coreConfig.isProduction()){
        
    		$http.get("/WPApi/Resources")
        		.success(function (data){
        			loadedResources = data;
        	   });

    	} else {
    		
            loadedResources = [];

            // Example 1 - not-embedded
            //loadedResources.push({key : "landing_page, ellie", value: "ellie" });
            //loadedResources.push({key : "landing_page, can_help", value: "Can Help" });

            //// Example 2 - embedded
            //loadedResources.push({key : "landing_page, ellie_can_help", value: "<strong>ellie</strong> <span>Can Help</span>" });

            //********* Resources ********* 
            loadedResources.push({ key: "resources, company_name", value: "SPA Inc." });
            loadedResources.push({ key: "resources, loading", value: "Loading..." });
            loadedResources.push({ key: "resources, please_wait", value: "Please wait" });
            loadedResources.push({ key: "resources, english", value: "English" });
            loadedResources.push({ key: "resources, french", value: "French" });
            loadedResources.push({ key: "resources, username", value: "Username" });
            loadedResources.push({ key: "resources, continue", value: "Continue" });
            loadedResources.push({ key: "resources, close", value: "Close" });
            loadedResources.push({ key: "resources, edit", value: "Edit" });
            loadedResources.push({ key: "resources, details", value: "Details" });
            loadedResources.push({ key: "resources, delete", value: "Delete" });
            loadedResources.push({ key: "resources, create_new", value: "Create New" });
            loadedResources.push({ key: "resources, create", value: "Create" });

            //********* nav ********* 
            loadedResources.push({ key: "nav, home", value: "Home" });
            loadedResources.push({ key: "nav, about", value: "About" });
            loadedResources.push({ key: "nav, contact", value: "Contact" });
         
            //********* errors ********* 
            loadedResources.push({ key: "error, error_occurred", value: "Sorry, an error occured." });
            loadedResources.push({ key: "error, sitefinity_connection_error", value: "Most likely it happened due to not beeing able to connect with sitefinity." });
            loadedResources.push({ key: "error, relog_try_again", value: "Please re-log in the system and try again." });
            loadedResources.push({ key: "error, if_issue_persists", value: "If this issue persists, please submit a ticket describing what you were trying to accomplish." });
            loadedResources.push({ key: "error, user_activity_description", value: "Please describe what you were trying to accomplish." });
            loadedResources.push({ key: "error, request_support", value: "Request Support" });
            
            //********* login ********* 
            loadedResources.push({ key: "login, title", value: "Log in the Morneau Shepell Content Management System." });
            loadedResources.push({ key: "login, welcome_back", value: "Welcome Back!" });
            loadedResources.push({ key: "login, email_address", value: "Email Address" });
            loadedResources.push({ key: "login, username", value: "Username" });
            loadedResources.push({ key: "login, enter_email_address", value: "Please enter a valid email address" });
            loadedResources.push({ key: "login, enter_username", value: "Please enter your username" });
            loadedResources.push({ key: "login, password", value: "Password" });
            loadedResources.push({ key: "login, enter_password", value: "Please enter a password" });
            loadedResources.push({ key: "login, forgot_password", value: "Forgot password?" });
            loadedResources.push({ key: "login, login", value: "Log In" });
            loadedResources.push({ key: "login, close", value: "Close" });

            //********* logoff ********* 
            loadedResources.push({ key: "logoff, register", value: "Register" });
            loadedResources.push({ key: "logoff, login", value: "Log In" });
            loadedResources.push({ key: "logoff, logoff", value: "Log Off" });

        }

    return {
        resource: resource
    }; 

    
    function resource(resourcereq){

    	var dicokey = resourcereq.classKey.toLowerCase() + ", " + resourcereq.resourceKey.toLowerCase();
    
        var value = _.findWhere(loadedResources, {
                key : dicokey
           });
        if(value == undefined){
        	return ">>"+dicokey+">>";

        }else{
    		return value.value;
    	}
    }

};




