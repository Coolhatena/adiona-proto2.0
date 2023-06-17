import { Burn } from "./Burn";
import { RewardCard } from "./RewardCard";
import { RecompensasStyles } from "./styles/Recompensas";
import { RewardCardStyles } from "./styles/RewardCardStyles";

function Recompensas() {
	return (
		<div className="Recompensa">
			<div className="menu">
				<img src="icon_user.png" alt="user" className="user"/>
				<h3>Nombre Usuario</h3>
				<ul className="list m-4">
					<li className="list_button">
						<div className="list_button m-4">
							<a href="/#" className="nav_link">BACK</a>
						</div>
						<div className="list_button">
							<a href="/#" className="nav_link">TOTAL</a>
						</div>
						<div className="total">
							<div className="datos">
								<p>El total de tus puntos son:</p>
							</div>
							<div className="puntos">
								<p>El total de tus puntos son:</p>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<div className="contenedor">
					<h1 className="title_g">Adiona Rewards</h1>
				<div style={RecompensasStyles.div}>
					<div style={RecompensasStyles.grid}>
						<RewardCard title="1 Free Night" description="Get 1 free night with any participant Hilton Hotel" price={100}/>
						<RewardCard title="1 Free Night" description="Get 1 free night with any participant Hilton Hotel" price={100}/>
						<RewardCard title="1 Free Night" description="Get 1 free night with any participant Hilton Hotel" price={100}/>
						<RewardCard title="1 Free Night" description="Get 1 free night with any participant Hilton Hotel" price={100}/>
						<RewardCard title="1 Free Night" description="Get 1 free night with any participant Hilton Hotel" price={100}/>
						<RewardCard title="1 Free Night" description="Get 1 free night with any participant Hilton Hotel" price={100}/>
					</div>	
				</div>
			</div>
		</div>
	);
  }

export {Recompensas}