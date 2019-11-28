document.getElementById('formulario').addEventListener('submit', cadastrarPc);

function cadastrarPc(e){
    var modelo = document.getElementById('modelo').value;
    var marca = document.getElementById('marca').value;
    var time = new Date();

    if (!modelo && !marca) {
        alert("Por favor, preencha os campos em branco!");
        return false;
    }

    pc = {
        modelo: modelo,
        marca: marca,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }

    if(localStorage.getItem('modelo') === null){
        var pcs = [];
        pcs.push(pc);
        localStorage.setItem('modelo', JSON.stringify(pcs));
    } else {
        var pcs = JSON.parse(localStorage.getItem('modelo'));
        pcs.push(pc);
        localStorage.setItem('modelo', JSON.stringify(pcs));
    }

    document.getElementById('formulario').reset();

    mostrarPc();

    e.preventDefault();
}

function apagarPc(modelo){
    var pcs = JSON.parse(localStorage.getItem('modelo'));

    for(var i = 0; i < pcs.length; i++){
        if (pcs[i].modelo == modelo){
            pcs.splice(i, 1);
        }

        localStorage.setItem('modelo', JSON.stringify(pcs));
    }

    mostrarPc();
}

function mostrarPc(){
    var pcs = JSON.parse(localStorage.getItem('modelo'));
    var pcsResultados = document.getElementById('resultados');

    pcsResultados.innerHTML = '';

    for (var i = 0; i < pcs.length; i++) {
        var modelo = pcs[i].modelo;
        var marca = pcs[i].marca;

        pcsResultados.innerHTML += '<tr><td>' + modelo + 
                                    '</td><td>' + marca + 
                                    '</td><td><button class="btn btn-dark" onclick="editarPc(\''+ modelo +'\')">Editar</button>' + 
                                    '</td><td><button class="btn btn-danger" onclick="apagarPc(\''+ modelo +'\')">Excluir</button>' + 
                                    '</td></tr>';
        
    }
}

function editarPc(){

}