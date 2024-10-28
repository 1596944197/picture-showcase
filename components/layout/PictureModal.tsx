import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { memo } from "react";
import { PhotoViewer } from "./PhotoViewer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
};

const PictureModal = (props: Props) => {
  return (
    <Modal size="full" isOpen={props.isOpen} onClose={props.onClose}>
      <ModalContent>
        {() => (
          <ModalBody>
            <PhotoViewer />
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default memo(PictureModal);
