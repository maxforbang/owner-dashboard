/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";

// Settings page components
import BaseLayout from "/pagesComponents/pages/account/components/BaseLayout";
import Sidenav from "/pagesComponents/pages/account/settings/components/Sidenav";
import Header from "/pagesComponents/pages/account/settings/components/Header";
import BasicInfo from "/pagesComponents/pages/account/settings/components/BasicInfo";
import ChangePassword from "/pagesComponents/pages/account/settings/components/ChangePassword";
import Authentication from "/pagesComponents/pages/account/settings/components/Authentication";
import Accounts from "/pagesComponents/pages/account/settings/components/Accounts";
import Notifications from "/pagesComponents/pages/account/settings/components/Notifications";
import Sessions from "/pagesComponents/pages/account/settings/components/Sessions";
import DeleteAccount from "/pagesComponents/pages/account/settings/components/DeleteAccount";

function Settings() {
  return (
    <BaseLayout>
      <MDBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid>
          <Grid item xs={12} lg={9}>
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Header />
                </Grid>
                <Grid item xs={12}>
                  <BasicInfo />
                </Grid>
                <Grid item xs={12}>
                  <ChangePassword />
                </Grid>
                <Grid item xs={12}>
                  <Authentication />
                </Grid>
                <Grid item xs={12}>
                  <Accounts />
                </Grid>
                <Grid item xs={12}>
                  <Notifications />
                </Grid>
                <Grid item xs={12}>
                  <Sessions />
                </Grid>
                <Grid item xs={12}>
                  <DeleteAccount />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </BaseLayout>
  );
}

export default Settings;
