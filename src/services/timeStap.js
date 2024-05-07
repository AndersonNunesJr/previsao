function converterTimestamp(timestamp) {
  const timestampInMillis = parseInt(timestamp) * 1000;
  const adicionarZero = (valor) => (valor < 10 ? `0${valor}` : valor);
  const date = new Date(timestampInMillis);

  const dias = date.getUTCDate();
  const horas = adicionarZero(date.getUTCHours());
  const minutos = adicionarZero(date.getUTCMinutes());
  const diaDaSemana = date.getUTCDay();
  const periodo = date.getHours() >= 12 ? "PM" : "AM";
  const nomesDosDias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

  const nomeDoDia = nomesDosDias[diaDaSemana];

  console.log(nomeDoDia, "", horas, ":", minutos);
  return { dias, horas, minutos, nomeDoDia, periodo };
}

function fusoHorarioAjuste(time, fuso) {
  const horarioLocal = time + fuso;
  console.log(horarioLocal);
  return horarioLocal;
}
export { converterTimestamp, fusoHorarioAjuste };
