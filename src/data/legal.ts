interface Data {
  title: string;
  description?: Array<string | string[]>;
  isHeading?: boolean;
  id: string;
}

const data: Data[] = [
  {
    title: "1. Introduction",
    description: [
      "Welcome to Flux Fusion!",
      "By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, you may not access the website.",
    ],
    id: "introduction",
  },
  {
    title: "2. User Accounts",
    description: [
      "For this program, we reward vulnerabilities submissions for the following system:",
      [
        "https://test.atlasswap.com/ (replace)",
        "https://atlasswap.com/",
      ],
    ],
    id: "user-accounts",
  },
  {
    title: "3. Intellectual Property",
    description: [
      "All content on this website is the exclusive property of Flux Fusion. You may not reproduce, distribute, or transmit any content without our prior written consent.",
    ],
    id: "intellectual-property",
  },
  {
    title: "4. Termination",
    description: [
      "We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these terms.",
    ],
    id: "termination",
  },
  {
    title: "5. Disclaimers and Limitations",
    description: [
      "The information provided on this website is for general informational purposes only. We make no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the website.",
    ],
    id: "disclaimers-and-limitations",
  },
  {
    title: "6. Governing Law and Dispute Resolution",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "governing-law-and-dispute-resolution",
  },
  {
    title: "Privacy Policy",
    isHeading: true,
    id: "privacy-policy",
  },
  {
    title: "1. Personal Information",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "personal-information",
  },
  {
    title: "2. Data Collection and Processing",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "data-collection-and-processing",
  },
  {
    title: "3. Use of Information",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "use-of-information",
  },
  {
    title: "4. Security Measures",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "security-measures",
  },
  {
    title: "5. User Rights",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "user-rights",
  },
  {
    title: "6. Cookies and Tracking Technologies",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "cookies-and-tracking-technologies",
  },
  {
    title: "7. Changes to the Privacy Policy",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "changes-to-the-privacy-policy",
  },
  {
    title: "8. Contact Information",
    description: [
      "These terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
    ],
    id: "contact-information",
  },
  {
    title: "Compliance with Indian Laws",
    description: [
      "This agreement complies with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Consumer Protection Act, 2019, the Indian Contract Act, 1872, and other applicable laws.",
    ],
    isHeading: true,
    id: "compliance-with-indian-laws",
  },
  {
    title: "Governing Law and Jurisdiction",
    description: [
      "This agreement shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with this agreement shall be resolved by arbitration in [City], India.",
    ],
    isHeading: true,
    id: "governing-law-and-jurisdiction",
  },
  {
    title: "Miscellaneous",
    isHeading: true,
    id: "miscellaneous",
  },
  {
    title: "1. Severability",
    description: [
      "If any provision of this agreement is deemed invalid or unenforceable, the remaining provisions will continue in full force and effect.",
    ],
    id: "severability",
  },
  {
    title: "2. Entire Agreement",
    description: [
      "This agreement constitutes the entire understanding between you and Flux Fusion.",
    ],
    id: "entire-agreement",
  },
  {
    title: "3. Amendments",
    description: [
      "We reserve the right to amend this agreement at any time. By continuing to use our website after such amendments, you agree to the updated terms.",
    ],
    id: "amendments",
  },
  {
    title: "4. Contact Information",
    description: [
      "For legal inquiries, please contact us at legal@fluxfusion.com.",
      "Please ensure to review and adapt the provided content according to your specific needs and consult with a legal professional for a comprehensive and legally sound document.",
    ],
    id: "misc-contact-information",
  },
];


export interface Link {
  name: string;
  hash: string;
  links?: Link[];
}

const tocData: Link[] = [
  {
    name: "1. Introduction",
    hash: "introduction",
  },
  {
    name: "2. User Accounts",
    hash: "user-accounts",
  },
  {
    name: "3. Intellectual Property",
    hash: "intellectual-property",
  },
  {
    name: "4. Termination",
    hash: "termination",
  },
  {
    name: "5. Disclaimers and Limitations",
    hash: "disclaimers-and-limitations",
  },
  {
    name: "6. Governing Law and Dispute Resolution",
    hash: "governing-law-and-dispute-resolution",
  },
  {
    name: "Privacy Policy",
    hash: "privacy-policy",
    links: [
      {
        name: "1. Personal Information",
        hash: "personal-information",
      },
      {
        name: "2. Data Collection and Processing",
        hash: "data-collection-and-processing",
      },
      {
        name: "3. Use of Information",
        hash: "use-of-information",
      },
      {
        name: "4. Security Measures",
        hash: "security-measures",
      },
      {
        name: "5. User Rights",
        hash: "user-rights",
      },
      {
        name: "6. Cookies and Tracking Technologies",
        hash: "cookies-and-tracking-technologies",
      },
      {
        name: "7. Changes to the Privacy Policy",
        hash: "changes-to-the-privacy-policy",
      },
      {
        name: "8. Contact Information",
        hash: "contact-information",
      },
    ],
  },
  {
    name: "Compliance with Indian Laws",
    hash: "compliance-with-indian-laws",
  },
  {
    name: "Governing Law and Jurisdiction",
    hash: "governing-law-and-jurisdiction",
  },
  {
    name: "Miscellaneous",
    hash: "miscellaneous",
    links: [
      {
        name: "1. Severability",
        hash: "severability",
      },
      {
        name: "2. Entire Agreement",
        hash: "entire-agreement",
      },
      {
        name: "3. Amendments",
        hash: "amendments",
      },
      {
        name: "4. Contact Information",
        hash: "misc-contact-information",
      },
    ],
  },
]

export { data, tocData }