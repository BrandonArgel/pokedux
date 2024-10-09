import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@containers";

const Home = React.lazy(() => import("@pages").then((module) => ({ default: module.Home })));
const Favorites = React.lazy(() => import("@pages").then((module) => ({ default: module.Favorites })));
const Pokemon = React.lazy(() => import("@pages").then((module) => ({ default: module.Pokemon })));

export const App = () => {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/pokemon/:name" element={<Pokemon />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</React.Suspense>
	);
};
