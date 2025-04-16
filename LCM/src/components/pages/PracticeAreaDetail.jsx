import React from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/PracticeAreaDetail.css";

const practiceDetails = {
  "corporate-law": {
    title: "Corporate Law",
    content: "We assist with business formation, contract negotiation, mergers and acquisitions, and ongoing corporate compliance.",
    more: "Our attorneys help you choose the right legal structure for your business and ensure you stay compliant with regulations. We also provide ongoing support for drafting operating agreements, resolving partner disputes, and expanding your business through acquisitions or funding."
  },
  "criminal-defense": {
    title: "Criminal Defense",
    content: "Protecting your rights in felony, misdemeanor, DUI, and white-collar cases with experienced legal defense.",
    more: "Our criminal defense team provides aggressive and personalized representation to minimize charges and penalties. We handle pre-trial investigations, bail hearings, plea negotiations, and courtroom advocacy."
  },
  "family-law": {
    title: "Family Law",
    content: "Handling divorce, child custody, support, adoption, and other family matters with sensitivity and strategy.",
    more: "Whether it's navigating complex divorce proceedings or securing custody rights, our family law team advocates for your best interests. We also help with guardianships and legal name changes."
  },
  "real-estate": {
    title: "Real Estate",
    content: "Advising on property transactions, landlord/tenant law, zoning disputes, and real estate litigation.",
    more: "We provide contract review and negotiation, manage disputes with tenants or neighbors, and guide developers through zoning and permitting."
  },
  "immigration": {
    title: "Immigration",
    content: "Guidance through visa applications, green cards, naturalization, and deportation defense.",
    more: "From family reunification visas to employment-based green cards, we simplify the immigration process. We also defend clients in removal proceedings and assist with asylum claims."
  },
  "personal-injury": {
    title: "Personal Injury",
    content: "Fighting for compensation in accident claims, medical malpractice, and product liability cases.",
    more: "We handle negotiations with insurance companies and pursue litigation when needed. Our focus is on maximum compensation for pain, suffering, lost wages, and medical costs."
  },
  "estate-planning": {
    title: "Estate Planning",
    content: "Developing wills, trusts, probate guidance, and elder law solutions to protect your legacy.",
    more: "Plan for the future with living wills, healthcare directives, and power of attorney documents. We also help minimize estate taxes and guide families through probate."
  },
  "intellectual-property": {
    title: "Intellectual Property",
    content: "Safeguarding your creations with patent, trademark, copyright, and licensing support.",
    more: "Our IP attorneys assist with registration, enforcement, and licensing agreements. We also represent clients in infringement lawsuits and portfolio strategy."
  }
};

const PracticeAreaDetail = () => {
  const { slug } = useParams();
  const area = practiceDetails[slug];

  if (!area) {
    return (
      <div className="practice-detail-page">
        <div className="container">
          <h2>Practice Area Not Found</h2>
          <p>The area you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="practice-detail-page">
      <div className="container">
        <h1>{area.title}</h1>
        <div className="divider"></div>
        <p className="summary">{area.content}</p>
        <p className="details">{area.more}</p>
      </div>
    </div>
  );
};

export default PracticeAreaDetail;
