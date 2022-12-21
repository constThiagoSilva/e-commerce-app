import { render } from "@testing-library/react"
import { ProductCard } from "../../components/ProductCard/ProductCard"

const Products = () => {
    return (
        <div>
            <ProductCard product={{category: 'any', image_url: 'any',inPromotion: null, price: 100, title: 'any'}} data-testid='product-card-component'/>
            <ProductCard product={{category: 'any', image_url: 'any',inPromotion: null, price: 100, title: 'any'}} data-testid='product-card-component'/>
            <ProductCard product={{category: 'any', image_url: 'any',inPromotion: null, price: 100, title: 'any'}} data-testid='product-card-component'/>
            <ProductCard product={{category: 'any', image_url: 'any',inPromotion: null, price: 100, title: 'any'}} data-testid='product-card-component'/>
            <ProductCard product={{category: 'any', image_url: 'any',inPromotion: null, price: 100, title: 'any'}} data-testid='product-card-component'/>
        </div>
    )
}

describe('Products Page', () => {
    it('should have a list of product cards', () => {
        const {getAllByTestId} = render(<Products/>)

        getAllByTestId(/product-card-component/i).map(element => expect(element).toBeInTheDocument())
        expect(getAllByTestId(/product-card-component/i).length).toBe(5)
    })
})