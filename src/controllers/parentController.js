import Parent from "../model/parent";

export const getAllController = async (req, res) => {
    const parent = await Parent.find({});
    res.status(200).json(parent);
};