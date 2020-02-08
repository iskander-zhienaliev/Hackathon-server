import mongoose from 'mongoose';
import Tour from '../model/tour';
import TourOperator from "../model/tour_operator";

export const createController = async (req, res) => {
    if(!req.body) {
        res.status(400).json({
            message: 'message cannot be empty'
        });
    }
    const tour = new Tour({
        _id: new mongoose.mongo.ObjectId,
        region: req.body.region,
        place: req.body.place,
        days: req.body.days,
        countChildren: req.body.countChildren,
        price: req.body.price,
        status: req.body.status,
        startTour: req.body.startTour,
        endTour: req.body.endTour,
        tourOperator: req.user.id
    });
    try {
        await tour.save(async (err) => {
            if(err) return res.status(500).json(err);
            await TourOperator.findOneAndUpdate({_id: req.user.id},{$push: {tourList: tour}},{new: true});
        });
    } catch (err) {
        res.status(500).json({
            message: "error"
        })
    }
};

export const getByIdController = async (req, res) => {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json(tour);
};

export const getAllController = async (req, res) => {
    const listTours = await Tour.find({});
    res.status(200).json(listTours);
};

export const getByRegionController = async (req, res) => {
    const listTours = await Tour.find({region: req.user.region});
    res.status(200).json(listTours);
};