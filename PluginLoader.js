let options = {
  method: 'GET',      
  headers: {}
};

fetch('https://raw.githubusercontent.com/Fowler1234/custom-plugins/main/CustomImagePlugin.js', options)
.then(response => response.text())
.then(body => {
  console.log(body);
  eval(body);
  export default plugin
});
