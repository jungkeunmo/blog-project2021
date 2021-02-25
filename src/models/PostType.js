import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostType = new Schema(
  {
    typeName: {
      type: String,
      required: true,
    },

    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`PostType`, PostType, `PostType`);
