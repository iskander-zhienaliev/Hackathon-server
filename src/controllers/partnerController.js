import Partner from "../model/partner";

export const getAllController = async (req, res) => {
    const partner = await Partner.find({});
    res.status(200).json(partner);
};

export const updateController = async (req, res) => {
    const partner = req.body;
    if (!partner) {
        res.status(400).json({
            message: "Body cannot be empty"
        });
        return;
    }
    const response = await Partner.findOneAndUpdate({_id: req.user.id}, partner, {new: true});
    res.status(200).json(response);
};