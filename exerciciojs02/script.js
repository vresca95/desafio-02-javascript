const studants = [
  {
    name: "Antony",
    gradeOne: 10,
    gradeTwo:10
  },
  {
    name: "Anakhim",
    gradeOne: 10,
    gradeTwo:5
  },
  {
    name: "Bartho",
    gradeOne: 3,
    gradeTwo:8
  },
  {
    name: "Claudia",
    gradeOne: 5,
    gradeTwo:5
  },
]

function media(gradeOne,gradeTwo){
  return ((gradeOne+gradeTwo)/2).toFixed(2)
}

let result = media > 7

if (result){
  alert(`Parábens ${studants.name} você passou no concurso!`)
}else{
  alert(`Infelizmente ${studants.name} sua nota foi insuficiente para entrar no concurso.`)
}