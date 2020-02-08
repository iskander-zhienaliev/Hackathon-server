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
    region: String,
    city: String,
    phone: String,
    child: [{
        type: Types.ObjectId,
        ref: 'Children'
    }],
    listTours: [{
        type: Types.ObjectId,
        ref: 'Tour'
    }]
});

const Parent = mongoose.model('Parent', parentSchema);

export default Parent;