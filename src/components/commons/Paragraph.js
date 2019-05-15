import { Paragraph } from 'evergreen-ui';

const ParagraphCustom = ({ children, ...props }) => (
  <Paragraph {...props}>{children}</Paragraph>
);

// eslint-disable-next-line import/prefer-default-export
export { ParagraphCustom as Paragraph };
