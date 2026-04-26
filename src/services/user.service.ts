import { User } from "../models/user.model";

export class UserService {
  public async getUsers(page: number, limit: number) {
    const safePage = Math.max(page, 1);
    const safeLimit = Math.min(Math.max(limit, 1), 100);

    const skip = (safePage - 1) * safeLimit;

    const [users, total] = await Promise.all([
      User.find()
        .sort({ createdAt: -1 }) 
        .skip(skip)
        .limit(safeLimit),

      User.countDocuments(),
    ]);

    return {
      data: users,
      total,
      page: safePage,
      limit: safeLimit,
      totalPages: Math.ceil(total / safeLimit),
    };
  }
}