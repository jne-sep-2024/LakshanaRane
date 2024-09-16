function first() {
    console.log("First function");
  }
  
  function second() {
    console.log("Second function");
    first();  // Yahan se first() call hoga
  }
  
  function third() {
    console.log("Third function");
    second(); // Yahan se second() call hoga
  }
  
  third();  // Yahan se third() function call hoga

  //just like stackframes jn java, c++//