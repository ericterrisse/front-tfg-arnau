import React from "react";

interface Props {}

const Navbar = (props: Props) => {
	return (
		<div className="flex flex-col">
			<div className="flex p-5 text-xl font-semibold uppercase tracking-wider justify-center">
				house flipping tool · previsió de beneficis
			</div>
			<span className="w-[90%] h-[1px] bg-black m-auto" />
		</div>
	);
};

export default Navbar;
