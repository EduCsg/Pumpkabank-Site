type Props = {
	img: string;
	title: string;
};

const DownloadBtn = ({ img, title }: Props): JSX.Element => {
	return (
		<a
			className="flex items-center text-left gap-3 bg-pink p-2 px-4 shadow-[#e23063] shadow-[0px_0px_12px_0px] rounded-md hover:cursor-pointer"
			href="#"
		>
			<img src={img} className="h-[50px]" alt="Logo do ApplinStore" />

			<div className="flex flex-col">
				<p className="text-xs">Disponível no</p>
				<p className="text-xl font-medium">{title}</p>
			</div>
		</a>
	);
};

export default DownloadBtn;
