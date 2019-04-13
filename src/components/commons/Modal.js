import { Dialog, TextInputField } from 'evergreen-ui';

import { Pane } from './Pane';

const Modal = ({ isShown }) => (
  <Pane>
    <Dialog
      Self
      Managed
      Close
      isShown={isShown}
      title="Produto"
      onCloseComplete={() => null}
      confirmLabel="Salvar"
    >
      <div>
        <TextInputField
          name="Nome_Produto"
          label="Nome do Produto:"
          Placeholder="Digite o nome do produto..."
          width={350}
        />
        <TextInputField
          name="Marca_Produto"
          label="Marca:"
          Placeholder="Digite a marca do produto..."
          width={350}
        />
        <TextInputField
          name="Peso_Produto"
          label="Peso(Gr):"
          Placeholder="Digite o peso do produto..."
          width={350}
        />
        <TextInputField
          name="Valor_Produto"
          label="Valor(R$):"
          Placeholder="Digite o valor do produto..."
          width={350}
        />
      </div>
    </Dialog>
  </Pane>
);

export default Modal;
