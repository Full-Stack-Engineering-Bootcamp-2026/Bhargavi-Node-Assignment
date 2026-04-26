import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  private userService = new UserService();

  public getUsers = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await this.userService.getUsers(page, limit);

      res.status(200).json(result);
    } catch (error) {
        console.error("Actual Error: ",error);
      res.status(500).json({
        message: "Error fetching users",
        error,
      });
    }
  };
}