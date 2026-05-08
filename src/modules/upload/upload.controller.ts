import { Request, Response } from "express";
import { uploadToCloudinary } from "./upload.service";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ success: false, message: "No image provided" });

    const url = await uploadToCloudinary(file.path);
    res.json({ success: true, url });
  } catch (error: any) {
    // console.error("Cloudinary upload error:", error);
    res.status(500).json({ success: false, message: error.message || "Upload failed" });
  }
};