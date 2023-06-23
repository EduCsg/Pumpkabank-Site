import Divider02 from "../assets/dividers/Divider02.svg";
import PhoneScreen from "../assets/PhoneScreen.png";

import UpperPhoneDetails from "../assets/details/UpperPhoneDetails.svg";
import BottomPhoneDetails from "../assets/details/BottomPhoneDetails.svg";

const SecondSection = () => {
	return (
		<section className="flex flex-col bg-lpurple">
			<div className="flex items-center font-semibold max-w-[80vw] mx-auto mt-12">
				<div className="w-[30vw]">
					<img
						src={PhoneScreen}
						className="w-[80%]"
						alt="Celular com o aplicativo do Pumpkabank aberto"
					/>
				</div>

				<div className="flex flex-col text-white items-center gap-10 w-[40vw]">
					<img src={UpperPhoneDetails} className="-translate-x-48" alt="" />

					<div className="flex flex-col gap-12">
						<h1 className="text-[60px] max-w-[5w]">
							Transferências <span className="text-green">GRÁTIS</span>
							<br />
							sempre que precisar!
						</h1>

						<div className="flex flex-col gap-4 text-[20px] font-normal">
							<p>
								Precisa enviar aquele dinheiro para o outro lado do mundo e não
								sabe como? Deixa que o Pumpkabank resolve!
							</p>

							<p>
								Você pode transferir dinheiro pelo app e se sacar em qualquer
								caixa eletrônico! O Pumpkabank é parceiro das maiores empresas
								do mundo!
							</p>
						</div>

						<h1 className="text-green text-5xl text-center">
							PRÁTICO <span className="text-white">&</span> <br /> ACESSÍVEL
						</h1>
					</div>

					<img
						src={BottomPhoneDetails}
						className="translate-x-20"
						alt="Divisor da seção"
					/>
				</div>
			</div>

			<img src={Divider02} alt="Divisão da seção" />
		</section>
	);
};

export default SecondSection;
