function DNAStrand(dna){
  let dnaKey  = {
    "A": "T", 
    "T": "A", 
    "C": "G", 
    "G": "C"
    
  }
  
  let Danside= ""; 
  
  for (let i = 0; i< dna.length; i++){
    Danside += dnaKey[dna[i]];
  }
  
  return Danside;
}