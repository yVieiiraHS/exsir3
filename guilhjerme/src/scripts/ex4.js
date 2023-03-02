// Obtendo os dados dos veículos
fetch("https://demo9854836.mockable.io/ex4,")
  .then(response => response.json())
  .then(data => {
    // Criando a tabela HTML
    debugger;
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let trHead = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    th1.textContent = "Materia";
    th2.textContent = "Professor";
    th3.textContent = "Sala";
    trHead.appendChild(th1);
    trHead.appendChild(th2);
    trHead.appendChild(th3);
    thead.appendChild(trHead);
    table.appendChild(thead);
    table.appendChild(tbody);

    // Inserindo os dados de materias na tabela HTML
    for (let i = 0; i < 10; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      td1.textContent = data[i].materia;
      td2.textContent = data[i].professor;
      td3.textContent = data[i].sala;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tbody.appendChild(tr);
    }

    // Adicionando a tabela HTML na página HTML
    let container = document.getElementById("tabela-materias");
    container.appendChild(table);
  })
  .catch(error => console.log(error));