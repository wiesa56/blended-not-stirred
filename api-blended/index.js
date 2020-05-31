const express = require('express');
const cors = require('cors')


const app = express();
app.use(cors());

var Recipe = require('./models/Recipe')

app.get('/get_recipe/:id', (req, res) => {
/*
    var mango = new Recipe({ 
        name: "Tropical Smoothie",
        type: "SMOOTHIE",
        ingredients: [
            {name: "mango", amount: "1", amountType: "diced"},
            {name: "frozen strawberries", amount: "1", amountType: "cup"},
            {name: "low-fat vanilla yogurt", amount: "1", amountType: "cup"},
            {name: "pineapple", amount: "6", amountType: "ounches"},
            {name: "frozen blueberries", amount: "1/2", amountType: "cup"}
        ],
        categories: ["low_fat", "nut free"]
     });

    mango.save(() => {
        console.log("Saved");
        Recipe.find({}, (err, result) => {
        console.log(result);
    })
    });
*/
    Recipe.find({}, (err, result) => {
        console.log(result[0].ingredients[1].name);
    })

});
    


const server = app.listen(8181, () => {
    console.log("Listening at ", server.address().port);
});