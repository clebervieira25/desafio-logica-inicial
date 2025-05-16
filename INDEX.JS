// desafio do felipão

// VARIAVEIS USADA
let personagem = "Cléber vieira"
let xp = 5.622
let nivel = ""

//ESTRUTURA DE DECISÃO

if (xp <1.000){
    nivel = "Ferro"
} else if (xp >= 1.001 && xp <=2.000){
    nivel = "Bronze"
} else if (xp >=2.001 && xp <=5.000){
    nivel = " Prata"
} else if (xp >=5.001 && xp <=7.000){
    nivel = "Ouro"
} else if (xp >=7.001 && xp <=8.000){
    nivel = "Platina"
} else if (xp >=8.001 && xp<=9.000){
    nivel = "Ascendente"
} else if (xp >=9.001 && xp<=10.000){
    nivel = "Imortal"
} else if (xp >=10.001){
    nivel = "Radiante"
}

//SAÍDA
console.log(`O herói de Nome ${personagem} esta no nivel de ${nivel}`)
