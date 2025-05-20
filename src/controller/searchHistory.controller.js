import searchHistory from "../model/Userhistory.model.js";

export const create = async (req, res) => {
  try {
    const { _id, userName } = req.user;

    const Data = {
      ...req.body,
      userId: _id,
      userName: userName,
    };

    const saveUser = await searchHistory.create(Data);
    res.status(201).json({ message: "HISTORY", saveUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
