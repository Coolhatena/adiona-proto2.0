import { Burn } from "./Burn";

function Recompensas() {
	return (
		<div className="App">
		  <Burn numberOfTokens = {5}/>
		  <Burn numberOfTokens = {10}/>
		  <Burn numberOfTokens = {15}/>
		  <Burn numberOfTokens = {20}/>
		</div>
	);
  }

export {Recompensas}