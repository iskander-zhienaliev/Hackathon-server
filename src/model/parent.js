import mongoose, {Schema, Types} from 'mongoose';

const parentSchema = new Schema({
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
    city: String,
    child: [{
        type: Types.ObjectId,
        ref: 'Children'
    }]
});

const Parent = mongoose.model('Parent', parentSchema);

export default Parent;