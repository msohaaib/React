import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
                .setEndpoint(conf.appWriteUrl)
                .setProject(conf.appWriteProjectId);
                this.databases = new Databases(this.client);
                this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImg, status, userId}){}
}

const service = new Service()
export default service