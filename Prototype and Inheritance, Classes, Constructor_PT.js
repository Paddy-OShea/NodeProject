/*Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal*/

/*let animal = {
    walk: true
  };
  let cat = {
    walk: true
  };
  cat.__proto__ = animal;
  cat.walk();*/

  let animal = {
    walk: true,
    walk() {
      alert("Animal walk");
    }
  };
  
  let cat = {
    walk: true,
    __proto__: animal
  };
  
  // walk is taken from the prototype chain
  animal.walk(); // Animal walk
  alert(cat.walk); // true (from rabbit)