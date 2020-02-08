import TourOperator from "../model/tour_operator";

export const getAllController = async (req, res) => {
    const tourOperator = await TourOperator.find({});
    res.status(200).json(tourOperator);
};