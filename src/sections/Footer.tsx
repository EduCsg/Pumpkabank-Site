import DownloadBtn from "../components/DownloadBtn";

import { RotomPlay, ApplinStore } from "../assets/export";

import * as social from "../assets/social/export";

import { Logo } from "../assets/export";

const Footer = () => {
	const footerLinks = [
		{
			title: "PumpkaBank",
			links: ["Lojas parceiras", "Cartões", "Quem somos", "Soluções"],
		},
		{
			title: "Outros",
			links: [
				"Contatos",
				"Dúvidas frequentes",
				"Trabalhe com a Pumpkabank",
				"Sou das Ilhas Laranjas, oque fazer?",
			],
		},
		{
			title: "Baixe o APP",
			links: ["Rotom Play", "Applin Store"],
			images: [RotomPlay, ApplinStore],
		},
		{
			title: "Redes Sociais",
			links: ["Facebook", "Instagram", "Linkedin", "Youtube"],
			images: [
				social.Facebook,
				social.Instagram,
				social.Linkedin,
				social.Youtube,
			],
		},
	];

	return (
		<footer className="bg-lpurple">
			<div className="flex flex-row max-w-[70vw] py-20 mx-auto justify-between">
				{footerLinks &&
					footerLinks.map((footerLink, index) => (
						<div key={index} className="flex flex-col gap-4">
							{/* */}
							{/* Loop de títulos */}
							<h1 className="text-white font-semibold text-xl">
								{footerLink.title}
							</h1>

							<div className="w-[60px] h-[5px] my-2 rounded-full bg-pink"></div>

							{/* Loop de todos, menos o das redes sociais */}
							<div className="flex flex-col gap-4">
								{footerLink.links &&
									footerLink.links.map((link, index) =>
										//
										// Se for o de baixar apps, mostra em coluna
										footerLink.title.includes("Baixe") ? (
											<div className="gap-4">
												<div className="text-white">
													<DownloadBtn
														key={link}
														img={footerLink.images?.[index]}
														title={link}
													/>
												</div>
											</div>
										) : //
										//
										// Se não for para baixar, mostra normal
										// Se for o de redes sociais, não mostra nada
										//
										footerLink.title.includes("Redes") ? null : (
											<a
												key={index}
												href="#"
												className="text-white font-normal text-base hover:text-green "
											>
												{link}
											</a>
										),
									)}

								{/* Loop de redes sociais */}
								{footerLink.title.includes("Redes") && (
									<div className="flex flex-row gap-4">
										{footerLink.links &&
											footerLink.links.map((link, index) => (
												// #26e55f  =>  invert(84%) sepia(20%) saturate(1775%) hue-rotate(72deg) brightness(92%) contrast(94%);
												<div className="flex flex-row justify-center items-center gap-4 hover:cursor-pointer hover:scale-105 transition-all">
													<img
														key={link}
														src={footerLink.images?.[index]}
														title={link}
													/>
												</div>
											))}
									</div>
								)}
							</div>
						</div>
					))}
			</div>

			{/* Divisor do footer */}
			<div className="h-[2px] w-full bg-[#5C31BB] "></div>

			<div className="flex flex-row max-w-[70vw] py-8 mx-auto items-center justify-between text-white">
				<div className="flex flex-col gap-2 w-[30vw]">
					<p>Copyright @2022 Pumpkabank - Todos os Direitos Reservados</p>
					<p>Monsters Inc. Pokémon Company e Game Freak</p>
				</div>

				<div className="flex w-[10vw] items-center justify-center">
					<img src={Logo} alt="Logo do Pumpkabank" />
				</div>

				<div className="w-[30vw] flex flex-col gap-2 items-end">
					<p className="flex items-center">
						Designed By
						<a
							href="https://www.linkedin.com/in/giovannymarin/"
							target="_blank"
							className="text-green ml-1 font-semibold hover:underline"
						>
							Giovanny Marin de Almeida
						</a>
					</p>
					<p className="flex">
						Developed by
						<a
							href="https://www.linkedin.com/in/educasagrande"
							target="_blank"
							className="text-green ml-1 font-semibold hover:underline"
						>
							Eduardo Casagrande
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
