import Children from "../model/children";


export const getAllController = async (req, res) => {
    const children = await Children.find({});
    res.status(200).json(children);
};

export const updateController = async (req, res) => {
    const children = req.body;
    if (!children) {
        res.status(400).json({
            message: "Body cannot be empty"
        });
        return;
    }
    const response = await Children.findOneAndUpdate({_id: req.user.id}, children, {new: true});
    res.status(200).json(response);
};

export const getPersonalController = (req, res) => {
    res.status(200).json(req.user);
};