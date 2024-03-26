import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import { BaseLinkStyles, UnorderedListStyles } from 'aether-marketing';

const HeroWrapper = styled.section`
@media (min-width: 992px) {
  padding: 48px 80px;
}
  border-bottom: 1px solid rgb(230, 230, 230);
  margin-bottom: 80px;
  .hero-image {
      margin: 0px;
  }
`
const Container = styled.div`
  ul {
    ${UnorderedListStyles.componentStyle.rules}
  }
  a {
    ${BaseLinkStyles.componentStyle.rules}
  }
`

class AutoFlexPolicyPage extends React.Component {
  componentDidMount() {
    if (window.location.pathname !== '/auto-flex-policy/') {
      window.location.pathname = '/auto-flex-policy/';
    }
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Auto-Flex Team Policy | Postman"
          description='Postman offers a flexible model that simplifies how you
                       can add Users to your Postman team. With the "auto-flex" model, you can authorize
                       additional Users at any time through the administrative dashboard of your Postman
                       Service, instead of having to purchase each additional User license with Postman prior
                       to enablement.'
          slug="/auto-flex-policy/"
        />
        <div className="container-fluid">
          <HeroWrapper className="row section align-items-center hero" >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-8 align-self-center">
                  <h1>Auto-Flex Team Policy</h1>
                  <p className="subtitle">
                    Read our blog post on the <a href="https://blog.postman.com/introducing-auto-flex-for-teams/"> Auto-Flex Team Policy</a>.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 offset-md-1 col-lg-4 offset-lg-0 align-self-center">
                  <img
                    src="https://voyager.postman.com/illustration/happy-postmanauts-postman-illustration.svg"
                    width="637"
                    height="411"
                    className="hero-image img-fluid"
                    alt="Postmanaut sitting at computer. Illustration."
                  />
                </div>
              </div>
            </div>
          </HeroWrapper>
        </div>
        <Container className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-sm-12">
              <p>
                Postman offers a flexible model that simplifies how you can add Users to your Postman team. With the &quot;auto-flex&quot; model, you can authorize additional Users at any time through the administrative dashboard of your Postman Service, instead of having to purchase each additional User license with Postman prior to enablement.
              </p>
              <p>
                We will bill you for any additional Users on a monthly basis for <a href='https://www.postman.com/pricing/'>monthly plans</a>, and on a quarterly basis for annual plans, measured from the date of your initial purchase. For customers on Postman Enterprise plans who are <a href='/docs/billing/billing/#paying-by-invoice'>paying by invoice</a>, the last quarter of the billing cycle will only be 6 weeks long and the first quarter of the next billing cycle will be an extra 6 weeks long (18 weeks total). Shortly before the applicable billing date, your Billing and Admin User will receive a notification that reflects the number of added Users during that cycle. Your Admin User can make adjustments to the number of Users on your plan through the administrative dashboard at any time prior to the billing date, provided however, once you have been billed you may not reduce the number of Users until the end of your then-current Subscription Term. Then, on the billing date, you will be billed for the number of additional Users on your plan as of the billing date. All fees paid are non-refundable.
              </p>
              <h2 id="summary">Summary</h2>
              <ul>
                <li>
                  On the day you purchase a paid plan, you will be charged for the initial number of
                  Users you select.
                </li>
                <li>
                  If you add more Users to your plan after the initial purchase, those User
                  subscriptions will be co-termed with your original User subscriptions.
                </li>
                <li>
                  Billing calculations and any changes to the number of Users on your plan will be
                  reflected in your billing statements. For annual plans, we will bill you quarterly
                  for any additional Users; for monthly plans, we will bill you monthly.
                </li>
              </ul>
              <h2 id="examples">Examples</h2>
              <p>Here&#39;s an example of a monthly plan:</p>
              <p className="font-italic">
                Your workspace is on the Basic plan and you&#39;re paying monthly&mdash;$19 per User per
                month. You add 4 new Users ten days into your monthly billing cycle. You deprovision
                2 Users before the next regular billing date. You will be charged $19 each for the
                total number of Users on your plan as of the billing date, including the 2 Users you
                added during the preceding month and retained as of the billing date.
              </p>
              <p>Here&#39;s an example of an annual plan:</p>
              <p className="font-italic">
                Your workspace is on the Basic plan and you&#39;re paying annually&mdash;$168 per User
                per year. Your &quot;auto-flex&quot; billing cycle happens at the end of every
                quarter of your annual Subscription Term. You add 4 new Users two months into your
                billing cycle. You deprovision 2 Users before the next regular billing date (i.e.
                the end of the third month of your annual Subscription Term). You will be charged
                for the 2 incremental Users you added during the preceding three month period and
                retained as of the billing date, at the prorated price for the remaining nine months
                of your annual Subscription Term (i.e. $252 total).
              </p>
              <p className="alert alert-info font-weight-bold text-dark ">
                Paying by annual invoice? We invoice you for a set number of Users for the full
                year. If your team grows larger than anticipated, we'll send you an invoice once per
                quarter to settle any outstanding balances.
              </p>
              <h2 id="credit-card-charges">Credit card charges</h2>
              <p>
                You&#39;ll see the first credit card charge from Postman on the day you purchase any
                paid subscriptions. Here are some other times you&#39;ll see charges:
              </p>
              <ul>
                <li>
                  On the monthly renewal date if your team is on a monthly payment plan. This will
                  include any charges for adding new Users as described in the Auto-Flex team policy
                  sections above.
                </li>
                <li>On the annual renewal date if you are on an annual payment plan.</li>
                <li>
                  On the last day of the quarter, if you are on an annual payment plan and there are
                  any charges due for adding new Users as described in the Auto-Flex team policy
                  sections above.
                </li>
              </ul>
              <p className="alert alert-info mb-5">
                <span className="font-weight-bold text-dark">Tip:</span>
                {' '}
                To learn more about the
                different types of roles and permissions you can assign in Postman, visit
                {' '}
                <a href="/docs/collaborating-in-postman/roles-and-permissions/">
                  Defining Roles
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default AutoFlexPolicyPage;
