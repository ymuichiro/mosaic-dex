import CircularProgress from '@mui/material/CircularProgress';

export default function CenterProgress(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '3rem', width: '100%' }}>
      <CircularProgress />
    </div>
  );
}
