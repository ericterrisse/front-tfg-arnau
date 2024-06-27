import Image from "next/image";
import React from "react";
import houseImg from "@/assets/house.png";
import { FaHeart, FaFilePdf } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

interface Props {}

const Main = (props: Props) => {
	return (
		<div className="flex justify-between max-w-[90rem] m-auto py-10">
			<div className="w-[48%] flex flex-col gap-5">
				<h2 className="text-xl font-semibold tracking-wider uppercase flex gap-2 items-center">
					Habitatge analitzat:{" "}
					<a
						href="https://www.idealista.com/inmueble/102987023/"
						target="_blank"
					>
						<IoIosLink size={30} />
					</a>
				</h2>
				<Image
					src={houseImg}
					alt="house"
					className="drop-shadow-lg rounded-xl relative"
				/>
				<div className="flex flex-col gap-2">
					<div>
						<p className="text-lg font-semibold text-pink-500">
							Piso en venta en calle de la Mare de Déu dels Desemparats
						</p>
						<p className="font-semibold text-xl">400.000€</p>
						<div className="flex gap-5">
							<p>70 m²</p>
							<p>2 hab.</p>
							<p>Entreplanta exterior con ascensor</p>
						</div>
					</div>
					<p className="text-sm text-justify">
						PISO CON BALCÓN EN EL CORAZÓN DE GRACIA Acogedor piso ubicado en el
						corazón de Gràcia. Cerca de la plaza de la Revolución y de los Cines
						Verdi. La ubicación es perfecta gracias a la amplia oferta de bares,
						restaurantes y cultura. Las calles del barrio mantienen el
						pintoresco aire de pueblo y al mismo tiempo conectado al centro de
						Barcelona. Es una de las plazas con más sol en Gracia. Esta
						propiedad dispone de dos apartamentos a los que se accede mediante
						un hall de distribución central y es ideal para dos parejas o una
						madre y una hija. Cada apartamento está compuesto por zona de día
						con salón comedor y cocina, zona de noche con dormitorio principal y
						baño completo. Se puede acceder al piso por ascensor o escalera.
						¡Oportunidad de inversión! Piso distribuido en dos apartamentos
						independientes cada uno con su salón, cocina, baño completo y
						dormitorio. Totalmente amueblado y equipado.
					</p>
				</div>
			</div>
			<div className="w-[48%] flex flex-col gap-5">
				<h2 className="text-xl font-semibold tracking-wider uppercase">
					reformes a fer:
				</h2>
				<ul className="list-disc flex flex-col gap-3 text-lg px-10 py-5 drop-shadow-lg rounded-xl bg-white/50">
					<li>Lavabos</li>
					<ul className="list-disc ml-10 flex flex-col gap-3">
						<li className="flex justify-between">
							<p>Pica (2)</p>
							<p>1.400 €</p>
						</li>
						<li className="flex justify-between">
							<p>Rajoles</p>
							<p>2.200 €</p>
						</li>
						<li className="flex justify-between">
							<p>Dutxa</p>
							<p>2.000 €</p>
						</li>
					</ul>
					<li>Cuina</li>
					<ul className="list-disc ml-10 flex flex-col gap-3">
						<li className="flex justify-between">
							<p>Armaris</p>
							<p>3.600 €</p>
						</li>
						<li className="flex justify-between">
							<p>Taulell</p>
							<p>2.500 €</p>
						</li>
					</ul>
					<li>Interior</li>
					<ul className="list-disc ml-10 flex flex-col gap-3">
						<li className="flex justify-between">
							<p>Terra (60%)</p>
							<p>4.680 €</p>
						</li>
					</ul>
					<span className="w-full h-[1px] bg-black" />
					<div className="flex justify-between">
						<p>Total despeses</p>
						<p>-16.380 €</p>
					</div>
					<div className="flex justify-between">
						<p>Preu inicial</p>
						<p>400.000 €</p>
					</div>
					<div className="flex justify-between">
						<p>Preu post-reforma (10%)</p>
						<p>440.000 €</p>
					</div>
					<span className="w-full h-[1px] bg-black" />
					<div className="flex justify-between font-bold">
						<p>Benefici</p>
						<p>23.620 €</p>
					</div>
				</ul>
				<div className="flex justify-between">
					<div className="flex gap-5">
						<button className="p-3 bg-red-500 font-bold rounded-xl text-white flex gap-2 items-center">
							<FaHeart />
							Afegir a preferits
						</button>
						<button className="p-3 bg-red-500 font-bold rounded-xl text-white flex gap-2 items-center">
							<CiShare2 />
							Compartir
						</button>
					</div>
					<button className="p-3 bg-white font-bold rounded-xl text-black flex gap-2 items-center">
						<FaFilePdf />
						Descarregar PDF
					</button>
				</div>
			</div>
		</div>
	);
};

export default Main;
