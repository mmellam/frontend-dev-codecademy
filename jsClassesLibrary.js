class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(newIsc) {
      this._isCheckedOut = newIsc;
    }
    get ratings() {
      return this._ratings;
    }
    getAverageRating() {
      console.log(this._ratings.reduce((a, b)=> a+b) / this._ratings.length);
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(newRating) {
      this._ratings.push(newRating)
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
  }
  
  const crimeBook = new Book('Jane Spencer FBI', 'Hubert S', 430);
  console.log(crimeBook.title)
  console.log(crimeBook.pages)
  console.log(crimeBook.ratings)
  console.log(crimeBook.isCheckedOut)
  crimeBook.toggleCheckOutStatus()
  crimeBook.addRating(5)
  console.log(crimeBook.ratings)
  console.log(crimeBook.isCheckedOut)
  crimeBook.addRating(5)
  console.log(crimeBook.ratings)
  console.log(crimeBook.getAverageRating())
  
  crimeBook.toggleCheckOutStatus()
  console.log(crimeBook.isCheckedOut)
  crimeBook.addRating(4)
  crimeBook.getAverageRating()