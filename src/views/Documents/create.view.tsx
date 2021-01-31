// imports
import React, { useState, useEffect } from 'react'
import { Controller, FieldError, FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { startOfToday } from 'date-fns'

import {
	DatePicker,
	Field,
	Input,
	Select,
	TextArea,
	InputTags,
	InputFile,
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
	const methods = useForm<CreateDocumentData>({
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

	// data
	const { control, handleSubmit, errors } = methods

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
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="columns is-desktop">
							<div className="column">
								<Field
									label="Nom"
									icon="fas fa-signature"
									error={errors.name}>
									<Controller
										as={
											<Input placeholder="Nom du document" />
										}
										name="name"
										control={control}
										error={errors.name}
									/>
								</Field>
							</div>
							<div className="column">
								<Field label="Type" error={errors.type}>
									<Controller
										as={
											<Select
												placeholder="Selectionner le type de document"
												data={documentTypes.map(
													(type) => ({
														id: type.id,
														text: type.name,
													})
												)}
											/>
										}
										name="type"
										defaultValue=""
										control={control}
										error={errors.type}
									/>
								</Field>
							</div>
						</div>
						<div className="columns is-desktop">
							<div className="column">
								<Field
									label="Fichier"
									error={
										errors.file as FieldError | undefined
									}>
									<Controller
										as={<InputFile placeholder="Fichier" />}
										name="file"
										control={control}
										error={errors.file}
									/>
								</Field>
							</div>
							<div className="column">
								<Field
									label="Tags"
									icon="fas fa-tags"
									error={
										errors.tags as FieldError | undefined
									}>
									<Controller
										as={
											<InputTags placeholder="Tous les tags liés au document" />
										}
										name="tags"
										control={control}
										error={errors.tags}
									/>
								</Field>
							</div>
						</div>
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
						<div className="divider is-left">Extras</div>
						<div className="columns is-desktop">
							<div className="column">
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
							</div>
							<div className="column">
								<Field label="Montant" error={errors.amount}>
									<Controller
										as={
											<Input
												type="number"
												placeholder="Montant affiché"
												step=".01"
											/>
										}
										name="amount"
										control={control}
										error={errors.amount}
									/>
								</Field>
							</div>
							<div className="column">
								<Field label="Durée" error={errors.duration}>
									<Controller
										as={
											<Input
												type="number"
												placeholder="Durée de validité du document"
											/>
										}
										name="duration"
										control={control}
										error={errors.duration}
									/>
								</Field>
							</div>
						</div>

						<div className="levels">
							<div className="level-left"></div>
							<div className="level-right">
								<div className="field is-grouped">
									<div className="control">
										<button
											type="button"
											className="button is-link is-light">
											Annuler
										</button>
									</div>
									<div className="control">
										<button
											type="submit"
											className="button is-link">
											Ajouter
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</FormProvider>
			</div>
		</MainContainer>
	)
}

// exports
export default CreateDocument
