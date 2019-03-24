import { FilePicker } from 'evergreen-ui';

const FilePickerCustom = ({
  disabled,
  required,
  multiple,
  width,
  marginBottom
}) => (
  <FilePicker
    disabled={disabled}
    required={required}
    multiple={multiple}
    width={width}
    marginBottom={marginBottom}
  />
);

// eslint-disable-next-line import/prefer-default-export
export { FilePickerCustom as FilePicker };
