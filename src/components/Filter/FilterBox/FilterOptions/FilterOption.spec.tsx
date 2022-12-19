import { render } from "@testing-library/react"
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
})