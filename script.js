const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const buttom = document.querySelector("header button")

buttom.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já existe na lista")
    return
  }
  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  // console.log(nlwSetup.data)
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
// const data = {
//   run: ["01-01", "01-02", "01-06"],
//   water: ["01-04", "01-05", "01-08"],
//   gym: ["01-02", "01-03", "01-07"],
// }
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
