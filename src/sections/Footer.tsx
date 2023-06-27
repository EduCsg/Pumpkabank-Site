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
			<div className="flex flex-col md:flex-row flex-wrap justify-between md:justify-center xlg:justify-between max-w-[80vw] xlg:max-w-[70vw] pt-20 mx-auto">
				{footerLinks &&
					footerLinks.map((footerLink, index) => (
						<div
							key={index}
							className="flex flex-col gap-4 px-4 w-auto sm:w-[60vw] md:w-[40vw] xlg:w-[25vw] xxl:w-auto mb-20"
						>
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
											<div className="gap-4" key={link}>
												<div className="text-white">
													<DownloadBtn
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
												className="text-white font-normal text-base hover:text-green break-words"
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
												<div
													className="flex flex-row justify-center items-center gap-4 hover:cursor-pointer hover:scale-105 transition-all"
													key={link}
												>
													<img src={footerLink.images?.[index]} title={link} />
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

			<div className="flex flex-col xl:flex-row max-w-[70vw] py-8 mx-auto gap-10 items-center justify-between text-white">
				<div className="flex flex-col gap-2 text-center xl:items-start w-[90vw] xl:w-[30vw]">
					<p>
						Copyright &copy; {new Date().getFullYear()} Pumpkabank - Todos os
						Direitos Reservados
					</p>
					<p>Monsters Inc. Pokémon Company & Game Freak.</p>
					<p>
						Encontrou um Bug?{" "}
						<a
							href="https://github.com/EduCsg/Pumpkabank-Site/issues"
							className="text-green font-semibold hover:underline"
							target="_blank"
						>
							Reporte-nos!
						</a>
					</p>
				</div>

				<div className="flex xl:w-[10vw] items-center justify-center">
					<img src={Logo} alt="Logo do Pumpkabank" />
				</div>

				<div className="flex flex-col gap-2 items-center text-center w-[100vw] xl:items-end xl:w-[30vw]">
					<p className="flex items-center">
						Designed by:
						<a
							href="https://www.linkedin.com/in/giovannymarin/"
							target="_blank"
							className="text-green ml-1 font-semibold hover:underline"
						>
							Giovanny Marin de Almeida
						</a>
					</p>
					<p className="flex">
						Developed by:
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
