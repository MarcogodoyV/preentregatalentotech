const [node, file, method, resource, title, price, category] = process.argv;
const url = `https://fakestoreapi.com/${resource}`;

const productData = {};

if (title) productData.title = title;
if (price) productData.price = price;
if (category) productData.category = category;

const requestOptions = {
  method: method,
};

if (Object.keys(productData).length > 0) {
  requestOptions.body = JSON.stringify(productData);
  requestOptions.headers = {
    'Content-Type': 'application/json',
  };
}

console.log('Product:', productData);
console.log('requestOptions:', requestOptions);

fetch(url, requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));