import React, { useEffect } from "react"
import { Modal, ModalFooter, ModalBody, ModalHeader, Button } from "reactstrap"
import useModal from "service/hooks/useModal"
import ModalPortal from "./ModalPortal"
import usePortal from "react-useportal"

function BaseModal({ title, body, modalOpen, children, onConfirm, confirmText = "Confirm", cancelText = "Cancel" }) {
	var { openPortal, closePortal, isOpen, Portal } = usePortal({
		bindTo: document && document.getElementById("modal"),
	})

	useEffect(() => {
		console.log("portal pop", modalOpen)
		if (modalOpen) {
			openPortal()
		} else {
			closePortal()
		}
	}, [modalOpen])

	return (
		<Portal>
			<Modal isOpen={isOpen}>
				<ModalHeader>{title}</ModalHeader>
				<ModalBody>{body ? body : children}</ModalBody>
				<ModalFooter>
					<Button onClick={() => closePortal()}>{cancelText}</Button>
					<Button onClick={onConfirm}>{confirmText}</Button>
				</ModalFooter>
			</Modal>
		</Portal>
	)
}

export default BaseModal
