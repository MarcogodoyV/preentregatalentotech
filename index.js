//Se obtiene parametros por consola
const [node, file, method, resource, title, price, category] = process.argv;
//Se concatena el recurso
const url = `https://fakestoreapi.com/${resource}`;

const productData = {};

//Condiciona los parametros, en caso de existir lo añade al body de la request, lo hago de esta manera ya que todos son opcionales
if (title) productData.title = title;
if (price) productData.price = price;
if (category) productData.category = category;


const requestOptions = {
  method: method,
};


//Si productData tiene parametros, entonces añade la data a la request
if (Object.keys(productData).length > 0) {
  requestOptions.body = JSON.stringify(productData);
  requestOptions.headers = {
    'Content-Type': 'application/json',
  };
}

productData.title && console.log('Product:', productData);       
console.log('requestOptions:', requestOptions);


fetch(url, requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result)) //Imprime resultado
  .catch((error) => console.error(`Something went wrong, please try again (for more information of how to use this script please read the README": ${error}`)); //Manejo de errores