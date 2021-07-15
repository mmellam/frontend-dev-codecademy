class School {
    constructor(name, numberOfStudents, level) {
      this._name = name;
      this._numberOfStudents = numberOfStudents;
      this._level = level;
    }
    get name() {
      return this._name;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    get level() {
      return this._level;
    }
    set numberOfStudents(newNr) {
      if (typeof newNr === number) {
        this._numberOfStudents = newNr;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
      return substituteTeachers[(Math.floor(Math.random()*substituteTeachers.length))];
    }
  }
  
  class Primary extends School {
      constructor(name, numberOfStudents, pickupPolicy) {
      super(name, numberOfStudents, 'primary');
      this._pickupPolicy = pickupPolicy;
  }
  }
  
  class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
      super(name, numberOfStudents);
  }
  }
  
  
  class HighSchool extends School {
      constructor(name, numberOfStudents, sportsTeams) {
      super(name, numberOfStudents, 'high');
      this._sportsTeams = sportsTeams;
  }
  }
  
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  console.log(alSmith.numberOfStudents)
  console.log(lorraineHansbury._pickUpPolicy)