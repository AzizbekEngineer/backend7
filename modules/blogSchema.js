import { Schema, Types, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export const Blogs = model("blog", blogSchema);

export const validation = (body) => {
  const schema = Joi.object({
    title: Joi.String().required(),
    desc: Joi.String().required(),
    userId: Joi.String().required(),
  });
  return schema.validation(body);
};
