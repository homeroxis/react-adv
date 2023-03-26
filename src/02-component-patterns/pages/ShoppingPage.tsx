import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {/* //*Iteración */}
               {
                    products.map((product) => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            className="bg-dark text-white"
                            value={ shoppingCart[product.id]?.count || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
               }
                {/* //* Ejemplos estáticos */}
                 {/* <ProductCard product={ product }>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={ 'Hola Mundo' } />
                    <ProductCard.Buttons />
                </ProductCard> */}
                {/* <ProductCard
                    product={ product }
                    style={{ backgroundColor: '#70D1F8' }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{
                        display: 'flex', justifyContent: 'end'}}
                    />
                </ProductCard> */}
            </div>

            <div className="shoping-cart">
                {
                    //* Solución Fernando
                    Object.entries(shoppingCart).map( ([ key, product ]) => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ) )

                    //* Mi solución
                    /* Object.values(shoppingCart).map( (product) => (
                        product.count > 0 && (
                            <ProductCard
                                key={ product.id }
                                product={ product }
                                className="bg-dark text-white"
                                style={{ width: '100px' }}
                            >
                                <ProductImage className="custom-image" />
                                <ProductTitle className="text-bold"/>
                                <ProductButtons className="custom-buttons"/>
                            </ProductCard>
                        )
                    )) */
                }
            </div>
            {/* <div>
                <code>
                    { JSON.stringify( shoppingCart ) }
                </code>
            </div> */}
        </div>
    )
}
