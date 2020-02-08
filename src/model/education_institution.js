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
    region: String,
    company: String,
    city: String,
    site: String,
    contact: String,
    logo: String,
    listTour: [{
        type: Types.ObjectId,
        ref: 'Tour'
    }],
    listProjects: [{
        type: Types.ObjectId,
        ref: 'Project'
    }]
});

const EducationInstitution = mongoose.model('EducationInstitution', educationInstitutionSchema);

export default EducationInstitution;