import { HandPhoneImage, RotomPlay, ApplinStore } from "../assets/export";

import {
	TopDownloadDetails,
	BottomDownloadDetails,
} from "../assets/details/export";

import { Divider05 } from "../assets/dividers/export";

import DownloadBtn from "../components/DownloadBtn";

const AppScreen = () => {
	return (
		<section className="flex -mt-[180px]">
			<div className="mx-auto">
				<div className="flex items-center justify-center max-w-[90vw] mx-auto">
					<div className="max-w-[30wv] translate-y-32">
						<img
							src={HandPhoneImage}
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
								<DownloadBtn img={RotomPlay} title="Rotom Play" />

								<DownloadBtn img={ApplinStore} title="Applin Store" />
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

				<img src={Divider05} className="relative z-30" alt="Divisor da seção" />
			</div>
		</section>
	);
};

export default AppScreen;
