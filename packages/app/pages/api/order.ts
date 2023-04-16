import prisma from '@/services/InitPrisma';
import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      return await getHandle(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
}
async function getHandle(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  await prisma.trade.create({
    data: {
      fromMosaicId: body.fromMosaicId,
      publicKey: body.publicKey,
      toMosaicId: body.toMosaicId,
      amount: body.amount,
      price: body.price,
      type: body.type,
    },
  });

  return res.status(204).end();
}
