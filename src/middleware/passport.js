import {ExtractJwt, Strategy} from 'passport-jwt';
import keys from '../config/keys';
import Children from "../model/children";
import Partner from "../model/partner";
import Parent from "../model/parent";
import EducationInstitution from "../model/education_institution";
import TourOperator from "../model/tour_operator";

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
};

const passportOptions = (passport) => {
    passport.use(
        new Strategy(options, async (payload, done) => {
            try {
                let user;
                if (payload.type === 'children') {
                    user = await Children.findById(payload.id);
                } else if (payload.type === 'parent') {
                    user = await Parent.findById(payload.id);
                } else if (payload.type === 'educationInstitution') {
                    user = await EducationInstitution.findById(payload.id);
                } else if (payload.type === 'tourOperator') {
                    user = await TourOperator.findById(payload.id);
                }

                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (e) {
                console.log(e);
            }
        })
    )
};

export default passportOptions;