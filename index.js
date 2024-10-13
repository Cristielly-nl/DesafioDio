let nivel
let nomeHeroi = "Mario";
let quantExperiencia = 7.014

if (quantExperiencia < 1.000 )
    nivel = "Ferro"
else if (quantExperiencia > 1.000 && quantExperiencia <= 2.000 )
    nivel = "Bronze"
else if (quantExperiencia >= 2.001 && quantExperiencia <= 5.000 )
    nivel = "Prata"
else if (quantExperiencia >= 5.001 && quantExperiencia <= 7.000 )
    nivel = "Ouro"
else if (quantExperiencia >= 7.001 && quantExperiencia <= 8.000 )
    nivel = "Platina"
else if (quantExperiencia >= 8.001 && quantExperiencia <= 9.000 )
    nivel = "Ascendente"
else if (quantExperiencia >= 9.001 && quantExperiencia <= 10.000 )
    nivel = "Imortal"
else 
    nivel = "Radiante"


console.log("O Herói de nome: " + nomeHeroi + ", está no nível de: " + nivel);