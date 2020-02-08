import Partner from "../model/partner";

export const getAllController = async (req, res) => {
    const partner = await Partner.find({});
    res.status(200).json(partner);
};