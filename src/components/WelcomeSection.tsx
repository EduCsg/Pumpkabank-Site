import welcomeImage from "../assets/Welcome.png";

import divider01 from "../assets/dividers/Divider01.svg";

const WelcomeSection = () => {
	const ColorsIcons = [
		"Color1.svg",
		"Color2.svg",
		"Color3.svg",
		"Color4.svg",
		"Color5.svg",
		"Color6.svg",
	];

	return (
		<section className="flex flex-col">
			<div className="flex items-center font-semibold max-w-[80vw] mx-auto mt-16">
				<div className="flex flex-col gap-4 w-[50vw]">
					<h1 className="text-[60px] max-w-[5w] text-white">
						O 1º banco que conecta
						<br />
						todas as regiões em UMA
					</h1>

					<p className="text-[30px] text-green">
						De Kanto a Paldea, seu dinheiro onde você quiser!
					</p>

					<div className="flex gap-1">
						{ColorsIcons &&
							ColorsIcons.map((color, index) => (
								<img
									src={`src/assets/colorsIcons/${color}`}
									key={index}
									className={`w-[50px] h-[50px] rounded-full bg-${color} `}
								/>
							))}
					</div>
				</div>

				<div className="w-[30vw]">
					<img src={welcomeImage} className="" alt="" />
				</div>
			</div>

			<img src={divider01} alt="" />
		</section>
	);
};

export default WelcomeSection;
