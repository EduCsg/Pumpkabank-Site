/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.svg";

const Header = () => {
	const [height, setHeight] = useState(0);
	const headerRef: any = useRef(null);
	const removeHeaderRef: any = useRef(null);

	const removeHeaderHeight = () => {
		setHeight(headerRef.current?.clientHeight);

		if (removeHeaderRef) {
			removeHeaderRef.current.style.height = `${height}px`;
		}
	};

	window.addEventListener("resize", () => {
		removeHeaderHeight();
	});

	useEffect(() => {
		removeHeaderHeight();
	});

	return (
		<>
			<header
				ref={headerRef}
				className="flex fixed w-[80vw] left-1/2 -translate-x-1/2 justify-between items-center z-50"
			>
				<img
					className="h-[90px] w-[90px]"
					src={logo}
					alt="Logo do Pumpkabank"
				/>

				<nav className="bg-white rounded-b-[50px] h-24 flex px-16 gap-24 items-center font-semibold text-purple">
					<ul className="flex gap-4">
						<li className="p-4 rounded-xl hover:bg-pink hover:cursor-pointer hover:text-white transition-all duration-200 ease-out">
							<a href="#">Lojas</a>
						</li>
						<li className="p-4 rounded-xl hover:bg-pink hover:cursor-pointer hover:text-white transition-all duration-200 ease-out">
							<a href="#">Parceiros</a>
						</li>
						<li className="p-4 rounded-xl hover:bg-pink hover:cursor-pointer hover:text-white transition-all duration-200 ease-out">
							<a href="#">Saiba mais</a>
						</li>
					</ul>

					<ul className="group flex gap-4">
						<li>
							<a
								href="#"
								className="p-4 rounded-xl hover:bg-pink hover:cursor-pointer hover:text-white transition-all duration-200 ease-out"
							>
								Criar conta
							</a>
						</li>

						<li>
							<a
								href="#"
								className="p-4 rounded-xl bg-pink text-white hover:cursor-pointer group-hover:text-purple group-hover:bg-white ring-pink hover:!text-pink hover:ring-2 ring-inset transition-all duration-200 ease-out"
							>
								Login
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<div ref={removeHeaderRef} id="removeHeader"></div>
		</>
	);
};

export default Header;
