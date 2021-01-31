// imports
import React, { useState, useEffect } from 'react'
import { Controller, FieldError, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { startOfToday } from 'date-fns'

import {
	DatePicker,
	Field,
	Input,
	Select,
	TextArea,
	InputTags,
} from '../../components/form'
import MainContainer from '../../components/main-container.component'
import {
	CreateDocumentData,
	createDocumentSchema,
} from '../../models/document/create-document.model'
import DocumentType from '../../models/document-type/document-type.model'
import DocumentTypeService from '../../services/document-type.service'

// main
const CreateDocument = (): React.ReactElement => {
	// hooks
	const { control, handleSubmit, errors } = useForm<CreateDocumentData>({
		mode: 'onBlur',
		resolver: yupResolver(createDocumentSchema),
		defaultValues: {
			name: '',
			type: undefined,
			note: '',
			date: startOfToday(),
			tags: [],
		},
	})
	const [documentTypes, setDocumentTypes] = useState<DocumentType[]>([])

	// events
	useEffect(() => {
		;(async () => {
			const types = (await DocumentTypeService.all()).data.result
			setDocumentTypes(() => types)
		})()
	}, [])

	// methods
	const onSubmit = (data: CreateDocumentData) => {
		console.log(data)
	}

	// render
	return (
		<MainContainer title="Ajouter un nouveau Documents">
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						label="Nom"
						icon="fas fa-signature"
						error={errors.name}>
						<Controller
							as={<Input placeholder="Nom du document" />}
							name="name"
							control={control}
							error={errors.name}
						/>
					</Field>
					<Field label="Type" error={errors.type}>
						<Controller
							as={
								<Select
									placeholder="Selectionner le type de document"
									data={documentTypes.map((type) => ({
										id: type.id,
										text: type.name,
									}))}
								/>
							}
							name="type"
							defaultValue=""
							control={control}
							error={errors.type}
						/>
					</Field>

					<Field label="Note" error={errors.note}>
						<Controller
							as={
								<TextArea placeholder="Ajouter une note au document" />
							}
							name="note"
							control={control}
							error={errors.note}
						/>
					</Field>
					<Field
						label="Date"
						icon="fas fa-calendar-day"
						error={errors.date}>
						<Controller
							as={
								<DatePicker placeholder="Date de réception du document" />
							}
							name="date"
							control={control}
							error={errors.date}
						/>
					</Field>
					<Field
						label="Tags"
						icon="fas fa-tags"
						error={errors.tags as FieldError | undefined}>
						<Controller
							as={
								<InputTags placeholder="Tous les tags liés au document" />
							}
							name="tags"
							control={control}
							error={errors.tags}
						/>
					</Field>

					<div className="field is-grouped">
						<div className="control">
							<button type="submit" className="button is-link">
								Ajouter
							</button>
						</div>
						<div className="control">
							<button
								type="button"
								className="button is-link is-light">
								Annuler
							</button>
						</div>
					</div>
				</form>
			</div>
		</MainContainer>
	)
}

// exports
export default CreateDocument
