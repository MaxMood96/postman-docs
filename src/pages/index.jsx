import React from 'react';
import styled from 'styled-components';
import '../../styles/config/normalize.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { LandingCard } from '../components/MarketingPages/Cards';
import '../../styles/config/_pm-icons.css';
import { BaseLink, BaseButton, SectionStyles, VideoComponent } from 'aether-marketing';

const HeroWrapper = styled.section`
  background-color: rgba(173, 205, 251, .2);
  padding: 48px 80px;
    @media (max-width: 991px) {
        padding: 40px !important;
      }
    .hero-image {
        margin: 0px;
    }
    .img-frame {
        border-radius: ${(props) => props.theme.borderRadius.medium};
        border: 8px solid ${(props) => props.theme.colors.grey_20};// $grey_20
        box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.32);
    }
`

const HRStyles = styled.hr`
  border: 0;
  margin-top: 0;
  border-top: 1px solid ${(props) => props.theme.colors.grey_30};
  margin-bottom: 0;
`;

class IndexPage extends React.Component {
  componentDidMount() {
    const id = 'Polyfill';
    if (!document.getElementById(id)) {
      const polyfill = document.createElement('script');
      polyfill.id = id;
      polyfill.language = 'JavaScript1.1';
      polyfill.src = '//polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries';
      polyfill.async = true;
      document.body.appendChild(polyfill);
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Learning Center" slug="/" />
        <div className="container-fluid">
          <HeroWrapper className="row section align-items-center hero" >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-8 align-self-center">
                  <h1>Postman Learning Center</h1>
                  <p className="subtitle">
                    Learn how to use Postman.
                    {' '}
                    <br />
                    Check out the docs and support resources!
                  </p>
                  <BaseButton
                    src="/docs/introduction/overview/"
                    className="mb-5 mb-md-0"
                    as='a'
                    buttonType="secondary"
                    target="same-tab"
                    >
                    Explore the Docs
                  </BaseButton>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 align-self-center">
                  <img
                    src="https://voyager.postman.com/illustration/postman-learning-center-documentation-illustration.svg"
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
        <div className="container">
          <SectionStyles className="row">
            <div className="col-sm-12">
              <h2 className="mb-5">Design, develop, and collaborate on your API projects</h2>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Get started with Postman"
                    description="Send your first API request in Postman in just a few clicks!"
                    cta="Send a request"
                    link="/docs/getting-started/first-steps/sending-the-first-request/"
                    icon="https://voyager.postman.com/icon/spaceship-rocket-launch-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Send requests"
                    description="Send requests in Postman to connect to APIs you are working with."
                    link="/docs/sending-requests/requests/"
                    cta="Build API requests"
                    icon="https://voyager.postman.com/icon/marketing-radar-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="API-first development"
                    description="Use the API Builder to design your API in Postman."
                    cta="Develop your API"
                    link="/docs/designing-and-developing-your-api/the-api-workflow/"
                    icon="https://voyager.postman.com/icon/api-first-company-postman-icon.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Test with Postman"
                    description="Write test scripts and build automation into your workflow."
                    link="/docs/writing-scripts/intro-to-scripts/"
                    cta="Create tests"
                    icon="https://voyager.postman.com/icon/flask-science-beaker-test-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Collaborate with your team"
                    description="Use Postman to enhance collaboration within your team."
                    link="/docs/collaborating-in-postman/collaborate-in-postman-overview/"
                    cta="Start collaborating"
                    icon="https://voyager.postman.com/icon/community-three-people-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 col-lg-4 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman Flows"
                    description="Use Postman's visual tool for creating API workflows."
                    link="/docs/postman-flows/gs/flows-overview/"
                    cta="Use Flows"
                    icon="https://voyager.postman.com/icon/api-demo-icon-postman.svg"
                  />
                </div>
              </div>
            </div>
          </SectionStyles>
          <div className="container-fluid" >
            <HRStyles/>
          </div>
          <SectionStyles className="row">
            <div className="col-sm-12">
              <h2 className="mb-5">Explore other Postman resources</h2>
              <div className="row justify-content-center">
                <div className="col-sm-6 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="30 Days of Postman"
                    description="Tackle a new challenge each day with these developer tutorials."
                    link="https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/overview"
                    cta="Start challenge"
                    icon="https://voyager.postman.com/icon/trophy-award-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman Intergalactic"
                    description="A series of educational trainings taught by Postman team members with a live Q&A."
                    cta="See upcoming webinars"
                    link="https://www.postman.com/events/intergalactic/"
                    icon="https://voyager.postman.com/icon/product-ufo-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman Network"
                    description="Browse APIs, workspaces, and collections inside Postman."
                    link="https://www.postman.com/explore"
                    cta="Explore Postman"
                    icon="https://voyager.postman.com/icon/hotspot-network-icon-postman.svg"
                  />
                </div>
                <div className="col-sm-6 mb-3 mb-md-4 pr-md-5">
                  <LandingCard
                    title="Postman videos"
                    description="Learn Postman skills from our video playlists."
                    link="https://www.youtube.com/c/Postman"
                    cta="Watch videos"
                    icon="https://voyager.postman.com/icon/play-movie-video-film-icon-postman.svg"
                  />
                </div>
              </div>
            </div>
          </SectionStyles>
          <div className="container-fluid" >
            <HRStyles/>
          </div>
          {/* Youtube Video Section */}
          <SectionStyles className="row align-items-center">
            <div className="col-lg-4">
              <h2>Intro to Postman</h2>
              <p>Learn the Postman fundamentals in this video course for beginners.</p>
              <p className="mb-4">
                Send and authorize a request, write test scripts, and chain requests together.
              </p>
            </div>
            <div className="col-lg-8">
              <VideoComponent
                src="https://www.youtube.com/embed/2oOSnxZ28fA?rel=0&origin=https://learning.postman.com/"
                border="true"
              ></VideoComponent>
            </div>
          </SectionStyles>
          <div className="container-fluid" >
            <HRStyles/>
          </div>
          {/* Events Section */}
          <SectionStyles className="row align-items-center hero" >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-8 align-self-center">
                  <h2 id="upcoming-events">Upcoming Postman events</h2>
                  <p>
                  <BaseLink
                    src="https://www.twitch.tv/getpostman"
                    target="new-tab-external-nofollow"
                    >
                    Follow us
                  </BaseLink>
                  {' '}
                  on Twitch or
                  {' '}
                  <BaseLink
                    src="https://www.youtube.com/channel/UCocudCGVb3MmhWQ1aoIgUQw"
                    target="new-tab-external-nofollow"
                  >
                    subscribe
                  </BaseLink>
                  {' '}
                  to our YouTube channel so you don’t miss when we go live.
                </p>
                  <BaseButton
                    src="https://www.postman.com/events/"
                    className="mb-5 mb-md-0"
                    as='a'
                    buttonType="secondary"
                    target="same-tab"
                    >
                    View Upcoming Events
                  </BaseButton>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 align-self-center">
                  <img
                    src="https://voyager.postman.com/illustration/webinar-illustration-postman.svg"
                    width="637"
                    height="411"
                    className="hero-image img-fluid"
                    alt="Postmanaut sitting at computer. Illustration."
                  />
                </div>
              </div>
            </div>
          </SectionStyles>
          <div className="container-fluid" >
            <HRStyles/>
          </div>
          <SectionStyles className="row">
            <div className="col-sm-6 col-lg-3 mb-sm-4 mb-md-0 pr-md-5">
              <LandingCard
                title="Postman support"
                description="Get help for your issue or a specific question."
                cta="Visit Postman support center"
                icon="https://voyager.postman.com/icon/support-life-ring-icon-postman.svg"
                link="https://support.postman.com/hc/en-us"
              />
            </div>
            <div className="col-sm-6 col-lg-3 mb-sm-4 mb-md-0 pr-md-5">
              <LandingCard
                title="Bugs and feature requests"
                description="Check out the app support repo."
                cta="Make a request"
                icon="https://voyager.postman.com/icon/bug-error-icon-postman.svg"
                link="https://github.com/postmanlabs/postman-app-support/"
              />
            </div>
            <div className="col-sm-6 col-lg-3 mb-sm-4 mb-md-0 pr-md-5">
              <LandingCard
                title="Postman community"
                description="Join the Postman community."
                cta="Visit forum"
                icon="https://voyager.postman.com/icon/community-three-people-icon-postman.svg"
                link="https://community.postman.com/"
              />
            </div>
            <div className="col-sm-6 col-lg-3 mb-sm-4 mb-md-0">
              <LandingCard
                title="Postman answers"
                description="Code samples for most commonly asked questions."
                cta="Visit Postman answers"
                icon="https://voyager.postman.com/icon/solution-puzzle-answers-icon-postman.svg"
                link="https://www.postman.com/postman/workspace/postman-answers/"
              />
            </div>
          </SectionStyles>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
