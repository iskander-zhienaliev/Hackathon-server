import EducationInstitution from "../model/education_institution";

export const getAllController = async (req, res) => {
    const educationInstitution = await EducationInstitution.find({});
    res.status(200).json(educationInstitution);
};

