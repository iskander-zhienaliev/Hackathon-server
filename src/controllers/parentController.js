import Parent from "../model/parent";

export const getAllController = async (req, res) => {
    const parent = await Parent.find({});
    res.status(200).json(parent);
};

export const updateController = async (req, res) => {
    const parent = req.body;
    if (!parent) {
        res.status(400).json({
            message: "Body cannot be empty"
        });
        return;
    }
    const response = await Parent.findOneAndUpdate({_id: req.user.id}, parent, {new: true});
    res.status(200).json(response);
};

export const getPersonalController = (req, res) => {
    res.status(200).json(req.user);
};

export const getByIdController = async (req, res) => {
    const parent = await Parent.findById(req.params.id).select('-password');
    res.status(200).json(parent);
};