import mongoose, { Schema, Document } from "mongoose";
export interface IEvent extends Document {
     
    description: string;
    clubName: string;
    date: Date;
    location: string;
    CreatedBy: string;
   
}

const EventSchema = new Schema<IEvent>({
    
    description: { type: String, required: true },
    clubName: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    CreatedBy: { type: String, required: false },
    

}, {
    timestamps: true,
});
export default mongoose.models.Events || mongoose.model<IEvent>("Events", EventSchema);
