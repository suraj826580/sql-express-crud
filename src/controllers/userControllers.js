import { Op } from "sequelize";
import { User } from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    const insert = await User.create(data);
    return res.status(201).json(insert);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

//
export const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const searchQuery = req.query.search;
    const skip = (page - 1) * limit;
    let query = { limit, offset: skip };
    // if (searchQuery) {
    //   query.where = {
    //     email: {
    //       [Op.like]: `${searchQuery}%`,
    //     },
    //   };
    // }
    const users = await User.findAll(query);
    const totalUsers = await User.count();
    return res.status(200).json({
      totalUsers,
      page,
      limit,
      totalPages: Math.ceil(totalUsers / limit),
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const FindUser = await User.findByPk(id);

    if (!FindUser) {
      return res.json({
        message: "User Not Found",
      });
    }
    await FindUser.destroy();
    return res.json({
      message: "Delete Successfully",
      FindUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const body = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.json({ message: "User Not found" });
    }
    let updateUser = await user.update(body);
    return res.json({ message: "User Update Successfully", user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
