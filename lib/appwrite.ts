import { Account, Avatars, Client, Databases } from "react-native-appwrite";
import { v4 as uuidv4 } from 'uuid';
import { ID } from "react-native-appwrite";

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.EZ.shopSmart",
    projectId: "66d58aaf000fa1c4e22a",
    databaseId: "66d58da0003172ec559e",
    userCollectionId: "66d58dec0007a649145d",
    productsCollectionId: "66d58e3300145e9aded1",
    orderCollectionId: "66d58e7d0014b3ff4d10",
    cartCollectionId: "66d5921500322fb91562",
    wishlistCollectionId: "66d5923000084efdee16",
    addressCollectionId: "66d58eaa0010a9c94753",
    storageId: "66d5947c000709302e1f"
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client)

export const createUser = async(email: string, password: string) => {
    try {
        const newUser = await account.create(
            ID.unique(),
            email,
            password
        )

        if(!newUser)throw Error

        const avatarUrl = avatars.getInitials(email.split("@")[0])

        await signIn(email, password);

        const newAccount = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newUser.$id,
                email,
                password,
                avatar: avatarUrl
            }
        )

        return newAccount
    } catch (error) {
        console.log(error)
    }
}

export const signIn = async(email: string, password: string)=>{
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session
    } catch (error: any) {
        throw new Error(error)
    }
}