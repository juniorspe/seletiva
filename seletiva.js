function fibonacci(){
    var termo = parseInt(25)
    var penultimo=0, ultimo=1;
    var numero;
    
  
    if(termo<=2)
     numero = termo-1;
    else{
     count=3;
     while(count<=termo){
      numero= ultimo + penultimo;
      penultimo = ultimo;
      ultimo=numero;
      count++;
        
        if(numero == termo){
            result = termo +":Termo fais parte da sequencia"
            
            console.log(result)
            break
        }if(numero!=termo){
            result = numero + ":Termo nao fais parte da sequencia"
            
            console.log(result)
            
                        
        }
        
    
    
     }
    
    } 
    
   
    
  
    
}
fibonacci()

let palavra = 'loucura'

novaPalavra = palavra.split("")
palavraNova = novaPalavra['6']+novaPalavra['5']+novaPalavra['4']+novaPalavra['3']+novaPalavra['2']+novaPalavra['1']+novaPalavra['0']

console.log(palavraNova)