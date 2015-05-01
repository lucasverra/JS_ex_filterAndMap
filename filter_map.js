var personapepe = { 
    nombre : "pepe",
    sexo : "M",
    edad : 30,
};

var personajuancarlos = { 
    nombre : "juan carlos",
    sexo : "M",
    edad : 20,
};

var personaalfredo = { 
    nombre : "alfredo",
    sexo : "M",
    edad : 10,
};

var personamaria = { 
    nombre : "maria",
    sexo : "F",
    edad : 56,
};

var personacarla = { 
    nombre : "carla",
    sexo : "F",
    edad : 70,
};

var personajosefa = { 
    nombre : "josefa",
    sexo : "F",
    edad : 44,
};


var list_of_students = [personapepe,personajuancarlos,personaalfredo,personamaria,personacarla,personajosefa] ;



        function solverOfThisExercice(array_de_estudiantes) {



            function filterBySexo(obj) {
              if ('sexo' in obj && obj.sexo === 'F' && obj.edad > 50) {return true;}
               else { return false;}
            }; 

            var arrBySexo = array_de_estudiantes.filter(filterBySexo); /* This generates an array of obj that respond to the filtering conditions */


            var arrOfNames = arrBySexo.map(function(item) {
            return item['nombre'];
                });

            console.log(arrOfNames);
        };