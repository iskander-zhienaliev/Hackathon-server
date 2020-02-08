import EducationInstitution from "../model/education_institution";

export const getAllController = async (req, res) => {
    const educationInstitution = await EducationInstitution.find({});
    res.status(200).json(educationInstitution);
};

export const updateController = async (req, res) => {
    const educationInstitution = req.body;
    if (!educationInstitution) {
        res.status(400).json({
            message: "Body cannot be empty"
        });
        return;
    }
    const response = await EducationInstitution.findOneAndUpdate({_id: req.user.id}, educationInstitution, {new: true});
    res.status(200).json(response);
};

export const getPersonalController = (req, res) => {
    res.status(200).json(req.user);
};