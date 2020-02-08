import Children from "../model/children";


export const getAllController = async (req, res) => {
    const children = await Children.find({});
    res.status(200).json(children);
};

export const updateController = async (req, res) => {
    const children = req.body.children;
    const response = await Children.findOneAndUpdate({id: req.user.id},children ,{new: true});
    res.status(200).json(response);
};

export const get = () => {

};