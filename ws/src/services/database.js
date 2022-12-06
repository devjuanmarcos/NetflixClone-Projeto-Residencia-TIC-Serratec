const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/netflix", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
