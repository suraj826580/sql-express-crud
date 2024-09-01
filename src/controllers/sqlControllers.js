export const get = async (req, res) => {
  try {
    return res.json({ message: "Hey i am Node" });
  } catch (error) {
    return res.json({ message: error });
  }
};
export const post = async (req, res) => {
  try {
    return res.json({ message: "Hey i am Node" });
  } catch (error) {
    return res.json({ message: error });
  }
};
