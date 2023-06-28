import { Divider03, Divider04 } from "../assets/dividers/export";

import { ChameTodos } from "../assets/export";

import { Card1, Card2, Card3 } from "../assets/cards/export";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { LeftCardDetails, RightCardDetails } from "../assets/details/export";

const ChameTodosSection = () => {
	const cards = [
		{
			img: Card1,
		},
		{
			img: Card2,
		},
		{
			img: Card3,
		},
		{
			img: Card1,
		},
		{
			img: Card2,
		},
		{
			img: Card3,
		},
	];

	return (
		<>
			<img src={Divider03} className="w-screen" alt="Divisão da seção" />

			<section className="flex flex-col bg-lpurple">
				<div className="flex flex-col items-center max-w-[90vw] mx-auto mt-12">
					<div className="flex flex-col items-center">
						<img
							src={ChameTodos}
							className="md:w-[80%] xlg:w-[70%]"
							alt="Imagem chame todos"
						/>

						<p className="text-white font-light text-xl text-center md:text-3xl mt-5">
							Conquiste prêmios, <span className="text-green">Pokémons</span> e
							cartões personalizados!
						</p>
					</div>

					<div className="flex justify-center xl:justify-between items-center max-w-[90vw] mt-10 xlg:mt-20 w-full">
						{/* Detalhes esquerda */}
						<img
							src={LeftCardDetails}
							alt="Detalhes"
							className="w-[22vw] h-[50vh] translate-x-20 hidden xl:block translate-y-20"
						/>

						<div className="w-[80vw] sm:w-[60vw] mb-10 xl:mb-0 xl:w-[35vw]">
							<Swiper
								slidesPerView={3}
								loop={true}
								speed={500}
								initialSlide={1}
								centeredSlides={true}
								slideToClickedSlide={true}
								grabCursor={true}
								slidesPerGroup={1}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								modules={[Autoplay]}
							>
								{cards &&
									cards.map((card, index) => (
										<SwiperSlide key={index}>
											<img src={card.img} alt="Cartão" />
										</SwiperSlide>
									))}
							</Swiper>
						</div>

						{/* Detalhes direita */}
						<img
							src={RightCardDetails}
							alt="Detalhes"
							className="w-[22vw] h-[30vh] -translate-x-0  hidden xl:block -translate-y-24"
						/>
					</div>

					{/* Botão eu quero! */}
					<div className="mb-20 whitespace-nowrap mt-10 text-white font-semibold hover:cursor-pointer">
						<a
							href="#"
							className="px-10 py-5 shadow-[#e23063] shadow-[0px_0px_12px_0px] uppercase bg-pink rounded-lg"
						>
							eu quero!
						</a>
					</div>
				</div>
			</section>

			<img src={Divider04} alt="Divisão da seção" />
		</>
	);
};

export default ChameTodosSection;
