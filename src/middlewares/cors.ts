import { NextFunction, Request, Response } from "express";

export interface ICorsSettings {
  origins?: string[];
  methods?: string[];
  headers?: string[];
  maxAge?: number;
  credentials?: boolean;
}

export const cors = (settings: ICorsSettings) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const origin: string | undefined = req.headers.origin;

    if (origin && settings?.origins?.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);

      if (settings.methods) {
        res.setHeader(
          "Access-Control-Allow-Methods",
          settings.methods.join(",")
        );
      }

      if (settings.headers) {
        res.setHeader(
          "Access-Control-Allow-Headers",
          settings.headers.join(",")
        );
      }

      if (settings.credentials) {
        res.setHeader(
          "Access-Control-Allow-Credentials",
          String(settings.credentials)
        );
      }

      if (settings.maxAge) {
        res.setHeader("Access-Control-Max-Age", String(settings.maxAge));
      }
    } else {
      return res.status(403).json({ error: "Forbidden" });
    }
    return next();
  };
};
