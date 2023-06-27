import { Divider01, Divider02 } from "../assets/dividers/export";

import { PhoneScreen } from "../assets/export";

import {
	UpperPhoneDetails,
	BottomPhoneDetails,
} from "../assets/details/export";

const SecondSection = () => {
	return (
		<>
			<img src={Divider01} alt="Divisão da seção" />

			<section className="flex flex-col pb-10 bg-lpurple">
				<div className="flex flex-col md:flex-row items-center font-semibold max-w-screen lg:max-w-[80vw] mx-auto mt-12">
					<div className="flex justify-center md:justify-between mb-10 md:mb-0 max-w-[90vw] md:max-w-[40vw]">
						<img
							src={PhoneScreen}
							className="w-[80%]"
							alt="Celular com o aplicativo do Pumpkabank aberto"
						/>
					</div>

					<div className="flex flex-col text-white items-center gap-10 max-w-[80vw] md:w-[40vw]">
						<img
							src={UpperPhoneDetails}
							className="hidden lg:block -translate-x-48"
							alt="Detalhes"
						/>

						<div className="flex flex-col max-w-[80vw] mb-10 md:mb-0 md:max-w-full gap-12">
							<h1 className="text-[25px] md:text-[30px] text-center md:text-left xlg:text-[40px] text-white md:whitespace-nowrap">
								Transferências <span className="text-green">GRÁTIS</span>
								<br />
								sempre que precisar!
							</h1>

							<div className="flex flex-col gap-4 text-[20px] font-normal">
								<p>
									Precisa enviar aquele dinheiro para o outro lado do mundo e
									não sabe como? Deixa que o Pumpkabank resolve!
								</p>

								<p>
									Você pode transferir dinheiro pelo app e se sacar em qualquer
									caixa eletrônico! O Pumpkabank é parceiro das maiores empresas
									do mundo!
								</p>
							</div>

							<h1 className="text-green text-[35px] text-center xlg:text-[40px] md:whitespace-nowrap">
								PRÁTICO <span className="text-white">&</span> <br /> ACESSÍVEL
							</h1>
						</div>

						<img
							src={BottomPhoneDetails}
							className="hidden lg:block translate-x-20"
							alt="Detalhes"
						/>
					</div>
				</div>
			</section>

			<img src={Divider02} className="w-screen" alt="Divisão da seção" />
		</>
	);
};

export default SecondSection;
