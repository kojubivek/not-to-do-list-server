import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    hr: {
      type: Number,
      required: true,
      max: 168,
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Task", testSchema);
