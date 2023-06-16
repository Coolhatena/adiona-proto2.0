import { RewardCard } from "./RewardCard";
import { RecompensasStyles } from "./styles/Recompensas";

function Recompensas() {
	return (
		<div style={RecompensasStyles.div}>
			<div style={RecompensasStyles.grid}>
				<RewardCard title="1 Free night" description="Get 1 free night with any participant Hillton Hotel" price={100}/>
				<RewardCard title="1 Free night" description="Get 1 free night with any participant Hillton Hotel" price={100}/>
				<RewardCard title="1 Free night" description="Get 1 free night with any participant Hillton Hotel" price={100}/>
				<RewardCard title="1 Free night" description="Get 1 free night with any participant Hillton Hotel" price={100}/>
			</div>
		</div>
	);
  }

export {Recompensas}