import { render, screen, fireEvent, getByTestId } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../Form.js'

test('Initial state should be empty in text fields and default in others', () => {
  const { container } = render(<Form />)
  
  const nameInput = container.querySelector(`input[name="box-name"]`)
  expect(nameInput).toHaveValue('')

  const weightInput = container.querySelector(`input[name="box-weight"]`)
  expect(weightInput).toHaveValue(null) // Default value is 'null'.

  const colourInput = container.querySelector(`input[name="box-colour"]`)
  expect(colourInput).toHaveValue('#000000') // Default value is black.

  const countryOptions = container.querySelectorAll('option')
  expect(countryOptions[0].selected).toBeTruthy() // The first country should be chosen.
  expect(countryOptions[1].selected).toBeFalsy()
  expect(countryOptions[2].selected).toBeFalsy()
  expect(countryOptions[3].selected).toBeFalsy()
})

test('Empty text fields should render alert', () => {
  const alertMock = jest.spyOn(window,'alert').mockImplementation()

  const { container } = render(<Form/>)

  const submitBtn = container.querySelector('#save-btn')
  userEvent.click(submitBtn)

  expect(alertMock).toHaveBeenCalledTimes(1) // An alert should be called when no values are set to the text fields.
})

test('Negative weight values should render alert', () => {
  const alertMock = jest.spyOn(window,'alert').mockImplementation()

  const { container } = render(<Form/>)

  const weightInput = container.querySelector(`input[name="box-weight"]`)
  weightInput.value = -2 // Insert negative value.

  const submitBtn = container.querySelector('#save-btn')
  userEvent.click(submitBtn)

  expect(alertMock).toHaveBeenCalledTimes(1) // An alert should be called in the case of a negative weight input.
})

test('Should be able to change colour in colour picker', () => {
  const { container } = render(<Form/>)
  
  const colourInput = container.querySelector(`input[name="box-colour"]`)
  colourInput.value = '#ee5828'

  expect(colourInput.value === '#ee5828').toBeTruthy() // The value should be saved after change.
})

test('Should be able to select country in list', () => {
  const { getByTestId, container } = render(<Form/>)

  fireEvent.click(getByTestId('country-list'), { target: { value: 'China' } })

  const countryOptions = container.querySelectorAll('option')
  
  expect(countryOptions[0].selected).toBeFalsy()
  expect(countryOptions[1].selected).toBeTruthy() // China is second in the list and should be chosen after change.
  expect(countryOptions[2].selected).toBeFalsy()
  expect(countryOptions[3].selected).toBeFalsy()
})
