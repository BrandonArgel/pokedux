import { Space, Pagination as AntPagination } from "antd";
import styles from "./Pagination.module.scss"

interface PaginationProps {
	page: number;
	total: number;
	onChange: (page: number) => void;
	pageSize?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
	page,
	total = 0,
	onChange,
	pageSize = 20,
}) => {
	return (
		<Space direction="horizontal" className={styles.pagination}>
			<AntPagination
				current={page}
				size="small"
				pageSize={pageSize}
				total={total}
				onChange={onChange}
				showSizeChanger={false}
				hideOnSinglePage
				showLessItems
				responsive
			/>
		</Space>
	);
};
