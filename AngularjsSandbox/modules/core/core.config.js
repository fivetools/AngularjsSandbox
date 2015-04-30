module.exports = [coreConfiguration];

function coreConfiguration() {
    var production = false; 
    return {
 
        isProduction: isProduction,
        path : path
    };

    function isProduction(){
        return production;
    }

    function path() {
        return production ? '/Tools/RBMDash/source' : '.';
    } 
   
}
