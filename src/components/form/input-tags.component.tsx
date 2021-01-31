// imports
import React from 'react'
import TagsInput, { RenderTagProps, RenderInputProps } from 'react-tagsinput'

import DefaultElementProps from './default.props'

// config
const KeyCodes = {
	tab: 9,
	comma: 188,
	semicolon: 59,
	enter: 13,
}

const delimiters = [
	KeyCodes.tab,
	KeyCodes.semicolon,
	KeyCodes.comma,
	KeyCodes.enter,
]

// main
type InputTagsProps = {
	onlyUnique?: boolean
	maxTags?: number
	placeholder?: string
} & DefaultElementProps

const InputTags = React.forwardRef<HTMLInputElement, InputTagsProps>(
	(
		{
			onlyUnique = true,
			maxTags = undefined,
			placeholder = undefined,
			error = undefined,
			onChange,
			onBlur,
			value,
			name,
		},
		ref
	) => {
		// methods
		const defaultRenderTag = ({
			tag,
			key,
			disabled,
			onRemove,
			classNameRemove,
			getTagDisplayValue,
			...other
		}: RenderTagProps<string>) => (
			<div key={key} {...other}>
				<div className="tags has-addons">
					<span className="tag is-primary">
						{getTagDisplayValue(tag)}
					</span>
					{!disabled && (
						<span
							className={classNameRemove}
							onClick={() => onRemove(key)}></span>
					)}
				</div>
			</div>
		)
		const defaultRenderInput = ({
			onChange,
			value,
			addTag,
			...other
		}: RenderInputProps<string>) => (
			<input
				{...other}
				type="text"
				onChange={onChange}
				value={value}
				ref={ref}
				onBlur={onBlur}
			/>
		)

		const defaultRenderLayout = (
			tagComponents: React.ReactElement[],
			inputComponent: React.ReactElement
		) => (
			<>
				<div className="field is-grouped mb-0 mr-3">
					{tagComponents}
				</div>
				<div className="is-flex-grow-1">{inputComponent}</div>
			</>
		)

		// render
		return (
			<>
				<TagsInput<string>
					value={value}
					onChange={(tags) => onChange && onChange(tags)}
					addKeys={delimiters}
					className={`input ${
						error !== undefined ? 'is-danger' : ''
					}`}
					focusedClassName="is-focused"
					onlyUnique={onlyUnique}
					inputProps={{
						className: 'tags-input',
						placeholder,
					}}
					maxTags={maxTags ? maxTags : -1}
					tagProps={{
						className: 'control',
						classNameRemove: 'tag is-delete is-clickable',
					}}
					renderTag={defaultRenderTag}
					renderInput={defaultRenderInput}
					renderLayout={defaultRenderLayout}
				/>
				<input type="hidden" name={name} value={value} />
			</>
		)
	}
)

// exports
export default InputTags
