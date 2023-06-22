import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@containers";
const Home = React.lazy(() => import("@pages").then((module) => ({ default: module.Home })));
// const Pokemon = React.lazy(() => import("pages").then((module) => ({ default: module.Pokemon })));

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					{/* <Route path="/pokemon/:id" element={<Pokemon />} /> */}
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
