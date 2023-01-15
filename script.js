let data = new Date('April 04, 2021 00:00:10').getTime();
let intervalo;
let interruptor = false;
const temporiza = document.getElementById("temporizador");

const horario = () => {
  data -= 1000
  let acumula = new Date(data);
   return acumula.toLocaleTimeString('pt-BR', { 
     hour12: false,
     minute: '2-digit',
     second: '2-digit'
   })
}

const executa = () => {
  temporiza.style.color = "black"
  if (interruptor === false) {
  interruptor = true;
  intervalo = setInterval(() => {
    const hora = horario()
    console.log(hora)
    temporiza.innerHTML = hora;

    if (hora === '00:00') {
      clearInterval(intervalo);
    }
}, 1000)
}}

const comeca = () => {
    const clica = document.getElementById("comeca")
    clica.addEventListener("click", executa)
}

comeca()

const pausa = () => {
    const clica = document.getElementById("pausa");
    clica.addEventListener("click", () => {
      if (interruptor === true) {
      interruptor = false
      clearInterval(intervalo) 
      temporiza.style.color = "red"
    }})
}

pausa()

const zera = () => {
  const clica = document.getElementById("zera");
  clica.addEventListener("click", () => {
    interruptor = false;
    temporiza.style.color = "black"
    clearInterval(intervalo)
    data = new Date('December 14, 2020 00:00:00').getTime()
    let reinicia = new Date(data);
    temporiza.innerHTML = reinicia.toLocaleTimeString('pt-BR', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  })
}

zera()