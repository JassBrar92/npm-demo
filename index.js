const _=require('underscore');
const result=_.contains([5,2,8],2);
console.log(result);
const addNum=require('adding-library');   // using own publish dependency
const sum=addNum.add(19,12);
console.log(sum);
