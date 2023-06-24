type IconProps = {
	color?: string;
};

export const Moon = ({ color }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
		<path
			fill={color}
			d="M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z"
		></path>
	</svg>
);

export const Sun = ({ color }: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
		<path fill={color} d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
	</svg>
);

export const GitHub = ({ color }: IconProps) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
		<path d="M12.0216 0.0899658C5.40733 0.0899658 0.0438232 5.54392 0.0438232 12.2722C0.0438232 17.6548 3.47582 22.2213 8.23496 23.8322C8.83357 23.9449 9.05334 23.5679 9.05334 23.2461C9.05334 22.9556 9.04224 21.996 9.03708 20.978C5.70485 21.7149 5.00171 19.5406 5.00171 19.5406C4.45685 18.1325 3.67179 17.7581 3.67179 17.7581C2.58505 17.002 3.75371 17.0175 3.75371 17.0175C4.95648 17.1032 5.58981 18.2729 5.58981 18.2729C6.6581 20.1353 8.39186 19.5969 9.07536 19.2856C9.18286 18.4984 9.49328 17.9606 9.83582 17.6566C7.17539 17.3485 4.3787 16.304 4.3787 11.636C4.3787 10.3059 4.8466 9.21916 5.61281 8.36601C5.48845 8.05897 5.07847 6.82011 5.72885 5.14206C5.72885 5.14206 6.73467 4.81464 9.02359 6.39081C9.97903 6.12089 11.0037 5.98552 12.0216 5.98088C13.0395 5.98552 14.065 6.12089 15.0222 6.39081C17.3084 4.81464 18.3128 5.14206 18.3128 5.14206C18.9647 6.82011 18.5546 8.05897 18.4302 8.36601C19.1982 9.21916 19.6629 10.3059 19.6629 11.636C19.6629 16.315 16.8609 17.3453 14.1937 17.6469C14.6233 18.025 15.0061 18.7663 15.0061 19.9029C15.0061 21.5328 14.9923 22.8447 14.9923 23.2461C14.9923 23.5703 15.2079 23.9502 15.815 23.8305C20.5716 22.2179 23.9992 17.653 23.9992 12.2722C23.9992 5.54392 18.6365 0.0899658 12.0216 0.0899658" />
		<path d="M4.58042 17.5812C4.55404 17.6419 4.46042 17.6598 4.37513 17.6183C4.28826 17.5785 4.23947 17.496 4.26763 17.4353C4.29342 17.373 4.38723 17.3558 4.47391 17.3972C4.56099 17.4371 4.61057 17.5204 4.58042 17.5812" />
		<path d="M5.06552 18.1315C5.0084 18.1854 4.89673 18.1603 4.82096 18.0752C4.74261 17.9903 4.72794 17.8767 4.78585 17.822C4.84476 17.7682 4.95306 17.7934 5.03161 17.8783C5.10995 17.9643 5.12523 18.077 5.06552 18.1315" />
		<path d="M5.53787 18.8331C5.46448 18.8849 5.34448 18.8363 5.2703 18.728C5.19691 18.6197 5.19691 18.4897 5.27189 18.4377C5.34627 18.3856 5.46448 18.4324 5.53965 18.54C5.61284 18.6499 5.61284 18.78 5.53787 18.8331" />
		<path d="M6.18488 19.511C6.11923 19.5846 5.97939 19.5648 5.87705 19.4644C5.77232 19.3661 5.74316 19.2267 5.80901 19.1531C5.87546 19.0792 6.01609 19.1 6.11923 19.1997C6.22316 19.2977 6.2549 19.4381 6.18488 19.511" />
		<path d="M7.07744 19.9045C7.04849 19.9999 6.91381 20.0433 6.77814 20.0028C6.64267 19.961 6.55401 19.8492 6.58138 19.7528C6.60954 19.6568 6.74482 19.6116 6.88148 19.655C7.01675 19.6965 7.10561 19.8075 7.07744 19.9045" />
		<path d="M8.05768 19.9776C8.06105 20.0781 7.94601 20.1614 7.8036 20.163C7.66039 20.1664 7.54456 20.0851 7.54297 19.9863C7.54297 19.8848 7.65543 19.8023 7.79864 19.7999C7.94105 19.7971 8.05768 19.8777 8.05768 19.9776" />
		<path d="M8.96979 19.8196C8.98685 19.9176 8.88788 20.0183 8.74645 20.0449C8.60741 20.071 8.47868 20.0104 8.46103 19.9132C8.44378 19.8127 8.54454 19.7121 8.68338 19.686C8.825 19.661 8.95174 19.7199 8.96979 19.8196" />
	</svg>
);

export const Mail = ({ color }: IconProps) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM11.9997 12C13.3626 12 19.9893 8.35419 19.9893 8.35419L20 7.7028C20 6.98365 19.4034 6.4 18.6664 6.4H5.33294C4.59656 6.4 4 6.98365 4 7.7028V8.28319C4 8.28319 10.6993 12 11.9997 12ZM4 9.6C4 9.6 10.6993 13.4554 11.9997 13.4554C13.4252 13.4554 20 10 20 10V17.2571C20 17.888 19.4034 18.4 18.6664 18.4H5.33294C4.59723 18.4 4 17.888 4 17.2571V9.6Z"
		/>
	</svg>
);

export const Platzi = ({ color }: IconProps) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6.82485 11.9154L12.3012 17.3917L13.8634 15.8295L12.1248 14.0909L16.1331 10.0825L12.3954 6.34482L6.82485 11.9154ZM4.8803 13.5064C4.00162 12.6277 4.00162 11.2031 4.8803 10.3244L10.8044 4.40028C11.6831 3.5216 13.1077 3.5216 13.9864 4.40028L18.0777 8.49156C18.9564 9.37024 18.9564 10.7949 18.0777 11.6735L13.8926 15.8586L15.6311 17.5972L13.8921 19.3362C13.0135 20.2149 11.5888 20.2149 10.7102 19.3362L4.8803 13.5064Z"
		/>
	</svg>
);

export const Twitter = ({ color }: IconProps) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.8036 9.80605L11.7689 9.21781C11.6649 7.69319 12.5782 6.30063 14.0233 5.76041C14.5551 5.56833 15.4568 5.54432 16.0464 5.71239C16.2777 5.78442 16.717 6.02452 17.0291 6.24061L17.5956 6.63677L18.2199 6.43268C18.5667 6.32464 19.0291 6.14457 19.2372 6.02452C19.4338 5.91648 19.6072 5.85645 19.6072 5.89247C19.6072 6.09655 19.1794 6.79283 18.8211 7.17699C18.3355 7.7172 18.4742 7.76522 19.4569 7.40508C20.0465 7.201 20.0581 7.201 19.9425 7.42909C19.8731 7.54914 19.5147 7.96931 19.1332 8.35346C18.4858 9.01373 18.4511 9.08576 18.4511 9.63798C18.4511 10.4903 18.058 12.267 17.665 13.2394C16.9366 15.0642 15.3759 16.9489 13.8152 17.8973C11.6186 19.2299 8.69372 19.566 6.23125 18.7857C5.41043 18.5216 4 17.8493 4 17.7293C4 17.6932 4.42775 17.6452 4.94799 17.6332C6.03472 17.6092 7.12144 17.2971 8.04631 16.7449L8.6706 16.3607L7.95382 16.1086C6.93646 15.7485 6.02315 14.9201 5.79194 14.1398C5.72257 13.8877 5.74569 13.8757 6.3931 13.8757L7.06363 13.8637L6.49715 13.5876C5.82662 13.2394 5.21389 12.6512 4.91331 12.051C4.69365 11.6188 4.41619 10.5263 4.49712 10.4423C4.52024 10.4063 4.76302 10.4783 5.04048 10.5744C5.83818 10.8745 5.94223 10.8025 5.47979 10.2983C4.61273 9.38588 4.34683 8.02933 4.76302 6.74481L4.95955 6.16858L5.72257 6.94889C7.28329 8.52153 9.12147 9.45791 11.2256 9.73402L11.8036 9.80605Z"
		/>
	</svg>
);

export const Instagram = ({ color }: IconProps) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM9.36164 5.63867C10.0443 5.6076 10.2624 5.6 12.0006 5.6H11.9986C13.7373 5.6 13.9546 5.6076 14.6373 5.63867C15.3186 5.66987 15.784 5.77774 16.192 5.936C16.6133 6.09934 16.9693 6.31801 17.3253 6.67401C17.6813 7.02975 17.9 7.38682 18.064 7.80776C18.2213 8.21469 18.3293 8.67976 18.3613 9.3611C18.392 10.0438 18.4 10.2619 18.4 12.0001C18.4 13.7382 18.392 13.9558 18.3613 14.6385C18.3293 15.3196 18.2213 15.7848 18.064 16.1918C17.9 16.6126 17.6813 16.9697 17.3253 17.3255C16.9697 17.6815 16.6132 17.9007 16.1924 18.0641C15.7852 18.2224 15.3196 18.3303 14.6382 18.3615C13.9556 18.3925 13.7381 18.4001 11.9998 18.4001C10.2618 18.4001 10.0438 18.3925 9.36111 18.3615C8.6799 18.3303 8.21469 18.2224 7.80749 18.0641C7.38682 17.9007 7.02975 17.6815 6.67414 17.3255C6.31827 16.9697 6.09961 16.6126 5.936 16.1917C5.77787 15.7848 5.67 15.3197 5.63867 14.6384C5.60773 13.9557 5.6 13.7382 5.6 12.0001C5.6 10.2619 5.608 10.0436 5.63853 9.36097C5.6692 8.6799 5.7772 8.21469 5.93587 7.80762C6.09987 7.38682 6.31854 7.02975 6.67454 6.67401C7.03028 6.31814 7.38735 6.09947 7.80829 5.936C8.21523 5.77774 8.6803 5.66987 9.36164 5.63867Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.4265 6.75331C11.538 6.75313 11.6579 6.75319 11.7873 6.75325L12.0006 6.75331C13.7094 6.75331 13.912 6.75944 14.5868 6.79011C15.2108 6.81864 15.5495 6.92291 15.7751 7.01051C16.0737 7.12651 16.2867 7.26518 16.5105 7.48918C16.7345 7.71319 16.8732 7.92652 16.9895 8.22519C17.0771 8.45053 17.1815 8.7892 17.2099 9.4132C17.2405 10.0879 17.2472 10.2905 17.2472 11.9986C17.2472 13.7066 17.2405 13.9092 17.2099 14.5839C17.1813 15.2079 17.0771 15.5466 16.9895 15.7719C16.8735 16.0706 16.7345 16.2833 16.5105 16.5071C16.2865 16.7311 16.0739 16.8698 15.7751 16.9858C15.5497 17.0738 15.2108 17.1778 14.5868 17.2064C13.9121 17.237 13.7094 17.2437 12.0006 17.2437C10.2917 17.2437 10.0891 17.237 9.41447 17.2064C8.79046 17.1775 8.45179 17.0733 8.22605 16.9857C7.92738 16.8697 7.71405 16.731 7.49005 16.507C7.26604 16.283 7.12738 16.0702 7.01111 15.7714C6.92351 15.5461 6.81911 15.2074 6.79071 14.5834C6.76004 13.9087 6.75391 13.706 6.75391 11.997C6.75391 10.2879 6.76004 10.0863 6.79071 9.4116C6.81924 8.7876 6.92351 8.44893 7.01111 8.22332C7.12711 7.92465 7.26604 7.71132 7.49005 7.48732C7.71405 7.26331 7.92738 7.12465 8.22605 7.00838C8.45166 6.92038 8.79046 6.81638 9.41447 6.78771C10.0049 6.76104 10.2337 6.75304 11.4265 6.75171V6.75331ZM15.4169 7.81599C14.9929 7.81599 14.6489 8.15959 14.6489 8.58373C14.6489 9.00773 14.9929 9.35174 15.4169 9.35174C15.8409 9.35174 16.1849 9.00773 16.1849 8.58373C16.1849 8.15972 15.8409 7.81572 15.4169 7.81572V7.81599ZM8.71393 12C8.71393 10.185 10.1855 8.7134 12.0005 8.71333C13.8156 8.71333 15.2868 10.1849 15.2868 12C15.2868 13.8151 13.8157 15.2861 12.0006 15.2861C10.1855 15.2861 8.71393 13.8151 8.71393 12Z"
		/>
		<path d="M12.0005 9.8667C13.1787 9.8667 14.1339 10.8218 14.1339 12.0001C14.1339 13.1782 13.1787 14.1334 12.0005 14.1334C10.8223 14.1334 9.86719 13.1782 9.86719 12.0001C9.86719 10.8218 10.8223 9.8667 12.0005 9.8667V9.8667Z" />
	</svg>
);

export const LinkedIn = ({ color }: IconProps) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM5.76084 9.93887H8.4803V18.1097H5.76084V9.93887ZM8.65938 7.41135C8.64173 6.6102 8.06883 6 7.13852 6C6.20821 6 5.6 6.6102 5.6 7.41135C5.6 8.1959 6.19023 8.82367 7.10322 8.82367H7.12059C8.06883 8.82367 8.65938 8.1959 8.65938 7.41135ZM15.1566 9.74707C16.9461 9.74707 18.2877 10.9151 18.2877 13.4249L18.2876 18.1098H15.5682V13.7384C15.5682 12.6404 15.1747 11.8911 14.1902 11.8911C13.4389 11.8911 12.9914 12.3962 12.7949 12.8841C12.723 13.0589 12.7053 13.3025 12.7053 13.5467V18.11H9.98555C9.98555 18.11 10.0214 10.7059 9.98555 9.93915H12.7053V11.0965C13.0663 10.5401 13.7127 9.74707 15.1566 9.74707Z"
		/>
	</svg>
);

export const Portfolio = ({ color }: IconProps) => (
	<svg width="40" height="40" viewBox="0 0 40 40" fill={color} xmlns="http://www.w3.org/2000/svg">
		<path d="M25.3227 16.7611C27.4171 17.4299 28.4643 19.1459 28.4643 21.9091C28.4643 24.2147 27.4787 26.4763 25.5075 28.6939C23.5539 30.8939 20.8611 31.9939 17.4291 31.9939C14.7363 31.9939 12.9851 31.2107 12.1755 29.6443C11.8939 29.1163 11.7531 28.5795 11.7531 28.0339C11.7531 27.4707 11.8939 26.8987 12.1755 26.3179C12.7035 25.1915 13.4691 24.6283 14.4723 24.6283C14.5603 24.6283 14.6219 24.6811 14.6571 24.7867C14.6923 24.8747 14.6835 24.9715 14.6307 25.0771C14.5955 25.1827 14.5339 25.2355 14.4459 25.2355C13.8475 25.2355 13.3459 25.6227 12.9411 26.3971C12.6595 26.9075 12.5187 27.3915 12.5187 27.8491C12.5187 28.3067 12.6243 28.7467 12.8355 29.1691C13.4515 30.3659 14.8243 30.9643 16.9539 30.9643C19.6291 30.9643 21.9523 29.8379 23.9235 27.5851C25.4547 25.8603 26.3963 23.9683 26.7483 21.9091C26.8363 21.4163 26.8803 20.9587 26.8803 20.5363C26.8803 19.3219 26.5195 18.4155 25.7979 17.8171C25.4107 17.5003 24.9355 17.3155 24.3723 17.2627C23.4219 17.6675 22.4011 17.8699 21.3099 17.8699C21.1867 17.8699 21.1251 17.7555 21.1251 17.5267C21.1251 17.2803 21.1867 17.1571 21.3099 17.1571C23.0875 17.1571 24.6451 16.3211 25.9827 14.6491C26.9683 13.3995 27.4963 12.1763 27.5667 10.9795C27.5315 9.92352 27.1179 9.36912 26.3259 9.31632C25.4635 9.31632 24.5395 9.93232 23.5539 11.1643C22.5683 12.3963 21.6795 13.8923 20.8875 15.6523C20.0955 17.4123 19.3651 19.2163 18.6963 21.0643C18.0451 22.8947 17.5347 24.4699 17.1651 25.7899C16.7955 27.0923 16.6107 27.8579 16.6107 28.0867C16.6107 28.3155 16.4875 28.4299 16.2411 28.4299C15.7131 28.4299 15.4491 27.7259 15.4491 26.3179C15.4491 22.9211 15.8275 19.6211 16.5843 16.4179C17.3587 13.2147 18.2123 11.0763 19.1451 10.0027C16.6283 10.3547 14.5867 11.2435 13.0203 12.6691C12.1227 13.4611 11.6739 14.3235 11.6739 15.2563C11.6739 15.7139 11.8499 15.9427 12.2019 15.9427C12.1315 16.1891 11.9379 16.3123 11.6211 16.3123C11.3043 16.3123 11.0227 16.1891 10.7763 15.9427C10.5475 15.6963 10.4331 15.3531 10.4331 14.9131C10.4331 13.8747 11.0579 12.9155 12.3075 12.0355C13.5747 11.1379 14.9387 10.4779 16.3995 10.0555C17.8603 9.61552 19.1011 9.39552 20.1219 9.39552C20.4035 9.39552 20.5443 9.53632 20.5443 9.81792C19.4003 12.4755 18.3619 16.3563 17.4291 21.4603H17.6403C18.6611 18.2747 19.8667 15.4235 21.2571 12.9067C21.9963 11.5515 22.8147 10.4867 23.7123 9.71232C24.6099 8.92032 25.5251 8.52432 26.4579 8.52432C27.9363 8.52432 28.8163 9.12272 29.0979 10.3195C29.1507 10.5659 29.1771 10.8299 29.1771 11.1115C29.1771 12.0619 28.8075 13.0827 28.0683 14.1739C27.3467 15.2475 26.4315 16.1099 25.3227 16.7611Z" />
		<path d="M20 37C10.6112 37 3 29.3888 3 20H-3C-3 32.7025 7.29745 43 20 43V37ZM37 20C37 29.3888 29.3888 37 20 37V43C32.7025 43 43 32.7025 43 20H37ZM20 3C29.3888 3 37 10.6112 37 20H43C43 7.29745 32.7025 -3 20 -3V3ZM20 -3C7.29745 -3 -3 7.29745 -3 20H3C3 10.6112 10.6112 3 20 3V-3Z" />
	</svg>
);
