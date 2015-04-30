module.exports = [includeReplace];

function includeReplace(){
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
};