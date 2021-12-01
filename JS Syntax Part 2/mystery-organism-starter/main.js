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


const pAequorFactory = (specimen, dna) => {
  return {
    specimen,
    dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * 15);
      let newDna = returnRandBase();
      while (newDna === dna[randomIndex]) {
        newDna = returnRandBase();
      }
      dna[randomIndex] = newDna;
    },
    compareDna (pAequor) {
      let counter = 0;
      this.dna.forEach((element,index) => {
        if(element === pAequor.dna[index]) counter++;
      });
      console.log(`specimen #${this.specimen} and specimen #${pAequor.specimen} have ${(counter*100)/15}% DNA in common`)
    },
    willLikelySurvive() {
      let counter = 0;
      this.dna.forEach((element) => {
        if (element === 'C' || element === 'G') counter++;
      });
      return (counter > (counter * 100) / 15) ? true : false;
    }
  };
}

let lol = pAequorFactory(1, mockUpStrand());
console.log(lol);
console.log(lol.willLikelySurvive());
