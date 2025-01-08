document.addEventListener('DOMContentLoaded', () => {
  const data = [
    { regiao: 'Brasil', totalCasos: 0, casosAtivos: 0, casosRecuperados: 0, mortes: 0 },
    { regiao: 'Estados Unidos', totalCasos: 0, casosAtivos: 0, casosRecuperados: 0, mortes: 0 },
    { regiao: 'Canadá', totalCasos: 1, casosAtivos: 0, casosRecuperados: 0, mortes: 0 },
    // Adicione mais dados conforme necessário
  ];

  const tableBody = document.getElementById('data-body');

  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.regiao}</td>
      <td>${item.totalCasos}</td>
      <td>${item.casosAtivos}</td>
      <td>${item.casosRecuperados}</td>
      <td>${item.mortes}</td>
    `;
    tableBody.appendChild(row);
  });
});
