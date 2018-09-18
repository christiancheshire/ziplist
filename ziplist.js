// E26 Second Attempt - 7:18

const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(list1, list2) {
  const zippedList = [];
  for (let i = 0; i < list1.length; i++) {
    zippedList.push(list1[i], list2[i]);
  }
  return zippedList;
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(test1, test2));
