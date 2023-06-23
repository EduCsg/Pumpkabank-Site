import Divider02 from "../assets/dividers/Divider02.svg";

import LeftDetails from "../assets/details/LeftInfoDetails.svg";
import RightDetails from "../assets/details/RightInfoDetails.svg";

import Divider04 from "../assets/dividers/Divider04.svg";

const InfoSection = () => {
	const infos = [
		{
			title: "Saques nos caixas da rede Pumpkabank!",
			description:
				"São mais de 30 mil caixas em diversas cidades! Saque sem cobrança de tarifa.",
		},
		{
			title: "Atendimento",
			subtitle: "24h",
			description: "Disponível do momento que você precisar!",
		},
		{
			title: "Conta e cartão gratuitos!",
			description:
				"Chega de cobranças! Cuidamos do seu dinheiro de graça! Aproveite os benefícios! ",
		},
		{
			title: "Prêmios, Pokémon e Brindes!",
			description:
				"Transferindo no Pumpkabank te da direito de solicitar prêmios das nossas lojas parceiras! ",
		},
		{
			title: "Transferências e TOADs ilimitados!",
			description:
				"Movimente seu dinheiro pra onde você quiser! Em qualquer banco sem pagar nada!",
		},
		{
			title: "Filas no Taxi Voador nunca mais!",
			description:
				"Economize e utilize nossas promoções para se livrar das filas de serviços!",
		},
	];

	return (
		<section className="flex flex-col">
			<img src={Divider02} alt="Divisor da seção" />

			<div className="flex flex-row items-center max-w-[80vw] mx-auto mt-12">
				<img src={LeftDetails} className="w-[5vw]" alt="Detalhes" />

				<div className="w-[60vw] flex flex-wrap gap-16 justify-center">
					{infos.map((info) => (
						<div className="text-white w-[15vw]">
							<h1 className="font-semibold text-2xl">{info.title}</h1>
							<h1 className="font-semibold text-2xl">{info.subtitle}</h1>

							<div className="w-[60px] h-[5px] my-4 rounded-full bg-pink"></div>

							<p className="font-normal text-l">{info.description}</p>
						</div>
					))}
				</div>

				<img src={RightDetails} className="w-[5vw]" alt="Detalhes" />
			</div>

			<img src={Divider04} alt="Divisor da seção" />
		</section>
	);
};

export default InfoSection;
