import path from 'path';

// jsx
const helloInJsx = ({ name }) => <div>hello, {name}</div>;

// ES2015
const hello = name => `hello, ${name}`;

// ES2016
const cubed = 2 ** 3;

// ES2017
async function foo() {
  await bar();
}

export default hello;
