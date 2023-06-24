import { theme } from "antd";
import { Mail, GitHub, Instagram, LinkedIn, Platzi, Portfolio, Twitter } from "@assets/icons";
import styles from "./Footer.module.scss";

const social = [
	{
		link: "https://github.com/BrandonArgel",
		icon: <GitHub />,
		title: "Brandon Argel's GitHub",
	},
	{
		link: "https://www.instagram.com/brandargel/",
		icon: <Instagram />,
		title: "Brandon Argel's Instagram",
	},
	{
		link: "https://www.linkedin.com/in/brandargel/",
		icon: <LinkedIn />,
		title: "Brandon Argel's LinkedIn",
	},
	{
		link: "https://twitter.com/BrandArgel",
		icon: <Twitter />,
		title: "Brandon Argel's Twitter",
	},
	{
		link: "mailto:brandargel@gmail.com",
		icon: <Mail />,
		title: "Brandon Argel's Email",
	},
	{
		link: "https://platzi.com/p/BrandArgel/",
		icon: <Platzi />,
		title: "Brandon Argel's Platzi Profile",
	},
	{
		link: "https://brandonargel.me",
		icon: <Portfolio />,
		title: "Brandon Argel's Portfolio",
	},
];

const { useToken } = theme;

export const Footer = () => {
	const { token } = useToken();

	return (
		<footer className={styles.root}>
			<div></div>
			<div className={styles.social}>
				{social.map(({ icon, link, title }) => (
					<a
						key={title}
						className={styles.social__link}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						title={title}
						style={{
							backgroundColor: token.colorBgBase,
							fill: token.colorText,
						}}
					>
						{icon}
					</a>
				))}
			</div>
		</footer>
	);
};
