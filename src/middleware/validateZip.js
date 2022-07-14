function validateZip(req, res, next) {
  const zipcode = req.params.zip;
  if (zipcode.length === 5 && parseInt(zipcode)) {
    next()
  } else {
  res.send(`Zip (${zipcode}) is invalid!`)
  }
  }

module.exports = validateZip;
