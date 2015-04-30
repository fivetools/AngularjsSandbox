module.exports = ['$scope', HomeController];

function HomeController($scope) {

    var self = this;

    self.message = "Hello";
    self.changeMessage = function () {
        self.message = 'Goodbye';
    };

    //$scope.lost_visible = false;
    //$scope.access_visible = false;
    //$scope.login_visible = false;

    //$scope.access_dob = '';
    //$scope.dob_pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    //$scope.toggleLogin = function () {
    //    $scope.login_visible = !$scope.login_visible;
    //};

    //$scope.toggleLost = function () {
    //    $scope.lost_visible = !$scope.lost_visible;
    //};

    //$scope.toggleAccess = function () {
    //    $scope.access_visible = !$scope.access_visible;
    //};

    //$scope.submitAccess = function () {
    //    $scope.access_dob = "";
    //    $scope.toggleAccess();
    //};

}
