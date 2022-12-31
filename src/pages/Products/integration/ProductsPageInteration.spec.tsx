// PEDQUISAR COMO FAZ TESTE DE INTEGRAÇÃO
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';
import { makeMockAxiosReturnedValue } from '../factories/mocks/makeMockedAxiosReturnValue'
import axios from 'axios'
import {Products} from '../Products'
import { ProductProvider } from '../../../contexts/ProductContext';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('Integration Test for Products Page', () => {
    it('should render only product card set by section filter options', async () => {
        makeMockAxiosReturnedValue(mockedAxios)

        await act(async () => {
            const {} = render(<Products/>, {wrapper: ProductProvider})
        })

        await userEvent.click(screen.getByTestId('open-or-close-filter'))
        await userEvent.click(screen.getByText(/size/i))
        await userEvent.click(screen.getByText(/20/i))
        await userEvent.click(screen.getByText(/30/i))

        await userEvent.click(screen.getByText(/x/i))

        expect(screen.getAllByTestId('product-card-component').length).toBe(2)
        
    })
})