import welcomeImage from "../assets/Welcome.png";

import ColorIcon1 from "../assets/colorsIcons/Color1.svg";
import ColorIcon2 from "../assets/colorsIcons/Color2.svg";
import ColorIcon3 from "../assets/colorsIcons/Color3.svg";
import ColorIcon4 from "../assets/colorsIcons/Color4.svg";
import ColorIcon5 from "../assets/colorsIcons/Color5.svg";
import ColorIcon6 from "../assets/colorsIcons/Color6.svg";

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
			<div className="flex items-center font-semibold max-w-[80vw] mx-auto mt-12">
				<div className="flex flex-col gap-5 w-[50vw]">
					<h1 className="text-[60px] max-w-[5w] text-white">
						O 1º banco que conecta
						<br />
						todas as regiões em UMA
					</h1>

					<p className="text-[30px] text-green">
						De Kanto a Paldea, seu dinheiro onde você quiser!
					</p>

					<div className="flex gap-3">
						{ColorsIcons &&
							ColorsIcons.map((color, index) => (
								<img
									src={color}
									key={index}
									className={
										index == 0
											? ` ring-offset-purple ring-offset-4 ring-pink ring-2 rounded-full`
											: ``
									}
								/>
							))}
					</div>

					<div>
						<button className="bg-pink px-12 py-5 text-white rounded-lg">
							Criar Conta
						</button>
					</div>
				</div>

				<div className="w-[30vw]">
					<img src={welcomeImage} className="" alt="" />
				</div>
			</div>
		</section>
	);
};

export default WelcomeSection;
