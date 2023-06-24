import PhoneImage from "../assets/HandWithPhoneImage.png";

import TopDownloadDetails from "../assets/details/TopDownloadDetails.svg";
import BottomDownloadDetails from "../assets/details/BottomDownloadDetails.svg";

import RotomPlay from "../assets/RotomPlay.svg";
import ApplinStore from "../assets/ApplinStore.svg";

const AppScreen = () => {
	return (
		<section className="flex -mt-[180px]">
			<div className="">
				<div className="flex items-center justify-center max-w-[90vw] mx-auto">
					<div className="max-w-[30wv] translate-y-32">
						<img
							src={PhoneImage}
							alt="Mão segurando celular com aplicativo do Pumpkabank aberto"
						/>
					</div>

					<div className="flex flex-col max-w-[40wv] justify-center items-center text-center">
						<img
							src={TopDownloadDetails}
							alt="Detalhes"
							className="mb-20 w-[90%]"
						/>

						<div className="text-white">
							<h1 className="font-semibold text-[55px]">
								Baixe o app do <span className="text-green">Pumpkabank</span>
							</h1>
							<h2 className="text-3xl">e abra sua conta em poucos minutos!</h2>

							<div className="flex justify-center gap-8 my-4 ">
								<a
									className="flex items-center text-left gap-3 bg-pink p-2 px-4 shadow-[#e23063] shadow-[0px_0px_12px_0px] rounded-md hover:cursor-pointer"
									href="#"
								>
									<img
										src={RotomPlay}
										className="h-[50px]"
										alt="Logo do RotomPlay"
									/>

									<div className="flex flex-col">
										<p className="text-xs">Disponível no</p>
										<p className="text-xl font-medium">Rotom Play</p>
									</div>
								</a>

								<a
									className="flex items-center text-left gap-3 bg-pink p-2 px-4 shadow-[#e23063] shadow-[0px_0px_12px_0px] rounded-md hover:cursor-pointer"
									href="#"
								>
									<img
										src={ApplinStore}
										className="h-[50px]"
										alt="Logo do ApplinStore"
									/>

									<div className="flex flex-col">
										<p className="text-xs">Disponível no</p>
										<p className="text-xl font-medium">Rotom Play</p>
									</div>
								</a>
							</div>

							<p className="text-base font-light">
								Download gratuito, rápido e simples!
							</p>
						</div>

						<img
							src={BottomDownloadDetails}
							alt="Detalhes"
							className="mt-20 -translate-x-20 translate-y-32 w-[90%]"
						/>
					</div>
				</div>

				<img
					src="src/assets/dividers/Divider05.svg"
					className="relative z-50"
					alt=""
				/>
			</div>
		</section>
	);
};

export default AppScreen;