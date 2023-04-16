import Image from 'next/image';
import React from 'react';
import { ITransaction, QRCodeGenerator } from 'symbol-qr-library';
import { NetworkType } from 'symbol-sdk/dist/src/model/network';
import CenterProgress from '../atom/CenterProgress';

export default function SymbolQR(props: { transaction: ITransaction; networkType: NetworkType }): JSX.Element {
  const [base64, setBase64] = React.useState<string>('');

  React.useEffect(() => {
    const generationHash = 'ACECD90E7B248E012803228ADB4424F0D966D24149B72E58987D2BF2F2AF03C4';
    const qrCode = QRCodeGenerator.createTransactionRequest(props.transaction, props.networkType, generationHash);
    qrCode.toBase64().subscribe((e) => setBase64(e));
  }, []);

  if (!base64) {
    return <CenterProgress />;
  }

  return <Image src={base64} alt='qr code' height={300} width={300} />;
}
