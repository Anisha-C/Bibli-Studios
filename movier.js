const movier = require('movier');

movier.searchTitleByName('cop out').then(element => {
    console.log(element[0]);
})
