import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../Layouts/BaseLayout";
import ListData from "../components/ListData";
import { CreatePage } from "../pages/PageCreate";
import PageEdite from "../pages/PageEdite";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				index: true,
				element: <CreatePage />,
			},
			{
				path: "about",
				element: <ListData />,
			},
		],
	},
	{
		path: "edit/:_id",
		element: <PageEdite />,
	},
]);
