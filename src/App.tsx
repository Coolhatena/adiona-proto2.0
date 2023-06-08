import { useApi, useAccount } from "@gear-js/react-hooks";
import { Routing } from "pages";
import { ApiLoader } from "components";
import { withProviders } from "hocs";

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const isAppReady = isApiReady && isAccountReady;

  return (
    <>
      {/* <Header isAccountVisible={isAccountReady} /> */}
      {isAppReady ? <Routing /> : <ApiLoader />}
    </>
  );
}

export const App = withProviders(Component);
