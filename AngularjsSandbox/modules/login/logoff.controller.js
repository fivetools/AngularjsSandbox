module.exports = [LogoffController];

function LogoffController() {

    var self = this;

    self.isAuthenticated = true;
    self.currentUICulture = "EN-CA";

    self.logOff = function () {
        console.log("logoff link clicked");
    };

    self.submit = function () {
        console.log("logoff attempt:");
    };


}
