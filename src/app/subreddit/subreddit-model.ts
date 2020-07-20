import { PostModel } from '../shared/post-model';

export class SubredditModel {
    id?: number;
    name: string;
    description: string;
    postCount?: number;
    posts?: Array<PostModel>
}