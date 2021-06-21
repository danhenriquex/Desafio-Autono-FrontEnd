import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';

interface BookApiInterface {
  id?: string;
  selfLink: string;
  volumeInfo?: {
    title: string;
    subtitle: string;
    publishedDate: string;
    authors: [];
    imageLinks: { thumbnail: string; smallThumbnail: string };
    description: string;
    infoLink: string;
  };
}

interface ModalProps {
  show: boolean;
  handleClose(): any;
  // title: string;
  // authors?: string[];
  // thumbnail?: string;
  // description: string;
  // publishedDate: string;
  // categories?: string[];
  // publisher?: string;
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
        <img src={item.volumeInfo?.imageLinks.thumbnail} alt="Book "></img>
        <p>{item.volumeInfo?.description}</p>
      </ModalBody>
      <Modal.Footer>
        Publicado em : {item.volumeInfo?.publishedDate}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetails;
