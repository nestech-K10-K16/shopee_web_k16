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
  const encoded = Buffer(buffer, "binary").toString("base64");
  const decoded = Buffer.from(encoded, "base64").toString("utf8");
  return decoded;
};
