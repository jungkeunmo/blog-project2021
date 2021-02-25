import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    hit: {
      type: Number,
      required: true,
      default: 0,
    },
    postType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `PostType`,
    },
    createdAt: {
      type: String,
      required: true,
    },
    lastUpdatedAt: {
      type: String,
      required: true,
    },
    isDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
    no: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Post`, Post, `Post`);
