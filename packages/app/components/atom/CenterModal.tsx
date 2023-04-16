import Modal from '@mui/material/Modal';

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function CenterModal(props: Props): JSX.Element {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div
        style={{ width: '100vw', height: '100svh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {props.children}
      </div>
    </Modal>
  );
}
