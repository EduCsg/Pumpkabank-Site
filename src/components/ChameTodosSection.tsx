import ChameTodosImg from "../assets/ChameTodos.png";

import LeftCardDetails from "../assets/details/LeftCardDetails.svg";

import Card1 from "../assets/cards/card1.png";
import Card2 from "../assets/cards/card2.png";
import Card3 from "../assets/cards/card3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import RightCardDetails from "../assets/details/RightCardDetails.svg";

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
		<section className="flex flex-col bg-lpurple">
			<div className="flex flex-col items-center max-w-[90vw] mx-auto mt-12">
				<div className="flex flex-col items-center">
					<img
						src={ChameTodosImg}
						className="w-[70%]"
						alt="Imagem chame todos"
					/>

					<p className="text-white font-light text-3xl mt-5">
						Conquiste prêmios, <span className="text-green">Pokémons</span> e
						cartões personalizados!
					</p>
				</div>

				<div className="flex justify-center items-center max-w-[90vw] mt-20 w-full">
					<img
						src={LeftCardDetails}
						alt="Detalhes"
						className="w-[22vw] h-[50vh] translate-x-20 translate-y-20"
					/>

					<div className="w-[35vw]">
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

					<img
						src={RightCardDetails}
						alt="Detalhes"
						className="w-[22vw] h-[30vh] -translate-x-0 -translate-y-24"
					/>
				</div>

				<div className="mb-20 mt-10 text-white font-semibold hover:cursor-pointer">
					<a
						href="#"
						className="px-14 py-5 shadow-[#e23063] shadow-[0px_0px_12px_0px] bg-pink rounded-lg"
					>
						EU QUERO!
					</a>
				</div>
			</div>
		</section>
	);
};

export default ChameTodosSection;
