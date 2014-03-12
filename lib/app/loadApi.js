
// module.exports = function(froYo){
//     var buildDictionary = require('sails-build-dictionary');
//     return {
//       loadControllers: function (cb) {
//         buildDictionary.optional({
//           dirname: froYo.apiPath,
//           filter: /(.+)Controller\.(js|coffee)$/,
//           flattenDirectories: true,
//           replaceExpr: /Controller/
//         }, cb);
//       }
//     }
// }