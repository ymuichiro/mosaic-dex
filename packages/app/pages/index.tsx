import OrderBook from '@/components/organisms/OrderBook';
import OrderForm from '@/components/organisms/OrderForm';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
const OrderHistory = dynamic(() => import('@/components/organisms/OrderHistory'), { ssr: false });

/**
 * Application Home
 */
export default function Home(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr) 1.5fr',
        gridTemplateRows: 'repeat(2, 80px) 1fr',
        gridColumnGap: '0px',
        gridRowGap: '0px',
        height: '90svh',
        width: '100vw',
        minWidth: '1200px',
        padding: 3,
      }}
    >
      <div
        style={{ gridColumn: '1/3', gridRow: '1/2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Typography variant='h4'>Mosaic X</Typography>
      </div>
      <div
        style={{
          gridColumn: '1/2',
          gridRow: '2/3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant='h6' textAlign={'center'}>
          Buy
        </Typography>
        <Divider style={{ width: '100%' }} />
      </div>
      <div className='scroll-bar-off' style={{ gridColumn: '1/2', gridRow: '3/4', overflowY: 'auto' }}>
        <OrderBook mosaicId='aaaaaaaa' type='Buy' />
      </div>
      <div
        style={{
          gridColumn: '2/3',
          gridRow: '2/3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant='h6' textAlign={'center'}>
          Sell
        </Typography>
        <Divider style={{ width: '100%' }} />
      </div>
      <div className='scroll-bar-off' style={{ gridColumn: '2/3', gridRow: '3/4', overflowY: 'auto' }}>
        <OrderBook mosaicId='bbbbbbb' type='Sell' />
      </div>
      <div
        style={{
          gridColumn: '3/4',
          gridRow: '2/3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant='h6' textAlign={'center'}>
          Order
        </Typography>
        <Divider style={{ width: '100%' }} />
      </div>
      <div style={{ gridColumn: '3/4', gridRow: '3/4', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <OrderForm />
        </div>
        <div>
          <OrderHistory />
        </div>
      </div>
    </Box>
  );
}

export async function getServerSideProps() {
  // for (const _ in new Array(100).fill(null)) {
  //   await prisma.trade.create({
  //     data: {
  //       fromMosaicId: 'aaaaaaaa',
  //       toMosaicId: 'bbbbbbbb',
  //       publicKey: 'xxxxxxxxxxxxxxxxxxxxxxxx',
  //       amount: 100,
  //       price: 1000,
  //     },
  //   });
  // }

  // for (const _ in new Array(100).fill(null)) {
  //   await prisma.trade.create({
  //     data: {
  //       fromMosaicId: 'bbbbbbbb',
  //       toMosaicId: 'aaaaaaaa',
  //       publicKey: 'xxxxxxxxxxxxxxxxxxxxxxxx',
  //       amount: 10,
  //       price: 1000,
  //     },
  //   });
  // }

  return {
    props: {},
  };
}
