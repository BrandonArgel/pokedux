import { toast } from "sonner";

interface MessageProps {
  title: string;
  description?: string;
}

export const showErrorMessage = ({
  title,
  description,
}: MessageProps): void => {
  toast.error(title, { description });
};

export const showSuccessMessage = ({
  title,
  description,
}: MessageProps): void => {
  toast.success(title, { description });
};

export const showMessage = ({ title, description }: MessageProps): void => {
  toast.message(title, { description });
};
