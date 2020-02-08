import jwt from 'jsonwebtoken';
import {compareSync, genSaltSync, hashSync} from 'bcryptjs';
import keys from '../config/keys';
import Children from "../model/children";
import Parent from "../model/parent";
import Partner from "../model/partner";
import TourOperator from "../model/tour_operator";
import EducationInstitution from "../model/education_institution";
import mongoose from "mongoose";

export const authController = async (req, res) => {
    let candidate = await findUserFromDb(req, res);
    if (candidate) {
        const passwordResult = compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            await successAuth(res, candidate, req.body.type);
        } else {
            await incorrectPassword(res);
        }
    } else {
        await userNotFound(res);
    }
};

export const registrationController = async (req, res) => {
    let candidate = await findUserFromDb(req, res);
    if (candidate) {
        res.status(409).json({
            message: "Пользователь с таким логином уже существует"
        });
    } else {
        const salt = genSaltSync(10);
        const user = await createUser(req.body.type, {
            _id: new mongoose.mongo.ObjectId,
            email: req.body.email,
            password: hashSync(req.body.password, salt)
        });
        try {
            await user.save();
            await res.status(201).json(user);
        } catch (err) {
            res.status(500).json({
                message: "Что-то пошло не так"
            })
        }
    }
};

const findUserFromDb = async (req, res) => {
    let candidate;
    if (req.body.type === 'children') {
        candidate = await Children.findOne({login: req.body.login});
    } else if (req.body.type === 'parent') {
        candidate = await Parent.findOne({login: req.body.login});
    } else if (req.body.type === 'educationInstitution') {
        candidate = await EducationInstitution.findOne({login: req.body.login});
    } else if (req.body.type === 'tourOperator') {
        candidate = await TourOperator.findOne({login: req.body.login});
    } else {
        res.status(400).json({
            message: "Not valid type"
        });
    }
    return candidate;
};

const createUser = (type, obj) => {
    if (type === 'children') {
        return new Children(obj);
    } else if (type === 'parent') {
        return new Parent(obj);
    } else if (type === 'educationInstitution') {
        return new EducationInstitution(obj);
    } else if (type === 'tourOperator') {
        return new TourOperator(obj);
    } else {
        throw Error();
    }
};

const userNotFound = (res) => {
    res.status(404).json({
        message: "Пользователя с таким логином не существует"
    });
};

const incorrectPassword = (res) => {
    res.status(409).json({
        message: "Пароли не совпадают"
    })
};

const successAuth = (res, candidate, type) => {
    const token = jwt.sign({
        id: candidate._id,
        type: type
    }, keys.jwt, {expiresIn: 60 * 60});
    res.status(200).json({
        token: `Bearer ${token}`,
        type: type
    });
};