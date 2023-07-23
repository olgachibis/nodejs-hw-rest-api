const { ctrlWrapper } = require("../../helpers");
const add = require("./add");
const deleteById = require("./deleteById");
const getAll = require("./getAll");
const getById = require("./getById");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteContact: ctrlWrapper(deleteById),
};