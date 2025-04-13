const preguntas = [
    { texto: "¿Cuál es la capital de Francia?", opciones: ["Madrid", "Berlín", "París", "Roma"], correcta: 2 },
    { texto: "¿Qué planeta es conocido como el planeta rojo?", opciones: ["Venus", "Saturno", "Marte", "Júpiter"], correcta: 2 },
    { texto: "¿Quién pintó la Mona Lisa?", opciones: ["Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correcta: 2 },
    { texto: "¿Cuál es el río más largo del mundo?", opciones: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], correcta: 1 },
    { texto: "¿En qué continente se encuentra Egipto?", opciones: ["Europa", "Asia", "África", "América"], correcta: 2 },
    { texto: "¿Quién escribió 'Cien años de soledad'?", opciones: ["Mario Vargas Llosa", "Julio Cortázar", "Gabriel García Márquez", "Isabel Allende"], correcta: 2 },
    { texto: "¿Cuál es el idioma más hablado del mundo?", opciones: ["Inglés", "Español", "Hindi", "Chino mandarín"], correcta: 3 },
    { texto: "¿Qué gas necesitamos para respirar?", opciones: ["Dióxido de carbono", "Oxígeno", "Hidrógeno", "Nitrógeno"], correcta: 1 },
    { texto: "¿Cuántos huesos tiene el cuerpo humano adulto?", opciones: ["206", "210", "201", "190"], correcta: 0 },
    { texto: "¿Cuál es el océano más grande del mundo?", opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"], correcta: 2 },
    { texto: "¿Qué país inventó la pólvora?", opciones: ["India", "China", "Egipto", "Grecia"], correcta: 1 },
    { texto: "¿Quién fue el primer hombre en pisar la Luna?", opciones: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], correcta: 1 },
    { texto: "¿Qué instrumento tiene teclas, cuerdas y martillos?", opciones: ["Violín", "Piano", "Guitarra", "Arpa"], correcta: 1 },
    { texto: "¿Cuál es el país más grande del mundo?", opciones: ["Canadá", "Estados Unidos", "China", "Rusia"], correcta: 3 },
    { texto: "¿En qué país se encuentra la Torre Eiffel?", opciones: ["Italia", "Francia", "España", "Inglaterra"], correcta: 1 },
    { texto: "¿Qué elemento químico tiene el símbolo O?", opciones: ["Oro", "Osmio", "Oxígeno", "Óxido"], correcta: 2 },
    { texto: "¿Cuántos días tiene un año bisiesto?", opciones: ["365", "366", "364", "360"], correcta: 1 },
    { texto: "¿Quién escribió 'Don Quijote de la Mancha'?", opciones: ["Lope de Vega", "Gabriel García Márquez", "Miguel de Cervantes", "Federico García Lorca"], correcta: 2 },
    { texto: "¿En qué país se encuentra la Gran Muralla?", opciones: ["India", "Japón", "China", "Corea del Sur"], correcta: 2 },
    { texto: "¿Qué órgano del cuerpo humano bombea la sangre?", opciones: ["Pulmones", "Cerebro", "Hígado", "Corazón"], correcta: 3 },
    { texto: "¿Cuál es el metal más ligero?", opciones: ["Aluminio", "Litio", "Oro", "Hierro"], correcta: 1 },
    { texto: "¿Qué país ganó la Copa Mundial de Fútbol 2018?", opciones: ["Brasil", "Alemania", "Francia", "Argentina"], correcta: 2 },
    { texto: "¿Qué animal es el más grande del mundo?", opciones: ["Elefante", "Ballena azul", "Tiburón blanco", "Rinoceronte"], correcta: 1 },
    { texto: "¿Qué planeta tiene un anillo a su alrededor?", opciones: ["Venus", "Tierra", "Saturno", "Marte"], correcta: 2 },
    { texto: "¿Cuántos colores tiene el arcoíris?", opciones: ["5", "6", "7", "8"], correcta: 2 },
    { texto: "¿Cuál es el país con más habitantes del mundo?", opciones: ["India", "Estados Unidos", "Brasil", "China"], correcta: 3 },
    { texto: "¿Qué gas forma la mayor parte de la atmósfera?", opciones: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"], correcta: 2 },
    { texto: "¿Cuál es la moneda oficial de Japón?", opciones: ["Yuan", "Yen", "Won", "Dólar"], correcta: 1 },
    { texto: "¿Cuántos continentes hay?", opciones: ["5", "6", "7", "8"], correcta: 2 },
    { texto: "¿Quién escribió 'Romeo y Julieta'?", opciones: ["Shakespeare", "Dante", "Goethe", "Molière"], correcta: 0 },
    { texto: "¿Cuál es el desierto más grande del mundo?", opciones: ["Sáhara", "Gobi", "Kalahari", "Antártida"], correcta: 3 },
    { texto: "¿Qué país tiene forma de bota?", opciones: ["España", "Francia", "Italia", "Grecia"], correcta: 2 },
    { texto: "¿Cuál es el símbolo químico del oro?", opciones: ["Go", "Au", "Ag", "Or"], correcta: 1 },
    { texto: "¿Qué deporte se practica en Wimbledon?", opciones: ["Fútbol", "Tenis", "Golf", "Béisbol"], correcta: 1 },
    { texto: "¿Qué animal es símbolo de sabiduría?", opciones: ["León", "Serpiente", "Búho", "Zorro"], correcta: 2 },
    { texto: "¿Qué país tiene como capital a Ottawa?", opciones: ["Australia", "Canadá", "EE.UU.", "Suecia"], correcta: 1 },
    { texto: "¿Cuál es la capital de Argentina?", opciones: ["Santiago", "Montevideo", "Lima", "Buenos Aires"], correcta: 3 },
    { texto: "¿Cuál es la montaña más alta del mundo?", opciones: ["K2", "Kilimanjaro", "Everest", "Aconcagua"], correcta: 2 },
    { texto: "¿Quién fue Albert Einstein?", opciones: ["Pintor", "Científico", "Músico", "Inventor"], correcta: 1 },
    { texto: "¿Qué número romano representa el 50?", opciones: ["L", "V", "X", "C"], correcta: 0 },
    { texto: "¿Qué país tiene la mayor cantidad de volcanes?", opciones: ["Italia", "Chile", "Indonesia", "Japón"], correcta: 2 },
    { texto: "¿Cuál es el idioma oficial de Brasil?", opciones: ["Español", "Portugués", "Francés", "Inglés"], correcta: 1 },
    { texto: "¿Qué instrumento tiene cuerdas?", opciones: ["Piano", "Trompeta", "Guitarra", "Flauta"], correcta: 2 },
    { texto: "¿Quién escribió 'La Odisea'?", opciones: ["Homero", "Sófocles", "Virgilio", "Aristóteles"], correcta: 0 },
    { texto: "¿Qué país tiene como capital a Berlín?", opciones: ["Austria", "Alemania", "Suiza", "Holanda"], correcta: 1 },
    { texto: "¿Qué ciencia estudia los seres vivos?", opciones: ["Física", "Química", "Biología", "Geología"], correcta: 2 },
    { texto: "¿Cuántos lados tiene un triángulo?", opciones: ["3", "4", "5", "6"], correcta: 0 },
    { texto: "¿Cuál es el símbolo químico del agua?", opciones: ["H2", "O2", "H2O", "HO2"], correcta: 2 },
    { texto: "¿Qué órgano nos permite ver?", opciones: ["Corazón", "Pulmones", "Oídos", "Ojos"], correcta: 3 },
    { texto: "¿Quién pintó 'La noche estrellada'?", opciones: ["Dalí", "Van Gogh", "Picasso", "Monet"], correcta: 1 },
    { texto: "¿Qué país es conocido por las pirámides?", opciones: ["México", "Perú", "Egipto", "Grecia"], correcta: 2 },
    { texto: "¿En qué país nació Beethoven?", opciones: ["Francia", "Alemania", "Austria", "Italia"], correcta: 1 },
    { texto: "¿Qué parte del cuerpo usamos para oír?", opciones: ["Boca", "Oídos", "Manos", "Nariz"], correcta: 1 },
    { texto: "¿Cuál es el continente más pequeño?", opciones: ["Oceanía", "Europa", "Antártida", "África"], correcta: 0 },
    { texto: "¿Qué aparato sirve para medir la temperatura?", opciones: ["Microscopio", "Termómetro", "Barómetro", "Reloj"], correcta: 1 },
    { texto: "¿Qué país tiene más medallas olímpicas?", opciones: ["Rusia", "China", "EE.UU.", "Reino Unido"], correcta: 2 },
    { texto: "¿Cuál es la lengua clásica de la India?", opciones: ["Urdu", "Hindi", "Tamil", "Sánscrito"], correcta: 3 },
    { texto: "¿Quién fue el autor de '1984'?", opciones: ["Orwell", "Huxley", "Bradbury", "Asimov"], correcta: 0 },
    { texto: "¿Qué parte del cuerpo tiene el fémur?", opciones: ["Brazo", "Pierna", "Cabeza", "Pecho"], correcta: 1 },
    { texto: "¿Cuál es la fórmula del dióxido de carbono?", opciones: ["CO2", "H2O", "CH4", "O2"], correcta: 0 }
  ];

  //arreglo donde estara el indice de las preguntas realizadas
  const preguntasRealizadas = [];
  
  //La función que genera el indice aleatorio
  function obtenerIndiceAleatorio() {
    
    //Compara el tamaño del arreglo de las preguntas realizadas con el de preguntas
    //para determinar si el usuario ya finalizo el cuestionario
    if (preguntasRealizadas.length >= preguntas.length) {
      return null; // Ya no hay más preguntas
    }
    

    //Generar el indice del arreglo de 0 a 59
    let indice = Math.floor(Math.random() * preguntas.length);
  
    //evalua que si el indice generado esta dentro del arreglo
    //preguntas realizadas genere otro
    while (preguntasRealizadas.includes(indice)) {
      indice = Math.floor(Math.random() * preguntas.length);
    }

    //el indice generado lo agrega al arreglo preguntas realizadas y lo retorna
  
    preguntasRealizadas.push(indice);
    console.log(preguntasRealizadas.length)
    console.log(preguntas.length);
    return indice;
  }
  

  //funcion que muestra las preguntas
  function mostrarPregunta() {
    const indiceActual = obtenerIndiceAleatorio();
  
    //si indice es nulo como la condicion de arriba le dice al usuario que ha terminado
    if (indiceActual === null) {
      alert("¡Has terminado el cuestionario! ✅");
      return;
    }
    //genera pregunta en base al indice
    const p = preguntas[indiceActual];
    //genera pregunta
    let mensaje = p.texto + "\n" + "Elija el número de la opción correcta\n";
    
    //ciclo para generar las opciones
    for (let i = 0; i < p.opciones.length; i++) {
      mensaje += `${i + 1}. ${p.opciones[i]}\n`;
    }
  
    let respuesta;
    
    //ciclo para Salir del cuestionario le pregunta si desea salir y si es verdadero
    // le genera quiz cancelado sino llama a la variable continuar
    while (true) {
      const entrada = prompt(mensaje);
  
      if (entrada === null) {
        const salir = confirm("¿Deseas salir del quiz?");
        if (salir) {
          alert("Quiz cancelado.");
          return;
        } else {
          continue;
        }
      }
      

      //le resta 1 por que las respuesta empieza en cero      
      respuesta = parseInt(entrada) - 1;
      
      //mira que el usuario no se salga de los rangos de los indices de las respuesta
      if (!isNaN(respuesta) && respuesta >= 0 && respuesta < p.opciones.length) {
        break;
      } else {
        alert("Por favor, ingresa un número válido según las opciones.");
      }
    }
    //compara y evalua si la respuesta del usuario es correcta
    if (respuesta === p.correcta) {
      alert("¡Correcto! ✅");
    } else {
      alert(`Incorrecto ❌. La respuesta correcta era: ${p.opciones[p.correcta]}`);
    }

    //Si el usuario acepata ver la siguiente pregunta llamara a la funcion mostrar pregunta
  
    const continuar = confirm("¿Deseas ver la siguiente pregunta?");
    if (continuar) {
      mostrarPregunta();
    } else {
      alert("Gracias por participar en el quiz. 🧠");
    }
  }
  