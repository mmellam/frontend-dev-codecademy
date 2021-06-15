/*
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. 
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples 
and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor
cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that 
simulate the DNA of P. aequor for your research team to study. 
*/


// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
/*
    mutate() {
      console.log(this.dna);
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      console.log(this.dna);
      return this.dna;
    },*/

    mutate() {
      //console.log(this.dna);
      const randIndex = Math.floor(Math.random() * 14);
      let currentBase = this.dna[randIndex];
      //console.log(currentBase);
      let newBase = ['A', 'T', 'C', 'G'][Math.floor(Math.random() * 4)];
      //console.log(newBase);
      /*currentBase = newBase; wrong--MASSIVE ASSIGNMENT ERROR BECAUSE THE VARIABLE 
      currentBase is CHANGED BUT THE ARR[INDEX] IS NOT CHANGED!!!!! THE ARR ITSELF
      IS NOT MUTATED IN THIS WAY!!!!!!!*/
      while (currentBase === newBase) {
        newBase = ['A', 'T', 'C', 'G'][Math.floor(Math.random() * 4)];
      };
      this.dna[randIndex] = newBase;
      //console.log(this.dna);
      return this.dna;
    },
/*
    mutateSecondVersion() {
      switch(currentBase) {
        case 'A':
          newBase = 
          console.log(newBase);
          break;
        case 'T':
          newBase = ['A', 'C', 'G'][Math.floor(Math.random() * 3)];
          console.log(newBase);
          break;
        case 'C':
          newBase = ['T', 'A', 'G'][Math.floor(Math.random() * 3)];
          console.log(newBase);
          break;
        case 'G':
          newBase = ['T', 'C', 'A'][Math.floor(Math.random() * 3)];
          console.log(newBase);
          break;
      }
      currentBase = newBase;
      console.log(this.dna);
      return this.dna;
    }

    }
*/      
    compareDNA(obj) {
      //console.log(this.dna);
      //console.log(obj.dna);
      let counter = 0;
      for (let i = 0; i<15; i++) { 
          if (this.dna[i] === obj.dna[i]) {
            counter++;
          }
        }
      //console.log(counter);
      const percentage = (counter/15)*100;
      const perc2 = percentage.toFixed(2);
      console.log(`Specimen 1 and specimen 2 have ${perc2}% in common.`);
    },

    willLikelySurvive() {
      let counter = 0;
      this.dna.forEach(item => {
        if (item === 'C' || item === 'G') {
          counter++;
        };
        
        return counter;
      });
      //console.log(counter);
      if (counter/15*100 >= 60) {
        //console.log('true');
        return true;
        
      } else if (counter/15*100 < 60) {
        //console.log('false');
        return false;
      }
    },

    complementStrand() {
      console.log('This is the object dna: ' + this.dna);
      let compStrand = this.dna.map(item => {
        if (item === 'A') {
          return 'T';
        } else if (item === 'T') {
          return 'A';
        } else if (item === 'C') {
          return 'G';
        } else if (item === 'G') {
          return 'C';
        };
        
      });
      console.log('This is the inverse strand: ' + compStrand)
      return compStrand;
    }

  }
}

const testObj = pAequorFactory(1, mockUpStrand());
//console.log(testObj);
//testObj.mutate();


testObj.compareDNA(pAequorFactory(2, mockUpStrand()));
testObj.willLikelySurvive();

const createArrThirty = () => {
  const testArrayThirty = [];
  for (let i = 1; i <31; i++) {
    testArrayThirty.push(pAequorFactory(i, mockUpStrand()));
  }
  //console.log(testArrayThirty);
  return testArrayThirty;

}

//createArrThirty();

const createArrThirtySurviving = () => {
  const testArrayThirtySurviving = [];
  let i = 1;

  while (testArrayThirtySurviving.length < 30) {
    let newObj = pAequorFactory(i, mockUpStrand());
    if (newObj.willLikelySurvive()) {
      testArrayThirtySurviving.push(newObj);
      
    }
    i++;
  }
  //console.log(testArrayThirtySurviving);
  return testArrayThirtySurviving;

};
createArrThirtySurviving();


testObj.complementStrand();



