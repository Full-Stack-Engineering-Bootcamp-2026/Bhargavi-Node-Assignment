import { Request, Response,NextFunction } from "express";

export const errorHandler=(
    error:any,
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    console.error(error);

    const status =error.statusCode || 500;

    res.status(status.render("error",{
        message:error.message || "Something went wrong",
    }));
};