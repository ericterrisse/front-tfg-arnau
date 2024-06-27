"use client";

import Navbar from "@/components/Navbar";
import useDebounce from "@/components/useDebounce";
import { useEffect, useState } from "react";
import Main from "./main/page";
import Bottombar from "@/components/Bottombar";

export default function Home() {
	const [input, setInput] = useState("test");
	const [responseApi, setResponseApi] = useState("");
	const debouncedSearch = useDebounce(input, 1000);

	useEffect(() => {
		if (debouncedSearch) {
			fetch(`http://localhost:3000/api/getPrediction?input=${debouncedSearch}`)
				.then((res) => res.json())
				.then((data) => {
					setResponseApi(data.response);
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
				});
		}
	}, [debouncedSearch]);

	const handleInputChange = (event: any) => {
		setInput(event.target.value);
	};

	return (
		<main className="bg-[#F5F5F5]">
			<Navbar />
			<Main />
			<Bottombar />
			{/* <div className="flex flex-col gap-5 m-10 ">
				<div className="flex gap-2">
					<p>Input text: </p>
					<input
						type="text"
						value={input}
						onChange={handleInputChange}
						placeholder="Enter text..."
					/>
				</div>
				<p className="font-semibold">{responseApi}</p>
			</div> */}
		</main>
	);
}
