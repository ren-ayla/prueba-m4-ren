//VALIDACION INPUT SEARCH//
const PATRON_NUMERICO = /^((73[0-2])|(7[0-2][0-9]{1})|([1-6][0-9]{2})|([1-9][0-9]{1})|([1-9]))$/

//API AJAX//
const BASE_URL = 'https://www.superheroapi.com/api.php/4905856019427443';

const inputSuperHero = $('#input-superhero');
const buttonSearchSuperHero = $('#search-superhero');

const getOneSuperHero = function (inputSuperHero) { 

    return $.ajax({
        type: "GET",
        url: `${ BASE_URL }/${ inputSuperHero }`,
        dataType: 'json',
            success: function (data) {
                
                let htmlCard = `
                <div class="card mb-3">
                    <div class="row g-0 hero-container">

                        <div class="col-12 col-xxl-3 my-3 mx-3">

                            <img src="${data.image.url}" style="max-width: 330px;" class="img-fluid hero-img" alt="${data.name}">

                            <section id="chartContainer" class="mt-3 chart-container"> 

                            </section>

                        </div>

                        <div class="card-body col-12 col-xxl-8">
                            
                            <h4 class="mt-2 mb-4">
                                ${data.name}
                            </h4>
                            
                            <h5 class="card-subtitle mb-2 text-body-secondary">
                                <i>Biografía:</i>
                            </h5>
                        
                            <div class="card my-3 ml-3 col-12 col-xxl-11">

                                <ul class="list-group list-group-flush">

                                    <li class="list-group-item"><i>Nombre:</i> ${data.biography['full-name']}</li>
                                    <li class="list-group-item"><i>Lugar de nacimiento:</i> ${data.biography['place-of-birth']} </li>
                                    <li class="list-group-item"><i>Alias:</i> ${data.biography.aliases} </li>
                                    <li class="list-group-item"><i>Alter-egos:</i> ${data.biography['alter-egos']} </li>
                                    <li class="list-group-item"><i>Primera aparición:</i> ${data.biography['first-appearance']}</li>
                                    <li class="list-group-item"><i>Alineación:</i> ${data.biography.alignment}</li>
                                    <li class="list-group-item"><i>Publicado por:</i> ${data.biography.publisher} </li>
                                    
                                </ul>

                            </div>

                            <p class="card-text">
                                <small class="text-body-secondary">
                                    Character ID: ${data.id}
                                </small>
                            </p>

                            <div class="accordion col-12 col-xxl-11 mx-xxl-3 pt-3" id="accordionPanelsStayOpenExample">

                                <div class="accordion-item">
                    
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Apariencia
                                        </button>
                                    </h2>
                    
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    
                                        <div class="accordion-body">
                                            <div class="card col-12 col-lg-11">

                                                <ul class="list-group list-group-flush">
        
                                                    <li class="list-group-item"><i>Género: </i> ${data.appearance.gender}</li>
                                                    <li class="list-group-item"><i>Raza: </i> ${data.appearance.race} </li>
                                                    <li class="list-group-item"><i>Altura: </i> ${data.appearance.height[0]} - ${data.appearance.height[1]} </li>
                                                    <li class="list-group-item"><i>Peso: </i> ${data.appearance.weight[0]} - ${data.appearance.weight[1]} </li>
                                                    <li class="list-group-item"><i>Color de ojos: </i> ${data.appearance['eye-color']}</li>
                                                    <li class="list-group-item"><i>Color de cabello: </i> ${data.appearance['hair-color']}</li>
                                            
                                                </ul>
        
                                            </div>
                                        </div>
                    
                                    </div>
                    
                                </div>
                    
                                <div class="accordion-item">
                    
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                            Trabajo
                                        </button>
                                    </h2>
                    
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                    
                                        <div class="accordion-body">        
                                            <div class="card col-12 col-lg-11">

                                                <ul class="list-group list-group-flush">

                                                    <li class="list-group-item"><i>Ocupación/Hobbie: </i> ${data.work.occupation}</li>
                                                    <li class="list-group-item"><i>Base: </i> ${data.work.base} </li>
                                            
                                                </ul>

                                            </div> 
                                        </div>
                                        
                                    </div>
                    
                                </div>
                    
                                <div class="accordion-item">
                    
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                                            Conexiones
                                        </button>
                                    </h2>
                    
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                    
                                        <div class="accordion-body">
                                            <div class="card col-12 col-lg-11">

                                                <ul class="list-group list-group-flush">

                                                    <li class="list-group-item"><i>Grupos: </i> ${data.connections['group-affiliation']}</li>
                                                    <li class="list-group-item"><i>Parientes: </i> ${data.connections.relatives} </li>
                                            
                                                </ul>

                                            </div> 
                                        </div>
                    
                                    </div>
                                    
                                </div>

                            </div>
                        
                        </div>

                    </div>
                </div>
                `
            
            $("#oneSuperHero-section").html(htmlCard);
            createSuperHeroChart(data);
            },

            error: function (error) {
                console.log('Error al encontrar un Super Héroe', error)
            }
    });
    
}

//BUTTON ACTION SHOW SUPERHERO//
buttonSearchSuperHero.on('click', (event) => {
    
    event.preventDefault()

    if (!PATRON_NUMERICO.test(inputSuperHero.val())){
        document.querySelector('#oneSuperHero-error').innerHTML = '<h5>Por favor ingresa un valor permitido.</h5>'
    }
    
    if (PATRON_NUMERICO.test(inputSuperHero.val())){
        getOneSuperHero(inputSuperHero.val())
        document.querySelector('#oneSuperHero-error').innerHTML = ''
    }
    
})

//UP BUTTON TOOLTIP//
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
