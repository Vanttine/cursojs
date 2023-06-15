var idade = 67

/*

if (idade >= 18) {
    console.log('Voto obrigatorio')
} 
else {
   
    if (idade >= 16 && idade < 18){
        console.log('Voto opcional')

    }else {
        console.log('Nao vota')
    }
}

if (idade >= 18) {
    console.log('Voto obrigatorio')
}  else if (idade >= 16 && idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Nao pode votar')
}

*/

if (idade < 16) {
    console.log('Nao pode votar')
} else if (idade < 18 || idade > 65) {
    console.log ('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}