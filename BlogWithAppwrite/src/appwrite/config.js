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

    async createPost({Title, Slug, Content, FeaturedImg, Status, UserId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                Slug,
                {
                    Title,
                    Content,
                    FeaturedImg,
                    Status,
                    UserId
                }
            )
        } catch (error) {
            throw error
        }
    }


    async updatePost(Slug, {Title, Content, FeaturedImg, Status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                Slug,
                {
                    Title,
                    Content,
                    FeaturedImg,
                    Status
                }
            )
        } catch (error) {
            throw error
        }
    }
    
    
    async deletePost(Slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                Slug,
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(Slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                Slug
            )
        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            throw error
            return false
        }
    }


    // file upload services
    async uploadFIle(file){
        try {
            return this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service