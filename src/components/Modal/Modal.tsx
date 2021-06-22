import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { BookApiInterface } from '../../models/interface';

interface ModalProps {
  show: boolean;
  handleClose(): any;
  item: BookApiInterface;
}

const ModalDetails: React.FC<ModalProps> = ({
  item,
  show,
  handleClose,
}: ModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{item.volumeInfo?.title}</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <img
          src={
            item.volumeInfo?.imageLinks?.thumbnail ||
            'http://centrodametropole.fflch.usp.br/sites/centrodametropole.fflch.usp.br/files/user_files/livros/imagem/capa-no-book-cover.png'
          }
          alt="Book "
        ></img>
        <p>{item.volumeInfo?.description || 'Descrição não disponível'}</p>
        <p>Autores: {item.volumeInfo?.authors || 'Autor não disponível'}</p>
        <p>{item.volumeInfo?.subtitle}</p>
      </ModalBody>
      <Modal.Footer>
        Publicado em : {item.volumeInfo?.publishedDate}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetails;
