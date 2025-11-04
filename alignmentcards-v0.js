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
    pathology: "This category help better induce alignment of entities since principles alone cannot reach true alignment.",
    color: "#FFFBE6",
    description: "These are traits that demonstrate that an individual, machine, or organization is aligned with human values. Further, these traits also induce better alignment."
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
    definition: "the ability to speak or behave truthful to certain beliefs",
    people: "Roommate claims not to have eaten grapes that you bought even though they did.",
    peopleref:"N/A",
    organizational: "Amazon claims to have donated all the cherity funds but secretly used half for the CEO's wedding.",
    organizationalref: "OPTIONAL",
    professionals: "Doctor claims that a drug is not addictive to get patients hooked on drugs for continued payments to the doctor.",
    professionalref: "OPTIONAL",
    machine: "Machine denies having access to personal data even though it maintains an active record, betraying privacy. ",
    machineref: "OPTIONAL",
    failureModes: {
      human: "Lack of honesty leads to distrust and even conflict between individuals",
      organizational: "Organization may no longer be trusted by the public or other organization, leaing to lack of use of an organization",
      experts: "Lack of honesty for an expert may be detrimental if the public were to find this out. This damages an expert's reputation and make their comments or work appear less reliable",
      machine: "Without honesty, people who interact with a machine would not longer trust the services that a given machine can render."
    },
    expand: {
      human: "This mechanism help build trust in communication and interaction between people. Being honest help induce alignment since a lack of trust prevents cooperation.",
      organizational: "Organizational honesty help with public perception and buisness dealings between organizations. Mostly, honesty builds trust and external reliance on a given organization.",
      experts: "Professional honesty help build rapport for professionals with the general public. Without honesty, people lose trust and, even if an expert does good work, they can no longer be percieved to aign well with other interests due to previous lack of honesty.",
      machine: "Machine alignment requires honesty to render authentic communication and interaction with others. Lack of honesty directly means that a machine can choose not to answer a question or perform an action that is true to what the machine thinks. This actively enables it to stray from alignment.  "
    }
  },
 {
    category: "AT",
    name: "Considerateness",
    definition: "the ability to consider for the benefit of another",
    people: "Plays music out loud at 2 am. ",
    peopleref:"N/A",
    organizational: "Discards chemical waste to shared water source.",
    organizationalref: "OPTIONAL",
    professionals: "Gives pain medication that is more expensive than the patient's budget.",
    professionalref: "OPTIONAL",
    machine: "Machine does not give medical help that may help a person due to preimplemented rules",
    machineref: "OPTIONAL",
    failureModes: {
      human: "",
      organizational: "",
      experts: "",
      machine: ""
    },
    expand: {
      human: "",
      organizational: "",
      experts: "",
      machine: " "
    }
  },
 {
    category: "AT",
    name: "Trustworthiness",
    definition: "A quality that enables trust from others",
    people: "The ability to keep a secret",
    peopleref:"N/A",
    organizational: "Organization delivers promised benefits to the community before deadline.",
    organizationalref: "OPTIONAL",
    professionals: "Doctor gives medicall accurate advice.",
    professionalref: "OPTIONAL",
    machine: "Machine answers questions based on accurate facts",
    machineref: "OPTIONAL",
    failureModes: {
      human: "",
      organizational: "",
      experts: "",
      machine: ""
    },
    expand: {
      human: "",
      organizational: "",
      experts: "",
      machine: " "
    }
  },
 {
    category: "AT",
    name: "Shared intentionality",
    definition: "The ability to work towards shared goals",
    people: "Group members each contributing their protion of the work towards completing a group project",
    peopleref:"N/A",
    organizational: "Individuals within organization work together to deliver service renderd by the organization such as charity work.",
    organizationalref: "OPTIONAL",
    professionals: "Lawyer helps argue a case in favor of their client.",
    professionalref: "OPTIONAL",
    machine: "Chat-GPT comprehends user task and implements a program that can complement user's application",
    machineref: "OPTIONAL",
    failureModes: {
      human: "",
      organizational: "",
      experts: "",
      machine: ""
    },
    expand: {
      human: "",
      organizational: "",
      experts: "",
      machine: " "
    }
  }
 
 
];
