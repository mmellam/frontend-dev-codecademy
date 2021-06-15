const menu = {
    _courses: { 
      appetizers: [],
      mains: [],
      desserts: [],
      },
    get appetizers() {
      return this._courses.appetizers;
      },
    get mains() {
      return this._courses.mains;
      },
    get desserts() {
      return this._courses.desserts;
      },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
      },
    set mains(mainIn) {
      this._courses.mains = mainIn;
      },
    set desserts(dessertsIn) {
      this._courses.desserts = dessertsIn;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const price = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${price}.`;
    }
  };
  menu.addDishToCourse('mains', 'pizza', 5);
  menu.addDishToCourse('mains', 'burger', 5);
  menu.addDishToCourse('appetizers', 'salad', 5);
  menu.addDishToCourse('appetizers', 'wine', 5);
  menu.addDishToCourse('desserts', 'fruit', 5);
  menu.addDishToCourse('desserts', 'cake', 5);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  console.log(menu._courses);
  
  
  
  