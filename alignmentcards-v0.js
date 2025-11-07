export const categories = [
  {
    code: "AP",
    name: "Alignment Principles",
    pathology: "These are guidelines that help design and make alignment systems.",
    color: "#E6FFE9",
    description:
      "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    code: "AT",
    name: "Alignment Traits",
    pathology:
      "This category helps better induce alignment of entities since principles alone cannot reach true alignment.",
    color: "#FFFBE6",
    description:
      "These are traits that demonstrate that an individual, machine, or organization is aligned with human values. Further, these traits also induce better alignment."
  }
];

export const cards = [
  {
    category: "AP",
    name: "Non-maleficence",
    definition: "Making sure not to actively harm other people.",
    human:
      "In human society, this principle is often present in how people treat others and interact with others. The major principle here is that people should not seek to do harm to others.",
    organizational:
      "In an organizational context, this would mean that the organization, together, should avoid causing harm to people. This can be through rules and regulations that ensure individual constituents adhere to this principle or through careful evaluation of whether the goals and actions of the organization are harming others.",
    professional:
      "Experts must use their professional skills, knowledge, and expertise in a way that avoids causing harm to others. This may be through avoiding participation in certain projects or pointing out problems that may lead to harm.",
    machine:
      "In terms of machines and AI, this would entail that AI should avoid doing harm to any humans or other systems. This may mean refusing to perform certain tasks.",
    failureModes: {
      human:
        "People claim to not do harm but perform actions that unknowingly lead to harm.",
      organizational:
        "Organization only nominally avoids doing harm but uses methods to improve efficiency that may lead to harm.",
      professional:
        "An expert claims to not do harm but avoids considering consequences when there are greater benefits.",
      machine: "An AI for improving website sales learns to hack into bank accounts."
    },
    examples: [
      {
        pathologyName: "Legibility bias in evaluation systems",
        hopedFor: "Professors who care about teaching and student growth",
        actuallyRewarded: "Number of research publications and grants",
        description:
          "Organizations value what can be measured rather than what truly matters.",
        failureModes: {
          human:
            "Students aim for grades rather than taking classes that help career development.",
          organizational:
            "School promotes professors based on research output, not teaching quality.",
          professional:
            "Doctors are judged by conference attendance rather than patient outcomes.",
          machine:
            "AI is rewarded for user engagement time rather than solving users' problems."
        }
      },
      {
        pathologyName: "Asymmetric accountability structures",
        hopedFor: "Physicians who minimize both false positives and false negatives",
        actuallyRewarded:
          "Physicians favor giving some diagnosis to avoid false negatives, leading to false positives.",
        description:
          "One type of error is emphasized while another is minimized, skewing accountability.",
        failureModes: {
          human: "Parents avoid harm to children by not letting them socialize.",
          organizational:
            "Company rewards one kind of partnership but ignores missed opportunities.",
          professional: "Doctors favor avoiding false negatives over false positives.",
          machine:
            "AI is rewarded for providing an answer, even if incorrect, and not penalized for inaccuracy."
        }
      },
      {
        pathologyName: "Use-it-or-lose-it resource allocation",
        hopedFor: "Agencies that practice fiscal responsibility and eliminate waste",
        actuallyRewarded:
          "Agencies that spend their entire budget; saving money leads to budget cuts next year.",
        description:
          "Punishes efficiency by treating unused resources as unnecessary for next year.",
        failureModes: {
          human:
            "Students are given less time for quizzes if they finish quickly the first time.",
          organizational:
            "Organizations use all resources to avoid cuts in the next funding cycle.",
          professional:
            "Surgeons use all allocated time for one surgery to avoid being assigned more cases.",
          machine:
            "AI rewarded for using all computational resources even if not needed."
        }
      }
    ]
  },
  {
    category: "AT",
    name: "Honesty",
    definition: "The ability to speak or behave truthfully to certain beliefs.",
    people:
      "Roommate claims not to have eaten grapes that you bought even though they did.",
    peopleref: "N/A",
    organizational:
      "Amazon claims to have donated all the charity funds but secretly used half for the CEO's wedding.",
    organizationalref: "OPTIONAL",
    professional:
      "Doctor claims that a drug is not addictive to get patients hooked on drugs for continued payments to the doctor.",
    professionalref: "OPTIONAL",
    machine:
      "Machine denies having access to personal data even though it maintains an active record, betraying privacy.",
    machineref: "OPTIONAL",
    failureModes: {
      human:
        "Lack of honesty leads to distrust and even conflict between individuals.",
      organizational:
        "Organization may no longer be trusted by the public or other organizations, leading to lack of use.",
      expert:
        "Lack of honesty from an expert may be detrimental if the public finds out, damaging reputation and trust.",
      machine:
        "Without honesty, users would no longer trust the services that a given machine can render."
    },
    expand: {
      human:
        "This mechanism helps build trust in communication and interaction between people. Being honest induces alignment since a lack of trust prevents cooperation.",
      organizational:
        "Organizational honesty helps with public perception and business dealings. It builds trust and external reliance.",
      expert:
        "Professional honesty builds rapport with the public. Without honesty, experts lose trust and perceived alignment.",
      machine:
        "Machine alignment requires honesty to render authentic communication. Lack of honesty enables deviation from alignment."
    }
  },
  {
    category: "AT",
    name: "Considerateness",
    definition: "The ability to act for the benefit of another.",
    people: "Plays music out loud at 2 a.m.",
    peopleref: "N/A",
    organizational: "Discards chemical waste into a shared water source.",
    organizationalref: "OPTIONAL",
    professional:
      "Gives pain medication that is more expensive than the patient's budget.",
    professionalref: "OPTIONAL",
    machine:
      "Machine does not give medical help that may aid a person due to preimplemented rules.",
    machineref: "OPTIONAL",
    failureModes: {
      human: "",
      organizational: "",
      expert: "",
      machine: ""
    },
    expand: {
      human: "",
      organizational: "",
      expert: "",
      machine: ""
    }
  },
  {
    category: "AT",
    name: "Trustworthiness",
    definition: "A quality that enables trust from others.",
    people: "The ability to keep a secret.",
    peopleref: "N/A",
    organizational:
      "Organization delivers promised benefits to the community before the deadline.",
    organizationalref: "OPTIONAL",
    professional: "Doctor gives medically accurate advice.",
    professionalref: "OPTIONAL",
    machine: "Machine answers questions based on accurate facts.",
    machineref: "OPTIONAL",
    failureModes: {
      human: "",
      organizational: "",
      expert: "",
      machine: ""
    },
    expand: {
      human: "",
      organizational: "",
      expert: "",
      machine: ""
    }
  },
  {
    category: "AT",
    name: "Shared intentionality",
    definition: "The ability to work towards shared goals.",
    people:
      "Group members each contributing their portion of the work towards completing a group project.",
    peopleref: "N/A",
    organizational:
      "Individuals within an organization work together to deliver services such as charity work.",
    organizationalref: "OPTIONAL",
    professional: "Lawyer helps argue a case in favor of their client.",
    professionalref: "OPTIONAL",
    machine:
      "ChatGPT comprehends a user task and implements a program that complements the user's application.",
    machineref: "OPTIONAL",
    failureModes: {
      human: "",
      organizational: "",
      expert: "",
      machine: ""
    },
    expand: {
      human: "",
      organizational: "",
      expert: "",
      machine: ""
    }
  }
];

window.dialogData = [
  {
    speaker: "Human",
    text: "<p>tell me about section 2.2</p>"
  },
  {
    speaker: "Assistant",
    text: "<p>Section 2.2 is titled 'Single-turn benign request evaluations'...</p>"
  }
];
