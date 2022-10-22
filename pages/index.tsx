import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Flex, Grid, Row } from "vcc-ui";
import styles from "@/styles/Home.module.css";
import cars from "@/public/api/cars.json";
import { CarItem } from "@/types/Car.model";
import CarCard from "@/components/CarCard";
import { useSelector, useDispatch } from "react-redux";
import { carAction, StoreState } from "../store/car-slice";
import Filter from "@/components/Filter";
import CustomCarousel from "@/components/CustomCarousel";
import useWindowSize from "@/hooks/useWindowSize";

// const Home: NextPage = (CarsList:CarItem[]) => {
const Home: NextPage = (props: any) => {
	const dispatch = useDispatch();
	const { carsList = [] } = props;
	useEffect(() => {
		dispatch(carAction.updateCarsList({ carsList }));
	}, [dispatch, carsList]);
	const updatedCarsList: CarItem[] = useSelector(
		({ car: carSLice }: { car: StoreState }) => carSLice.updatedCarsList
	);

	const deviceType = useWindowSize();
	console.log(`deviceType`, deviceType);

	return (
		<div className={styles.container}>
			<Head>
				<title>Cars Gallery App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.mains}>
				{/* <h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1> */}
				<Filter />

				<CustomCarousel>
					{updatedCarsList.map((carItem: CarItem) => {
						return <CarCard carItem={carItem} key={carItem.id} />;
					})}
				</CustomCarousel>
				{/* 
				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/canary/examples"
						className={styles.card}
					>
						<h2>Examples &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div> */}
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by {"Peter "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	return {
		props: {
			carsList: cars,
		},
	};
};
