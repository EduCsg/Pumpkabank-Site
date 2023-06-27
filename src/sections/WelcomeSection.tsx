import welcomeImage from "../assets/Welcome.png";

import {
	ColorIcon1,
	ColorIcon2,
	ColorIcon3,
	ColorIcon4,
	ColorIcon5,
	ColorIcon6,
} from "../assets/colorsIcons/export";

const WelcomeSection = () => {
	const ColorsIcons = [
		ColorIcon1,
		ColorIcon2,
		ColorIcon3,
		ColorIcon4,
		ColorIcon5,
		ColorIcon6,
	];

	return (
		<section className="flex flex-col">
			<div className="flex flex-col-reverse md:flex-row items-center justify-center text-left font-semibold max-w-[90vw] mx-auto mb-10 md:mb-0 mt-12">
				<div className="flex flex-col gap-5 md:max-w-[50vw] max-w-[70vw]">
					<h1 className="text-[30px] sm:text-[25px] md:text-[30px] xlg:text-[40px] xxl:text-[60px] text-white">
						O 1º banco que conecta
						<br />
						todas as regiões em UMA
					</h1>

					<p className="text-[20px] xxl:text-[30px] text-green">
						De Kanto a Paldea, seu dinheiro onde você quiser!
					</p>

					<div className="flex justify-center sm:justify-start gap-3">
						{ColorsIcons &&
							ColorsIcons.map((color, index) => (
								<img
									src={color}
									key={index}
									className={
										index == 0
											? "max-w-[35px] sm:max-w-[50px] md:max-w-max ring-offset-purple ring-offset-4 ring-pink ring-2 rounded-full"
											: "max-w-[35px] sm:max-w-[50px] md:max-w-max"
									}
								/>
							))}
					</div>

					<div className="flex justify-center sm:justify-start">
						<button className="bg-pink px-12 py-5 text-white rounded-lg">
							Criar Conta
						</button>
					</div>
				</div>

				<div className="max-w-[80vw] sm:max-w-[50vw] md:max-w-[30vw]">
					<img src={welcomeImage} className="p-8" alt="" />
				</div>
			</div>
		</section>
	);
};

export default WelcomeSection;
