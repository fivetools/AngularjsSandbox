module.exports = [ErrorController];

function ErrorController() {

    var self = this;

    self.hasErrors = false;
    self.errorMessage = "Error Details";
    self.username = "username";
    self.actionAttempted = "";
    self.submit = function() {
        console.log("Error action description submitted");
    }
}