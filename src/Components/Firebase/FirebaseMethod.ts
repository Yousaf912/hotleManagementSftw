import { onValue, ref, set, remove } from "firebase/database";
import { database } from "./firebaseConfig";

import { ref as storageRef, uploadBytes, getDownloadURL, StorageReference } from "firebase/storage";
import { storage } from "./firebaseConfig";


export const sendData = (name: any, data: any, id?: any, nam?: any,room?:any) => {
    const reference = ref(database, room ?  `${name}/${id}/${nam}/${room}` : nam ? `${name}/${id}/${nam}` : `${name}/${id}`);

    return set(reference, data)
        .then(() => {
            console.log('Data written successfully');
        })
        .catch((error) => {
            console.error('Error writing data:', error);
            throw error;
        });
};


export const getData = (name: string, id?: any,name2?:any) => {
    const reference = ref(database, name2?`${name}/${id}/${name2}` : id ? `${name}/${id}` :  name);
    return new Promise((resolve, reject) => {
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            resolve(data);
        }, (error) => {
            console.error('Error reading data:', error);
            reject(error);
        });
    });
};


export const removeData = (name: string, number: any,customerid?:any,name2?:any) => {
    const reference = ref(database,customerid? `${name2}/${customerid}/${name}/${number}`: `${name}/${number}`);
    return remove(reference)
        .then(() => {
            console.log('Data removed successfully');
        })
        .catch((error) => {
            console.error('Error removing data:', error);
            throw error;
        });
}





export const uploadImage = (file: File, name:any, id:any,filename:any): Promise<string> => {

    const storageReference: StorageReference = storageRef(storage,`${name}/${id}/${filename}` );

    return uploadBytes(storageReference, file)
        .then(() => getDownloadURL(storageReference))
        .then((downloadURL: string) => {
            console.log('File available at', downloadURL);
            return downloadURL;
        })
        .catch((error: Error) => {
            console.error('Error uploading file:', error);
            throw error;
        });
};


export const getImageURL = (name:any,id:any,filename:any): Promise<string> => {

    const storageReference: StorageReference = storageRef(storage, `${name}/${id}/${filename}`);

    return getDownloadURL(storageReference)
        .then((downloadURL: string) => {
            console.log('File available at', downloadURL);
            return downloadURL;
        })
        .catch((error: Error) => {
            console.error('Error getting file URL:', error);
            throw error;
        });
};



