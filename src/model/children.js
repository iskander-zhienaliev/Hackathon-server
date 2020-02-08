import mongoose, {Schema, Types} from 'mongoose';

const childrenSchema = new Schema({
    _id: Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: String,
    last_name: String,
    patronymic: String,
    education_institution: {
        type: Types.ObjectId,
        ref: 'EducationInstitution'
    },
    parent: [{
       type: Types.ObjectId,
       ref: 'Parent'
    }],
    class: String,
    city: String,
    birthday: Date,
    region: String,
    photo: String,
    phone_number: String,
    instagram: String,
    VK: String,
    projects:[{
        type: Types.ObjectId,
        ref: 'Project'
    }],
    interests: [Number]
});

const Children = mongoose.model('Children', childrenSchema);

export default Children;