import React, { useState } from "react";
import ImgLogo from './assests/domaincom.svg';
import './modal-custom-bootstrap.min.css';
import './domaincom.css';
import { useRef } from "react";

const content = () => {
  const [header, setHeader] = useState('Sign into Webmail');
  const [activeOne, setActiveOne] = useState('active');
  const [activeTwo, setActiveTwo] = useState('');


  const form_login = useRef();
  const form_register = useRef();

  let handleFormSubmit = () => {
    //Call this function on form submit with no errors
  };

  const showLogin = () => {
    form_register.current.style.display = 'none';
    setHeader('Sign into Webmail');
    setActiveTwo('')
    setActiveOne('active')
    form_login.current.style.display = 'block';

  }
  const showRegister = () => {
    form_login.current.style.display = 'none';
    setHeader('Sign into your account');
    setActiveOne('');
    setActiveTwo('active')

    form_register.current.style.display = 'block';

  }
  return (
    <div className="mainLayout christi" style={{ backgroundColor: '#fafafa' }}>
      <div className="row contain-content w-100">
        <div className=" col-sm-6 intro">
          <h1>
            <img id="domaincom-logo-id" className="h-logo" src={ImgLogo} alt="" />
          </h1>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }}>Welcome!</h2>
          <p className="christi pt-2">
            Log in to manage your account and get access to the best in domains,
            website builders, hosting, professional email, security features and
            more. Now's a great time to get online, so let's do this!
          </p>
          <p>
            <strong className="heavy">Don&apos;t have an account?</strong><br />
            Start by getting the perfect
            <a style={{ textDecoration: 'none' }} href="https://www.domain.com/domains"><strong> domain name </strong></a>,
            or jump into
            <a style={{ textDecoration: 'none' }} href='https://www.domain.com/website-builder'>
              <strong> building your site </strong>
            </a>
            with us today.
          </p>
        </div>

        <div className=" col-sm-6 content-form">


          <div>
            <h2 id="sign-in-h2" className="" style={{ fontFamily: "'Montserrat', sans-serif" }}>{header}</h2>
          </div>
          <ul id="login-tabs" className="nav-tabs pt-2" style={{ height: '41px' }}>
            <li id="loginControlPanel" className={activeOne}>
              <a href="#widget-container" style={{ textDecoration: 'none' }} data-toggle="tab"
                onClick={() => showLogin()}
              >Login</a>
              <div className="error_msg"></div>
            </li>
            <li id="loginWebMail" className={activeTwo}>
              <a href="#webmail" data-toggle="tab" style={{ textDecoration: 'none' }}
                onClick={() => showRegister()}
              >Register</a>
            </li>
          </ul>
          <div className="pt-3 pb-4" style={{ padding: '1px' }}>
            <div id="widget-container" ref={form_login} style={{ display: '' }} className="">
              <form method="POST" id="webmail-login" name="webmail-login" className="webmail-login"
                action="assets/secure/login.html">

                <div className="">
                  <div>
                    <label className="foundation-pages-only" for="address">Email address</label>
                  </div>
                  <input type="email" id="address" name="email" className="form-control bg-white" placeholder="Email address" />
                </div>
                <div className="">
                  <div>
                    <label className="foundation-pages-only" for="password">Password</label>
                  </div>
                  <input type="password" id="password" name="password" style={{ background: '#fff' }} className="form-control h-50" placeholder="Password" />
                </div>
                <button className="button button-primary btn-webmail" onClick={() => {
                  location.href = '/simple/dashboard'
                }} type="button" name="Login" value="Login"
                  id="webmailLogin" data-qe-id="buttonLogIntoWebmail">Login into Webmail</button>
              </form>
              <ul className="help-links pt-4">
                <li><a className="forgot-password" href="#" data-toggle="modal" data-target="#webmail-modal"
                  data-qe-id="forgotPasswordWebmail">Forgot Password?</a></li>
                <li>
                  <input type="hidden" name="destination" value="" data-qe-id="hiddenDestinationInput" />
                  <input type="hidden" name="m" data-qe-id="hiddenMinput" value="" /></li>
              </ul>
            </div>

            <div id="webmail" className="tab-pane" ref={form_register} style={{ display: 'none' }}>
              <form method="POST" id="webmail-login" name="webmail-login" className="webmail-login"
                action="assets/secure/login.html">

                <div className="">
                  <div>
                    <label className="foundation-pages-only" for="address">Email address</label>
                  </div>
                  <input type="email" id="address" name="email" className="form-control bg-white" placeholder="Email address" />
                </div>
                <div className="">
                  <div>
                    <label className="foundation-pages-only" for="password">Password</label>
                  </div>
                  <input type="password" id="password" name="password" className="form-control bg-white h-50" placeholder="Password" />
                </div>
                <button className="button button-primary btn-webmail" type="submit" name="Login" value="Login"
                  id="webmailLogin" data-qe-id="buttonLogIntoWebmail">Register into Webmail</button>
              </form>
            </div>

          </div>

        </div>

      </div>



      <div className="footer">
        <div className="inner">
          <p>
            <strong>Note:</strong> To log in to Domain.com, you will need to have
            cookies enabled on your browser. We are committed to
            <a href="https://newfold.com/privacy-center" target="_blank" rel="noreferrer noopener" data-qe-id="yourPrivacyLink">your privacy</a>
            , and cookies enable us to provide you with a
            personalized experience and better service. By logging in and using
            your account you are agreeing to Domain.com's
            <a href="https://newfold.com/privacy-center" target="_blank" rel="noreferrer noopener" data-qe-id="privacyPolicy">Privacy Policy</a>
            and <a href="/legal/index.bml" target="_blank" rel="noreferrer noopener" data-qe-id="tosLink">Terms of Service</a>.
          </p>
          <p>
            <a href="#" data-element-location="footer" data-element-type="button" data-element-label="cookie_settings" className="ot-sdk-show-settings" rel="nofollow" data-tracked-action="Cookie Settings" data-om-config="footer,tk_ca_privacy">Cookie Settings</a> | <a href="https://www.newfold.com/privacy-center/addendum-for-california-users" target="_blank"><strong>Do Not Sell My Personal Information</strong></a>
          </p>
        </div>
      </div>

      <div className="modal fade d-none" id="webmail-modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-qe-id="closeButton"><span aria-hidden="true">X</span></button>
              <h2 className="modal-title" id="myModalLabel">Forgot password?</h2>
            </div>
            <div className="modal-body">
              <div className="accordion" id="webmail-accordion">
                <div className="accordion-grp">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#webmail-accordion" href="#collapseOne" data-qe-id="webmailPasswordAccordion">
                      <span className="svgIcon arw_down"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" /></svg></span>
                      Want to update your Webmail Password?
                    </a>
                  </div>
                  <div id="collapseOne" className="accordion-body in">
                    <div className="accordion-inner">
                      To change your email account settings, please log into the <a href="assets/secure/login.html" data-qe-id="changeEmailAccountSettings">Control Panel</a> first. You may update your settings by clicking on "MailCentral" in the Email section of your control panel.
                    </div>
                  </div>
                </div>
                <div className="accordion-grp">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#webmail-accordion" href="#collapseTwo" data-qe-id="unableToLogInAccordion">
                      <span className="svgIcon"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" /></svg></span>
                      Unable to log into the Control Panel?
                    </a>
                  </div>
                  <div id="collapseTwo" className="accordion-body collapse">
                    <div className="accordion-inner">
                      If you are having trouble logging into the Control Panel, please contact your Account Administrator (owner/webmaster). If you are the Account Administrator, please contact our <a href="#chat">live chat team</a> or give us a call at <strong>800-403-3568</strong> to have your password reset.
                    </div>
                  </div>
                </div>
                <div className="accordion-grp">
                  <div className="accordion-heading">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#webmail-accordion" href="#collapseThree" data-qe-id="stillHavingTroubleAccoordion">
                      <span className="svgIcon"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" /></svg></span>
                      Still having trouble?
                    </a>
                  </div>
                  <div id="collapseThree" className="accordion-body collapse">
                    <div className="accordion-inner">
                      Please contact our <a href="#chat" data-qe-id="liveChatAnchorLink">live chat team</a> or give us a call at <strong>800-403-3568</strong>.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default content;
