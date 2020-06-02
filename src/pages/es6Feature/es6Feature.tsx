import React from 'react';

const Es6FeaturePage = () => {

  // set
  
  /*

  let newSet = new Set();
  newSet.add('what')
  newSet.add(1)
  newSet.add(1)
  newSet.add('what')
  console.log('newSet => ', newSet)
  console.log('newSet has 1 => ', newSet.has(1))
  console.log('newSet size => ', newSet.size)

  newSet.delete(1)
  console.log('delete 1, newSet => ', newSet)
  newSet.add(2)
  newSet.forEach(i => {
    console.log('i => ', typeof(i))
    console.log('i => ', i)
  })
  
  let iterator = newSet.entries()
  console.log('??? ', iterator)
  for ( const entry of iterator ) {
    console.log('entry => ', entry)
  }
  for ( const entry of newSet.entries()) {
    console.log('entry => ', entry)
  }
  console.log('??? ', iterator)
  console.log(iterator.next().value)
  console.log(iterator.next().value)

  console.log('newSet.entries', newSet.entries())

  console.log('=========================')
  const iterable = new Set([1, 1, 2, 2, 3, 3]);
  console.log(iterable)
  for (const value of iterable) {
    console.log(value);
  } 
  console.log(iterable)

  let array = [0,1,1,3]
  let tt = [0,0,0]
  console.log(array)
  let aa = array.slice(1, 4)
  // push array (tt) into array (aa) at index (1)
  aa.splice(1, 0, ...tt)
  console.log('aa = ',aa)
  
  */
  
  ////////////////////////////////////////////////////////////////////////////////////

  // object

  /*

  const myObject: {[index: string] : any} = {};
  console.log('myObject => ', myObject.constructor)
  myObject[1] = 'value1';
  myObject[2] = 'value2';
  myObject[3] = 'value3';

  for ( const key in myObject ) {
    console.log('key => ', key)
  }

  console.log('keys =>', Object.keys(myObject))
  console.log('values =>', Object.values(myObject))
  Object.keys(myObject).map((key, index) => {
    console.log(key)
    console.log(typeof(key))
    // const keyN = key as number;
    console.log(index)
    console.log( myObject[key] )
    return 'lll'
  })
  console.log(myObject)

  */

  /*
  // Object create funny bug
  const countWords = (words: Array<string>) => {
    const counts:{[key: string]: any} = {};
    for ( const word of words) {
      counts[word] = (counts[word] || 0 ) + 1
    }
    return counts;
  }
  const counts = countWords(['constructor', 'creates', 'a', 'bug'])
  console.log(counts) // => {constructor: "function Object() { [native code] }1", creates: 1, a: 1, bug: 1}
  */

  /*
  for ( const key of Object.keys(myObject) ) {
    console.log(key)
  }
  for ( const value of Object.values(myObject) ) {
    console.log(value)
  }
  for ( const entry of Object.entries(myObject) ) {
    console.log(entry)
  }
  */

  /*

  const object = { };
  object['key1'] = 'value1';
  object['key0'] = 'value0';
  object; // {key1: "value1", key0: "value0"}
  object[20] = 'value20';
  object; // {20: "value20", key1: "value1", key0: "value0"}
  
  */

  ////////////////////////////////////////////////////////////////////////////////////

  // map
  const newmap = new Map()
  newmap.set('authenticated', true)
  newmap.set(1, 'value1')
  newmap.set({'name': 'rich'}, 666)
  console.log('newmap entries => ', newmap.entries())

  console.log('values => ',newmap.values())
  console.log('keys =>', newmap.keys())

  for ( const key of newmap.keys() ) {
    console.log(typeof(key), ' - ', key, ' - value => ', newmap.get(key))
  }

  for ( const entry of newmap ) {
    console.log('entry => ', entry)
  }

  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>ES6 New Feature</div>
  )

}

export default Es6FeaturePage