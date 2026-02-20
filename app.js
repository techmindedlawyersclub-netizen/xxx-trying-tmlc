const careers = {
  ai_policy: {
    name: "AI Governance & Policy Lawyer",
    skills: [
      "AI risk frameworks and model governance",
      "Policy drafting and regulatory analysis",
      "Responsible AI principles",
      "Stakeholder engagement (regulators + industry)",
    ],
  },
  privacy: {
    name: "Data Protection & Privacy Counsel",
    skills: [
      "Privacy law basics (local + global)",
      "Data mapping and transfer impact checks",
      "Privacy-by-design for products",
      "Incident reporting and response collaboration",
    ],
  },
  fintech: {
    name: "Fintech & Payments Regulatory Lawyer",
    skills: [
      "Payments and digital finance regulations",
      "Licensing and compliance workflows",
      "AML/KYC fundamentals",
      "Commercial contracts in financial services",
    ],
  },
  product: {
    name: "Product Counsel (Tech Company)",
    skills: [
      "Product lifecycle and agile basics",
      "Clear contract and terms drafting",
      "Cross-functional communication",
      "Issue-spotting in fast-moving launches",
    ],
  },
  energy: {
    name: "Energy & Infrastructure Lawyer (Tech-Enabled)",
    skills: [
      "Energy project contracts and regulation",
      "Climate-tech policy basics",
      "Public-private project structuring",
      "Commercial negotiation",
    ],
  },
  maritime: {
    name: "Maritime & Trade Lawyer (Digitized Logistics)",
    skills: [
      "Trade documentation and shipping contracts",
      "Cross-border compliance",
      "Digital logistics tools literacy",
      "Dispute prevention in supply chains",
    ],
  },
};

const questions = [
  {
    id: "q1",
    category: "Interests",
    text: "Which topic excites you most right now?",
    options: [
      { label: "AI regulation and public policy", weights: { ai_policy: 3, privacy: 1 } },
      { label: "Data rights and trust", weights: { privacy: 3, ai_policy: 1 } },
      { label: "Digital payments and fintech", weights: { fintech: 3, product: 1 } },
      { label: "Energy transition and infrastructure", weights: { energy: 3, ai_policy: 1 } },
      { label: "Trade, ports, and shipping", weights: { maritime: 3, fintech: 1 } },
    ],
  },
  {
    id: "q2",
    category: "Interests",
    text: "Which legal work do you enjoy most?",
    options: [
      { label: "Policy research and advisory memos", weights: { ai_policy: 2, energy: 1 } },
      { label: "Contract drafting and negotiation", weights: { product: 2, fintech: 2, maritime: 1 } },
      { label: "Compliance checklists and controls", weights: { privacy: 2, fintech: 2 } },
      { label: "Cross-border transactional work", weights: { maritime: 2, energy: 2, fintech: 1 } },
    ],
  },
  {
    id: "q3",
    category: "Strengths",
    text: "What is your strongest skill today?",
    options: [
      { label: "Analytical legal reasoning", weights: { ai_policy: 2, privacy: 2 } },
      { label: "Commercial thinking", weights: { fintech: 2, energy: 2, product: 1 } },
      { label: "Clear writing for mixed audiences", weights: { product: 2, ai_policy: 1, privacy: 1 } },
      { label: "Negotiation and stakeholder handling", weights: { energy: 2, maritime: 2, fintech: 1 } },
    ],
  },
  {
    id: "q4",
    category: "Strengths",
    text: "How comfortable are you with technology tools?",
    options: [
      { label: "Very comfortable and curious", weights: { product: 2, fintech: 2, ai_policy: 1 } },
      { label: "Comfortable with guidance", weights: { privacy: 2, fintech: 1, energy: 1 } },
      { label: "Prefer legal-first work", weights: { energy: 2, maritime: 2, ai_policy: 1 } },
    ],
  },
  {
    id: "q5",
    category: "Values",
    text: "Which impact matters most to you?",
    options: [
      { label: "Safer, fairer AI systems", weights: { ai_policy: 3, privacy: 1 } },
      { label: "Financial inclusion and trusted payments", weights: { fintech: 3, privacy: 1 } },
      { label: "Reliable infrastructure and climate resilience", weights: { energy: 3, ai_policy: 1 } },
      { label: "Smoother trade and regional growth", weights: { maritime: 3, fintech: 1 } },
    ],
  },
  {
    id: "q6",
    category: "Values",
    text: "Which priority describes you best?",
    options: [
      { label: "High growth in fast-moving sectors", weights: { fintech: 2, product: 2 } },
      { label: "Public-interest and policy influence", weights: { ai_policy: 2, privacy: 2 } },
      { label: "Long-term sector specialization", weights: { energy: 2, maritime: 2 } },
    ],
  },
  {
    id: "q7",
    category: "Preferred Work Style",
    text: "Which environment fits your style?",
    options: [
      { label: "Cross-functional team with product managers and engineers", weights: { product: 3, fintech: 1 } },
      { label: "Advising regulators, NGOs, and institutions", weights: { ai_policy: 2, privacy: 2 } },
      { label: "Traditional legal teams on projects and transactions", weights: { energy: 2, maritime: 2 } },
    ],
  },
  {
    id: "q8",
    category: "Preferred Work Style",
    text: "What pace of work do you prefer?",
    options: [
      { label: "Fast iteration and frequent launches", weights: { product: 2, fintech: 2 } },
      { label: "Structured compliance and risk management", weights: { privacy: 2, ai_policy: 1, fintech: 1 } },
      { label: "Project-driven timelines", weights: { energy: 2, maritime: 2 } },
    ],
  },
  {
    id: "q9",
    category: "Interests",
    text: "Where do you want to work in the next 2 years?",
    options: [
      { label: "Tech startup or scale-up", weights: { product: 2, fintech: 2 } },
      { label: "Regulator, policy institute, or international body", weights: { ai_policy: 2, privacy: 2 } },
      { label: "Sector specialist practice (energy/maritime)", weights: { energy: 2, maritime: 2 } },
    ],
  },
  {
    id: "q10",
    category: "Strengths",
    text: "Which learning path sounds easiest to start now?",
    options: [
      { label: "AI policy and governance short courses", weights: { ai_policy: 2, privacy: 1 } },
      { label: "Privacy and compliance certifications", weights: { privacy: 2, fintech: 1 } },
      { label: "Fintech regulation and digital finance modules", weights: { fintech: 2, product: 1 } },
      { label: "Sector modules (energy transition or trade/logistics)", weights: { energy: 2, maritime: 2 } },
    ],
  },
];

const form = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const resultsSection = document.getElementById("results-section");
const resultsContainer = document.getElementById("results");

function renderQuestions() {
  const grouped = questions.reduce((acc, q) => {
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push(q);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([category, categoryQuestions]) => {
    const heading = document.createElement("h3");
    heading.textContent = category;
    heading.className = "category-title";
    form.appendChild(heading);

    categoryQuestions.forEach((question, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "question";

      const qTitle = document.createElement("p");
      qTitle.innerHTML = `<strong>${question.id.replace("q", "")}. ${question.text}</strong>`;
      wrapper.appendChild(qTitle);

      const options = document.createElement("div");
      options.className = "options";

      question.options.forEach((option) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = question.id;
        input.value = option.label;
        input.dataset.weights = JSON.stringify(option.weights);

        label.appendChild(input);
        label.append(` ${option.label}`);
        options.appendChild(label);
      });

      wrapper.appendChild(options);
      form.appendChild(wrapper);
    });
  });
}

function computeRecommendations() {
  const scores = Object.keys(careers).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  for (const question of questions) {
    const selected = form.querySelector(`input[name="${question.id}"]:checked`);
    if (!selected) {
      return { error: `Please answer question ${question.id.replace("q", "")}.` };
    }

    const weights = JSON.parse(selected.dataset.weights);
    Object.entries(weights).forEach(([careerKey, points]) => {
      scores[careerKey] += points;
    });
  }

  const ranked = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([careerKey, score]) => ({
      key: careerKey,
      score,
      ...careers[careerKey],
    }));

  return { ranked };
}

function buildExplanation(careerName, score) {
  if (score >= 16) {
    return `Strong fit: your answers repeatedly matched core patterns for ${careerName}.`;
  }
  if (score >= 12) {
    return `Good fit: several of your interests, strengths, and values align with ${careerName}.`;
  }
  return `Emerging fit: ${careerName} aligns with part of your profile and can grow with focused learning.`;
}

function renderResults(result) {
  resultsContainer.innerHTML = "";

  if (result.error) {
    const errorText = document.createElement("p");
    errorText.className = "error";
    errorText.textContent = result.error;
    resultsContainer.appendChild(errorText);
    resultsSection.classList.remove("hidden");
    return;
  }

  result.ranked.forEach((career, index) => {
    const card = document.createElement("article");
    card.className = "result-card";

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${career.name}`;

    const explanation = document.createElement("p");
    explanation.textContent = buildExplanation(career.name, career.score);

    const skillsTitle = document.createElement("p");
    skillsTitle.innerHTML = "<strong>Skills to start learning:</strong>";

    const skillList = document.createElement("ul");
    skillList.className = "skills";
    career.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillList.appendChild(li);
    });

    card.append(title, explanation, skillsTitle, skillList);
    resultsContainer.appendChild(card);
  });

  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth" });
}

renderQuestions();
submitBtn.addEventListener("click", () => {
  const result = computeRecommendations();
  renderResults(result);
});
