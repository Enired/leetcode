const compare = (selectorOne, selectorTwo) => {
  const selectorOneTags = selectorOne.split(' ');
  const selectorTwoTags = selectorTwo.split(' ');
  const valueDeterminer = (tags) => {
    let value = 0;
    tags.forEach(element => {
      if (element[0] === '.') {
    
        value += (element.match(/./ || []).length * 10);
      }
      else if (element[0] === '#') {
        value += 100;
        if(element.includes('.')){
          value += (element.match(/./ || []).length * 10);
        }
      }
      else if(element[0] !== '*'){
        value += 1;
        if(element.includes('.')){
          value += (element.match(/./ || []).length * 10);
        }
        if(element.includes('#')){
          value += 100;
        }
      }
    })
    return value;
  };
  let selectorOneValues = valueDeterminer(selectorOneTags);
  let selectorTwoValues = valueDeterminer(selectorTwoTags);
  console.log('Testing', selectorOne ,selectorOneValues)
  console.log('Testing', selectorTwo, selectorTwoValues)
  return selectorOneValues > selectorTwoValues ? selectorOne : selectorTwo
};


// console.log(compare("body p", "div")); // returns "body p"
// console.log(compare(".class", "#id")); // returns "#id"
// console.log(compare("div.big", ".small")); // returns "div.big"
console.log(compare(".big", ".small")); // returns ".small" (because it appears later)

console.log(compare('menu .item #checkout.active' , '#foo div#bar.red .none	'))