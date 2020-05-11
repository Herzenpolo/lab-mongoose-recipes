const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let d = new Date

const recipeSchema = new Schema({
  title: String,
  level: {
    type: String,
    enum: [`Easy Peasy`, `Amateur Chef`, `UltraPro Chef`],
  },
  ingredients: [String],
  cuisine: String,
  dishType: String,
  image: {
    type: String,
    default: `https://images.media-allrecipes.com/images/75131.jpg`,
  },
  duration: {
    type: Number,
    default: 0,
  },
  creator: String,
  created: {
    type: Date,
    default: d.setFullYear(2020, 05, 11)
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
