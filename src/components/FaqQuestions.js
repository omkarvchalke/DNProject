const FaqQuestions = () => {
  return (
    <div>
      <div id="accordion">
        <div className="card card-primary card-outline">
          <a
            className="d-block w-100"
            data-toggle="collapse"
            href="#collapseOne"
          >
            <div className="card-header">
              <h4 className="card-title w-100">1. What does Practo do?</h4>
            </div>
          </a>
          <div
            id="collapseOne"
            className="collapse show"
            data-parent="#accordion"
          >
            <div className="card-body">
              <ul>
                <li>
                  Our vision is to simplify healthcare by making quality
                  healthcare more accessible, affordable and convenient
                </li>
                <li>
                  Practo connects the entire health ecosystem together –
                  patients, doctors, pharmacy, diagnostics, clinics, hospitals
                  and other partners, to generate exceptional value and service
                  for all, esp. the end consumers. We integrate different parts
                  of the healthcare journey and put them together end-to-end on
                  our platform, so that patients can have one seamless
                  experience, irrespective of their need
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card card-primary card-outline">
          <a
            className="d-block w-100"
            data-toggle="collapse"
            href="#collapseTwo"
          >
            <div className="card-header">
              <h4 className="card-title w-100">
                2. What measures does Practo have in place for the protection of
                user data security and privacy?
              </h4>
            </div>
          </a>
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body">
              Safety of your data is our top priority. We have multi-level
              security checks, multiple data backups, and stringent policies in
              place to ensure your data remains safe and secure. Additionally,
              we are an ISO 27001 certified company and we take data privacy and
              security very seriously. All data on Practo is secured with
              256-bit encryption on HIPAA compliant servers.
            </div>
          </div>
        </div>
        <div className="card card-primary card-outline">
          <a
            className="d-block w-100"
            data-toggle="collapse"
            href="#collapseThree"
          >
            <div className="card-header">
              <h4 className="card-title w-100">
                3.Does Practo have a verification process for doctors who sign
                up on the platform?{" "}
              </h4>
            </div>
          </a>
          <div id="collapseThree" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <p>
                Yes. All the doctors on the Practo platform are 100% genuine and
                their degrees have been verified. More about the verification
                process: Doctors are asked to provide the following documents as
                a first step.
              </p>
              <li>Government issued photo ID (Passport/Aadhaar/PAN Card)</li>
              <li>Their MCI registration number</li>
              <li>
                Copies of their medical degrees if these are not already updated
                in their MCI registration
              </li>
              <li>
                In cases where online MCI directory does not exist, they will
                need to submit a copy of their license
              </li>
            </div>
          </div>
        </div>
        <div className="card card-warning card-outline">
          <a
            className="d-block w-100"
            data-toggle="collapse"
            href="#collapseFour"
          >
            <div className="card-header">
              <h4 className="card-title w-100">
                4. How do I consult doctor online?{" "}
              </h4>
            </div>
          </a>
          <div id="collapseFour" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <p>
                You can book an online consultation either on the website or
                mobile app in two ways.
              </p>
              <ol>
                <li>
                  Click on the ‘Find a Doctor’ button on the homepage of the
                  website/app, select a specialty or type the name of the doctor
                  directly. Once you select a doctor, you can click on the
                  “Consult Now’ button to start the online consultation.
                </li>
                <li>
                  f you're looking for a doctor based on your symptoms, you may
                  start by going to the homepage of the website/app. Then click
                  on the ‘Track Symptoms’ tab, search for your symptoms or
                  select a few of them based on your health condition. Click
                  ‘Show Doctors’, select a doctor and click on the ‘Consult Now’
                  button to start the online consultation.{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="card card-warning card-outline">
          <a
            className="d-block w-100"
            data-toggle="collapse"
            href="#collapseFive"
          >
            <div className="card-header">
              <h4 className="card-title w-100">
                5. Do you provide online doctor consultation for emergency?
              </h4>
            </div>
          </a>
          <div id="collapseFive" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <p>
                No. We do not recommend or provide online consultations for
                emergencies. However, our emergency medical services are
                available round-the-clock which can be accessed by calling 1066
                or clicking the ‘Emergency’ tab on the homepage of our
                website/app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqQuestions;
