import { useAccount } from "@gear-js/react-hooks";

function Perfil () {

	const { accounts, account } = useAccount();
	
	return(
        <section className="w-100">
            <div className="container py-3 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3 d-block">
                            <div className="row g-0">
                                <div className="Design_user">
                                    <img src="icon_user.png" alt="User" style={{width: "6rem"}}/>
                                    <h5>{account?.meta.name}</h5>
                                    <p>Level 1</p>
                                    <i className="far fa-edit mb-5"/>
                                </div>
                                <div className="justify-content-center">
                                    <div className="card-body p-2">
                                        <div className="card-text" style={{alignItems: "center"}}>
                                            <div> 
                                                <h6>Account Address:</h6>
                                                <p className="text-muted">{account?.address}</p>
                                            </div>
                                        </div>
                                        <h6>Information</h6>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Token Balance:</h6>
                                                <p className="text-muted">{`${account?.balance.value} ${account?.balance.unit}`}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Platform:</h6>
                                                <p className="text-muted">{account?.meta.source}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Perfil };