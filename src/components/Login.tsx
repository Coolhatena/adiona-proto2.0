import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";


export function Login() {
	const navigate = useNavigate();

	const onLogin = () => {
		const email = document.getElementById("email") as HTMLInputElement | null;
		const password = document.getElementById("password") as HTMLInputElement | null;

		if (email?.value === "adiona@gmail.com" && password?.value === "adiona123"){
			navigate("/Principal");
		}
	}

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
	}


	return(
		<section className="h-100 gradient-form">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-xl-10">
						<div className="card rounded-3 text-black">
							<div className="row g-0">
								<div className="col-lg-6">
									<div className="card-body p-md-5 mx-md-4">

										<div className="text-center">
											<img src="logo_adiona.png" alt="Logo Adiona" className="Logo"/>
										</div>

										<div className="d-flex align-items-center justify-content-center mb-2  pb-4">
											<p className="mb-0 me-3">Don&apos;t have an account?</p>
											<a className="sign_up" href="#!">Sign up</a>
										</div>
										
										<form className="text-center" onSubmit={onSubmit}>
											<div className="form-outline mb-4 mb-2">
												<input type="email" id="email" className="form-control" placeholder="Email address" />
											</div>

											<div className="form-outline mb-4">
												<input type="password" id="password" className="form-control" placeholder="Password" />
											</div>

											<div className="text-center pt-3 mb-2 pb-1">
												<button className="btn_login sign_in" type="submit" onClick={onLogin}>
														Sign in
												</button>
											</div>

											<a className="forgot" href="#!">Forgot password?</a>
											
										</form>

									</div>
								</div>

								<div className="Design d-none d-sm-none d-md-none d-lg-block">
									<div className="text-white px-3 py-4 p-md-5 mx-md-4">
										<h4 className="slogan">Travel with experience</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
