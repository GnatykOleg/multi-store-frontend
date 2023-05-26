import { nanoid } from "@reduxjs/toolkit";

import { useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import {
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Grid,
  Box,
} from "@mui/material";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../helpers/hooks/redux-hooks";

import {
  addProductToCart,
  decrementProduct,
  incrementProduct,
  removeProductFromCart,
} from "../../../redux/cart/cartSlice";

import MyButton from "../../common/MyButton/MyButton";

import { IProduct } from "../../../types/redux/redux-types";

import { ROUTES_PATHS } from "../../../helpers/constants/routes-constants";

import { getCartDataSelector } from "../../../redux/cart/cartSelectors";

import {
  BORDER,
  BOX_SHADOW,
  COLOR,
} from "../../../helpers/constants/theme-constants";

import * as Styled from "./ProductsItem.styled";

const { SHOP_PAGE, CART_PAGE } = ROUTES_PATHS;

const ProductsItem = ({ products }: { products: IProduct[] | null }) => {
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const cart = useAppSelector(getCartDataSelector);

  const findProductInCart = (productId: string) =>
    cart.find(({ _id }) => _id === productId);

  const addToCart = (product: IProduct) => {
    const isProductInCart = findProductInCart(product._id);

    if (isProductInCart)
      return toast.error(
        `Product ${product.title} already added to your cart!`
      );

    dispatch(addProductToCart(product));

    toast.success(`Successfully added to cart product: ${product.title}`);
  };

  return (
    <>
      {products?.map(product => {
        const { _id, description, image, price, title } = product;

        const productInCart = findProductInCart(product._id);

        const produtQuantity =
          productInCart && `Quantity: ${productInCart.quantity}`;

        const productTotalPrice =
          productInCart && `Total: ${productInCart.quantity * price}$`;

        const isProductAddedToCartStyles = productInCart && {
          color: COLOR.PRIMARY,
          border: BORDER.PRIMARY,
          boxShadow: BOX_SHADOW.PRIMARY,
        };

        return (
          <Grid component="li" item key={nanoid()} xs={12} sm={6} md={4}>
            <Styled.MyCard>
              <CardMedia sx={{ height: 200 }} image={image} title={title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="p">
                  {title}
                </Typography>

                <Typography gutterBottom variant="body2" color="text.secondary">
                  {description}
                </Typography>

                <Typography gutterBottom variant="h5" component="p">
                  Price: {price}$
                </Typography>

                {pathname === CART_PAGE && (
                  <>
                    <Typography gutterBottom variant="h6" component="p">
                      {produtQuantity}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {productTotalPrice}
                    </Typography>

                    <CardActions>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <MyButton
                          text="-"
                          onClick={() => dispatch(decrementProduct(_id))}
                        />

                        <MyButton
                          text="Delete"
                          onClick={() => dispatch(removeProductFromCart(_id))}
                        />

                        <MyButton
                          text="+"
                          onClick={() => dispatch(incrementProduct(_id))}
                        />
                      </Box>
                    </CardActions>
                  </>
                )}
              </CardContent>

              {/* {pathname === CART_PAGE && (
                
              )} */}

              {pathname === SHOP_PAGE && (
                <CardActions>
                  <MyButton
                    text="Add to cart"
                    onClick={() => addToCart(product)}
                    styles={{ margin: "0 auto", ...isProductAddedToCartStyles }}
                  />
                </CardActions>
              )}
            </Styled.MyCard>
          </Grid>
        );
      })}
    </>
  );
};

export default ProductsItem;
