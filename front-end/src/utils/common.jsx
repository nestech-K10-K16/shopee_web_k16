import { Buffer } from "buffer";

export const convertFiletoBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const convertBufferToBase64 = (buffer) => {
  return Buffer(buffer, "base64").toString("binary");
};
