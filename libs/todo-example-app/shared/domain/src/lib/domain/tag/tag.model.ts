import { IManyToOne, IOneToMany } from '@orcha/common';
import { TaggedTodo } from '../tagged-todo';
import { User } from '../user';

export interface Tag {
  id: string;
  name: string;
  dateCreated: Date | string;
  dateUpdated: Date | string;
  user: IManyToOne<Tag, User>;
  taggedTodos: IOneToMany<Tag, TaggedTodo>;
}
