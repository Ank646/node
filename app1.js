const _=require('lodash');
const l=[1,[2,[3,[4,[5]]]]]
const lis=_.flattenDeep(l);
console.log(lis)