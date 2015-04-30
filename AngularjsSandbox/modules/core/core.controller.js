module.exports = ["coreConfig", CoreController];

function CoreController(coreConfig) {
    // Controller variables.
    var coreVm = this,
        context = '';

    // ng-include urls
    coreVm.headerUrl = coreConfig.path() + '/modules/core/header.tmpl.html';
    coreVm.menuUrl = coreConfig.path() + '/modules/core/menu.tmpl.html';

    var currentDate = new Date();
    var year = currentDate.getFullYear();
    coreVm.currentYear = year;
}
