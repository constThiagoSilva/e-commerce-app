import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { FiltersSection } from "./FiltersSection"

describe('Filter Section Product Page Component', () => {
    it('should render the filter options: Size, Price, Category', () => {
        const {getAllByTestId} = render(<FiltersSection isOpen={true} onClose={() => jest.fn()}/>)

        getAllByTestId(/filter-options-component/i).map(element => expect(element).toBeInTheDocument())
        expect(getAllByTestId(/filter-options-component/i).length).toBe(3)
    })
    it('should have a close filter-section button', () => {
        const {getByTestId} = render(<FiltersSection isOpen={true} onClose={() => jest.fn()}/>)

        expect(getByTestId('close-section')).toBeInTheDocument()
    })
    // it('should not display in screen when user click out', async () => {
    //     const mockCloseFilterSection = jest.fn()
    //     const {getAllByTestId, container} = render(<FiltersSection isOpen={true} onClose={mockCloseFilterSection}/>)

    //     await userEvent.click(container)

    //     expect(container).not.toBeInTheDocument()
    // })
})