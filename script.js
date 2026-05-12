      
      
      function salvarPlantio() {
            const planta = {
                cultura: document.getElementById('cultura').value,
                data: document.getElementById('data-plantio').value,
                local: "Horta Centro-Norte",
                status: "Em crescimento"
            };


          

console.log(planta);

            if (!planta.data) {
                alert("Por favor, selecione uma data!");
                return;
            }

            // Pega o que já existe no "banco" ou cria uma lista vazia
            const listaHortas = JSON.parse(localStorage.getItem('minhasHortas')) || [];
            
            // Adiciona a nova planta
            listaHortas.push(planta);
            
            // Salva de volta no navegador
            localStorage.setItem('minhasHortas', JSON.stringify(listaHortas));

            alert("Plantio confirmado com sucesso!");
            window.location.href = "painelcontrole.html"; // Vai para o painel
        }


  
