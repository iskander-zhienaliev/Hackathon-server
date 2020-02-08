import TourOperator from "../model/tour_operator";

export const getAllController = async (req, res) => {
    const tourOperator = await TourOperator.find({});
    res.status(200).json(tourOperator);
};

export const updateController = async (req, res) => {
    const tourOperator = req.body;
    if (!tourOperator) {
        res.status(400).json({
            message: "Body cannot be empty"
        });
        return;
    }
    const response = await TourOperator.findOneAndUpdate({_id: req.user.id}, tourOperator, {new: true});
    res.status(200).json(response);
};