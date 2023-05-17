import { Session } from './session.schema';
import * as mongoose from 'mongoose';
const SessionModel = mongoose.model('Sessions', Session);
export { SessionModel };