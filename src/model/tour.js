import mongoose, {Schema, Types} from 'mongoose';

const tourSchema = new Schema({
    _id: Types.ObjectId,
    region: String,
    place: String,
    days: Number,
    countChildren: Number,
    price: Number,
    status: String,
    startTour: Date,
    endTour: Date,
});

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;