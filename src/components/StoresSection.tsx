import { useState } from "react";

// Details
import TopStoresDetails from "../assets/details/TopStoresDetails.svg";
import BottomLeftStores from "../assets/details/BottomLeftStores.svg";
import BottomRightStores from "../assets/details/BottomRightStores.svg";

// icons
import DelibirdIcon from "../assets/stores/DelibirdIcon.png";
import TaxiIcon from "../assets/stores/TaxiIcon.png";
import GalarIcon from "../assets/stores/GalarIcon.png";
import DensokuIcon from "../assets/stores/DensokuIcon.png";

// store images
import DelibirdStore from "../assets/stores/DelibirdStore.png";
import TaxiStore from "../assets/stores/TaxiStore.png";
import GalarStore from "../assets/stores/GalarStore.png";
import DensokuStore from "../assets/stores/DensokuStore.png";

// section divider
import Divider06 from "../assets/dividers/Divider06.svg";

const StoresSection = () => {
	const [activeIndex, setActiveIndex] = useState(3);

	const storesContent = [
		{
			title: "Delibird Shop",
			icon: DelibirdIcon,
			image: DelibirdStore,
			iconAlt: "Ícone loja Delibird",
			index: 0,
		},
		{
			title: "Taxi Voador",
			icon: TaxiIcon,
			image: TaxiStore,
			iconAlt: "Ícone loja Taxi",
			index: 1,
		},
		{
			title: "Parque Temático",
			subtitle: "Galar Fire Station",
			icon: GalarIcon,
			image: GalarStore,
			iconAlt: "Ícone loja Galar",
			index: 2,
		},
		{
			title: "Roupas Densoku",
			icon: DensokuIcon,
			image: DensokuStore,
			iconAlt: "Ícone loja Densoku",
			index: 3,
		},
	];

	return (
		<section className="flex flex-col items-center">
			<div className="bg-lpurple w-full pb-10">
				<div className="flex flex-col mx-auto gap-4 max-w-[90vw]">
					<img src={TopStoresDetails} alt="Detalhes" className="" />

					<div className="flex items-center justify-center">
						{/* Conteúdo da esquerda */}
						<div className="flex flex-col w-[40vw] h-[60vh] justify-around gap-10">
							<div className="flex flex-col text-white font-medium gap-6 text-6xl ">
								<h1 className="font-semibold">Lojas Parceiras</h1>

								<div className="flex flex-col text-xl max-w-xl gap-3">
									<p>
										Ganhe Pontos de Liga e troque por diversos brindes,
										descontos, Pokémon treinados pelo Pumpkabank e evolua nessa
										jornada!
									</p>
									<p>Conheça algumas de nossas lojas parceiras:</p>
								</div>

								<div className="flex gap-8 mt-5">
									{storesContent.map((icon) => (
										<div
											className={`w-[80px] h-[80px] hover:cursor-pointer transition-all duration-300 ${
												activeIndex == icon.index
													? "ring-offset-lpurple ring-offset-4 ring-pink ring-4 rounded-full scale-110"
													: ""
											}`}
											key={icon.index}
											onClick={() => setActiveIndex(icon.index)}
										>
											<img
												src={icon.icon}
												alt={icon.iconAlt}
												className="w-[80px] h-[80px]"
											/>
										</div>
									))}
								</div>
							</div>

							<img
								src={BottomLeftStores}
								className="w-[30%] self-end translate-y-8 -translate-x-20 rotate-12"
								alt="Detalhes"
							/>
						</div>

						{/* Conteúdo direita (imagens, details e nome da img) */}
						<div className="flex flex-col items-center justify-center max-w-[50]">
							{/* imagens direita */}
							<div className="flex items-center justify-center w-[35vw] h-[60vh]">
								{storesContent &&
									storesContent.map((store) => (
										<img
											key={store.index}
											src={store.image}
											alt={store.iconAlt}
											className={`transition-all duration-300 max-w-[30vw] absolute opacity-0 ${
												activeIndex == store.index ? "opacity-100" : ""
											}`}
										/>
									))}
							</div>

							{/* Details baixo-esquerda */}
							<div className="flex">
								{/* Texto com nome da imagem */}
								<div className="flex flex-col items-center min-w-[600px] h-auto">
									{storesContent &&
										storesContent.map((store) => (
											<div
												key={store.index}
												className={`flex transition-all duration-300 flex-col justify-center items-center text-white text-6xl font-semibold absolute opacity-0 ${
													activeIndex == store.index ? "opacity-100" : ""
												}`}
											>
												<h1>{store.title}</h1>
												<h2 className="text-4xl">
													{store.subtitle ? store.subtitle : ""}
												</h2>
											</div>
										))}
								</div>

								{/* Details baixo-direita */}
								<img
									src={BottomRightStores}
									className="-translate-y-10"
									alt="Detalhes"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img src={Divider06} alt="Divisor de Seção" />
		</section>
	);
};

export default StoresSection;
