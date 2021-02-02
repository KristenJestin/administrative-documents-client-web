// imports
import React, { useState, useEffect } from 'react'
import { AxiosError } from 'axios'
import { useHistory } from 'react-router-dom'
import { Controller, FieldError, FormProvider, useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
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
import { convertObjectToFormdata } from '../../common/helpers/formdata.helper'
import service from '../../services/document.service'
import { ErrorResponse } from '../../models/response.model'
import AppRoute from '../../navigations/app-routes'

// main
const CreateDocument = (): React.ReactElement => {
	// hooks
	const alert = useAlert()
	const history = useHistory()
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
	const { control, handleSubmit, errors, setError } = methods

	// events
	useEffect(() => {
		;(async () => {
			const types = (await DocumentTypeService.all()).data.result
			setDocumentTypes(() => types)
		})()
	}, [])

	// methods
	const onSubmit = async (data: CreateDocumentData) => {
		try {
			const response = await service.create(convertObjectToFormdata(data))

			const result = response.data.result
			alert.success(`Document créé (${result.name})`)
			history.push(AppRoute.DOCUMENTS)
		} catch (error) {
			const { response }: AxiosError<ErrorResponse> = error
			alert.error(
				`Une erreur est survenue dans le traitement du formulaire (${response?.data?.title}).`
			)

			// check if is validations error
			if (response?.status === 422 && response?.data.validationErrors) {
				const validationErrors = response?.data.validationErrors
				for (const element of validationErrors) {
					setError(element.name.toLowerCase(), {
						type: 'manual',
						message: element.reason,
					})
				}
			}
		}
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
