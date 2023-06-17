import Identicon from '@polkadot/react-identicon';
import clsx from 'clsx';
import { buttonStyles } from '@gear-js/ui';

type Props = {
  address: string;
  name: string | undefined;
  onClick: () => void;
  isActive?: boolean;
  block?: boolean;
};

function AccountButton({ address, name, onClick, isActive, block }: Props) {
  const className = clsx(
    isActive ? buttonStyles.primary : buttonStyles.light,
    block && buttonStyles.block,
  );

  const styles = {
		"align-items": "center",
		"border-radius": "24px",
		"display": "inline-flex",
		"font-weight": "600",
		"justify-content": "space-between",
		"transition": "all .25s",
		"font-size": "14px",
		"line-height": "16px",
		"max-height": "40px",
		"padding": "12px 24px",
		"background-color": "hsla(0, 0%, 100%, .102)"
	}


  return (
    <button type="button" style={styles} onClick={onClick}>
      <Identicon value={address} className={buttonStyles.icon} theme="polkadot" size={28} />
      <p style={{marginLeft: "0.5rem"}}>{name}</p>
    </button>
  );
}

export { AccountButton };
