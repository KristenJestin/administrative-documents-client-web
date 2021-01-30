// imports
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Field from '../../components/field.component'
import MainContainer from '../../components/main-container.component'
import {
	CreateDocumentData,
	createDocumentSchema,
} from '../../models/document/create-document.model'

// main
const CreateDocument = (): React.ReactElement => {
	// hooks
	const { control, handleSubmit, errors } = useForm<CreateDocumentData>({
		mode: 'onBlur',
		resolver: yupResolver(createDocumentSchema),
	})

	// actions
	const onSubmit = (data: CreateDocumentData) => console.log(data)

	// render
	return (
		<MainContainer title="Ajouter un nouveau Documents">
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						as={
							<Field
								label="Nom"
								icon="fas fa-signature"
								placeholder="Nom du document"
								error={errors.name}
							/>
						}
						name="name"
						defaultValue=""
						control={control}
					/>
					<Controller
						as={
							<Field
								label="Date"
								type="date"
								icon="fas fa-calendar-day"
								placeholder="Date de réception du document"
								error={errors.date}
							/>
						}
						name="date"
						defaultValue={Date.now}
						control={control}
					/>

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
