import React from "react"
import {Modal, ModalFooter, ModalBody, ModalHeader, Button} from "reactstrap"
import ModalPortal from "./ModalPortal"

function BaseModal({title, body, isOpen, children, onConfirm, confirmText = "Confirm", cancelText = "Cancel"}) {
    return (
        <ModalPortal>
            <Modal isOpen={isOpen}>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>{body ? body : children}</ModalBody>
                <ModalFooter>
                    <Button onClick={() => console.log("kill portal")}>{cancelText}</Button>
                    <Button onClick={onConfirm}>{confirmText}</Button>
                </ModalFooter>
            </Modal>
        </ModalPortal>
    )
}

export default BaseModal
