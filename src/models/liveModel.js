import { mongoose } from 'mongoose';

const liveSchema = new mongoose.Schema({
  DATE: { type: String, required: true },
  DUMPER_ID: { type: String, required: true },
  STATUS: { type: String, required: true },
  TIME:{ type: String, required: true },
  CARRYING_WEIGHT: { type: Number, required: true },
  TOTAL_WEIGHT: { type: Number, required: true },
  OPERATOR_ID: { type: String, required: true },
});

const Live = mongoose.models.live || mongoose.model('new_table', liveSchema);

export default Live;
