import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import CenterProgress from '../atom/CenterProgress';

export default function OrderForm(): JSX.Element {
  const session = useSession();
  const router = useRouter();
  const [price, setPrice] = React.useState<number>(0);
  const [amount, setAmount] = React.useState<number>(0);

  if (session.status === 'loading') return <CenterProgress />;
  if (session.status === 'unauthenticated') {
    router.push('/auth/signin');
    return <div />;
  }

  const handleBuyRequest = () => {
    if (amount === 0 || price === 0) {
      alert('金額、または数量を入力してください');
      return;
    }
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        toMosaicId: 'aaaaaaaa',
        fromMosaicId: 'bbbbbbb',
        publicKey: 'xxxxxxxxx',
        amount: amount,
        price: price,
        type: 'Sell',
      }),
    });
  };

  const handleSellRequest = () => {
    if (amount === 0 || price === 0) {
      alert('金額、または数量を入力してください');
      return;
    }
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        toMosaicId: 'bbbbbbb',
        fromMosaicId: 'aaaaaaaa',
        publicKey: 'xxxxxxxxx',
        amount: amount,
        price: price,
        type: 'Buy',
      }),
    });
  };

  return (
    <Card style={{ width: '100%' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button color='primary' fullWidth onClick={handleBuyRequest}>
            Buy
          </Button>
          <Button color='secondary' fullWidth onClick={handleSellRequest}>
            Sell
          </Button>
        </div>
      </CardContent>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            type='numeric'
            label='amount'
            fullWidth
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <TextField
            type='numeric'
            label='price'
            fullWidth
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
      </CardContent>
    </Card>
  );
}
