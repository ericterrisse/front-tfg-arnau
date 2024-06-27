import Image from "next/image";
import React from "react";
import houseImg from "@/assets/house.webp";
import { FaHeart, FaFilePdf } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

interface Props {}

const Main = (props: Props) => {
	return (
		<div className="flex justify-between max-w-[90rem] m-auto py-10">
			<div className="w-[48%] flex flex-col gap-5">
				<h2 className="text-xl font-semibold tracking-wider uppercase">
					Habitatge analitzat:
				</h2>
				<Image
					src={houseImg}
					alt="house"
					className="drop-shadow-lg rounded-xl"
				/>
				<div className="flex flex-col gap-2">
					<div>
						<p className="text-lg font-semibold text-pink-500">
							Pis al carrer Bosch i Gimpera, Sarrià, Barcelona
						</p>
						<p className="font-semibold text-xl">1.445.000€</p>
						<div className="flex gap-5">
							<p>3 hab.</p>
							<p>232 m²</p>
							<p>exterior amb ascensor</p>
						</div>
					</div>
					<p className="text-sm text-justify">
						Piso alto en venta, único en la zona de 232 m2 útiles terraza de 12
						m2 en Bosch i Gimpera (Pedralbes). Amplio Salón-comedor de 70 m2
						distribuido en varios ambientes con salida a terraza. Cocina-office
						con lavadero y zona de servicio. Actualmente tiene 1 habitacion en
						suite con vestidor y baño con bañera y 2 habitaciones más con 2
						baños. En el caso de hacerse una reforma integral se podrían sacar 5
						habitaciones en la vivienda. El piso totalmente exterior, con mucha
						luz y vistas despejadas a Zona ajardinada. Situado en zona exclusiva
						y muy tranquila, al lado del Club de Tenis Barcelona y de las
						mejores escuelas internacionales. Finca con servicio de conserjería
						y vigilancia nocturna 24/7. Dos plazas parkings y trastero. Caja de
						seguridad. Parqué en todo el piso. DEBIDO A SU ESTRUCTURA DE
						PILARES, y ausencia de paredes maestras tiene total libertad de
						reforma, (incluyendo tipo Loft). No dude en contactar para ampliar
						información o agendar una visita.
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
							<p>Pica</p>
							<p>800€</p>
						</li>
						<li className="flex justify-between">
							<p>Dutxa</p>
							<p>1000€</p>
						</li>
						<li className="flex justify-between">
							<p>Rejoles</p>
							<p>12000€</p>
						</li>
					</ul>
					<li>Cuina</li>
					<ul className="list-disc ml-10 flex flex-col gap-3">
						<li className="flex justify-between">
							<p>Taulell</p>
							<p>800€</p>
						</li>
						<li className="flex justify-between">
							<p>Terra</p>
							<p>1000€</p>
						</li>
						<li className="flex justify-between">
							<p>Armaris</p>
							<p>5000€</p>
						</li>
					</ul>
					<li>Interior</li>
					<ul className="list-disc ml-10 flex flex-col gap-3">
						<li className="flex justify-between">
							<p>Finestres</p>
							<p>8000€</p>
						</li>
						<li className="flex justify-between">
							<p>Pintura</p>
							<p>2000€</p>
						</li>
						<li className="flex justify-between">
							<p>Armaris</p>
							<p>5000€</p>
						</li>
					</ul>
					<span className="w-full h-[1px] bg-black" />
					<div className="flex justify-between">
						<p>Total despeses</p>
						<p>-50.000€</p>
					</div>
					<div className="flex justify-between">
						<p>Preu inicial</p>
						<p>1.000.000€</p>
					</div>
					<div className="flex justify-between">
						<p>Preu post-reforma (7%)</p>
						<p>1.070.000€</p>
					</div>
					<span className="w-full h-[1px] bg-black" />
					<div className="flex justify-between font-bold">
						<p>Benefici</p>
						<p>20.000€</p>
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
