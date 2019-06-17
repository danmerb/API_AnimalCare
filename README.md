# API_AnimalCare
Guia:

/especie

GETs:
1- /
Obtener todos las especies
2- /(nombreDeLaEspecie)
Obtener solo las razas de esa especie
3- /(nombreDeLaEspecie)/(nombreRaza)
Obtener la especie con solo un datos(la raza que se dice )

POSTs:
1- /
Añadir una nueva especie
NECESITA DE BODY: (nombreEspecie)
2- /(nombreEspecie)
Añadir una raza
NECESITA DE BODY: (nombreRaza) y (descripcion)
3- /(nombreEspecie)/Enfermedad/(nombreRaza)
Añadir una enfermedad a la raza :(
NECESITA DE BODY : (nombreEnfermedad) Y (descripccionEnfermedad)
4- /(nombreEspecie)/Alimentacion/(nombreRaza)
Añade habito de comida a especie
NECESITA DE BODY: (peso), (cantidadDevecesAlDia)

/ley

GETs:
1- / 
Obtener todas las leyes

POSTS:
1- /
Añadir ley
NECESITA DE BODY: (nombre_ley) y (descripcion_ley)

/organizacion

GETs:
1- / 
Obtener todas las organizaciones

POSTS:
1- /
Añadir ley
NECESITA DE BODY: (nombre) , (telefono) y (direccion)
