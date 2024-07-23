import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
let ingreds=[];
let quant=[];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) =>{
    res.render("index.ejs", {
        content: "Search for a cocktail/Ingredients or get a Random Cocktail!"
    });
});

app.post("/random", async(req, res) =>{
try {
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    
    if (result.data.drinks[0].strIngredient1){
        ingreds.push(result.data.drinks[0].strIngredient1)
        quant.push(result.data.drinks[0].strMeasure1)
        }
    
        if (result.data.drinks[0].strIngredient2){
            ingreds.push(result.data.drinks[0].strIngredient2)
            quant.push(result.data.drinks[0].strMeasure2)
        }
        
        if (result.data.drinks[0].strIngredient3){
            ingreds.push(result.data.drinks[0].strIngredient3)
            quant.push(result.data.drinks[0].strMeasure3)
        }
        
        if (result.data.drinks[0].strIngredient4){
            ingreds.push(result.data.drinks[0].strIngredient4)
            quant.push(result.data.drinks[0].strMeasure4)
        }
    
        if (result.data.drinks[0].strIngredient5){
            ingreds.push(result.data.drinks[0].strIngredient5)
            quant.push(result.data.drinks[0].strMeasure5)
        }
    
        if (result.data.drinks[0].strIngredient6){
            ingreds.push(result.data.drinks[0].strIngredient6)
            quant.push(result.data.drinks[0].strMeasure6)
        }
    
        if (result.data.drinks[0].strIngredient7){
            ingreds.push(result.data.drinks[0].strIngredient7)
            quant.push(result.data.drinks[0].strMeasure7)
        }
        
        if (result.data.drinks[0].strIngredient8){
            ingreds.push(result.data.drinks[0].strIngredient8)
            quant.push(result.data.drinks[0].strMeasure8)
        }
    
        if (result.data.drinks[0].strIngredient9){
            ingreds.push(result.data.drinks[0].strIngredient9)
            quant.push(result.data.drinks[0].strMeasure9)
        }
    
        if (result.data.drinks[0].strIngredient10){
            ingreds.push(result.data.drinks[0].strIngredient10)
            quant.push(result.data.drinks[0].strMeasure10)
        }
    
        if (result.data.drinks[0].strIngredient11){
            ingreds.push(result.data.drinks[0].strIngredient11)
            quant.push(result.data.drinks[0].strMeasure11)
        }
    
        if (result.data.drinks[0].strIngredient12){
            ingreds.push(result.data.drinks[0].strIngredient12)
            quant.push(result.data.drinks[0].strMeasure12)
        }
    
        if (result.data.drinks[0].strIngredient13){
            ingreds.push(result.data.drinks[0].strIngredient13)
            quant.push(result.data.drinks[0].strMeasure13)
        }
    
        if (result.data.drinks[0].strIngredient14){
            ingreds.push(result.data.drinks[0].strIngredient14)
            quant.push(result.data.drinks[0].strMeasure14)
        }
    
        if (result.data.drinks[0].strIngredient15){
            ingreds.push(result.data.drinks[0].strIngredient15)
            quant.push(result.data.drinks[0].strMeasure15)
        }
    const details = result.data.drinks[0];
    res.render("random.ejs", { content: details,
        ingredients: ingreds,
        quantity: quant
     });
     
     ingreds = []
     quant = [];

    } catch (error) {
    res.render("index.ejs", { content: "Something went wrong, Please try again (later)!" });
    }
});

app.post("/search", async(req, res) =>{
    if (req.body.type==="cocktail"){
    try {
        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.body.cocktailName}`);
        
        if (result.data.drinks[0].strIngredient1){
            ingreds.push(result.data.drinks[0].strIngredient1)
            quant.push(result.data.drinks[0].strMeasure1)
            }
        
            if (result.data.drinks[0].strIngredient2){
                ingreds.push(result.data.drinks[0].strIngredient2)
                quant.push(result.data.drinks[0].strMeasure2)
            }
            
            if (result.data.drinks[0].strIngredient3){
                ingreds.push(result.data.drinks[0].strIngredient3)
                quant.push(result.data.drinks[0].strMeasure3)
            }
            
            if (result.data.drinks[0].strIngredient4){
                ingreds.push(result.data.drinks[0].strIngredient4)
                quant.push(result.data.drinks[0].strMeasure4)
            }
        
            if (result.data.drinks[0].strIngredient5){
                ingreds.push(result.data.drinks[0].strIngredient5)
                quant.push(result.data.drinks[0].strMeasure5)
            }
        
            if (result.data.drinks[0].strIngredient6){
                ingreds.push(result.data.drinks[0].strIngredient6)
                quant.push(result.data.drinks[0].strMeasure6)
            }
        
            if (result.data.drinks[0].strIngredient7){
                ingreds.push(result.data.drinks[0].strIngredient7)
                quant.push(result.data.drinks[0].strMeasure7)
            }
            
            if (result.data.drinks[0].strIngredient8){
                ingreds.push(result.data.drinks[0].strIngredient8)
                quant.push(result.data.drinks[0].strMeasure8)
            }
        
            if (result.data.drinks[0].strIngredient9){
                ingreds.push(result.data.drinks[0].strIngredient9)
                quant.push(result.data.drinks[0].strMeasure9)
            }
        
            if (result.data.drinks[0].strIngredient10){
                ingreds.push(result.data.drinks[0].strIngredient10)
                quant.push(result.data.drinks[0].strMeasure10)
            }
        
            if (result.data.drinks[0].strIngredient11){
                ingreds.push(result.data.drinks[0].strIngredient11)
                quant.push(result.data.drinks[0].strMeasure11)
            }
        
            if (result.data.drinks[0].strIngredient12){
                ingreds.push(result.data.drinks[0].strIngredient12)
                quant.push(result.data.drinks[0].strMeasure12)
            }
        
            if (result.data.drinks[0].strIngredient13){
                ingreds.push(result.data.drinks[0].strIngredient13)
                quant.push(result.data.drinks[0].strMeasure13)
            }
        
            if (result.data.drinks[0].strIngredient14){
                ingreds.push(result.data.drinks[0].strIngredient14)
                quant.push(result.data.drinks[0].strMeasure14)
            }
        
            if (result.data.drinks[0].strIngredient15){
                ingreds.push(result.data.drinks[0].strIngredient15)
                quant.push(result.data.drinks[0].strMeasure15)
            }
        const details = result.data.drinks[0];
        res.render("cocktail.ejs", { content: details,
            ingredients: ingreds,
            quantity: quant
         });
         
     ingreds = []
     quant = [];
     
        } catch (error) {
        res.render("index.ejs", { content: "Nothing found, Please try again!" });
        }}else{
            try {
                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${req.body.cocktailName}`);                
                const details = result.data.ingredients[0];                
                res.render("ingr.ejs", { content: details, x:"selected"
                 });
            
                } catch (error) {
                res.render("index.ejs", { content: "Nothing found, Please try again!", x:"selected" });
                }

        }
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  






