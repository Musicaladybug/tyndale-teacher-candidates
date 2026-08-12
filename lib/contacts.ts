import type { Contact } from "@/components/ContactCard";

/**
 * The School of Education contact directory. Shared by the interactive
 * /who-to-contact page and the stripped-down /who-to-contact/print page,
 * so the data lives in exactly one place.
 */
export const CONTACTS: Contact[] = [
  {
    name: "Candice",
    role: "Education Programs Officer",
    topics: [
      "Questions about the Weekly Announcements",
      "Moodle troubleshooting",
      "To borrow a Chromebook",
    ],
    accent: "gold",
    office: "A319",
    email: "cmiller@tyndale.ca",
  },
  {
    name: "Jaclyn",
    role: "Education Programs Coordinator",
    topics: ["Classroom technology", "Quilts", "Chapel", "The Bible Course"],
    accent: "red",
    office: "A319",
    email: "jaclynstephenson@tyndale.ca",
  },
  {
    name: "Anthony",
    role: "Practicum Coordinator",
    topics: ["Practicum placement questions", "Practicum forms and VSS"],
    accent: "teal",
    office: "A313",
    email: "afragale@tyndale.ca",
  },
  {
    name: "Blair",
    role: "Practicum Team Lead, Associate Professor",
    topics: ["Practicum-related concerns", "Faculty Advisor team questions"],
    accent: "green",
    office: "A328",
    email: "bpike@tyndale.ca",
  },
  {
    name: "Mariam",
    role: "Manager of Education Programs",
    topics: [
      "Semester schedules",
      "Registration to courses",
      "OCT certification",
    ],
    accent: "orange",
    office: "A326",
    email: "mfarid@tyndale.ca",
  },
  {
    name: "Catherine",
    role: "Administrator of Education Programs",
    topics: [
      "AQs and ABQs",
      "Program handbooks and policy documents",
      "Funded grant projects",
    ],
    accent: "navy",
    office: "A319",
    email: "CYeung@tyndale.ca",
  },
  {
    name: "Heather",
    role: "Dean",
    topics: [
      "Overall programs experience — feedback or questions",
      "Concerns relevant to the cohorts",
      "Graduate School",
    ],
    accent: "teal",
    office: "A325",
    email: "hbirch@tyndale.ca",
  },
];
