let referencia = document.querySelector("#referencia a");
const animales = document.querySelectorAll(".li1");
const imágenes = document.querySelectorAll(".líneas");

animales.forEach(animal => {
    animal.addEventListener("click", () => {
        const animalSeleccionado = animal.dataset.línea;

        imágenes.forEach(img => {
            if (img.dataset.línea === animalSeleccionado) {
                img.classList.remove("activa");
                void img.offsetWidth;
                img.classList.add("activa");

                const nuevoRef = referencia.cloneNode(true);
                nuevoRef.href = img.dataset.link;
                nuevoRef.textContent = "Fuente de la imagen";
                referencia.parentNode.replaceChild(nuevoRef, referencia);
                referencia = nuevoRef;

                referencia.classList.remove("activa");
                requestAnimationFrame(() => {
                    referencia.classList.add("activa");
                });

            } else {
                img.classList.remove("activa");
            }
        });
    });
});
