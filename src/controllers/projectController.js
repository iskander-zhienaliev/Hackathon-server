import Children from "../model/children";
import Project from "../model/project";
import mongoose from 'mongoose';

export const createController = async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            message: "Body cannot be empty"
        });
        return;
    }
    const project = await new Project({
        _id: new mongoose.mongo.ObjectId,
        title: req.body.title,
        city: req.body.city,
        problem: req.body.problem,
        audience: req.body.audience,
        task: req.body.task,
        description: req.body.description,
        active: true,
        children: req.user.id
    });
    try {
        await project.save(async (err) => {
            if (err) return res.status(500).json(err);
            await Children.findOneAndUpdate({_id: req.user.id},{$push: {projects: project}}, {new: true});
        });
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({
            message: "Что-то пошло не так"
        })
    }
};

export const updateController = async (req, res) => {
    const project = await Project.findOneAndUpdate({_id: req.user.id}, req.body, {new:true});
    res.status(200).json(project);
};

export const getAllController = async (req, res) => {
    const allProjects = await Project.find({});
    res.status(200).json(allProjects);
};

export const getByIdController = async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
};