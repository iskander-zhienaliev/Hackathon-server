import mongoose, {Schema, Types} from 'mongoose';

const tourOperatorSchema = new Schema({
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
    logo: String,
    tourList: [{
        type: Types.ObjectId,
        ref: 'Tour'
    }]
});

const TourOperator = mongoose.model('TourOperator', tourOperatorSchema);

export default TourOperator;