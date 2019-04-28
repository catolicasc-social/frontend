import { Dialog } from 'evergreen-ui';

const Modal = ({ children, ...props }) => (
  <Dialog Self Managed Close {...props}>
    {children}
  </Dialog>
);

export default Modal;
