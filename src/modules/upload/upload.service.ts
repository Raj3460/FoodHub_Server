import cloudinary from "../../lib/cloudinary";

export const uploadToCloudinary = async (filePath: string): Promise<string> => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "foodhub",
  });
  return result.secure_url;
};