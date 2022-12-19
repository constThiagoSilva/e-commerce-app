import {render} from '@testing-library/react'

const ProductCard = () => {
    return (
        <div>
            <img src="" alt="any_alt" data-testid='product-image'/>
        </div>
    )
}

describe('Product Card Component', () => {
    it('should have a image of product', () => {
        const {getByTestId} = render(<ProductCard/>)

        expect(getByTestId('product-image')).toBeInTheDocument()
        expect(getByTestId('product-image')).toHaveProperty('alt', 'any_alt')
    })
})