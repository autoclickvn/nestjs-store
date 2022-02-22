import { Response } from 'express';

export const sendResSuccess = (
  res: Response,
  data: any,
  code?: number,
  message?: string,
) => {
  return res.status(code || 200).json({
    data,
    code: code || 200,
    message: message || 'Thành công',
    success: true,
  });
};

export const sendResFail = (
  res: Response,
  data: any,
  code?: number,
  message?: string,
) => {
  return res.status(code || 400).json({
    data,
    code: code || 400,
    message: message || 'Thất bại',
    success: false,
  });
};
