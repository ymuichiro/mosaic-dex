import prisma from '@/services/InitPrisma';
import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      return await getHandle(req, res);
    }
    return res.status(405).end();
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
}

/**
 * 現在の気配値を取得する
 */
async function getHandle(req: NextApiRequest, res: NextApiResponse) {
  const { mosaicId, type } = req.query;

  const result = await prisma.trade.findMany({
    where: { fromMosaicId: mosaicId as string, type: type as string },
  });

  return res.status(200).json(result);
}
