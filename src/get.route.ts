import { Request, Response } from 'express';
import { ME } from './db';
import { RELATIONS } from './db';
import { USERS } from './db';
import { CAPSULE_FEED } from './db';

export const getMe = (req: Request, res: Response) => {
  res.status(200).json({ payload: ME });
};

export const getRelations = (req: Request, res: Response) => {
  res.status(200).json({ payload: RELATIONS });
};

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ payload: USERS });
};

export const getCapsuleFeed = (req: Request, res: Response) => {
  res.status(200).json({ payload: CAPSULE_FEED });
};
