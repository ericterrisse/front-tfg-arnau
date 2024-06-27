import React from "react";

interface Props {}

const Bottombar = (props: Props) => {
	return (
		<div className="flex flex-col">
			<span className="w-[90%] h-[1px] bg-black m-auto" />
			<div className="flex p-5 tracking-wider justify-center">
				Tots els drets reservats · Arnau Añols Bordas &copy;
			</div>
		</div>
	);
};

export default Bottombar;
