import {db} from "./firebase";
import {collection, addDoc} from "firebase/firestore";

export const createResponse = async (responseData) => {
    const ref = collection(db, "responses");
    const res = await addDoc(ref, {
        ...responseData,
        createdAt: new Date(),
    });
    return res.id;
}