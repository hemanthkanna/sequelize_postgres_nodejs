const User = require("../models/users.model");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      age: req.body.age,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

exports.getUsers = async(req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        res.status(500).json({
            success: false
        })
    }
}

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    await user.destroy(userId);

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
