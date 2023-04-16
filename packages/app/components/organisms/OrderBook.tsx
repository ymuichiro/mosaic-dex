import { TradeResponse } from '@/models/Trade';
import { SymbolHtlc } from '@atomicport/symbol';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import { NetworkType } from 'symbol-sdk/dist/src/model/network';
import CenterModal from '../atom/CenterModal';
import CenterProgress from '../atom/CenterProgress';
import SymbolQR from '../moleculs/SymbolQR';
import TradeCard from '../moleculs/TradeCard';

interface Props {
  mosaicId: string;
  type: 'Buy' | 'Sell';
}

const client = new SymbolHtlc(
  'https://mikun-test-net.tk:3001',
  NetworkType.TEST_NET,
  '49D6E1CE276A85B70EAFE52349AACCA389302E7A9754BCF1221E79494FC665A4',
  1667250467
);

const hashPair = client.createHashPair();
const transaction = client.lock('NAXSH7VBPXFR6UEILARG46AXP4HTEJXZ5D44F4Q', '72C0212E67A08BCE', hashPair.secret, 1);

export default function OrderBook(props: Props): JSX.Element {
  const [trade, setTrande] = React.useState<null | TradeResponse>(null);
  const { data, error, isLoading, mutate } = useSWR<TradeResponse[]>(props.mosaicId, () =>
    fetch(`/api/call?mosaicId=${props.mosaicId}&type=${props.type}`).then((e) => e.json())
  );

  useEffect(() => {
    const interval = setInterval(() => mutate(), 3000);
    return () => {
      clearInterval(interval);
    };
  });

  if (!data || isLoading) return <CenterProgress />;
  if (error) throw new Error();

  return (
    <>
      <List style={{ height: '100%' }}>
        {data.map((item, key) => {
          return (
            <ListItemButton key={key} onClick={() => setTrande(item)}>
              <TradeCard data={item} type={props.type} />
            </ListItemButton>
          );
        })}
      </List>
      {/* 取引用のQRコードを生成する */}
      <CenterModal open={Boolean(trade)} onClose={() => setTrande(null)}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3, gap: 3 }}>
              <Typography variant='h6'>取引を開始してください</Typography>
              <SymbolQR transaction={transaction} networkType={NetworkType.MAIN_NET} />
              <Button onClick={() => setTrande(null)}>キャンセル</Button>
            </Box>
          </CardContent>
        </Card>
      </CenterModal>
    </>
  );
}
