let calificaciones = [25, 91, 65, 69, 70];

for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] >= 70) {
        console.log(calificaciones[i] + " aprueba");
    } else {
        console.log(calificaciones[i] + " reprueba");
    }
}
