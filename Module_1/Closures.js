function greetingGenerator(greeting) {
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    }
  }
  
  const sayHello = greetingGenerator('Hello');
  sayHello('John');  // Hello, John!
  sayHello('Jane');  // Hello, Jane!
  
  const sayHi = greetingGenerator('Hi');
  sayHi('John');     // Hi, John!

  //-----------------------------------------***-------------------------------------//


  function fetchData(api) {
    setTimeout(function() {
      console.log(`Fetching data from ${api}`);
    }, 2000);
  }
  
  fetchData('https://example.com');
  // After 2 seconds, it will log: Fetching data from https://example.com
  