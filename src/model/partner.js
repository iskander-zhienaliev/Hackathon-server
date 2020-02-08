import mongoose, {Schema, Types} from 'mongoose';

const partnerSchema = new Schema({
    _id: Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    name: String,
    city: String,
    site: String,
    contact: String,
    logo: String
});

const Partner = mongoose.model('PartnerSchema', partnerSchema);

export default Partner;