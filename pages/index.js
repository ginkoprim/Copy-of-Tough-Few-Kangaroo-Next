import React from 'react'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Copy of Tough Few Kangaroo</title>
          <meta property="og:title" content="Copy of Tough Few Kangaroo" />
        </Head>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo">BUTTONS</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <span>Home</span>
                <span className="home-nav2">Products</span>
                <span className="home-nav3">Services</span>
                <span className="home-nav4">Contact</span>
                <span className="home-nav5">Blog</span>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">Login</button>
                <button className="home-register button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <span className="home-logo1">BUTTONS</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav11">Home</span>
                  <span className="home-nav21">Products</span>
                  <span className="home-nav31">Services</span>
                  <span className="home-nav41">Contact</span>
                  <span className="home-nav51">Blog</span>
                </nav>
                <div className="home-buttons1">
                  <button className="home-login1 button">Login</button>
                  <button className="home-register1 button">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <div className="home-hero1">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-image"
            />
            <div className="home-container01">
              <h1 className="home-hero-heading heading1">Only Buttons</h1>
              <span className="home-hero-sub-heading">
                The ultimate collection of buttons for your website
              </span>
              <div className="home-btn-group">
                <button className="home-hero-button1 button">
                  Get Started
                </button>
                <button className="home-hero-button2 button">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-details">
          <div className="home-details1">
            <div className="home-container02">
              <span className="home-text sectionTitle">
                <span>Details</span>
                <br></br>
              </span>
              <h2 className="home-details-heading heading2">
                Why choose Only Buttons?
              </h2>
              <span className="home-details-sub-heading">
                Only Buttons offers a wide range of customizable button styles
                and designs to suit your website&apos;s needs. With our
                easy-to-use interface, you can create stunning buttons that will
                grab your users&apos; attention and improve engagement. Whether
                you need buttons for call-to-action, navigation, or social
                sharing, we&apos;ve got you covered.
              </span>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1630337019902-55ee763f345a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk2OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              className="home-details-image"
            />
          </div>
        </div>
        <div className="home-features">
          <div className="home-features-container">
            <div className="home-features1">
              <div className="home-container03">
                <span className="home-text03 sectionTitle">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">
                  Enhance Your Website with Buttons
                </h2>
                <span className="home-features-sub-heading">
                  Discover the powerful features of our button solution
                </span>
              </div>
              <div className="home-container04">
                <FeatureCard
                  Heading="Customizable Buttons"
                  SubHeading="Easily customize the design and style of your buttons to match your brand"
                ></FeatureCard>
                <FeatureCard
                  Heading="Responsive Design"
                  SubHeading="Buttons automatically adjust to different screen sizes, ensuring a seamless user experience"
                ></FeatureCard>
                <FeatureCard
                  Heading="Multiple Button Styles"
                  SubHeading="Choose from a variety of button styles, including flat, gradient, and 3D effects"
                ></FeatureCard>
                <FeatureCard
                  Heading="Button Animations"
                  SubHeading="Add eye-catching animations to your buttons to grab users' attention"
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing">
          <div className="home-pricing1">
            <div className="home-container05">
              <span className="home-text06 sectionTitle">
                <span>Pricing</span>
                <br></br>
              </span>
              <h2 className="home-pricing-heading heading2">
                Some title for a pricing section
              </h2>
              <span className="home-pricing-sub-heading">
                Some catchy text for a pricing section
              </span>
            </div>
            <div className="home-container06">
              <div className="home-pricing-card">
                <div className="home-container07">
                  <span className="home-text09 heading3">Free</span>
                  <span className="home-free-plan-description">
                    A short description for the free plan
                  </span>
                </div>
                <div className="home-container08">
                  <span className="home-text10">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-free-plan-price">0</span>
                </div>
                <div className="home-container09">
                  <div className="home-container10">
                    <span className="home-text13">✔</span>
                    <span className="home-free-plan-features">
                      A feature of the free plan
                    </span>
                  </div>
                  <div className="home-container11">
                    <span className="home-text14">✔</span>
                    <span className="home-free-plan-features1">
                      A feature of the free plan
                    </span>
                  </div>
                  <div className="home-container12">
                    <span className="home-text15">✔</span>
                    <span className="home-free-plan-features2">
                      A feature of the free plan
                    </span>
                  </div>
                  <div className="home-container13">
                    <span className="home-text16">✔</span>
                    <span className="home-free-plan-features3">
                      A feature of the free plan
                    </span>
                  </div>
                </div>
                <button className="home-button button">
                  Continue with Free
                </button>
              </div>
              <div className="home-pricing-card1">
                <div className="home-container14">
                  <span className="home-text17 heading3">BASIC</span>
                  <span className="home-basic-plan-description">
                    A short description for the basic plan
                  </span>
                </div>
                <div className="home-container15">
                  <span className="home-text18">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-basic-plan-pricing">7</span>
                  <span className="home-text21">/ month</span>
                </div>
                <div className="home-container16">
                  <div className="home-container17">
                    <span className="home-text22">✔</span>
                    <span className="home-text23">
                      All features of FREE plan
                    </span>
                  </div>
                  <div className="home-container18">
                    <span className="home-text24">✔</span>
                    <span className="home-basic-plan-features">
                      A feature of the basic plan
                    </span>
                  </div>
                  <div className="home-container19">
                    <span className="home-text25">✔</span>
                    <span className="home-basic-plan-features1">
                      A feature of the basic plan
                    </span>
                  </div>
                  <div className="home-container20">
                    <span className="home-text26">✔</span>
                    <span className="home-basic-plan-features2">
                      A feature of the basic plan
                    </span>
                  </div>
                  <div className="home-container21">
                    <span className="home-text27">✔</span>
                    <span className="home-basic-plan-features3">
                      A feature of the basic plan
                    </span>
                  </div>
                </div>
                <button className="home-button1 button">
                  Try the Basic plan
                </button>
              </div>
              <div className="home-pricing-card2">
                <div className="home-container22">
                  <span className="home-text28 heading3">
                    <span>PRO</span>
                    <br></br>
                  </span>
                  <span className="home-pro-plan-description">
                    A short description for the pro plan
                  </span>
                </div>
                <div className="home-container23">
                  <span className="home-text31">
                    <span>$</span>
                    <span></span>
                  </span>
                  <span className="home-pro-plan-pricing">20</span>
                  <span className="home-text34">/ month</span>
                </div>
                <div className="home-container24">
                  <div className="home-container25">
                    <span className="home-text35">✔</span>
                    <span className="home-text36">
                       All features of BASIC plan
                    </span>
                  </div>
                  <div className="home-container26">
                    <span className="home-text37">✔</span>
                    <span className="home-pro-plan-features">
                      A feature of the pro plan
                    </span>
                  </div>
                  <div className="home-container27">
                    <span className="home-text38">✔</span>
                    <span className="home-pro-plan-features1">
                      A feature of the pro plan
                    </span>
                  </div>
                  <div className="home-container28">
                    <span className="home-text39">✔</span>
                    <span className="home-pro-plan-features2">
                      A feature of the pro plan
                    </span>
                  </div>
                </div>
                <button className="home-button2 button">
                  Try the PRO plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-gallery1">
            <h1 className="home-gallery-heading heading2">
              Explore our Button Collection
            </h1>
            <span className="home-gallery-sub-heading">
              Discover the variety of buttons we offer
            </span>
            <div className="home-container29">
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1609705024683-2fec656e13a3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1506865952017-eba1745396f6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName1"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1593442716533-b1a5468529eb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName3"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1521249692263-e0659c60326e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName2"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1563891510473-18923cd29239?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName4"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1691534986134-cac9b2db495f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName5"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1535406208535-1429839cfd13?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName6"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1550389347-d445d1d4194c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName7"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1529392960549-df4af50eac23?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName8"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1560487697-40f3fc438fd7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName9"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1643040611925-d6f77a012f3a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName10"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1484259147675-50b8c2f154da?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTAxNzk1M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
                rootClassName="rootClassName11"
              ></GalleryCard3>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-banner1">
            <h1 className="home-banner-heading heading2">
              Discover the power of buttons
            </h1>
            <span className="home-banner-sub-heading">
              Enhance user experience and drive conversions with our button
              designs.
            </span>
            <button className="home-banner-button button">Learn More</button>
          </div>
        </div>
        <div className="home-faq">
          <div className="home-faq-container">
            <div className="home-faq1">
              <div className="home-container30">
                <span className="home-text40 sectionTitle">
                  <span>FAQ</span>
                  <br></br>
                </span>
                <h2 className="home-text43 heading2">Common questions</h2>
                <span className="home-text44">
                  <span>
                    Here are some of the most common questions that we get.
                  </span>
                  <br></br>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                  <span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div className="home-container31">
                <Question
                  Answer="Buttons are used to trigger an action or navigate to a different page."
                  Question="What is the purpose of a button?"
                ></Question>
                <Question
                  Answer="Buttons can be created using HTML and CSS. You can use the &lt;button&gt; tag in HTML and apply CSS styles to customize its appearance."
                  Question="How can I create a button?"
                ></Question>
                <Question
                  Answer="Yes, buttons can have different styles by applying CSS classes or inline styles."
                  Question="Can buttons have different styles?"
                ></Question>
                <Question
                  Answer="Yes, buttons can have icons by adding an &lt;i&gt; or &lt;span&gt; element inside the button and applying appropriate CSS classes."
                  Question="Can buttons have icons?"
                ></Question>
                <Question
                  Answer="Yes, buttons can be disabled by adding the 'disabled' attribute to the button element."
                  Question="Can buttons be disabled?"
                ></Question>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container32">
              <span className="home-logo2">BUTTONS</span>
              <nav className="home-nav1 home-nav1">
                <span className="home-nav12">Home</span>
                <span className="home-nav22">Products</span>
                <span className="home-nav32">Services</span>
                <span className="home-nav42">Contact</span>
                <span className="home-nav52">Blog</span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container33">
              <span className="home-text61">
                © 2023 myCompany, All Rights Reserved.
              </span>
              <div className="home-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon10"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon12"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon14"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: var(--dl-color-primary1-blue80);
          }
          .home-navbar-interactive {
            width: 90%;
            display: flex;
            position: sticky;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo {
            font-size: 2em;
            font-family: 'Lato';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-nav1 {
            transition: 0.3s;
          }
          .home-nav1:hover {
            color: #3d6e70ff;
          }
          .home-nav2 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav2:hover {
            color: #3d6e70ff;
          }
          .home-nav3 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav3:hover {
            color: #3d6e70ff;
          }
          .home-nav4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav4:hover {
            color: #3d6e70ff;
          }
          .home-nav5 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav5:hover {
            color: #3d6e70ff;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 45px;
            padding-right: 1.5rem;
          }
          .home-register {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: bold;
            border-color: var(--dl-color-primary1-blue100);
            padding-left: 1.5rem;
            border-radius: 45px;
            padding-right: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-register:hover {
            border-color: rgba(41, 20, 119, 0.9);
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            font-size: 2em;
            font-weight: bold;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav11 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav21 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav31 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav41 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav51 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login1 {
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
          }
          .home-register1 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 1px;
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-register1:hover {
            border-color: #849492ff;
            background-color: #849492ff;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: var(--dl-color-primary1-blue80);
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-image {
            width: 200px;
            object-fit: cover;
          }
          .home-container01 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-hero-heading {
            color: var(--dl-color-gray-white);
            max-width: 800px;
            text-align: center;
            font-family: 'Angilla Tattoo Personal Use ';
            line-height: 1.6;
          }
          .home-hero-sub-heading {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-hero-button1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            transition: 0.3s;
            font-weight: bold;
            padding-top: 1.5rem;
            border-color: var(--dl-color-primary1-blue100);
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-hero-button1:hover {
            color: var(--dl-color-gray-white);
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-hero-button2 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: bold;
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: transparent;
          }
          .home-hero-button2:hover {
            border-color: var(--dl-color-gray-white);
          }
          .home-details {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-details1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container02 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            color: var(--dl-color-primary1-blue80);
            text-align: left;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-details-heading {
            width: 80%;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-details-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-details-image {
            width: 400px;
            height: 400px;
            object-fit: cover;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-secondary-grey400);
          }
          .home-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
          }
          .home-container03 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text03 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-container04 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-pricing {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-pricing1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-container05 {
            gap: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text06 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-pricing-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-pricing-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-container06 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            justify-content: center;
          }
          .home-pricing-card {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-primary1-blue60);
          }
          .home-container07 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text09 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-free-plan-description {
            line-height: 1.6;
          }
          .home-container08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text10 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-free-plan-price {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-container09 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container10 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text13 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features {
            color: var(--dl-color-gray-800);
          }
          .home-container11 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text14 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container12 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text15 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container13 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text16 {
            color: var(--dl-color-gray-800);
          }
          .home-free-plan-features3 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-button {
            color: var(--dl-color-gray-black);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: var(--dl-color-primary1-blue100);
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: transparent;
          }
          .home-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(217, 217, 217, 0.1);
          }
          .home-pricing-card1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: var(--dl-color-primary1-blue60);
          }
          .home-container14 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text17 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-basic-plan-description {
            line-height: 1.6;
          }
          .home-container15 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text18 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-basic-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text21 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-container16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-container17 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text22 {
            color: var(--dl-color-gray-800);
          }
          .home-text23 {
            color: var(--dl-color-gray-800);
          }
          .home-container18 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text24 {
            color: var(--dl-color-gray-800);
          }
          .home-basic-plan-features {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container19 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text25 {
            color: var(--dl-color-gray-800);
          }
          .home-basic-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container20 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text26 {
            color: var(--dl-color-gray-800);
          }
          .home-basic-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container21 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text27 {
            color: var(--dl-color-gray-800);
          }
          .home-basic-plan-features3 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: rgba(41, 20, 119, 0.9);
            border-width: 0px;
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-button1:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-pricing-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-primary1-blue60);
          }
          .home-container22 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text28 {
            font-family: 'Raleway';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-pro-plan-description {
            line-height: 1.6;
          }
          .home-container23 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-text31 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-pro-plan-pricing {
            font-size: 4rem;
            font-weight: 700;
          }
          .home-text34 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .home-container24 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container25 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text35 {
            color: var(--dl-color-gray-800);
          }
          .home-text36 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container26 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text37 {
            color: var(--dl-color-gray-800);
          }
          .home-pro-plan-features {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container27 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text38 {
            color: var(--dl-color-gray-800);
          }
          .home-pro-plan-features1 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-container28 {
            gap: 4px;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-text39 {
            color: var(--dl-color-gray-800);
          }
          .home-pro-plan-features2 {
            color: var(--dl-color-gray-800);
            line-height: 1.6;
          }
          .home-button2 {
            color: var(--dl-color-gray-white);
            width: 100%;
            margin-top: auto;
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1rem;
            border-color: #3d6e70ff;
            border-width: 0px;
            border-radius: 45px;
            padding-bottom: 1rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-button2:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-gallery {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-gallery1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-gallery-heading {
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-gallery-sub-heading {
            color: rgb(153, 153, 153);
            text-align: center;
            line-height: 1.6;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .home-container29 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-banner1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-banner-sub-heading {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            line-height: 1.6;
          }
          .home-banner-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1.5rem;
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            background-color: var(--dl-color-primary1-blue100);
          }
          .home-banner-button:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-faq-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-faq1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-container30 {
            display: flex;
            max-width: 35%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text40 {
            color: var(--dl-color-primary1-blue80);
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text43 {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text44 {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
          }
          .home-container31 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container32 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-logo2 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav12 {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
          }
          .home-nav22 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav32 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav42 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav52 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container33 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text61 {
            color: var(--dl-color-secondary-gray500);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon10 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon14 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .home-hero1 {
              flex-direction: column;
            }
            .home-container01 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-hero-heading {
              text-align: center;
            }
            .home-hero-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-pricing-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-container06 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 450px;
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
            }
            .home-gallery-sub-heading {
              text-align: center;
            }
            .home-container29 {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
            .home-text44 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-nav11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav21 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav31 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav51 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-container02 {
              align-items: center;
              justify-content: flex-start;
            }
            .home-text {
              text-align: center;
            }
            .home-details-heading {
              text-align: center;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-details-image {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: 0px;
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container04 {
              grid-template-columns: 1fr;
            }
            .home-pricing1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-pricing-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container06 {
              align-items: center;
              flex-direction: column;
            }
            .home-pricing-card {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card1 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              width: 100%;
              max-width: 450px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-gallery1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-gallery-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container29 {
              grid-template-columns: 1fr 1fr;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-faq1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-container30 {
              max-width: 100%;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-text44 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container33 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text61 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .home-logo {
              font-size: 1.5em;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-logo1 {
              font-size: 1.5em;
            }
            .home-icon02 {
              fill: var(--dl-color-gray-900);
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container01 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-hero-button2 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-pricing-card2 {
              margin-bottom: 0px;
            }
            .home-gallery1 {
              padding: var(--dl-space-space-unit);
            }
            .home-container29 {
              grid-template-columns: 1fr;
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container33 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text61 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
