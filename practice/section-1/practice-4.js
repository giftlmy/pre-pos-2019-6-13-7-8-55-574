'use strict';

function collectSameElements(collectionA, objectB) {
  var arr = [];
  var arr1 = [];
  collectionA.filter(function (n) {
  arr.push(n.key)
  });
  
  console.log(arr);
  
  arr.filter(function (n) {
  if (objectB.value.indexOf(n) != -1) {
  arr1.push(n);
  }
  });
  
  return arr1;
  }
