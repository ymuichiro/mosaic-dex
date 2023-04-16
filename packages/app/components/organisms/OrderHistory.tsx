import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

export default function OrderHistory(): JSX.Element {
  const rows = [
    {
      created: new Date('1970/01/01'),
      price: 100,
      amount: 10,
    },
    {
      created: new Date('1970/01/01'),
      price: 100,
      amount: 10,
    },
    {
      created: new Date('1970/01/01'),
      price: 100,
      amount: 10,
    },
  ];

  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <CardContent>
        <Typography>History</Typography>
      </CardContent>
      <CardContent>
        <Table style={{ width: '100%' }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Created</TableCell>
              <TableCell align='right'>Price</TableCell>
              <TableCell align='right'>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.created.toLocaleDateString()}
                </TableCell>
                <TableCell align='right'>{row.price}</TableCell>
                <TableCell align='right'>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
