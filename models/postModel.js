import mongoose, { Schema } from "mongoose";

// Schema
const postSchema = new mongoose.Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "Users" },
        descirption: { type: String, required: true },
        image: { type: String },
        likes: [{ type: String }],
        comments: [{ type: SchemaTypes.Types.ObjectId, ref: "Comments" }], 
    },
    { timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);

export default Posts;
