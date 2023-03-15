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

      if (req.method === "OPTIONS") {
        res.setHeader(
          "Access-Control-Allow-Methods",
          settings.methods?.join(",") || "GET,HEAD,PUT,PATCH,POST,DELETE"
        );

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

        return res.status(200).end();
      }

      return next();
    }

    return res.status(403).json({ error: "Forbidden" });
  };
};
