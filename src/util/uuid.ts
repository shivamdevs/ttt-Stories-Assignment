import { v4 } from 'uuid';



export default function uuid() {
    return v4().split("-").join("");
}