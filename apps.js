function consultarDatos(seccion) {
    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = ''; // Limpiar los resultados anteriores

    let endpoint;

    // Definir el endpoint según la sección seleccionada
    switch (seccion) {
        case 'planetas':
            endpoint = 'planets';
            break;
        case 'naves':
            endpoint = 'starships';
            break;
        case 'vehiculos':
            endpoint = 'vehicles';
            break;
        case 'personajes':
            endpoint = 'people';
            break;
        case 'peliculas':
            endpoint = 'films';
            break;
        case 'especies':
            endpoint = 'species';
            break;
        default:
            return;
    }

    // Función para obtener todos los resultados mediante la paginación
    async function obtenerDatos(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            data.results.forEach(datos => {
                const tarjeta = document.createElement('div');
                tarjeta.className = 'tarjeta-resultado';

                const nombre = document.createElement('h2');
                nombre.textContent = `Nombre: ${datos.name || datos.title}`;
                tarjeta.appendChild(nombre);

                // Añadir detalles específicos según la sección
                if (seccion === 'planetas') {
                    const clima = document.createElement('p');
                    clima.textContent = `Clima: ${datos.climate}`;
                    tarjeta.appendChild(clima);

                    const poblacion = document.createElement('p');
                    poblacion.textContent = `Población: ${datos.population}`;
                    tarjeta.appendChild(poblacion);

                    const periodoOrbital = document.createElement('p');
                    periodoOrbital.textContent = `Período Orbital: ${datos.orbital_period}`;
                    tarjeta.appendChild(periodoOrbital);

                    const diametro = document.createElement('p');
                    diametro.textContent = `Diámetro: ${datos.diameter}`;
                    tarjeta.appendChild(diametro);

                    const terreno = document.createElement('p');
                    terreno.textContent = `Terreno: ${datos.terrain}`;
                    tarjeta.appendChild(terreno);
                } else if (seccion === 'naves' || seccion === 'vehiculos') {
                    const modelo = document.createElement('p');
                    modelo.textContent = `Modelo: ${datos.model}`;
                    tarjeta.appendChild(modelo);

                    const fabricante = document.createElement('p');
                    fabricante.textContent = `Fabricante: ${datos.manufacturer}`;
                    tarjeta.appendChild(fabricante);

                    const costoEnCreditos = document.createElement('p');
                    costoEnCreditos.textContent = `Costo en Créditos: ${datos.cost_in_credits}`;
                    tarjeta.appendChild(costoEnCreditos);

                    const capacidadCarga = document.createElement('p');
                    capacidadCarga.textContent = `Capacidad de Carga: ${datos.cargo_capacity}`;
                    tarjeta.appendChild(capacidadCarga);

                    const consumibles = document.createElement('p');
                    consumibles.textContent = `Consumibles: ${datos.consumables}`;
                    tarjeta.appendChild(consumibles);
                } else if (seccion === 'personajes') {
                    const altura = document.createElement('p');
                    altura.textContent = `Altura: ${datos.height} cm`;
                    tarjeta.appendChild(altura);

                    const masa = document.createElement('p');
                    masa.textContent = `Peso: ${datos.mass} kg`;
                    tarjeta.appendChild(masa);

                    const colorCabello = document.createElement('p');
                    colorCabello.textContent = `Color de Cabello: ${datos.hair_color}`;
                    tarjeta.appendChild(colorCabello);

                    const colorPiel = document.createElement('p');
                    colorPiel.textContent = `Color de Piel: ${datos.skin_color}`;
                    tarjeta.appendChild(colorPiel);

                    const colorOjos = document.createElement('p');
                    colorOjos.textContent = `Color de Ojos: ${datos.eye_color}`;
                    tarjeta.appendChild(colorOjos);

                    const genero = document.createElement('p');
                    genero.textContent = `Género: ${datos.gender}`;
                    tarjeta.appendChild(genero);
                } else if (seccion === 'especies') {
                    const clasificacion = document.createElement('p');
                    clasificacion.textContent = `Clasificación: ${datos.classification}`;
                    tarjeta.appendChild(clasificacion);

                    const altura = document.createElement('p');
                    altura.textContent = `Promedio De Altura: ${datos.average_height} Cm`;
                    tarjeta.appendChild(altura);

                    const colorCabello = document.createElement('p');
                    colorCabello.textContent = `Color de Cabello: ${datos.hair_colors}`;
                    tarjeta.appendChild(colorCabello);

                    const colorPiel = document.createElement('p');
                    colorPiel.textContent = `Color de Piel: ${datos.skin_colors}`;
                    tarjeta.appendChild(colorPiel);

                    const colorOjos = document.createElement('p');
                    colorOjos.textContent = `Color de Ojos: ${datos.eye_colors}`;
                    tarjeta.appendChild(colorOjos);

                    const lenguaje = document.createElement('p');
                    lenguaje.textContent = `Lenguaje: ${datos.language}`;
                    tarjeta.appendChild(lenguaje);
                } else if (seccion === 'peliculas') {
                    const productor = document.createElement('p');
                    productor.textContent = `Productor: ${datos.producer}`;
                    tarjeta.appendChild(productor);

                    const director = document.createElement('p');
                    director.textContent = `Director: ${datos.director}`;
                    tarjeta.appendChild(director);

                    const fecha = document.createElement('p');
                    fecha.textContent = `Fecha De Lanzamiento: ${datos.release_date}`;
                    tarjeta.appendChild(fecha);
                } else if (seccion === 'peliculas') {
                    const episodio = document.createElement('p');
                    episodio.textContent = `Episodio: ${datos.episode_id}`;
                    tarjeta.appendChild(episodio);

                    const director = document.createElement('p');
                    director.textContent = `Director: ${datos.director}`;
                    tarjeta.appendChild(director);
                } else if (seccion === 'especies') {
                    const clasificacion = document.createElement('p');
                    clasificacion.textContent = `Clasificación: ${datos.classification}`;
                    tarjeta.appendChild(clasificacion);

                    const colorPiel = document.createElement('p');
                    colorPiel.textContent = `Color de Piel: ${datos.skin_colors}`;
                    tarjeta.appendChild(colorPiel);
                }

                contenedorResultados.appendChild(tarjeta);
            });

            // Si hay más páginas, seguir obteniendo datos
            if (data.next) {
                obtenerDatos(data.next);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Iniciar la obtención de datos desde la primera página
    obtenerDatos(`https://swapi.py4e.com/api/${endpoint}/`);
}

async function consultarDatosPersonajes(filtro, valor) {
    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = ''; // Limpiar los resultados anteriores

    // Función para obtener todos los personajes de todas las páginas
    async function obtenerTodosLosPersonajes(url) {
        let personajes = [];
        try {
            while (url) {
                const response = await fetch(url);
                const data = await response.json();
                personajes = personajes.concat(data.results);
                url = data.next; // Actualizar la URL a la siguiente página
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        return personajes;
    }

    // Obtener todos los personajes
    const personajes = await obtenerTodosLosPersonajes('https://swapi.py4e.com/api/people/');

    // Filtrar personajes según el criterio dado
    const personajesFiltrados = personajes.filter(personaje => {
        if (filtro === 'gender') {
            return personaje.gender.toLowerCase() === valor.toLowerCase();
        } else if (filtro === 'hair_color') {
            return personaje.hair_color.toLowerCase() === valor.toLowerCase();
        } else if (filtro === 'eye_color') {
            return personaje.eye_color.toLowerCase() === valor.toLowerCase();
        } else if (filtro === 'mass') {
            return parseFloat(personaje.mass) > parseFloat(valor);
        }
        return false;
    });

    // Mostrar los personajes filtrados
    personajesFiltrados.forEach(personaje => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-resultado';

        const nombre = document.createElement('h2');
        nombre.textContent = `Nombre: ${personaje.name}`;
        tarjeta.appendChild(nombre);

        const altura = document.createElement('p');
        altura.textContent = `Altura: ${personaje.height} cm`;
        tarjeta.appendChild(altura);

        const masa = document.createElement('p');
        masa.textContent = `Peso: ${personaje.mass} kg`;
        tarjeta.appendChild(masa);

        const colorCabello = document.createElement('p');
        colorCabello.textContent = `Color de Cabello: ${personaje.hair_color}`;
        tarjeta.appendChild(colorCabello);

        const colorPiel = document.createElement('p');
        colorPiel.textContent = `Color de Piel: ${personaje.skin_color}`;
        tarjeta.appendChild(colorPiel);

        const colorOjos = document.createElement('p');
        colorOjos.textContent = `Color de Ojos: ${personaje.eye_color}`;
        tarjeta.appendChild(colorOjos);

        const genero = document.createElement('p');
        genero.textContent = `Género: ${personaje.gender}`;
        tarjeta.appendChild(genero);

        contenedorResultados.appendChild(tarjeta);
    });
}

async function consultarDatosPlanetas(filtro, valor) {
    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = ''; // Limpiar los resultados anteriores

    // Función para obtener todos los planetas de todas las páginas
    async function obtenerTodosLosPlanetas(url) {
        let planetas = [];
        try {
            while (url) {
                const response = await fetch(url);
                const data = await response.json();
                planetas = planetas.concat(data.results);
                url = data.next; // Actualizar la URL a la siguiente página
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        return planetas;
    }

    // Obtener todos los planetas
    const planetas = await obtenerTodosLosPlanetas('https://swapi.py4e.com/api/planets/');

    const planetasFiltrados = planetas.filter(planeta => {
        if (filtro === 'orbital_period') {
            return parseFloat(planeta.orbital_period) > valor;
        } else if (filtro === 'terrain') {
            return planeta.terrain.toLowerCase().includes(valor.toLowerCase());
        } else if (filtro === 'climate') {
            return planeta.climate.toLowerCase().includes(valor.toLowerCase());
        } else if (filtro === 'diameter') {
            return parseFloat(planeta.diameter) > valor;
        }
    });

    planetasFiltrados.forEach(planeta => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-resultado';

        const nombre = document.createElement('h2');
        nombre.textContent = `Nombre: ${planeta.name}`;
        tarjeta.appendChild(nombre);

        const clima = document.createElement('p');
        clima.textContent = `Clima: ${planeta.climate}`;
        tarjeta.appendChild(clima);

        const diametro = document.createElement('p');
        diametro.textContent = `Diámetro: ${planeta.diameter}`;
        tarjeta.appendChild(diametro);

        const terreno = document.createElement('p');
        terreno.textContent = `Terreno: ${planeta.terrain}`;
        tarjeta.appendChild(terreno);

        const periodoOrbital = document.createElement('p');
        periodoOrbital.textContent = `Período Orbital: ${planeta.orbital_period}`;
        tarjeta.appendChild(periodoOrbital);

        contenedorResultados.appendChild(tarjeta);
    });
}

async function consultarDatosNaves(filtro, valor) {
    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = ''; // Limpiar los resultados anteriores

    // Función para obtener todos los naves de todas las páginas
    async function obtenerTodasLasNaves(url) {
        let naves = [];
        try {
            while (url) {
                const response = await fetch(url);
                const data = await response.json();
                naves = naves.concat(data.results);
                url = data.next; // Actualizar la URL a la siguiente página
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        return naves;
    }

    // Obtener todos los naves
    const naves = await obtenerTodasLasNaves('https://swapi.py4e.com/api/starships/');

    const navesFiltradas = naves.filter(nave => {
        if (filtro === 'cost_in_credits') {
            return parseFloat(nave.cost_in_credits) < valor;
        } else if (filtro === 'cargo_capacity') {
            return parseFloat(nave.cargo_capacity) < valor;
        } else if (filtro === 'consumables') {
            return nave.consumables === valor;
        } else if (filtro === 'passengers') {
            return parseFloat(nave.passengers) < valor;
        } else if (filtro === 'hyperdrive_rating') {
            return parseFloat(nave.hyperdrive_rating) === valor;
        }
    });

    navesFiltradas.forEach(nave => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-resultado';

        const nombre = document.createElement('h2');
        nombre.textContent = `Nombre: ${nave.name}`;
        tarjeta.appendChild(nombre);

        const modelo = document.createElement('p');
        modelo.textContent = `Modelo: ${nave.model}`;
        tarjeta.appendChild(modelo);

        const fabricante = document.createElement('p');
        fabricante.textContent = `Fabricante: ${nave.manufacturer}`;
        tarjeta.appendChild(fabricante);

        const costoEnCreditos = document.createElement('p');
        costoEnCreditos.textContent = `Costo en Créditos: ${nave.cost_in_credits}`;
        tarjeta.appendChild(costoEnCreditos);

        const capacidadCarga = document.createElement('p');
        capacidadCarga.textContent = `Capacidad de Carga: ${nave.cargo_capacity}`;
        tarjeta.appendChild(capacidadCarga);

        const consumibles = document.createElement('p');
        consumibles.textContent = `Consumibles: ${nave.consumables}`;
        tarjeta.appendChild(consumibles);

        const pasajeros = document.createElement('p');
        pasajeros.textContent = `Pasajeros: ${nave.passengers}`;
        tarjeta.appendChild(pasajeros);

        const hiperdrive = document.createElement('p');
        hiperdrive.textContent = `Hiperdrive Rating: ${nave.hyperdrive_rating}`;
        tarjeta.appendChild(hiperdrive);

        contenedorResultados.appendChild(tarjeta);
    });
}

async function consultarDatosVehiculos(filtro, valor) {
    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = ''; // Limpiar los resultados anteriores

    // Función para obtener todos los vehiculos de todas las páginas
    async function obtenerTodasLasNaves(url) {
        let vehiculos = [];
        try {
            while (url) {
                const response = await fetch(url);
                const data = await response.json();
                vehiculos = vehiculos.concat(data.results);
                url = data.next; // Actualizar la URL a la siguiente página
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        return vehiculos;
    }

    // Obtener todos los vehiculos
    const vehiculos = await obtenerTodasLasNaves('https://swapi.py4e.com/api/vehicles/');
    const vehiculosFiltradas = vehiculos.filter(vehiculo => {
        if (filtro === 'cargo_capacity') {
            return parseFloat(vehiculo.cost_in_credits) < valor;
        } else if (filtro === 'consumables') {
            return vehiculo.consumables === valor;
        } else if (filtro === 'passengers') {
            return parseFloat(vehiculo.passengers) > valor;
        } else if (filtro === 'max_atmosphering_speed') {
            return parseFloat(vehiculo.max_atmosphering_speed) > valor;
        } else if (filtro === 'vehicle_class') {
            return vehiculo.vehicle_class === valor;
        }
    });

    vehiculosFiltradas.forEach(vehiculo => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-resultado';

        const nombre = document.createElement('h2');
        nombre.textContent = `Nombre: ${vehiculo.name}`;
        tarjeta.appendChild(nombre);

        const modelo = document.createElement('p');
        modelo.textContent = `Modelo: ${vehiculo.model}`;
        tarjeta.appendChild(modelo);

        const fabricante = document.createElement('p');
        fabricante.textContent = `Fabricante: ${vehiculo.manufacturer}`;
        tarjeta.appendChild(fabricante);

        const clasevehiculo = document.createElement('p');
        clasevehiculo.textContent = `Clase de Vehiculo: ${vehiculo.vehicle_class}`;
        tarjeta.appendChild(clasevehiculo);

        const capacidadCarga = document.createElement('p');
        capacidadCarga.textContent = `Capacidad de Carga: ${vehiculo.cargo_capacity}`;
        tarjeta.appendChild(capacidadCarga);

        const consumibles = document.createElement('p');
        consumibles.textContent = `Consumibles: ${vehiculo.consumables}`;
        tarjeta.appendChild(consumibles);

        const pasajeros = document.createElement('p');
        pasajeros.textContent = `Pasajeros: ${vehiculo.passengers}`;
        tarjeta.appendChild(pasajeros);

        const maxvelocidad = document.createElement('p');
        maxvelocidad.textContent = `Maxima Velocidad: ${vehiculo.max_atmosphering_speed}`;
        tarjeta.appendChild(maxvelocidad);

        contenedorResultados.appendChild(tarjeta);
    });
}

async function consultarDatosPeliculas(filtro, valor) {
    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = ''; // Limpiar los resultados anteriores

    // Función para obtener todos los vehiculos de todas las páginas
    async function obtenerTodasLasPeliculas(url) {
        let peliculas = [];
        try {
            while (url) {
                const response = await fetch(url);
                const data = await response.json();
                peliculas = peliculas.concat(data.results);
                url = data.next; // Actualizar la URL a la siguiente página
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        return peliculas;
    }

    // Obtener todas las peliculas
    const peliculas = await obtenerTodasLasPeliculas('https://swapi.py4e.com/api/films/');
    const contarProductores = peliculas.reduce((conteo, pelicula) => {
        if (pelicula.producer in conteo) {
            conteo[pelicula.producer]++;
        } else {
            conteo[pelicula.producer] = 1;
        }
        return conteo;
    }, {});
    const peliculasFiltradas = peliculas.filter(pelicula => {
        if (filtro === 'director') {
            return pelicula.director.toLowerCase().startsWith(valor);
        } else if (filtro === 'producer') {
            return contarProductores[pelicula.producer] > 1;
        } else if (filtro === 'producerini') {
            return pelicula.producer.toLowerCase().startsWith(valor);
        }
    });

    peliculasFiltradas.forEach(pelicula => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-resultado';

        const nombre = document.createElement('h2');
        nombre.textContent = `Nombre: ${pelicula.name || pelicula.title}`;
        tarjeta.appendChild(nombre);

        const productor = document.createElement('p');
        productor.textContent = `Productor: ${pelicula.producer}`;
        tarjeta.appendChild(productor);

        const director = document.createElement('p');
        director.textContent = `Director: ${pelicula.director}`;
        tarjeta.appendChild(director);

        const fecha = document.createElement('p');
        fecha.textContent = `Fecha De Lanzamiento: ${pelicula.release_date}`;
        tarjeta.appendChild(fecha);

        contenedorResultados.appendChild(tarjeta);
    });
}

async function consultarDatosEspecies(filtro, valor) {
    const contenedorResultados = document.getElementById('resultados');
    contenedorResultados.innerHTML = ''; // Limpiar los resultados anteriores

    async function obtenerTodasLasEspecies(url) {
        let especies = [];
        try {
            while (url) {
                const response = await fetch(url);
                const data = await response.json();
                especies = especies.concat(data.results);
                url = data.next; // Actualizar la URL a la siguiente página
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
        return especies;
    }

    // Obtener todas las especies
    const especies = await obtenerTodasLasEspecies('https://swapi.py4e.com/api/species/');
    const especiesFiltradas = especies.filter(especie => {
        if (filtro === 'average') {
            return parseFloat(especie.average_height) < valor;
        } else if (filtro === 'classification') {
            return especie.classification === valor;
        } else if (filtro === 'lenguaje') {
            return especie.language.toLowerCase() === valor.toLowerCase();
        } else if (filtro === 'skin') {
            return especie.skin_colors.toLowerCase().includes(valor);
        } else if (filtro === 'eyes') {
            return especie.eye_colors.toLowerCase().includes(valor);
        }
    });

    especiesFiltradas.forEach(especie => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-resultado';

        const nombre = document.createElement('h2');
        nombre.textContent = `Nombre: ${especie.name}`;
        tarjeta.appendChild(nombre);

        const clasificacion = document.createElement('p');
        clasificacion.textContent = `Clasificación: ${especie.classification}`;
        tarjeta.appendChild(clasificacion);

        const altura = document.createElement('p');
        altura.textContent = `Promedio De Altura: ${especie.average_height} Cm`;
        tarjeta.appendChild(altura);

        const colorCabello = document.createElement('p');
        colorCabello.textContent = `Color de Cabello: ${especie.hair_colors}`;
        tarjeta.appendChild(colorCabello);

        const colorPiel = document.createElement('p');
        colorPiel.textContent = `Color de Piel: ${especie.skin_colors}`;
        tarjeta.appendChild(colorPiel);

        const colorOjos = document.createElement('p');
        colorOjos.textContent = `Color de Ojos: ${especie.eye_colors}`;
        tarjeta.appendChild(colorOjos);

        const lenguaje = document.createElement('p');
        lenguaje.textContent = `Lenguaje: ${especie.language}`;
        tarjeta.appendChild(lenguaje);

        contenedorResultados.appendChild(tarjeta);
    });
}

document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', (evento) => {
        evento.preventDefault();
        const seccion = evento.target.dataset.seccion;
        if (seccion) {
            if (seccion === 'personajes') {
                document.getElementById('filtros-personajes').style.display = 'block';
                document.getElementById('filtros-planetas').style.display = 'none';
                document.getElementById('filtros-naves').style.display = 'none';
                document.getElementById('filtros-vehiculos').style.display = 'none';
                document.getElementById('filtros-peliculas').style.display = 'none';
                document.getElementById('filtros-especies').style.display = 'none';
                consultarDatos(seccion);
            } else if (seccion === 'planetas') {
                document.getElementById('filtros-personajes').style.display = 'none';
                document.getElementById('filtros-planetas').style.display = 'block';
                document.getElementById('filtros-naves').style.display = 'none';
                document.getElementById('filtros-vehiculos').style.display = 'none';
                document.getElementById('filtros-peliculas').style.display = 'none';
                document.getElementById('filtros-especies').style.display = 'none';
                consultarDatos(seccion);
            } else if (seccion === 'naves') {
                document.getElementById('filtros-personajes').style.display = 'none';
                document.getElementById('filtros-planetas').style.display = 'none';
                document.getElementById('filtros-naves').style.display = 'block';
                document.getElementById('filtros-vehiculos').style.display = 'none';
                document.getElementById('filtros-peliculas').style.display = 'none';
                document.getElementById('filtros-especies').style.display = 'none';
                consultarDatos(seccion);
            } else if (seccion === 'vehiculos') {
                document.getElementById('filtros-personajes').style.display = 'none';
                document.getElementById('filtros-planetas').style.display = 'none';
                document.getElementById('filtros-naves').style.display = 'none';
                document.getElementById('filtros-vehiculos').style.display = 'block';
                document.getElementById('filtros-peliculas').style.display = 'none';
                document.getElementById('filtros-especies').style.display = 'none';
                consultarDatos(seccion);
            } else if (seccion === 'peliculas') {
                document.getElementById('filtros-personajes').style.display = 'none';
                document.getElementById('filtros-planetas').style.display = 'none';
                document.getElementById('filtros-naves').style.display = 'none';
                document.getElementById('filtros-vehiculos').style.display = 'none';
                document.getElementById('filtros-peliculas').style.display = 'block';
                document.getElementById('filtros-especies').style.display = 'none';
                consultarDatos(seccion);
            } else if (seccion === 'especies') {
                document.getElementById('filtros-personajes').style.display = 'none';
                document.getElementById('filtros-planetas').style.display = 'none';
                document.getElementById('filtros-naves').style.display = 'none';
                document.getElementById('filtros-vehiculos').style.display = 'none';
                document.getElementById('filtros-peliculas').style.display = 'none';
                document.getElementById('filtros-especies').style.display = 'block';
                consultarDatos(seccion);
            } else {
                document.getElementById('filtros-personajes').style.display = 'none';
                document.getElementById('filtros-planetas').style.display = 'none';
                document.getElementById('filtros-naves').style.display = 'none';
                document.getElementById('filtros-vehiculos').style.display = 'none';
                document.getElementById('filtros-peliculas').style.display = 'none';
                document.getElementById('filtros-especies').style.display = 'none';
                consultarDatos(seccion);
            }
        }
    });
});
