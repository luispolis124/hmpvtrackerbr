document.addEventListener('DOMContentLoaded', () => {
  const data = [
    { regiao: 'Brasil', totalCasos: 1000, casosAtivos: 200, casosRecuperados: 750, mortes: 50 },
    { regiao: 'Estados Unidos', totalCasos: 5000, casosAtivos: 1000, casosRecuperados: 3800, mortes: 200 },
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
