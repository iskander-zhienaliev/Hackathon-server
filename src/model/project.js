import mongoose, {Schema, Types} from 'mongoose';

const projectSchema = new Schema({
    _id: Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        max: 1000,
        required: true
    },
    audience: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    active: Boolean,
    children: {
        type: Types.ObjectId,
        ref: 'Children'
    },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;