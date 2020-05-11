import React from 'react'

const Repeat = (props: any) => {
  const { title, desc } = props;
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i))
  }
  return (
    <div>
      <h1>{title}</h1>
      <h5>{desc}</h5>
      <h5>JSX element : children</h5>
      {items}
    </div>
  )
}

const ListOfThings = () => {
  const props = {
    title: 'spread operation',
    desc: 'passing prop value with spread operator'
  }
  return (
    <Repeat numTimes={5} {...props}>
      {(index: number) => <div key={index}>This is child {index} in the list.</div>}
    </Repeat>
  )
}

const SpreadOperator = () => {
  function sum(total: number, num: number) {
    return total + num;
  }
  function minus(total: number, num: number) {
    return total - num;
  }

  const add = [4, 5]

  // has to decode both array
  // [[1,2,3], ...add] => [[1,2,3], 4, 5]
  const nums1 = [ ...[1, 2, 3], ...add ]

  const nums2 = [175, ...[50, 25], ...[20, 20]]

  const num1 = nums1.reduce(sum)
  const num2 = nums2.reduce(minus)

  return (
    <>
      <ListOfThings />
      <hr />
      <div>
        <code>
          const add = [4, 5]
          <br />
          const nums1 = [ ...[1, 2, 3], ...add ]
        </code>
        <h1>{num1}</h1>
      </div>
      <div>
        <code>
          const nums2 = [175, ...[50, 25], ...[20, 20]]
        </code>
        <h1>{num2}</h1>
      </div>
      
    </>
  )
}

export default SpreadOperator