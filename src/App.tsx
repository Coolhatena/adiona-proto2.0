import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import { Header, ApiLoader } from 'components';
import { withProviders } from 'hocs';
import { MintButton } from 'components/mintButton';
import { Burn } from 'components/Burn';
import { TransferButton } from 'components/Transfer';
import { ApproveButton } from 'components/Approve';

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const isAppReady = isApiReady && isAccountReady;

  return (
    <>
      {/* <Header isAccountVisible={isAccountReady} /> */}
		{isAppReady ? <Routing /> : <ApiLoader />}
	  	{/* <MintButton/>
		<Burn/>
		<TransferButton/>
		<ApproveButton/> */}
    </>
  );
}

export const App = withProviders(Component);
