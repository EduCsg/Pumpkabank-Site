import venhaTambemSvg from "../assets/venhaTambem.png";

const VenhaTambemSection = () => {
	return (
		<section className="max-w-[90vw] mx-auto mb-24">
			<div className="flex items-center justify-center">
				<img
					src={venhaTambemSvg}
					className="max-w-[60vw]"
					alt="Imagem escrito venha também para o Pumpkabank"
				/>
			</div>
		</section>
	);
};

export default VenhaTambemSection;
