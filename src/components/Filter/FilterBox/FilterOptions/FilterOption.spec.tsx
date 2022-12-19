import { queryByTestId, render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { FilterOption } from "./FilterOption"

describe('Filter Option Component', () => {
    it('should have a title', () => {
        const mockFilterOptionProps = {
            filterTitle: 'any_title'
        }
        const {getByText} = render(<FilterOption filterTitle={mockFilterOptionProps.filterTitle}/>)

        expect(getByText('any_title')).toBeInTheDocument()
    })
    it('should have a checkbox', () => {
        const mockFilterOptionProps = {
            filterTitle: 'any_title'
        }
        const {getByTestId} = render(<FilterOption filterTitle={mockFilterOptionProps.filterTitle}/>)

        expect(getByTestId('checkbox-element')).toBeInTheDocument()
    })
    it('should have a checkbox', async () => {
        const mockFilterOptionProps = {
            filterTitle: 'any_title'
        }
        const {getByTestId} = render(<FilterOption filterTitle={mockFilterOptionProps.filterTitle}/>)

        await userEvent.click(getByTestId('checkbox-element'))

        expect(getByTestId('check')).toBeInTheDocument()
    })
    it('should have a checkbox', async () => {
        const mockFilterOptionProps = {
            filterTitle: 'any_title'
        }
        const {getByTestId, queryByTestId} = render(<FilterOption filterTitle={mockFilterOptionProps.filterTitle}/>)

        await userEvent.dblClick(getByTestId('checkbox-element'))

        expect(queryByTestId('check')).toBeFalsy()
    })
})