import { Button, theme } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import styles from "./StarButton.module.scss";

interface StarButtonProps {
  isFavorite: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  color?: string;
}

const { useToken } = theme;

export const StarButton: React.FC<StarButtonProps> = ({
  isFavorite,
  onClick,
  color,
}) => {
  const { token } = useToken();
  const Icon = isFavorite ? StarFilled : StarOutlined;

  return (
    <Button
      className={styles.button}
      shape="circle"
      icon={<Icon />}
      onClick={onClick}
      style={{
        color: color ?? token.colorText,
      }}
    />
  );
};
