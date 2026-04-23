import { IFile } from "../interfaces/file.interface";
import { FileModel } from "../models/file.model";

export class FileService {
  public async saveFile(file: Express.Multer.File): Promise<IFile> {

    const savedFile = await FileModel.create({
      filename: file.filename,
      path: file.path,
      size: file.size
    });

    return {
      filename: savedFile.filename,
      path: savedFile.path,
      size: savedFile.size
    };
  }
}