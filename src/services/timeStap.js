function converterTimestamp(timestamp) {
  const timestampInMillis = parseInt(timestamp) * 1000;

  const date = new Date(timestampInMillis);

  const dias = date.getUTCDate();
  const horas = date.getUTCHours();
  const minutos = date.getUTCMinutes();
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

  return { dias, horas, minutos, nomeDoDia, periodo };
}

function fusoHorarioAjuste(time, fuso) {
  const horarioLocal = time + fuso;
  return horarioLocal;
}

export { converterTimestamp, fusoHorarioAjuste };
