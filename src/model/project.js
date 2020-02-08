import mongoose, {Schema, Types} from 'mongoose';

const projectSchema = new Schema({
    _id: Types.ObjectId,
    title: String,
    city: String,
    problem: {
        type: String,
        max: 1000
    },
    audience: String,
    date: Date,
    task: String,
    description: String,
    active: Boolean,
    children: {
        type: Types.ObjectId,
        ref: 'Children'
    },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;