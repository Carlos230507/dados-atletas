class Atleta(nome, idade, peso, altura, notas) {
constructor() {
this.nome = nome
this.idade = idade
this.peso = peso
this.altura = altura
this.notas = notas
}
  
calculaCategoria() {
if (this.idade > 8 && this.idade < 12) {
return "Infantil"
}
if (this.idade = 12 || this.idade = 13) {
return "Juvenil"
}
if (this.idade = 14 || this.idade = 15) {
return "Intermediário"
}
if (this.idade > 15 && this.idade < 31) {
return "Adulto"
} else {
  return "Sem categoria"
}
}
  
calculaIMC() {
let altura = this.altura * this.altura
return this.peso / altura
}
  
calculaMediaValida() {
this.notas = this.notas.sort()
let notasValidas = this.notas.slice(1, 4)
return notasValidas / this.notas.length
}
  
obtemNomeAtleta() {
return this.nome
}
  
obtemIdadeAtleta() {
return this.idade
}
  
obtemPesoAtleta() {
return this.peso
}
  
obtemNotasAtleta() {
return this.notas
}
  
obtemCategoria() {
if (this.idade > 8 && this.idade < 12) {
return "Infantil"
}
if (this.idade = 12 || this.idade = 13) {
return "Juvenil"
}
if (this.idade = 14 || this.idade = 15) {
return "Intermediário"
}
if (this.idade > 15 && this.idade < 31) {
return "Adulto"
} else {
  return "Sem categoria"
}
}
  
obtemIMC() {
let altura = this.altura * this.altura
return this.peso / altura
  
obtemMediaValida() {
this.notas = this.notas.sort()
let notasValidas = this.notas.slice(1, 4)
return notasValidas / this.notas.length
}
