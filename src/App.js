import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import { useTranslation } from "react-i18next";
import '../src/assets/css/App.css';

// __ __ Components/Helpers __ __ //
import ProtectedRoute from './layouts/ProtectedRoute/ProtectedRoute';
import Layout from './layouts/Layout/Layouts';
import AppLayout from './layouts/AppLayout/AppLayout';
const Home = React.lazy(() => import("./component/Home/Home.jsx"));

const App = () => {
	const { t } = useTranslation();
	return (
		<React.Suspense fallback={<TopBarProgress />}>
			<Routes>
				{/* Guest routes here */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					{/* Add your open routes here <Route path="example" element={<Component />} /> */}
				</Route>
				{/* Protected routes here */}
				<Route path="/app" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
					<Route index element={<Home />} />
					{/* Add your protected routes here <Route path="example" element={<Component />} /> */}
				</Route>
			</Routes>
		</React.Suspense>
	);
}

export default App;
