import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite"

export class AuthService {
    Client = new Client()
    accoount;

    constructor(){
        this.Client
                .setEndpoint(conf.appWriteUrl)
                .setProject(conf.appWriteProjectId);
        this.accoount = new Account(this.Client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.accoount.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }


    async login({email, password}){
        try {
            return await this.accoount.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.accoount.get()
        } catch (error) {
            throw error
        }
        return null
    }

    async logout(){
        try {
            return await this.accoount.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}


const authService = new AuthService()

export default authService