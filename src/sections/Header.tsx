/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Logo, HamburguerMenu, CloseMenu } from "../assets/export";
import React from "react";

const Header = () => {
	const [MoreThan766, setMoreThan766] = React.useState(false);
	const [isOpen, setIsOpen] = React.useState(false);
	const headerRef = React.useRef<any>(null);
	const [headerHeight, setHeaderHeight] = React.useState(0);

	// Roda sempre que a página é redimensionada para verificar se é maior que 766px
	window.addEventListener("resize", () => {
		window.innerWidth > 766 ? setMoreThan766(true) : setMoreThan766(false);
	});

	// Roda uma vez só quando abre a página
	useEffect(() => {
		window.innerWidth > 766 ? setMoreThan766(true) : setMoreThan766(false);
	}, []);

	// Roda para o headerHeight nunca ser igual a null
	useEffect(() => {
		if (!headerRef?.current?.clientHeight) {
			return;
		}

		setHeaderHeight(headerRef?.current?.clientHeight);
	}, [headerRef?.current?.clientHeight]);

	return (
		<>
			<header
				ref={headerRef}
				className={`flex flex-row mx-auto md:fixed w-[90vw] xxl:w-[80vw] md:left-1/2 md:-translate-x-1/2 justify-center lg:justify-between items-center z-50 transition-all duration-700 ease-in-out
				${!MoreThan766 ? (isOpen ? "max-h-[352px]" : "max-h-[0px]") : "max-h-auto"} `}
			>
				<img
					className="hidden lg:block h-[90px] w-[90px]"
					src={Logo}
					alt="Logo do Pumpkabank"
				/>

				<nav
					className={`flex flex-col md:flex-row bg-white md:translate-y-0 transition-all duration-700 ease-in-out
					text-purple rounded-b-[50px] font-semibold w-full px-6 lg:px-16 md:gap-24 gap-4 items-center py-6 md:py-0 md:w-auto md:h-24
					${isOpen ? "translate-y-[0]" : "-translate-y-[80vh]"}`}
				>
					<ul className="flex gap-4 justify flex-col md:flex-row items-center text-center whitespace-nowrap">
						<li className="p-2 md:p-4 rounded-xl hover:bg-pink hover:cursor-pointer hover:text-white transition-all duration-200 ease-out">
							<a href="#">Lojas</a>
						</li>
						<li className="p-2 md:p-4 rounded-xl hover:bg-pink hover:cursor-pointer hover:text-white transition-all duration-200 ease-out">
							<a href="#">Parceiros</a>
						</li>
						<li className="p-2 md:p-4 rounded-xl hover:bg-pink hover:cursor-pointer hover:text-white transition-all duration-200 ease-out">
							<a href="#">Saiba mais</a>
						</li>
					</ul>

					<ul className="group flex flex-col md:flex-row gap-4 items-center text-center">
						<li className="p-2 md:p-4">
							<a
								href="#"
								className="p-2 md:p-4 rounded-xl hover:bg-pink hover:cursor-pointer whitespace-nowrap hover:text-white transition-all duration-200 ease-out"
							>
								Criar conta
							</a>
						</li>

						<li className="p-2 md:p-4">
							<a
								href="#"
								className=" rounded-xl p-4 bg-pink text-white hover:cursor-pointer group-hover:text-purple group-hover:bg-white ring-pink hover:!text-pink hover:ring-2 ring-inset transition-all duration-200 ease-out"
							>
								Login
							</a>
						</li>
					</ul>
				</nav>

				<img
					src={HamburguerMenu}
					onClick={() => setIsOpen(!isOpen)}
					className={`md:hidden absolute top-4 right-10 w-[45px] transition-all duration-700 ease-in-out ${
						isOpen ? "-translate-y-20" : "translate-y-0"
					} hover:cursor-pointer`}
					alt="Ícone para abrir o menu hamburger"
				/>
				<img
					src={CloseMenu}
					onClick={() => setIsOpen(!isOpen)}
					className={`md:hidden absolute top-4  right-10 w-[45px] transition-all duration-700 ease-in-out ${
						isOpen ? "translate-y-0" : "-translate-y-20"
					} hover:cursor-pointer`}
					alt="Ícone para fechar o menu hamburger"
				/>
			</header>

			<div
				id="removeHeader"
				className={`hidden md:block ${
					MoreThan766 ? `h-[${headerHeight}px]` : "h-0"
				}`}
			></div>
		</>
	);
};

export default Header;
