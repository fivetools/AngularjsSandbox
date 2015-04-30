module.exports = [NavController];

function NavController() {

    var self = this;

    self.isAuthenticated = true;
    self.isAdministrator = false;
    self.isApprover = true;
    self.client_name = "Client Name Here";
    self.version_number = "(beta 0.12v)";

}