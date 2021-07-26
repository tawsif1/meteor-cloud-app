import { Mongo } from 'meteor/mongo';

export interface CommentProps {
  _id?: string;
  description: string;
  username ?: string;
  createdAt: Date;
}

export default new Mongo.Collection<CommentProps>('comment');
