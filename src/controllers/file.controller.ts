import { Request, Response } from "express";
import { FileService } from "../services/file.service";

export class FileController {
  private fileService: FileService;

  constructor() {
    this.fileService = new FileService();
  }

  public uploadFile = async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No File Uploaded"
        });
      }

      const fileData = await this.fileService.saveFile(req.file);

      res.status(200).json({
        message: "file Uploaded successfully",
        data: fileData
      });
    } catch (error) {
      res.status(500).json({
        message: "Upload Failed",
        error
      });
    }
  };
}