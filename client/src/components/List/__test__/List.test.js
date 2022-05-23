import { render, screen, fireEvent, getByTestId, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from '../List.js'

test('Initial state of List', async () => {
  const spy = jest.spyOn(List.prototype, 'componentDidMount')
  const { container } = render(<List />)
  
  await expect(spy).toHaveBeenCalledTimes(1)
})