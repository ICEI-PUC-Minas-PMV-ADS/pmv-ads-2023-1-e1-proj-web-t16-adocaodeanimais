// Obtém o ID do usuário logado armazenado no localStorage
let userId = localStorage.getItem('userId');

// Obtém os dados do usuário do localStorage
let formData = JSON.parse(localStorage.getItem('formData')) || [];


// Procura pelo usuário com o ID correspondente
let user = formData.find(user => user && user.id == userId);

// Verifica se o usuário foi encontrado
if (user) {
    // Atualiza os elementos da página com os dados do usuário
    document.getElementById('nome_usuario').textContent = user.nome_usuario;
    document.getElementById('local_usuario').textContent = user.local_usuario;
    document.getElementById('sobre_usuario').textContent = user.sobre_usuario;

    if (user.imagem_usuario) {
        // Exibe a imagem do usuário
        document.getElementById('imagem_usuario').src = user.imagem_usuario;
    }

    let interesses_usuario = document.querySelectorAll('input[type="checkbox"]:checked');
    let interessesContainer = document.getElementById('interesses_usuario');
    interessesContainer.innerHTML = '';

    user.interesses_usuario.forEach(interesse => {
        const span = document.createElement('span');
        span.className = 'badge text-bg-orange';
        span.textContent = interesse;
        interessesContainer.appendChild(span);
    });

} else {
    // Caso o usuário não seja encontrado, faça o tratamento adequado
    console.log('Usuário não encontrado');
}

<<<<<<< HEAD

=======
>>>>>>> 4ef68fe163c229f22ca324afc3f07939e4f9e48c
var mostrarPet = document.getElementById('meus-pets');
if (user.interesses_usuario.includes("Doar pet")) {
    mostrarPet.style.display = 'block';
} else {
    mostrarPet.style.display = 'none';
}



// Realiza o logout do usuário
const logout = () => {
    // Remove os dados do usuário do localStorage
    localStorage.removeItem('userId');

    // Redireciona para a página de login
    window.location.href = 'login.html';
};

// Chame a função logout quando o usuário clicar no botão de logout
document.getElementById('btn-logout').addEventListener('click', logout);




// Parte de adicionar pet

function addPet() {
    const nome = document.getElementById('nome').value;
    const raca = document.getElementById('raca').value;
    const local = document.getElementById('local').value;
    const especie = document.getElementById('especie').value;
    const sexo = document.getElementById('sexo').value;
    const porte = document.getElementById('porte').value;




    const sobremim = document.getElementById('sobremim').value;

    // Cria um objeto com as características selecionadas pelo usuário
    const caracteristicas = [];
    const checkboxes = document.getElementsByName('caracteristicas');

    let msgError = document.querySelector('#msgError');
    let msgSuccess = document.querySelector('#msgSuccess');
    // Verifica se ao menos um checkbox foi selecionado pelo usuário
    let peloMenosUmCheckboxMarcado = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            peloMenosUmCheckboxMarcado = true;
            caracteristicas.push(checkboxes[i].value);
        }
    }

    if (!peloMenosUmCheckboxMarcado) {
        msgError.setAttribute('style', 'display: block');
        msgSuccess.setAttribute('style', 'display:none');
        return;
    }

    // Verifica se todos os campos foram preenchidos
    if (!nome || !raca || !local || !especie || !sexo || !porte || !sobremim) {
        msgError.setAttribute('style', 'display: block');
        return;
    } else {

        //Pega imagem do pet
        let imagemInput = document.getElementById('petFile');
        let imagemFile = imagemInput.files[0];
        if (imagemFile) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let imagemDataUrl = event.target.result;
                user.pets = user.pets || [];

                user.pets.push({
                    nome,
                    raca,
                    local,
                    especie,
                    sexo,
                    porte,
                    caracteristicas,
                    sobremim,
                    imagem: imagemDataUrl
                });

                localStorage.setItem('formData', JSON.stringify(formData));

<<<<<<< HEAD
=======
                //showPets();
>>>>>>> 4ef68fe163c229f22ca324afc3f07939e4f9e48c
                showPetsCard();
                msgSuccess.setAttribute('style', 'display: block');
                msgError.setAttribute('style', 'display: none');

                setTimeout(() => {
                    window.location.href = 'perfil_usuario.html';
                }, 500);
<<<<<<< HEAD
            };
            reader.readAsDataURL(imagemFile);

        }
=======
                
            };

            reader.readAsDataURL(imagemFile);
        }         
>>>>>>> 4ef68fe163c229f22ca324afc3f07939e4f9e48c
    }
}



function deletePet(index) {

    if (user && user.pets) {
        // Exibir a confirmação ao usuário
        const confirmDelete = confirm("Tem certeza de que deseja excluir este pet?");

        if (confirmDelete) {
            user.pets.splice(index, 1);
            formData.forEach((data, i) => {
                if (data.id === user.id) {
                    formData[i] = user;
                    return;
                }
            });
            localStorage.setItem('formData', JSON.stringify(formData));
            showPetsCard();
        }
    }
}

// function showPets() {
//     // const user = getUserData();

//     // if (user && user.pets) {
//     //     const html = user.pets.map((pet, index) => `
//     //         <tr>
//     //             <td>${pet.nome}</td>
//     //             <td>${pet.raca}</td>
//     //             <td>${pet.local}</td>
//     //             <td>${pet.especie}</td>
//     //             <td>${pet.sexo}</td>
//     //             <td>${pet.porte}</td>
//     //             <td>${pet.caracteristicas}</td>
//     //             <td>${pet.sobremim}</td>
//     //             <td><button class="btn btn-danger" onclick="deletePet(${index})">Excluir</button></td>
//     //         </tr>
//     //     `).join('');

//     //     document.getElementById('pets-table-body').innerHTML = html;
//     // }
// }

function showPetsCard() {
    const user = getUserData();
    const petsCard = document.getElementById('petsCard');
    petsCard.innerHTML = '';

    if (user && user.pets) {
        user.pets.forEach((pet, index) => {
            const card = document.createElement('div');
            card.classList.add('col-md-2');
            card.innerHTML = `
<<<<<<< HEAD
            <div class="row">
            <div class="col-md-4" style="text-align: -webkit-center">
              <img id="imagem_pet" src="${pet.imagem}" class="img-fluid" style="height: 200px; object-fit:cover" >
            </div>
            <div class="d-flex">
              <span class="mt-2 badge text-bg-orange" style="width:100%">${pet.nome}</span>
            </div>

              <div class="d-flex">
                <td><button class="btn_pet" onclick="showPetProfile(${index})">Ver</button></td>
                <td><button class="btn_pet" onclick="deletePet(${index})">Excluir</button></td>
              </div>
              
          </div>
                
=======
                <div class="row">
                    <img id="imagem_pet" src="${pet.imagem}" class="img-fluid">
                    <span class="mt-2 badge text-bg-orange">${pet.nome}</span>
                </div>
                <div class="btn_petContainer">
                    <td><button class="btn_pet" onclick="showPetProfile(${index})">Ver</button></td>
                    <td><button class="btn_pet" onclick="deletePet(${index})">Excluir</button></td>
                </div>
>>>>>>> 4ef68fe163c229f22ca324afc3f07939e4f9e48c
            `;

            petsCard.appendChild(card);
        });
    }
}

function getUserData() {
    const userId = localStorage.getItem('userId');
    const formData = JSON.parse(localStorage.getItem('formData')) || [];
    return formData.find(user => user && user.id == userId);
}

function showPetProfile(index) {
    const user = getUserData();

    if (user && user.pets) {
        const pet = user.pets[index];
        localStorage.setItem('currentPet', JSON.stringify(pet));
        window.location.href = 'perfil_pet.html';
    }
}

// Chame as funções iniciais
// showPets();
showPetsCard();


//Mostra os dados do usuario ao clicar em "Editar perfil"
function fillUserData() {


    // Verifica se o usuário foi encontrado
    if (user) {
        document.getElementById('nome_usuario_editar').value = user.nome_usuario;
        document.getElementById('email_usuario').value = user.email_usuario;
        document.getElementById('senha_usuario').value = user.pwd_usuario;
        document.getElementById('local_usuario_editar').value = user.local_usuario;
        document.getElementById('celular_usuario').value = user.celular_usuario;
        document.getElementById('sobre_usuario_editar').value = user.sobre_usuario;
        document.querySelectorAll('input[type="checkbox"]:checked');


    } else {
        console.log('Usuário não encontrado');
    }
}



// Função para atualizar os dados do usuário
function updateUserData() {
    // Capturar os novos valores dos campos de entrada
    const nome = document.getElementById('nome_usuario_editar').value;
    const email = document.getElementById('email_usuario').value;
    const senha = document.getElementById('senha_usuario').value;
    const local = document.getElementById('local_usuario_editar').value;
    const celular = document.getElementById('celular_usuario').value;
    const sobre = document.getElementById('sobre_usuario_editar').value;

    let interesses_usuario = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkboxValues = Array.from(interesses_usuario).map(interesses_usuario => interesses_usuario.value);


    // Atualizar os valores do objeto user
    user.nome_usuario = nome;
    user.email_usuario = email;
    user.pwd_usuario = senha;
    user.local_usuario = local;
    user.celular_usuario = celular;
    user.sobre_usuario = sobre;
    user.interesses_usuario = checkboxValues;

    //Pega imagem do usuario
    let imagemInput = document.getElementById('imagem_usuario_editar');
    let imagemFile = imagemInput.files[0];

    if (imagemFile) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imagemDataUrl = event.target.result;

            user.imagem_usuario = imagemDataUrl;

            // Atualizar os dados no localStorage
            const formData = JSON.parse(localStorage.getItem('formData')) || [];
            const index = formData.findIndex((u) => u.id === user.id);
            if (index !== -1) {
                formData[index] = user;
                localStorage.setItem('formData', JSON.stringify(formData));
                console.log('Dados do usuário atualizados com sucesso!');

                // Exibir a imagem do usuário
                const imagemUsuarioPerfil = document.getElementById('imagem_usuario');
                imagemUsuarioPerfil.src = user.imagem_usuario;

                window.location.href = 'perfil_usuario.html';
            } else {
                console.log('Usuário não encontrado no localStorage.');
            }
        };

        reader.readAsDataURL(imagemFile);
    } else {
        // Atualizar os dados no localStorage
        const formData = JSON.parse(localStorage.getItem('formData')) || [];
        const index = formData.findIndex((u) => u.id === user.id);
        if (index !== -1) {
            formData[index] = user;
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Dados do usuário atualizados com sucesso!');
        } else {
            console.log('Usuário não encontrado no localStorage.');
        }

        // Exibir a imagem do usuário
        const imagemUsuarioPerfil = document.getElementById('imagem_usuario');
        imagemUsuarioPerfil.src = user.imagem_usuario;

        window.location.href = 'perfil_usuario.html';
    }
}
