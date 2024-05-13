import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
        Terms of Service and Privacy Policy for MRU Clubs
      </h1>

      <div className="terms bg-white shadow-lg rounded-lg p-6 divide-y divide-gray-300">
        <section className="pb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Terms of Service for Users
          </h2>
          <ol className="list-decimal space-y-4 pl-4">
            <li>
              <strong>Introduction</strong>
              <p>
                Welcome to MRU Clubs, the preferred event management platform
                for student-driven clubs. This document governs your access to
                and use of MRU Clubs for purchasing tickets and attending
                events.
              </p>
            </li>
            <li>
              <strong>Ticket Purchase and Payment</strong>
              <ul className="list-disc ml-8 text-gray-700">
                <li>
                  Tickets can be purchased through MRU Clubs using our secure
                  payment gateway. By purchasing a ticket, you agree to the
                  terms set forth by the event organizer and MRU Clubs.
                </li>
                <li>
                  Payments are processed securely by PhonePay. MRU Clubs does
                  not store or have access to your credit card information.
                </li>
              </ul>
            </li>
            <li>
              <strong>Ticket Confirmation and Use</strong>
              <p>
                Upon purchase, you will receive an email confirmation with a QR
                code. This code is required for event entry and is valid for a
                single use only.
              </p>
              <ul className="list-disc ml-8 text-gray-700">
                <li>
                  <strong>Entry to Event:</strong> Present your QR code at the
                  event entrance to gain access.
                </li>
              </ul>
            </li>
            <li>
              <strong>Refund Policy</strong>
              <p>
                All ticket sales are final. Refunds are issued only if the event
                is canceled and not rescheduled.
              </p>
            </li>
          </ol>
        </section>

        <section className="pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Privacy Policy for Users
          </h2>
          <ol className="list-decimal space-y-4 pl-4">
            <li>
              <strong>Data Collection</strong>
              <p>
                We collect necessary information during the ticket purchase
                process, such as your name, email address, and payment details
                via our payment gateway partner, PhonePay.
              </p>
            </li>
            <li>
              <strong>Data Use and Security</strong>
              <ul className="list-disc ml-8 text-gray-700">
                <li>
                  Data Use: We use your information to process transactions and
                  send you event-related communications.
                </li>
                <li>
                  Data Security: We implement strong security measures to
                  protect your data. Your payment information is processed and
                  secured by PhonePay.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Terms of Service for Event Managers
          </h2>
          <ol className="list-decimal space-y-4 pl-4">
            <li>
              <strong>Introduction</strong>
              <p>
                Thank you for using MRU Clubs to manage your events. This
                section outlines the terms that apply to event managers using
                our platform.
              </p>
            </li>
            <li>
              <strong>Event Management</strong>
              <ul className="list-disc ml-8 text-gray-700">
                <li>
                  Listing Events: You can list your events on MRU Clubs,
                  including details necessary for ticket sales.
                </li>
                <li>
                  Financial Transactions: All financial transactions are
                  processed through PhonePay. MRU Clubs deducts a platform fee
                  and payment gateway fee from each transaction.
                </li>
              </ul>
            </li>
            <li>
              <strong>Administrative Access</strong>
              <p>
                You will be provided access to the administrative panel where
                you can manage financial aspects of your events. Tampering with
                data or misuse of the platform, including spamming participants,
                will result in severe consequences, including potential
                termination of access.
              </p>
            </li>
            <li>
              <strong>Compliance and Conduct</strong>
              <p>
                As an event manager, you are responsible for ensuring your
                events comply with applicable laws and regulations.
              </p>
            </li>
          </ol>
        </section>

        <section className="pt-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Privacy Policy for Event Managers
          </h2>
          <ol className="list-decimal space-y-4 pl-4">
            <li>
              <strong>Data Handling</strong>
              <p>
                Collection and Transfer: We collect financial and event-related
                data necessary for the execution of events and will transfer
                relevant data securely to you for managing the event.
              </p>
            </li>
            <li>
              <strong>Data Protection</strong>
              <p>
                Data Usage: Data provided by users is used strictly for
                event-related purposes and not for any unauthorized activities.
              </p>
            </li>
            <li>
              <strong>Data Security</strong>
              <p>
                We ensure that all data is securely handled. User data is
                deleted from our servers post-transfer to ensure privacy and
                compliance with data protection laws.
              </p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
