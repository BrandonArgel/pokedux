import { theme } from "antd";
import { Mail, GitHub, Instagram, LinkedIn, Platzi, Portfolio, Twitter } from "@assets/icons";
import styles from "./Footer.module.scss";

const social = [
	{
		link: "https://github.com/BrandonArgel",
		icon: (color: string) => <GitHub color={color} />,
		title: "Brandon Argel's GitHub",
	},
	{
		link: "https://www.instagram.com/brandargel/",
		icon: (color: string) => <Instagram color={color} />,
		title: "Brandon Argel's Instagram",
	},
	{
		link: "https://www.linkedin.com/in/brandargel/",
		icon: (color: string) => <LinkedIn color={color} />,
		title: "Brandon Argel's LinkedIn",
	},
	{
		link: "https://twitter.com/BrandArgel",
		icon: (color: string) => <Twitter color={color} />,
		title: "Brandon Argel's Twitter",
	},
	{
		link: "mailto:brandargel@gmail.com",
		icon: (color: string) => <Mail color={color} />,
		title: "Brandon Argel's Email",
	},
	{
		link: "https://platzi.com/p/BrandArgel/",
		icon: (color: string) => <Platzi color={color} />,
		title: "Brandon Argel's Platzi Profile",
	},
	{
		link: "https://brandonargel.me",
		icon: (color: string) => <Portfolio color={color} />,
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
						}}
					>
						{icon(token.colorPrimary)}
					</a>
				))}
			</div>
		</footer>
	);
};
