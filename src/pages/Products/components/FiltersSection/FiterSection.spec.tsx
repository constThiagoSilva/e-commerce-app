import { render } from "@testing-library/react"
import { FiltersSection } from "./FiltersSection"

describe('Filter Section Product Page Component', () => {
    it('should render the filter options: Size, Price, Category', () => {
        const {getAllByTestId} = render(<FiltersSection/>)

        getAllByTestId(/filter-options-component/i).map(element => expect(element).toBeInTheDocument())
        expect(getAllByTestId(/filter-options-component/i).length).toBe(3)
    })
})