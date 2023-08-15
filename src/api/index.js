const express = require("express");
const route = require("./routes");
const router = express.Router();
const models = require("./model/index");
router.get("/", async (req, res) => {
  try {
    const newData = new models({ experience: "34" });
    const data = await newData.save();
    return res.json(data);
  } catch (error) {
    return res.status(404).json({ message: error.message }); // TODO
  }
});
route.post("/getEmail", async (req, res) => {
  try {
    const newData = new model({ experience: "34" });
    const data = await newData.save();
    return res.json(data);
  } catch (error) {
    return res.status(404).json({ message: error.message }); // TODO
  }
});

module.exports = router;
