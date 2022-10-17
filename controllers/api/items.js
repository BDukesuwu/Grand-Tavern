const Item = require('../../models/item');
const fetch = require('node-fetch');
const rootAPIURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=steak&app_id=d64967dc&app_key=a5f9f1786ee37fd224fadf684361a6d3';

async function index(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}

module.exports = {
    index,
    show
  };