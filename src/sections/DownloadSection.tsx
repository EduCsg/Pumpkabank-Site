import { HandPhoneImage, RotomPlay, ApplinStore } from "../assets/export";

import {
	TopDownloadDetails,
	BottomDownloadDetails,
} from "../assets/details/export";

import { Divider05 } from "../assets/dividers/export";

import DownloadBtn from "../components/DownloadBtn";

const AppScreen = () => {
	return (
		<>
			<section>
				<div className="mx-auto -pt-8">
					<div className="flex items-center justify-center max-w-[90vw] mx-auto ">
						<div className="max-w-[30wv] translate-y-28 hidden xlg:block">
							<img
								src={HandPhoneImage}
								alt="Mão segurando celular com aplicativo do Pumpkabank aberto"
							/>
						</div>

						<div className="flex flex-col max-w-[40wv] justify-center items-center text-center">
							<img
								src={TopDownloadDetails}
								alt="Detalhes"
								className="mb-20 z-40 sm:translate-x-10 w-[90%]"
							/>

							<div className="text-white">
								<h1 className="font-semibold text-[40px] text-6xl">
									Baixe o app do <span className="text-green">Pumpkabank</span>
								</h1>
								<h2 className="text-xl sm:text-2xl">
									e abra sua conta em poucos minutos!
								</h2>

								<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12 mb-6 md:gap-8 md:my-4 ">
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
								className="mt-6 z-40 -translate-x-4 translate-y-4 xlg:translate-y-32 w-[90%]"
							/>
						</div>
					</div>

					<img
						src={Divider05}
						className="relative xlg:pt-8 z-20"
						alt="Divisor da seção"
					/>
				</div>
			</section>
		</>
	);
};

export default AppScreen;
