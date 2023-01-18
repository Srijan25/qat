const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    article: {
      type: String,
      required: [true, "User must have enter name of article"],
      minlength: 4,
    },

    rating: {
      type: Number,
      default: 0,
    },
    pdate : { type : Date }
  },
  { timestamps: true 
  }
);
 
const Article = new mongoose.model("article", articleSchema);

module.exports = Article;
