var url = 'https://www.potterapi.com/v1/sortingHat';

fetch(url).then(function(response) {
  console.log(response);
  return response.json();
}).then(function(data) {
  console.log(data);
  document.getElementById('house').innerHTML = data;
}).catch(function() {
  console.log("Booo");
});
