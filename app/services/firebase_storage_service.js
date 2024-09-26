import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import firebaseApp from '../lib/db/firebase_config';

const storage = getStorage(firebaseApp);
const storageRef = ref(storage);

export async function uploadImages(images){
    const promises = images.map(async (image)=>{
        const imageRef = ref(storageRef, `${image.productId}/${image.file.name}`);
        // const blob = new Blob([image.path], { type: 'image/webp' });
        await uploadBytes(imageRef, image.file);
        const url = await getDownloadURL(imageRef);
        return url;
    });
    return Promise.all(promises);
}


