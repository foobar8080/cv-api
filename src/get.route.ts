/* eslint-disable curly */

import { Request, Response } from 'express';
import { ME } from './db';
import { RELATIONS } from './db';
import { USERS } from './db';
import { CHATS } from './db';
import { CAPSULE_LIST } from './db';

export const getMe = (req: Request, res: Response) => {
  res.status(200).json({ payload: ME });
};

export const getRelations = (req: Request, res: Response) => {
  res.status(200).json({ payload: RELATIONS });
};

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ payload: USERS });
};

export const getChats = (req: Request, res: Response) => {
  // http://localhost:9000/api/chats/v1/5033f88772:83ac211947/?offset=5&limit=7

  const { chatId } = req.params;
  const { offset, limit } = req.query;

  // const offset = 2;
  // const limit = offset + 3;
  // const arr = [10,20,30,40,50,60,70,80,90];
  // arr.slice(offset, limit) // (3) [30, 40, 50]

  let time = 1000;
  if (+offset > 0) time = 1000;

  setTimeout(() => {
    const messages =
      CHATS[chatId]?.messages
        ?.slice()
        ?.reverse()
        ?.slice(+offset, +offset + +limit) || [];

    res.status(200).json({ payload: messages });
  }, time);
};

export const getCapsuleList = (req: Request, res: Response) => {
  res.status(200).json({ payload: CAPSULE_LIST });
};
