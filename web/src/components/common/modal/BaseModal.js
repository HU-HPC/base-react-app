import React from 'react'
import { Modal, ModalFooter, ModalBody, ModalHeader, Button } from 'reactstrap'

function BaseModal({
	title,
	isOpen,
	closeModal,
	body,
	children,
	onConfirm,
	confirmText = 'Confirm',
	cancelText = 'Cancel',
}) {
	return (
		<Modal isOpen={isOpen}>
			<ModalHeader>{title}</ModalHeader>
			<ModalBody>{body ? body : children}</ModalBody>
			<ModalFooter>
				<Button onClick={() => closeModal()}>{cancelText}</Button>
				<Button onClick={onConfirm}>{confirmText}</Button>
			</ModalFooter>
		</Modal>
	)
}

export default BaseModal
