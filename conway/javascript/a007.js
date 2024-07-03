/*let value1, value2
console.log(typeof value1, value2)

const ask1 = "insira seu nome"
value1 = prompt(ask1)

const ask2 = "insira sua idade"
value2 = Number(prompt(ask2))

console.log(typeof value1, typeof value2)

const msg = console.log(`"Olá ${value1},  você tem ${value2} anos".`)*/

export const askByPrompt=(value0)=>{
   let value=prompt(value0)
   if(Number(value)=== NaN){
      return value
   }else if(Number(value)=== 0){
      return 0
   }else{
      return Number(value)
   }
}

export const ask2Confirm = (question)=>{
   let answer = confirm(question)
   return answer
}


export const makeObjConfirm = (ask)=>{
   const objFromConfirm = {
      question: ask,
      answer: ask2Confirm(ask) === true ? "SIM" : "NAO"
   }

   return objFromConfirm
}

export const ask3Times = (ask1, ask2, ask3)=>{

   const lista = []
   
   let obj1 = makeObjConfirm(ask1)
   let obj2 = makeObjConfirm(ask2)
   let obj3 = makeObjConfirm(ask3)
   
   lista.push(obj1, obj2, obj3)

   console.log(`
         ${lista[0].question} : ${lista[0].answer}
      ${lista[1].question} : ${lista[1].answer}
      ${lista[2].question} : ${lista[2].answer}
         `)
}


export const switchCups = ()=>{
let greenCup = "orange juice"
let redCup = "coke"
let purpleCup = greenCup
greenCup = redCup
redCup = purpleCup

console.log(`Green Cup has ${greenCup} and Red Cup has ${redCup}`)
}


export const redirect2Labenu = ()=>{
   const resposta = ask2Confirm('REDIRECIONAR AOS EXERCICIOS FEITOS NA LABENU?')

   console.log(`O cliente pediu para que o redirecionamento ${resposta ? "EXECUTE" : "ABORTE"}`)
}


export const ideaOfTheDay = ()=>{
   
}