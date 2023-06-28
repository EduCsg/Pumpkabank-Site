import { venhaTambem } from "../assets/export";

const VenhaTambemSection = () => {
	return (
		<section className="max-w-[90vw] mx-auto mb-10 xlg:mb-24">
			<div className="flex items-center justify-center min-h-[60vh] xlg:min-h-0">
				<img
					src={venhaTambem}
					className="max-w-[95vw] xlg:max-w-[60vw]"
					alt="Imagem escrito venha também para o Pumpkabank"
				/>
			</div>
		</section>
	);
};

export default VenhaTambemSection;
