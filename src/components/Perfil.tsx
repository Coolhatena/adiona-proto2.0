function Perfil () {
	return(
        <section className="w-100">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3 d-block">
                            <div className="row g-0">
                                <div className="Design_user">
                                    <img src="icon_user.png" alt="User" style={{width: "6rem"}}/>
                                    <h5>Marie Horwitz</h5>
                                    <p>Web Designer</p>
                                    <i className="far fa-edit mb-5"/>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">info@example.com</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">123 456 789</p>
                                            </div>
                                        </div>
                                        <h6>Projects</h6>
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Recent</h6>
                                                <p className="text-muted">Lorem ipsum</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Most Viewed</h6>
                                                <p className="text-muted">Dolor sit amet</p>
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