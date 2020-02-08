import mongoose, {Schema, Types} from 'mongoose';

const educationInstitutionSchema = new Schema({
    _id: Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    company: String,
    city: String,
    site: String,
    contact: String,
    logo: String
});

const EducationInstitution = mongoose.model('EducationInstitution', educationInstitutionSchema);

export default EducationInstitution;