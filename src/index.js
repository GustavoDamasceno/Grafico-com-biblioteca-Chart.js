import axios from "axios";

axios
  .get("https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/ABEV3")
  .then((resp) => {
    const aux = [];
    const labels = [];
    for (let index = 0; index < 300; index++) {
      aux.push(resp.data[index].vl_maximo);
      labels.push(resp.data[index].dt_pregao);
    }
    console.log(aux);

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Valor médio (R$)",
          backgroundColor: "rgb(0, 50, 115)",
          borderColor: "rgb(0, 50, 115)",
          data: aux
        }
      ]
    };

    const config = {
      type: "line",
      data: data,
      options: {}
    };

    const myChart = new Chart(document.getElementById("myChart"), config);
  })
  .catch();
