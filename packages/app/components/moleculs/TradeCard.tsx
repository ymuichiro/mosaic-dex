import { TradeItem } from '@/models/Trade';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function TradeCard(props: { data: TradeItem; type: 'Buy' | 'Sell' }): JSX.Element {
  return (
    <Card style={{ width: '100%' }}>
      <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography color='textPrimary'>amount / {props.data.amount.toLocaleString()} </Typography>
        <Typography color={props.type === 'Buy' ? 'primary' : 'error'}>
          price / {props.data.price.toLocaleString()}
        </Typography>
      </Box>
    </Card>
  );
}
