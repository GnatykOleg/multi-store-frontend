import { nanoid } from "@reduxjs/toolkit";

import {
  FormGetOrdersHistory,
  Loader,
  MySection,
  MyTitle,
} from "../../components";

import { useAppSelector } from "../../helpers/hooks/redux-hooks";

import {
  getOrdersHistoryLoadingStatusSelector,
  getOrdersHistorySelector,
} from "../../redux/ordersHistory/ordersHistorySelectors";

import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";

const HistoryPage = () => {
  const loading = useAppSelector(getOrdersHistoryLoadingStatusSelector);

  const ordersHistory = useAppSelector(getOrdersHistorySelector);

  if (loading) return <Loader />;

  return (
    <>
      <MySection styles={{ width: "100%" }}>
        <MyTitle text="Orders history page" as="h2" variant="h2" hidden />
        <FormGetOrdersHistory />
      </MySection>

      <MySection styles={{ width: "100%" }}>
        <MyTitle text="Orders history" as="h2" hidden />

        <Grid container spacing={2} component="ul">
          {ordersHistory?.map(({ orders, createdAt, total_price }) => {
            return (
              <Grid component="li" item key={nanoid()} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {createdAt?.slice(0, 10)}
                    </Typography>

                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                    >
                      Total price: {total_price.toFixed(2)}$
                    </Typography>

                    {orders.map(({ title, price, quantity }) => (
                      <div style={{ marginBottom: "20px" }}>
                        <Typography
                          gutterBottom
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          gutterBottom
                          style={{ whiteSpace: "pre-line" }}
                        >
                          Price: {price}$
                        </Typography>

                        <Typography
                          gutterBottom
                          style={{ whiteSpace: "pre-line" }}
                        >
                          Quantity: {quantity}
                        </Typography>

                        <Typography style={{ whiteSpace: "pre-line" }}>
                          Total {price * quantity}$
                        </Typography>

                        <Divider />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </MySection>
    </>
  );
};

export default HistoryPage;
