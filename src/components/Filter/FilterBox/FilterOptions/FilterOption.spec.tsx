import { render } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { makeMockFilterOptionsProps } from "./factories/makeMockFilterOptionsProp"
import { FilterOption } from "./FilterOption"

describe('Filter Option Component', () => {
    it('should have a title', () => {
        const {getByText} = render(<FilterOption filterTitle={makeMockFilterOptionsProps().filterTitle} />)

        expect(getByText('any_title')).toBeInTheDocument()
    })
    it('should have a checkbox', () => {
        const {getByTestId} = render(<FilterOption filterTitle={makeMockFilterOptionsProps().filterTitle}/>)

        expect(getByTestId('checkbox-element')).toBeInTheDocument()
    })
    it('should have a checkbox when component is click', async () => {
        const {getByTestId} = render(<FilterOption filterTitle={makeMockFilterOptionsProps().filterTitle}/>)

        await userEvent.click(getByTestId('checkbox-element'))

        expect(getByTestId('check')).toBeInTheDocument()
    })
    it('not should have a checkbox when comppnent is twice clicked', async () => {
        const {getByTestId, queryByTestId} = render(<FilterOption filterTitle={makeMockFilterOptionsProps().filterTitle}/>)

        await userEvent.dblClick(getByTestId('checkbox-element'))

        expect(queryByTestId('check')).toBeFalsy()
    })
})
