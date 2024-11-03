import {getStorage,ref,uploadBytes,getDownloadURL,deleteObject} from 'firebase/storage';
import {firebaseApp} from '../lib/db/firebase_config';

const storage = getStorage(firebaseApp);
const storageRef = ref(storage);

export async function uploadImages(productId,images){

    const promises = images.map(async (image)=>{
        console.log(image.name);
        const imageRef = ref(storageRef, `${productId}/${image.name}`);
        // const blob = new Blob([image.path], { type: 'image/webp' });
        await uploadBytes(imageRef, image);
        const url = await getDownloadURL(imageRef);
        return url;
    });
    return Promise.all(promises);
}

export async function deleteImage(imageUrl){
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
    return true;
}


