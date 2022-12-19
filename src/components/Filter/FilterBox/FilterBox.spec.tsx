import { render } from "@testing-library/react"

interface FilterBoxProps {
    filter: {
        title: string
    }
}

const FilterBox = ({filter}: FilterBoxProps) => {
    return (
        <div>
            <span>{filter.title}</span>
            <div data-testid='arrow-to-open-options'>
                arrow down
            </div>
        </div>
    )
}

describe('Filter Box Component', () => {
    it('should have a title passed by props', () => {
        const mockFilterBoxProps = {
            title: 'any_title'
        }
        const {getByText} = render(<FilterBox filter={mockFilterBoxProps}/>)

        expect(getByText('any_title')).toBeInTheDocument()
    })
    it('should have a arrow icon to open filters options', () => {
        const mockFilterBoxProps = {
            title: 'any_title'
        }
        const {getByTestId} = render(<FilterBox filter={mockFilterBoxProps}/>)

        expect(getByTestId('arrow-to-open-options')).toBeInTheDocument()
    })
})