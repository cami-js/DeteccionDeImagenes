// Cargar el modelo MobileNet
let model;
(async function() {
    model = await mobilenet.load();
})();

// Función para cargar la imagen seleccionada por el usuario
async function predict() {
    const image = document.getElementById('fileInput').files[0];
    const imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(image);
    imgElement.width = 300;
    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('imageContainer').appendChild(imgElement);

    // Realizar la predicción con MobileNet
    const predictions = await model.classify(imgElement);
    
    // Mostrar el resultado de la predicción
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Resultado de la predicción:</h2>';
    predictions.forEach(prediction => {
        resultDiv.innerHTML += `<p>${prediction.className}: ${Math.round(prediction.probability * 100)}%</p>`;
    });
}










