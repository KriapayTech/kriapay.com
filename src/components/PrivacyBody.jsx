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
          <div className="w-full lg:w-full  lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] ">
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
              The personal information we collect varies based on your
              interactions with us and the Services, the choices you make, and
              the products and features you use. This information may include:
            </p>
            <ul className="list-disc list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">Names</li>
              <li>Phone numbers</li>
              <li>Email addresses</li>
              <li>Mailing addresses</li>
              <li>Usernames</li>
              <li>Passwords</li>
              <li>Contact or authentication data</li>
              <li>Billing addresses</li>
            </ul>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>Sensitive Information: </strong>
              We do not process sensitive information.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>Payment Data: </strong>
              If you choose to make purchases, we may collect data necessary to
              process your payment, such as your payment instrument number and
              the security code associated with your payment instrument. All
              payment data is processed and stored by Paystack, Moniepoint and
              Orange Money. Their privacy notices can be found here:
            </p>
            <ul className="list-disc list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                <a
                  href="https://moniepoint.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  Moniepoint Privacy Policy{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://developer.orange.com/privacy-notice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  {" "}
                  Orange Money Privacy Notice
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://paystack.com/privacy/merchant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  Paystack Privacy Policy{" "}
                </a>
              </li>
            </ul>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>Application Data: </strong>
              If you use our application(s), we may collect the following
              information if you provide us with access or permission:
            </p>
            <ul className="list-disc list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                <strong>Geolocation Information: </strong>
                We may request access or permission to track location-based
                information from your mobile device, either continuously or
                while you are using our mobile application(s), to provide
                certain location-based services. You can change our access or
                permissions in your device's settings.
              </li>
              <li>
                <strong>Mobile Device Access: </strong>
                We may request access or permission to certain features from
                your mobile device, such as contacts, SMS messages, storage,
                calendar, camera, microphone, sensors, and other features. You
                can change our access or permissions in your device's settings.
              </li>
              <li>
                <strong> Mobile Device Data: </strong>
                We automatically collect device information, such as your mobile
                device ID, model, manufacturer, operating system, version
                information, system configuration information, device and
                application identification numbers, browser type and version,
                hardware model, Internet service provider and/or mobile carrier,
                and IP address (or proxy server). If you use our application(s),
                we may also collect information about the phone network
                associated with your mobile device, your mobile device’s
                operating system or platform, the type of mobile device you use,
                your mobile device’s unique device ID, and information about the
                features of our application(s) you accessed.
              </li>
              <li>
                <strong>Push Notifications: </strong>
                We may request to send you push notifications regarding your
                account or certain features of the application(s). You can opt
                out from receiving these types of communications in your
                device's settings.
              </li>
            </ul>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and for our
              internal analytics and reporting purposes.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              All personal information you provide to us must be true, complete,
              and accurate. You must notify us of any changes to such personal
              information.
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
              We process your information to provide, improve, and administer
              our Services, communicate with you, ensure security and fraud
              prevention, and comply with legal requirements. We may also
              process your information for other purposes with your consent.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We handle your personal information for various reasons, depending
              on your interactions with our Services, including:
            </p>
            <ol className="list-decimal list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                <strong>
                  To facilitate account creation and authentication and manage
                  user accounts:{" "}
                </strong>
                We process your information to enable you to create and log in
                to your account and to maintain your account in good working
                order.
              </li>
              <li>
                <strong>
                  To deliver and facilitate the delivery of services to the
                  user:{" "}
                </strong>
                We process your information to provide you with the services you
                request.
              </li>
              <li>
                <strong>
                  To send you marketing and promotional communications:{" "}
                </strong>
                To send you marketing and promotional communications: If in line
                with your marketing preferences, we process the personal
                information you provide to send you marketing and promotional
                materials. You can opt out of our marketing emails at any time.
              </li>
              <li>
                <strong> To protect our Services: </strong>
                We process your information to ensure the safety and security of
                our Services, including monitoring for and preventing fraud.
              </li>
              <li>
                <strong>To identify usage trends: </strong>
                We process information about how you use our Services to
                understand usage trends and improve our offerings.
              </li>
              <li>
                <strong>To comply with our legal obligations: </strong>
                We process your information to comply with legal obligations,
                respond to legal requests, and exercise, establish, or defend
                our legal rights.
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
              We may share information in specific situations described in this
              section and/or with the following third parties.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We may need to share your personal information in the following
              situations:
            </p>

            <ol className="list-decimal list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                <strong>Business Transfers: </strong>
                We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </li>
              <li>
                <strong>Affiliates: </strong>
                We may share your information with our affiliates, and in such
                cases, we will require those affiliates to honor this privacy
                notice. Affiliates include our parent company and any
                subsidiaries, joint venture partners, or other companies that we
                control or that are under common control with us.
              </li>
              <li>
                <strong>Offer Wall: </strong>
                Our application(s) may display a third-party hosted "offer
                wall." This offer wall allows third-party advertisers to provide
                virtual currency, gifts, or other items to users in return for
                accepting and completing an advertisement offer. When you
                interact with an offer wall, you will be directed to an external
                website belonging to third parties, leaving our application(s).
                A unique identifier, such as your user ID, will be shared with
                the offer wall provider to prevent fraud and properly credit
                your account with the relevant reward.
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
              We retain your information for as long as necessary to fulfill the
              purposes outlined in this privacy notice, unless otherwise
              required by law.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We will only retain your personal information for as long as it is
              necessary to achieve the purposes set out in this privacy notice,
              unless a longer retention period is required or permitted by law
              (such as for tax, accounting, or other legal requirements). No
              purpose in this notice will require us to keep your personal
              information for more than three (3) months after the termination
              of the user's account.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize it. If
              deletion or anonymization is not possible (for instance, if your
              personal information is stored in backup archives), we will
              securely store your personal information and isolate it from any
              further processing until deletion is feasible.
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
              We strive to protect your personal information through a
              combination of organizational and technical security measures.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We have put in place appropriate and reasonable technical and
              organizational security measures to safeguard any personal
              information we process. Despite these efforts, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure. Therefore, we cannot promise
              or guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to breach our security and
              improperly collect, access, steal, or modify your information.
              While we are committed to protecting your personal information,
              transmitting personal information to and from our Services is at
              your own risk. You should access the Services only within a secure
              environment.
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
              We do not knowingly collect personal information from or market to
              individuals under the age of 18.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              We do not knowingly collect, solicit, or market personal
              information from children under the age of 18, nor do we knowingly
              sell such information. By using the Services, you affirm that you
              are at least 18 years old, or if you are the parent or guardian of
              a minor, you consent to the minor's use of the Services. If we
              discover that we have inadvertently collected personal information
              from someone under 18 years of age, we will deactivate the account
              and take reasonable steps to promptly delete such information from
              our records. If you are aware that we may have collected personal
              information from a child under 18, please contact us at{" "}
              <span>
                <a href="mailto:support@kriapay.com" className="text-black">
                  support@kriapay.com
                </a>
                .
              </span>
            </p>
          </div>
        </div>

        {/* Contribution license */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              7. WHAT ARE YOUR PRIVACY RIGHTS?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Depending on your country, province, or state of residence, you
              have the right to review, modify, or terminate your account.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>Withdrawing Your Consent: </strong>
              If we rely on your consent to process your personal information
              (which may be expressed or implied depending on applicable law),
              you have the right to withdraw your consent at any time. Please
              note, withdrawing consent does not affect the lawfulness of
              processing based on consent before its withdrawal, nor does it
              affect processing based on other lawful grounds.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>Opting Out of Marketing Communications: </strong>
              You can unsubscribe from our marketing and promotional
              communications at any time by clicking the unsubscribe link in the
              emails we send, or by contacting us using the details in the
              section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. Even if
              you opt out of marketing communications, we may still send you
              non-marketing messages related to your account administration,
              service requests, or other non-marketing purposes.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong>Account Information: </strong>
              If you wish to review, update, or terminate your account:
            </p>
            <ul className="list-disc list-inside md:ml-6 text-sm space-y-4 w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] tracking-[-0.5px] font-medium pb-2">
              <li className="">
                Log in to your account settings to modify your information.
              </li>
              <li>Contact us using the contact information provided.</li>
            </ul>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Upon requesting account termination, we will deactivate or delete
              your account and information from our active databases. Some
              information may be retained in our files to prevent fraud,
              troubleshoot issues, assist with investigations, enforce legal
              terms, or comply with legal requirements.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              For questions or comments about your privacy rights, you can email
              us at{" "}
              <a href="mailto:suport@kriapay.com" className="text-black">
                {" "}
                support@kriapay.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Guidelines for reviews */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              8. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Most web browsers and some mobile operating systems and
              applications offer a Do-Not-Track ("DNT") feature or setting that
              allows you to express your preference not to be tracked for online
              browsing activities. As of now, no universally accepted technology
              standard for recognizing and implementing DNT signals has been
              established. Therefore, we currently do not respond to DNT browser
              signals or any other mechanism that automatically conveys your
              choice not to be tracked online.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              If a standard for online tracking is adopted that we are required
              to follow in the future, we will update this privacy notice to
              inform you about how we respond to such signals.
            </p>
          </div>
        </div>

        {/* Mobile application license */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold  2xl:w-[72%] pb-[10px] md:pb-[20px]">
              9. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Depending on the country you reside in, you may have additional
              privacy rights.
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <strong> Republic of South Africa</strong> <br />
              You have the right to request access to or correction of your
              personal information at any time. To make such a request, please
              contact us using the details provided in the section "HOW CAN YOU
              REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              If you are unsatisfied with how we handle your complaint regarding
              our processing of personal information, you can contact the office
              of the regulator:
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              <a
                href="https://inforegulator.org.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                The Information Regulator (South Africa) 
              </a>{" "}
              <br /> General enquiries:
              <a
                href="mailto: enquiries@inforegulator.org.za"
                className="text-black"
              >
                {" "}
                enquiries@inforegulator.org.za
              </a>
               <br /> Complaints (complete POPIA/PAIA form 5):{" "}
              <a
                href="mailto:PAIAComplaints@inforegulator.org.za"
                className="text-black"
              >
                PAIAComplaints@inforegulator.org.za
              </a>{" "}
              & <br />
              <a
                href="mailto:POPIAComplaints@inforegulator.org.za"
                className="text-black"
              >
                POPIAComplaints@inforegulator.org.za
              </a>
            </p>
          </div>
        </div>

        {/* Services management */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold  2xl:w-[72%] pb-[10px] md:pb-[20px]">
              10. DO WE MAKE UPDATES TO THIS NOTICE?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Yes, we will update this notice as necessary to comply with
              applicable laws. We may periodically update this privacy notice.
              The updated version will be indicated by an updated "Revised" date
              at the top of this privacy notice. If there are significant
              changes, we may notify you by prominently posting a notice of such
              changes or by directly sending you a notification. We encourage
              you to regularly review this privacy notice to stay informed about
              how we protect your information.
            </p>
          </div>
        </div>

        {/* Privacy policy */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              If you have any questions or comments about this notice, you can
              email us at <a href="mailto:support@kriapay.com" className="text-black"> support@kriapay.com</a> or contact us by mail at:
            </p>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
              Kria Technologies Limited 16, Onijanikin Street, Alasia, Nigeria <br />
              Alasia, Lagos 102101 Nigeria
            </p>
          </div>
        </div>

        {/* Term and termination */}
        <div className="w-full px-[37px] md:px-0 lg:px-0 lg:w-full pt-[70px] md:pt-[80px] lg:pt-0 2xl:w-full h-fit  items-start lg:items-end flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]  2xl:pl-[0px] md:pr-[20px] 2xl:pr-0 pb-[10px] md:pb-[0px] lg:pb-[110px] ">
          <div className="w-full flex flex-col items-center justify-center mt-4 gap-[20px]">
            <h4 className="text-left w-[95%] md:w-[90%] lg:w-[74%]  text-[#072A30] !text-[20px] lg:!text-[24px] tracking-[-1px] md:tracking-[-1.5px] leading-[30px] !font-semibold   2xl:w-[72%] pb-[10px] md:pb-[20px]">
              12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </h4>
            <p className="w-[95%] md:w-[90%] lg:w-[74%] 2xl:w-[72%] text-[16px] md:text-[18px] lg:text-[19px] font-medium tracking-[-0.5px]">
            Depending on the laws applicable in your country, you may have the right to request access to the personal information we collect from you, details about how we process it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please submit a <a href="https://app.termly.io/notify/cdcf96e6-75d0-403c-a55d-9fc149ec37b9" target="_blank" rel="noopener noreferrer" className="text-black">data subject access request</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBody;
