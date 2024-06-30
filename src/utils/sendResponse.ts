import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsonData: {
    statusCode: number;
    success: boolean;
    message: string;
    data: T | null | undefined;
  },
) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    statusCode: jsonData.statusCode,
    message: jsonData.message,
    data: jsonData.data || null || undefined,
  });
};

export default sendResponse;
