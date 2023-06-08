import { AccountButton } from '../account-button';
import styles from './Wallet.module.scss';

type Props = {
  address: string;
  name: string | undefined;
  onClick: () => void;
};

function Wallet({ address, name, onClick }: Props) {
  return (
    <div className={styles.wallet}>
		<p>{name}</p>
		<AccountButton address={address} name={name} onClick={onClick} />
    </div>
  );
}

export { Wallet };
