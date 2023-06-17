import { Burn } from "./Burn";
import { RewardCardStyles } from "./styles/RewardCardStyles";

type Props = {
	title: string,
	description: string,
	price: number
  };

function RewardCard({title, description, price}: Props) {
	return (
	<div style={RewardCardStyles.div} className="shadow shadow-black/5 ">
		<p style={RewardCardStyles.title}>{title.toUpperCase()}</p>
		<p >{description}</p>
		<div style={RewardCardStyles.buttonDiv}>
			<Burn buttonStyle={RewardCardStyles.button} price={price}/>
		</div>
	</div>
	)
}

export { RewardCard }