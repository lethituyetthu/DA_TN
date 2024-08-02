const categoryService = require('../service/CategoryService');

exports.getAll = async () => {
  const categories = await categoryService.getAll();
  return categories.map((c) => ({
    id: c._id,
    name: c.name
  }));
};

exports.findById = async (id) => {
  const category = await categoryService.findById(id);
  if (!category) {
    throw new Error('Category not found');
  }
  return category;
};

exports.create = async (name) => {
  try {
    const category = await categoryService.create(name);
    return category;
  } catch (error) {
    console.error('Error creating category:', error.message);
    throw new Error('Error creating category');
  }
};

exports.update = async (id, name) => {
  try {
    const category = await categoryService.update(id, name);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  } catch (error) {
    console.error('Error updating category:', error.message);
    throw new Error('Error updating category');
  }
};

exports.delete = async (id) => {
  try {
    const category = await categoryService.delete(id);
    if (!category) {
      throw new Error('Category not found');
    }
  } catch (error) {
    console.error('Error deleting category:', error.message);
    throw new Error('Error deleting category');
  }
};
