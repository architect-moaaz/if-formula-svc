//#region imports and defaults
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json());
var FormulaParser = require('hot-formula-parser').Parser;
var parser = new FormulaParser();


// @route GET /files
// @desc  Display all files in JSON
app.post('/parseFormula', (req, res) => {
  var formula = req.body.formula;
  var data = req.body.data
  var keys = [];
  for (var k in data) keys.push(k);
  keys.sort(function (a, b) {
    return b.length - a.length;
  });

  keys.forEach(k => {
    formula = formula.replaceAll(k, data[k]);

  });
  console.log(formula);

  val = parser.parse(formula);
  return res.json(val);
});


const port = 31526;

app.listen(port, () => console.log(`Server started on port ${port}`));
