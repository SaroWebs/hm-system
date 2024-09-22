import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import Compressor from "compressorjs";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function back() {
    // innertia back
}

function blobToFile(blob: Blob, fileName: string): File {
    return new File([blob], fileName, { type: blob.type });
}

export async function compressImage(image: File): Promise<File> {
    return new Promise((resolve, reject) => {
        new Compressor(image, {
            quality: 0.6,
            success(result) {
                const compressedImage = blobToFile(result, image.name);
                resolve(compressedImage);
            },
            error(err) {
                reject(err);
            },
        });
    });
}

export async function uploadImage(image: File, folderName: string) {
    let file = new File([image], image.name || "image.jpg");

    // TODO: implement upload

    return file;
}
