function fetchDataAndUpdateTable() {
  // Simulação de uma chamada à API (você precisará substituir isso pela sua lógica real)
  fetch('/api/hmpv-data') // Supondo que você tenha um servidor rodando em /api/hmpv-data
    .then(response => response.json())
    .then(data => {
      const dataBody = document.getElementById("data-body");
      dataBody.innerHTML = ''; // Limpa a tabela antes de adicionar os dados

      data.forEach(item => {
        const row = `
          <tr>
            <td>${item.regiao}</td>
            <td>${item.totalCasos}</td>
            <td>${item.casosAtivos}</td>
            <td>${item.casosRecuperados}</td>
            <td>${item.mortes}</td>
          </tr>
        `;
        dataBody.innerHTML += row;
      });
    })
    .catch(error => {
      console.error("Erro ao buscar dados:", error);
    });
}

// Atualiza os dados inicialmente quando a página carrega
fetchDataAndUpdateTable();

// Atualiza os dados a cada X milissegundos (ex: 60000 ms = 1 minuto)
setInterval(fetchDataAndUpdateTable, 60000);
