import { useState } from "react";

// Details
import {
	TopStoresDetails,
	BottomLeftStores,
	BottomRightStores,
} from "../assets/details/export";

import * as storesAssets from "../assets/stores/export";

// section divider
import { Divider06 } from "../assets/dividers/export";

const StoresSection = () => {
	const [activeIndex, setActiveIndex] = useState(3);

	const storesContent = [
		{
			title: "Delibird Shop",
			icon: storesAssets.DelibirdIcon,
			image: storesAssets.DelibirdStore,
			iconAlt: "Ícone loja Delibird",
			index: 0,
		},
		{
			title: "Taxi Voador",
			icon: storesAssets.TaxiIcon,
			image: storesAssets.TaxiStore,
			iconAlt: "Ícone loja Taxi",
			index: 1,
		},
		{
			title: "Parque Temático",
			subtitle: "Galar Fire Station",
			icon: storesAssets.GalarIcon,
			image: storesAssets.GalarStore,
			iconAlt: "Ícone loja Galar",
			index: 2,
		},
		{
			title: "Roupas Densoku",
			icon: storesAssets.DensokuIcon,
			image: storesAssets.DensokuStore,
			iconAlt: "Ícone loja Densoku",
			index: 3,
		},
	];

	return (
		<section className="flex flex-col items-center max-x-[100vw] overflow-hidden">
			<div className="bg-lpurple w-full pb-10">
				<div className="flex flex-col mx-auto gap-4 max-w-[90vw]">
					<img
						src={TopStoresDetails}
						alt="Detalhes"
						className=" mx-auto mt-10 -mb-10 hidden xl:block"
					/>

					<div className="flex flex-col xlg:flex-row items-center justify-center">
						{/* Conteúdo da esquerda */}
						<div className="flex flex-col max-w-[80vw] xlg:w-[40vw] min-h-[60vh] justify-around gap-10">
							<div className="flex flex-col text-white font-medium gap-6 text-6xl ">
								<h1 className="font-semibold text-[40px] md:text-[60px]">
									Lojas Parceiras
								</h1>

								<div className="flex flex-col text-base md:text-xl max-w-[90vw] md:max-w-xl gap-3">
									<p>
										Ganhe Pontos de Liga e troque por diversos brindes,
										descontos, Pokémon treinados pelo Pumpkabank e evolua nessa
										jornada!
									</p>
									<p>Conheça algumas de nossas lojas parceiras:</p>
								</div>

								<div className="flex flex-wrap gap-8 justify-center sm:justify-start mt-5">
									{storesContent.map((icon) => (
										<div
											className={`w-[13vw] xlg:w-[80px] xlg:h-[80px] hover:cursor-pointer transition-all duration-300 ${
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
												className="w-[13vw] xlg:w-[80px] xlg:h-[80px]"
											/>
										</div>
									))}
								</div>
							</div>

							<img
								src={BottomLeftStores}
								className="w-[30%] self-end translate-y-8 -translate-x-20 rotate-12 hidden xl:block"
								alt="Detalhes"
							/>
						</div>

						{/* Conteúdo direita (imagens, details e nome da img) */}
						<div className="flex flex-col items-center justify-center xlg:max-w-[40vw]">
							{/* imagens direita */}
							<div className="flex items-center justify-center w-[35vw] min-h-[25vh] sm:min-h-[40vh] xlg:h-[60vh]">
								{storesContent &&
									storesContent.map((store) => (
										<img
											key={store.index}
											src={store.image}
											alt={store.iconAlt}
											className={`transition-all duration-300 max-w-[50vw] md:max-w-[40vw] xlg:max-w-[30vw] absolute opacity-0 ${
												activeIndex == store.index ? "opacity-100" : ""
											}`}
										/>
									))}
							</div>

							{/* Details baixo-esquerda */}
							<div className="flex">
								{/* Texto com nome da imagem */}
								<div className="flex flex-col text-center items-center min-w-[600px] h-auto">
									{storesContent &&
										storesContent.map((store) => (
											<div
												key={store.index}
												className={`flex transition-all duration-300 flex-col justify-center items-center translate-y-6 lg:translate-y-0 text-white  font-semibold absolute opacity-0 ${
													activeIndex == store.index ? "opacity-100" : ""
												}`}
											>
												<h1 className="text-4xl md:text-6xl">{store.title}</h1>
												<h2 className="text-3xl md:text-4xl">
													{store.subtitle ? store.subtitle : ""}
												</h2>
											</div>
										))}
								</div>

								{/* Details baixo-direita */}
								<img
									src={BottomRightStores}
									className="-translate-y-10 hidden xl:block"
									alt="Detalhes"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="h-32 w-screen block xl:hidden"></div>
			</div>
			<img src={Divider06} className="" alt="Divisor de Seção" />
		</section>
	);
};

export default StoresSection;
