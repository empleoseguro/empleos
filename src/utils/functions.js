export const getPostById = (data, postid) => {
    const filterList = data.filter((item) => item.id.toString().includes(postid));
    return filterList
}

export const pagination = (array, status) => {
    let newArray
    newArray = array.slice(status, status + 5)

    return newArray
}

export function readingTime(texto) {
    if (!texto || typeof texto !== 'string') {
        return 0; // Retorna 0 si el texto no es válido
    }

    const palabrasPorMinuto = 200; // Promedio de palabras por minuto
    const palabras = texto.trim().split(/\s+/).length; // Cuenta las palabras en el texto
    const minutos = palabras / palabrasPorMinuto; // Calcula los minutos de lectura
    return Math.ceil(minutos); // Redondea hacia arriba para obtener el número entero de minutos
}

export const numeroAleatorio = () => {
    return Math.floor(Math.random() * 5);
}

export function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }