'use strict';

function collectSameElements(collectionA, collectionB) {

var arr = [];

collectionA.filter(function (n) {
if (collectionB[0].indexOf(n) != -1) {
arr.push(n);
}
});
console.log(arr);
return arr;
}
