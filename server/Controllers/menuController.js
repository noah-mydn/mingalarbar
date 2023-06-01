const Menu = require("../Models/menuModel");

exports.getAllMenu = async (req, res) => {
  try {
    const menus = req.query.category
      ? await Menu.find().where("category").equals(req.query.category)
      : await Menu.find();
    res.status(200).json({
      status: "success",
      total: menus.length,
      data: {
        menus,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getMenuById = async (req, res) => {
  try {
    // const movie = await Menu.find({_id:req.params.id});
    const menu = await Menu.findById(req.params.id);
    if (menu === null) {
      return res.status(404).json({
        status: "fail",
        message: "No menus found in the requested id",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        menu,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.postMenu = async (req, res) => {
  try {
    //await console.log(req.body);
    const newMenu = await Menu.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newMenu,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        menu: updatedMenu,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteMenu = async (req, res) => {
  try {
    await Menu.findByIdAndDelete({ _id: req.params.id });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};
