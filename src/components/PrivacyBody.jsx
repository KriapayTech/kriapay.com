import React from "react";
import { Button } from "react-bootstrap";

const PrivacyBody = () => {
  return (
    <div className="bg-[#F7F7F7] overflow-hidden pt-[20px] md:pt-[60px] pb-[70px]  md:pb-[100px] lg:pb-0 2xl:mt-0 2xl:pt-[100px] 2xl:mb-0 ">
      <div className="flex flex-col justify-between items-center w-full md:px-[80px] 2xl:px-[100px] gap-[20px]  2xl:gap-[20px] lg:mt-[50px]">
        {/* Introduction */}
        <div className="w-full  px-[37px] md:pl-0 lg:px-0 lg:w-full pt-[70px] md:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-0 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px]  ">
          <h3 className="text-left w-full md:w-full flex lg:w-[95%] 2xl:w-[93%] text-[#072A30] !text-[21px] md:!text-[25px] lg:!text-[30px] tracking-[-1.5px] lg:tracking-[-3px] leading-[33px] font-medium   ">
            Last updated June 25, 2024
          </h3>

          {/* Our services */}
          <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] ">
            <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
              <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
                This privacy notice for Kria Technologies Limited ("we," "us,"
                or "our") outlines how and why we collect, store, use, and/or
                share ("process") your information when you use our services
                ("Services"), such as when you:
              </p>
              <ul className="list-disc list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
                <li className="">
                  Download and use our mobile application (Kriapay) or any other
                  application that links to this privacy notice.
                </li>
                <li>
                  Engage with us in other related ways, including sales,
                  marketing, or events.
                </li>
              </ul>
              <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
                Questions or concerns? Reading this privacy notice will help you
                understand your privacy rights and choices. If you do not agree
                with our policies and practices, please refrain from using our
                Services. If you have any questions or concerns, please contact
                us at support@kriapay.com.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[27px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              Summary of key points
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              This summary highlights key points from our privacy notice. For
              more details on any of these topics, you can click the link
              following each key point or use our table of contents to find the
              relevant section.
            </p>
            <ol className="list-decimal list-inside md:ml-6 text-sm space-y-6 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium ">
              <li className="">
                <strong>What personal information do we process? </strong>
                <br /> <br /> When you visit, use, or navigate our Services, we
                may process personal information based on how you interact with
                us and the Services, the choices you make, and the products and
                features you use.
              </li>
              <li className="pt-3">
                <strong>
                  Do we process any sensitive personal information?
                </strong>
                <br /> <br /> No, we do not process sensitive personal
                information.
              </li>
              <li className="pt-3">
                <strong>
                  Do we collect any information from third parties?{" "}
                </strong>
                <br /> <br /> No, we do not collect any information from third
                parties.
              </li>
              <li className="pt-3">
                <strong>How do we process your information? </strong>
                <br /> <br /> We process your information to provide, improve,
                and administer our Services, communicate with you, ensure
                security and prevent fraud, and comply with legal requirements.
                We may also process your information for other purposes with
                your consent. We process your information only when we have a
                valid legal reason to do so.
              </li>
              <li className="pt-3">
                <strong>
                  {" "}
                  In what situations and with which parties do we share personal
                  information?{" "}
                </strong>
                <br /> <br /> We may share information in specific situations
                and with certain third parties.
              </li>
              <li className="pt-3">
                <strong> How do we keep your information safe?</strong>
                <br /> <br /> We have implemented organizational and technical
                measures to protect your personal information. However, no
                method of electronic transmission or storage is entirely secure,
                so we cannot guarantee that unauthorized third parties such as
                hackers or cybercriminals will not be able to breach our
                security and improperly collect, access, steal, or modify your
                information.
              </li>
              <li className="pt-3">
                <strong>What are your rights? </strong>
                <br /> <br /> Depending on your geographical location,
                applicable privacy laws may grant you certain rights regarding
                your personal information.
              </li>
              <li className="pt-3">
                <strong>How do you exercise your rights? </strong>
                <br /> <br /> The easiest way to exercise your rights is by
                submitting a{" "}
                <a
                  href="https://app.termly.io/notify/cdcf96e6-75d0-403c-a55d-9fc149ec37b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  data subject access request
                </a>{" "}
                or by contacting us. We will review and act upon any request in
                accordance with applicable data protection laws.
              </li>
            </ol>
          </div>
        </div>

        {/* Our services */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px]">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]   text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              1. WHAT INFORMATION DO WE COLLECT?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We collect personal information that you provide to us. <br />{" "}
              <br />
              We gather personal information that you voluntarily give to us
              when you register on the Services, express interest in learning
              more about us or our products and Services, participate in
              activities on the Services, or contact us in any other way.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
                <strong>Personal Information Provided by You: </strong>
             The personal information we collect varies based on your interactions with us and the Services, the choices you make, and the products and features you use. This information may include:
            </p>
            <ul className="list-disc list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
              Names
              </li>
              <li>
              Phone numbers
              </li>
              <li>
              Email addresses
              </li>
              <li>
              Mailing addresses
              </li>
              <li>
              Usernames
              </li>
              <li>
              Passwords
              </li>
              <li>
              Contact or authentication data
              </li>
              <li>
              Billing addresses
              </li>
            </ul>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
                <strong>Sensitive Information: </strong>
                We do not process sensitive information.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
                <strong>Payment Data: </strong>
                If you choose to make purchases, we may collect data necessary to process your payment, such as your payment instrument number and the security code associated with your payment instrument. All payment data is processed and stored by Paystack, Moniepoint and Orange Money. Their privacy notices can be found here:
            </p>
            <ul className="list-disc list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                <a href="https://moniepoint.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-black">Moniepoint Privacy Policy </a>
              
              </li>
              <li>
                <a href="https://developer.orange.com/privacy-notice/" target="_blank" rel="noopener noreferrer" className="text-black"> Orange Money Privacy Notice</a>
              
              </li>
              <li> <a href="https://paystack.com/privacy/merchant" target="_blank" rel="noopener noreferrer" className="text-black">Paystack Privacy Policy </a>
              </li>
            </ul>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
                <strong>Application Data:  </strong>
                If you use our application(s), we may collect the following information if you provide us with access or permission:
            </p>
            <ul className="list-disc list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                <strong>Geolocation Information: </strong>
               We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. You can change our access or permissions in your device's settings.
              </li>
              <li>
                <strong>Mobile Device Access: </strong>
               We may request access or permission to certain features from your mobile device, such as contacts, SMS messages, storage, calendar, camera, microphone, sensors, and other features. You can change our access or permissions in your device's settings.
              </li>
              <li>
                <strong> Mobile Device Data: </strong> 
               We automatically collect device information, such as your mobile device ID, model, manufacturer, operating system, version information, system configuration information, device and application identification numbers, browser type and version, hardware model, Internet service provider and/or mobile carrier, and IP address (or proxy server). If you use our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.
              </li>
              <li>
                <strong>Push Notifications: </strong>
               We may request to send you push notifications regarding your account or certain features of the application(s). You can opt out from receiving these types of communications in your device's settings.
              </li>
            </ul>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            All personal information you provide to us must be true, complete, and accurate. You must notify us of any changes to such personal information.
            </p>
          </div>
        </div>

        {/* Intellectual properties right */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[60px] md:pt-0 lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              2. WHY DO WE PROCESS YOUR INFORMATION?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We process your information to provide, improve, and administer our Services, communicate with you, ensure security and fraud prevention, and comply with legal requirements. We may also process your information for other purposes with your consent.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We handle your personal information for various reasons, depending on your interactions with our Services, including:
            </p>
            <ol className="list-decimal list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                <strong>To facilitate account creation and authentication and manage user accounts: </strong>
               We process your information to enable you to create and log in to your account and to maintain your account in good working order.
              </li>
              <li>
                <strong>To deliver and facilitate the delivery of services to the user: </strong>
               We process your information to provide you with the services you request.
              </li>
              <li>
                <strong>To send you marketing and promotional communications: </strong>
              To send you marketing and promotional communications: If in line with your marketing preferences, we process the personal information you provide to send you marketing and promotional materials. You can opt out of our marketing emails at any time.
              </li>
              <li>
                <strong>  To protect our Services: </strong>
              We process your information to ensure the safety and security of our Services, including monitoring for and preventing fraud.
              </li>
              <li>
                <strong>To identify usage trends: </strong>
               We process information about how you use our Services to understand usage trends and improve our offerings.
              </li>
              <li>
                <strong>To comply with our legal obligations: </strong>
               We process your information to comply with legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
              </li>
            </ol>
          </div>
        </div>

        {/* User representations */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We may share information in specific situations described in this section and/or with the following third parties.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We may need to share your personal information in the following situations:
            </p>
            
            <ol className="list-decimal list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                <strong>Business Transfers: </strong>
               We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </li>
              <li>
                <strong>Affiliates: </strong>
               We may share your information with our affiliates, and in such cases, we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
              </li>
              <li>
                <strong>Offer Wall: </strong>
               Our application(s) may display a third-party hosted "offer wall." This offer wall allows third-party advertisers to provide virtual currency, gifts, or other items to users in return for accepting and completing an advertisement offer. When you interact with an offer wall, you will be directed to an external website belonging to third parties, leaving our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider to prevent fraud and properly credit your account with the relevant reward.
              </li>
            </ol>
          </div>
        </div>

        {/* User registration */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              4. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We retain your information for as long as necessary to fulfill the purposes outlined in this privacy notice, unless otherwise required by law.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We will only retain your personal information for as long as it is necessary to achieve the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as for tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for more than three (3) months after the termination of the user's account.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it. If deletion or anonymization is not possible (for instance, if your personal information is stored in backup archives), we will securely store your personal information and isolate it from any further processing until deletion is feasible.
            </p>
          </div>
        </div>

        {/* Prohibited activities */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              5. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We strive to protect your personal information through a combination of organizational and technical security measures.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We have put in place appropriate and reasonable technical and organizational security measures to safeguard any personal information we process. Despite these efforts, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. Therefore, we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to breach our security and improperly collect, access, steal, or modify your information. While we are committed to protecting your personal information, transmitting personal information to and from our Services is at your own risk. You should access the Services only within a secure environment.
            </p>
          </div>
        </div>

        {/* User generated contributions */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              6. DO WE COLLECT INFORMATION FROM MINORS?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We do not knowingly collect personal information from or market to individuals under the age of 18.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            We do not knowingly collect, solicit, or market personal information from children under the age of 18, nor do we knowingly sell such information. By using the Services, you affirm that you are at least 18 years old, or if you are the parent or guardian of a minor, you consent to the minor's use of the Services. If we discover that we have inadvertently collected personal information from someone under 18 years of age, we will deactivate the account and take reasonable steps to promptly delete such information from our records. If you are aware that we may have collected personal information from a child under 18, please contact us at <span><a href="mailto:support@kriapay.com" className="text-black">support@kriapay.com</a>.</span>
            </p>
          </div>
        </div>

        {/* Contribution license */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              7. CONTRIBUTION LICENSE
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              By using the Services, you acknowledge or representations within
              your Contributions made on the Services. You are solely liable for
              your Contributions, and you agree not to hold us liable or take
              legal action against us and agree that we may access, store,
              process, and use any information and personal data you provide,
              including your preferences and settings. When you submit
              suggestions or other feedback regarding the Services, you grant us
              the right to use and share such feedback for any purpose without
              owing any compensation to you. We do not claim ownership of your
              Contributions. You retain full ownership and any intellectual
              property or proprietary rights associated with your Contributions.
              We are not responsible for any statement concerning your
              Contributions.
            </p>
          </div>
        </div>

        {/* Guidelines for reviews */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              8. GUIDELINES FOR REVIEWS
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              You may have the opportunity to post reviews or ratings on
              designated areas of the Services. When submitting a review, you
              must adhere to the following guidelines:
            </p>
            <ol className="list-decimal list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                You should have personal experience with the individual or
                entity being reviewed.
              </li>
              <li>
                Reviews must not include offensive language, profanity, or
                abusive, racist, offensive, or hateful content.
              </li>
              <li>
                Reviews must not contain discriminatory references based on
                religion, race, gender, national origin, age, marital status,
                sexual orientation, or disability.
              </li>
              <li>Reviews must not reference illegal activities.</li>
              <li>
                You should not post negative reviews if you are affiliated with
                competitors.
              </li>
              <li>
                Do not draw legal conclusions about the conduct of individuals
                or entities based on your reviews.
              </li>
              <li>Reviews must be truthful and not misleading.</li>
              <li>
                You may not organize campaigns to encourage others to post
                reviews, whether positive or negative.
              </li>
            </ol>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We reserve the right to accept, reject, or remove reviews at our
              discretion. We are under no obligation to screen or delete
              reviews, even if others find them objectionable or inaccurate.
              Reviews do not represent our views or those of our affiliates or
              partners, and we do not assume responsibility for any review or
              for any claims, liabilities, or losses arising from reviews. By
              posting a review, you grant us a perpetual, non-exclusive,
              worldwide, royalty-free, fully paid, assignable, and sublicensable
              right and license to reproduce, modify, translate, transmit,
              display, perform, and/or distribute all content related to the
              review.
            </p>
          </div>
        </div>

        {/* Mobile application license */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold  2xl:w-[72%] pb-[10px] md:pb-[20px]">
              9. MOBILE APPLICATION LICENSE
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>User License</strong>
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              By accessing the Services through the App, we grant you a limited,
              non-exclusive, non-transferable, and revocable right to install
              and use the App on wireless electronic devices owned or controlled
              by you. This license is subject to the terms and conditions
              outlined in these Legal Terms. You agree not to: <br /> <br /> (1)
              Attempt to decompile, reverse engineer, disassemble, derive the
              source code of, or decrypt the App, except as permitted by
              applicable law. (2) Make any modifications, adaptations,
              improvements, enhancements, translations, or derivative works from
              the App. (3) Violate any applicable laws, rules, or regulations in
              connection with your use of the App. (4) Remove, alter, or obscure
              any proprietary notice posted by us or the licensors of the App,
              including notices of copyright or trademarks. (5) Use the App for
              any revenue-generating endeavor, commercial enterprise, or purpose
              not intended by its design. (6) Make the App available over a
              network or environment that permits access or use by multiple
              devices or users simultaneously. (7) Use the App to create a
              product, service, or software that competes with or substitutes
              the App. (8) Use the App to send automated queries to any website
              or to send unsolicited commercial email. (9) Use our proprietary
              information or interfaces in the design, development, manufacture,
              licensing, or distribution of any applications, accessories, or
              devices for use with the App.
            </p>

            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px] pt-[40px]">
              <strong>Apple and Android Devices</strong>
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              The license granted to use our App is non-transferable and limited
              to use on devices running Apple iOS or Android operating systems,
              in accordance with the usage rules of the respective App
              Distributor's terms of service. <br /> <br /> (1) We are
              responsible for providing maintenance and support services as
              specified in these Legal Terms or required by applicable law. App
              Distributors are not obligated to provide any maintenance or
              support services for the App. (2) In case the App fails to meet
              any applicable warranty, you may notify the relevant App
              Distributor for a potential refund of the purchase price, if any,
              and the App Distributor has no further warranty obligations. (3)
              You confirm that you are not located in a country subject to US
              government embargo or designated as a "terrorist supporting"
              country, and you are not listed on any US government prohibited or
              restricted parties list. (4) Compliance with third-party terms of
              agreement is required when using the App, such as wireless data
              service agreements for VoIP applications. (5) You acknowledge that
              App Distributors are third-party beneficiaries of these terms and
              conditions and have the right to enforce them against you.
            </p>
          </div>
        </div>

        {/* Services management */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold  2xl:w-[72%] pb-[10px] md:pb-[20px]">
              10. SERVICES MANAGEMENT
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We reserve the right, but not the obligation, to: <br /> <br />{" "}
              (1) monitor the Services for violations of these Legal Terms; (2)
              take appropriate legal action against anyone who, in our sole
              discretion, violates the law or these Legal Terms, including
              without limitation, reporting such user to law enforcement
              authorities; (3) in our sole discretion and without limitation,
              refuse, restrict access to, limit the availability of, or disable
              (to the extent technologically feasible) any of your Contributions
              or any portion thereof; (4) in our sole discretion and without
              limitation, notice, or liability, to remove from the Services or
              otherwise disable all files and content that are excessive in size
              or are in any way burdensome to our systems; and (5) otherwise
              manage the Services in a manner designed to protect our rights and
              property and to facilitate the proper functioning of the Services.
            </p>
          </div>
        </div>

        {/* Privacy policy */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              11. PRIVACY POLICY
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Ensuring data privacy and security is paramount to us. By using
              the Services, you agree to comply with our Privacy Policy posted
              on the Services, which is an integral part of these Legal Terms.
              Please note that the Services are hosted in Nigeria, Sierra Leone,
              Mozambique, South Africa, Uganda, Ghana, and Haiti. If you access
              the Services from any other region of the world with laws or
              regulations governing the collection, use, or disclosure of
              personal data that differ from those in Nigeria, Sierra Leone,
              Mozambique, South Africa, Uganda, Ghana, and Haiti, you
              acknowledge that by continuing to use the Services, you are
              transferring your data to Nigeria, Sierra Leone, Mozambique, South
              Africa, Uganda, Ghana, and Haiti. You expressly consent to the
              transfer of your data to and its processing in Nigeria, Sierra
              Leone, Mozambique, South Africa, Uganda, Ghana, and Haiti.
            </p>
          </div>
        </div>

        {/* Term and termination */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              12. TERM AND TERMINATION
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              These Legal Terms will remain effective as long as you use the
              Services.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>
                WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
                RESERVE THE RIGHT, AT OUR SOLE DISCRETION AND WITHOUT NOTICE OR
                LIABILITY, TO DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
                BLOCKING CERTAIN IP ADDRESSES) TO ANY INDIVIDUAL FOR ANY REASON
                OR NO REASON, INCLUDING, WITHOUT LIMITATION, FOR VIOLATION OF
                ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED HEREIN, OR
                OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE
                OF OR PARTICIPATION IN THE SERVICES, DELETE YOUR ACCOUNT, AND
                REMOVE ANY CONTENT OR INFORMATION YOU HAVE POSTED AT ANY TIME
                WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </strong>
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fictitious name, or the name of any third party, even if
              you are acting on behalf of that third party. Alongside
              terminating or suspending your account, we reserve the right to
              pursue appropriate legal action, including civil, criminal, and
              injunctive remedies.
            </p>
          </div>
        </div>

        {/* Modifications and Interruptions */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              13. MODIFICATIONS AND INTERRUPTIONS
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We reserve the right, at our sole discretion and without notice,
              to change, modify, or remove the content of the Services for any
              reason. However, we are not obligated to update any information on
              our Services. We will not be liable to you or any third party for
              any modification, price change, suspension, or discontinuance of
              the Services.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We cannot guarantee uninterrupted availability of the Services. We
              may encounter hardware, software, or other issues or need to
              perform maintenance related to the Services, which may result in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the
              Services at any time without notice. You agree that we are not
              liable for any loss, damage, or inconvenience caused by your
              inability to access or use the Services during any downtime or
              discontinuance. These Legal Terms do not impose any obligation on
              us to maintain or support the Services or to provide any
              corrections, updates, or releases for them.
            </p>
          </div>
        </div>

        {/* Governing law */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold  2xl:w-[72%] pb-[10px] md:pb-[20px]">
              14. GOVERNING LAW
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              These Legal Terms are governed by and construed in accordance with
              the laws of Nigeria. Kria Technologies Limited and you irrevocably
              consent that the courts of Nigeria shall have exclusive
              jurisdiction to settle any dispute arising in connection with
              these Legal Terms.
            </p>
          </div>
        </div>

        {/* Dispute resolution */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              15. DISPUTE RESOLUTION
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>Informal Negotiations</strong>
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              To expedite the resolution and manage the costs of any dispute,
              controversy, or claim arising from these Legal Terms (each a
              "Dispute" and collectively, "Disputes") brought by either you or
              us (individually, a "Party" and collectively, the "Parties"), the
              Parties agree to first attempt to resolve any Dispute informally
              for at least thirty (30) days before initiating arbitration. These
              informal negotiations begin upon written notice from one Party to
              the other Party.
            </p>

            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px] pt-[40px]">
              <strong>Binding Arbitration</strong>
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Any Dispute arising out of or relating to these Legal Terms,
              including any questions regarding its existence, validity, or
              termination, shall be referred to and finally resolved by
              arbitration under the Rules of the International Commercial
              Arbitration Court of the European Arbitration Chamber (Belgium,
              Brussels, Avenue Louise, 146). The arbitration panel shall consist
              of two (2) arbitrators. The place of arbitration shall be Lagos,
              Nigeria. The proceedings shall be conducted in English. The
              substantive law of Nigeria shall govern these Legal Terms.
            </p>

            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px] pt-[40px]">
              <strong>Limitations</strong>
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the fullest extent
              permitted by law: (a) no arbitration shall be consolidated with
              any other proceeding; (b) there shall be no right or authority for
              any Dispute to be arbitrated on a class-action basis or to utilize
              class action procedures; and (c) there shall be no right or
              authority for any Dispute to be brought as a representative action
              on behalf of the general public or any other persons.
            </p>

            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px] pt-[40px]">
              <strong>
                Exceptions to Informal Negotiations and Arbitration
              </strong>
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              The Parties agree that the following Disputes are not subject to
              the above provisions regarding informal negotiations and binding
              arbitration: (a) any Disputes seeking to enforce or protect, or
              concerning the validity of, any intellectual property rights of a
              Party; (b) any Dispute related to allegations of theft, piracy,
              invasion of privacy, or unauthorized use; and (c) any claim for
              injunctive relief. If any part of this provision is found to be
              illegal or unenforceable, the Parties agree that such Dispute
              shall be decided by a court of competent jurisdiction within the
              courts listed for jurisdiction above, and the Parties submit to
              the personal jurisdiction of that court.
            </p>
          </div>
        </div>

        {/* Corrections */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold  2xl:w-[72%] pb-[10px] md:pb-[20px]">
              16. CORRECTIONS
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              There may be instances on the Services where information contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other details. We
              reserve the right to correct any such errors, inaccuracies, or
              omissions, and to change or update the information on the Services
              at any time without prior notice.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              17. DISCLAIMER
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>
                THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE"
                BASIS. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SERVICES
                IS AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES
                OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE
                SERVICES' CONTENT OR THE CONTENT OF ANY THIRD-PARTY WEBSITES
                LINKED TO THE SERVICES. WE ASSUME NO LIABILITY OR RESPONSIBILITY
                FOR <br /> <br /> (1) ANY ERRORS, MISTAKES, OR INACCURACIES OF
                CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE,
                OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE
                OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR
                SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED
                THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
                FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
                LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
                THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT
                AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS
                A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
                OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT,
                ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
                SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
                SERVICES OR ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR
                OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY
                BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
                THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
                ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
                CAUTION WHERE APPROPRIATE.
              </strong>
            </p>
          </div>
        </div>

        {/* Limitation of liabilities */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] text-[17px] md:!text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              18. LIMITATIONS OF LIABILITY
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>
                IN NO EVENT SHALL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE
                FORM OF THE ACTION, SHALL AT ALL TIMES BE LIMITED TO THE LESSER
                OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6)
                MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR $500.00
                USD. CERTAIN STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
                LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION
                OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF
                THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
                YOU MAY HAVE ADDITIONAL RIGHTS.
              </strong>
            </p>
          </div>
        </div>

        {/* Indemification */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] text-[17px] md:!text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              19. INDEMNIFICATION
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of: <br /> <br /> (1) your use of the Services; (2)
              any breach of these Legal Terms by you; (3) any breach of your
              representations and warranties set forth in these Legal Terms; (4)
              your violation of the rights of a third party, including but not
              limited to intellectual property rights; or (5) any harmful act
              toward any other user of the Services with whom you connected via
              the Services. However, we reserve the right, at your expense, to
              assume the exclusive defense and control of any matter for which
              you are required to indemnify us, and you agree to cooperate, at
              your expense, with our defense of such claims. We will make
              reasonable efforts to notify you of any such claim, action, or
              proceeding that falls under this indemnification provision upon
              becoming aware of it.
            </p>
          </div>
        </div>

        {/* User data*/}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] text-[17px] md:!text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              20. USER DATA
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We will retain certain data that you transmit to the Services for
              the purpose of managing the performance of the Services, as well
              as data related to your use of the Services. While we perform
              regular routine backups of data, you are solely responsible for
              all data that you transmit or that relates to any activity you
              undertake using the Services. You agree that we shall have no
              liability to you for any loss or corruption of any such data, and
              you hereby waive any right of action against us arising from any
              loss or corruption of such data.
            </p>
          </div>
        </div>

        {/* Electronic communications, transcations, and signatures*/}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] text-[17px] md:!text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Your visit to the Services, sending us emails, and completing
              online forms constitute electronic communications. By using the
              Services, you consent to receive electronic communications, and
              you agree that all agreements, notices, disclosures, and other
              communications that we provide to you electronically, via email
              and on the Services, satisfy any legal requirement that such
              communication be in writing.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>
                YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
                ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
                NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SERVICES.
              </strong>
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              You also waive any rights or requirements under any statutes,
              regulations, rules, ordinances, or other laws in any jurisdiction
              that require an original signature or delivery or retention of
              non-electronic records, or that relate to payments or the granting
              of credits by any means other than electronic means.
            </p>
          </div>
        </div>

        {/* Miscellaneous*/}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              22. MISCELLANEOUS
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              These Legal Terms, along with any policies or operating rules
              posted by us on the Services or in relation to the Services,
              constitute the complete agreement and understanding between you
              and us. Our failure to exercise or enforce any right or provision
              of these Legal Terms shall not operate as a waiver of such right
              or provision. These Legal Terms operate to the fullest extent
              permitted by law. We may assign any or all of our rights and
              obligations to others at any time. We shall not be responsible or
              liable for any loss, damage, delay, or failure to act caused by
              any cause beyond our reasonable control. If any provision or part
              of a provision of these Legal Terms is determined to be unlawful,
              void, or unenforceable, that provision or part of the provision is
              deemed severable from these Legal Terms and does not affect the
              validity and enforceability of any remaining provisions. No joint
              venture, partnership, employment, or agency relationship is
              created between you and us as a result of these Legal Terms or
              your use of the Services. You agree that these Legal Terms will
              not be construed against us solely because we drafted them. By
              using the Services, you waive any and all defenses you may have
              based on the electronic form of these Legal Terms and the lack of
              physical signatures by the parties to execute these Legal Terms.
            </p>
          </div>
        </div>

        {/* Contact us*/}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[150px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              23. CONTACT US
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              To address a complaint about the Services or to obtain further
              information about their use, please contact us at:
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Kria Technologies Limited 16, Onijanikin Street, Alasia, Nigeria
              Alasia, Lagos 102101 Nigeria <br /> <br /> Phone:{" "}
              <a href="tel:+2349057759592" className="text-black">
                +2349057759592
              </a>
                <br /> <br /> Email:{" "}
              <a href="mailto:info@kriapay.com" className="text-black">
                {" "}
                info@kriapay.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBody;
