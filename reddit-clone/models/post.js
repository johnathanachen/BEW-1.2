const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Comment = require('../models/comment')

const PostSchema = new Schema({
  createdAt:  { type: Date },
  updatedAt:  { type: Date },
  title:      { type: String, required: true },
  url:        { type: String, required: true },
  summary:    { type: String, required: true },
  subreddit: { type: String, required: true },
  comments: [Comment.schema],
  author : { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

PostSchema.pre('save', (next) => {
  // SET createdAt AND updatedAt
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('Post', PostSchema)

var Comments = new Schema({
  title     : String,
  body      : String,
  date      : Date
});

var BlogPost = new Schema({
  author    : Schema.Types.ObjectId,
  title     : String,
  body      : String,
  date      : Date,
  comments  : [Comments],
  meta      : {
    votes : Number,
    favs  : Number
    }
});

mongoose.model('BlogPost', BlogPost);
