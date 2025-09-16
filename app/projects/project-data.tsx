export interface Project {
  title: string;
  year: number;
  description: string;
  url_1?: string;
  url_2?: string;
  url_3?: string;
  button_1_description?: string;
  button_2_description?: string;
  button_3_description?: string;
  tags: any;
}

export const projects: Project[] = [

  {
    title: "BioMotion: Motion Recognition App",
    year: 2025,
    description:
      "A real-time activity recognition pipeline leveraging machine learning to classify motion data and estimate MET (Metabolic Equivalent of Task) values. Built with a React Native front-end and a Python backend, the system streams accelerometer data, preprocesses it in sliding windows, and posts it to a trained model endpoint for inference. Results are displayed live, enabling continuous energy expenditure monitoring.",
    url_2: "https://github.com/konkalaitzidis/digital-health-app",
    button_2_description: "GitHub Repository",
    tags: "Machine Learning, React Native, FastAPI, Python",
  },
  {
    title: "CPR-AI: Clinical Pathway Recommender AI",
    year: 2025,
    description:
      "CPR-AI is a machine learning-based system for recommending clinical procedures based on patient demographics and conditions. The system uses a Random Forest model trained on clinical data to predict the most appropriate next procedure for a patient.",
    url_2: "https://github.com/konkalaitzidis/cpr-ai",
    button_2_description: "GitHub Repository",
    tags: "Machine Learning, Streamlit, Python",
  },
  {
    title: "Stereotactic Radiosurgery Brain Prognostic Index (SRSBPI)",
    year: 2024,
    description:
      "SRSBPI is a novel brain prognostic index for lung cancer patients with brain metastases, aiding in therapeutic strategies. Developed for the Department of Oncology-Pathology, Karolinska Institutet/Thoracic Oncology Center, Karolinska University Hospital.",
    button_1_description: "View SRSBPI",
    url_1: "https://srs-bpi.org/",
    button_2_description: "GitHub Repository",
    url_2: "https://github.com/konkalaitzidis/srsbpi",
    button_3_description: "Publication (2025)",
    url_3: "https://www.sciencedirect.com/science/article/pii/S0010482525011412?via%3Dihub",
    tags: "HTML/CSS, JavaScript",
  },
  {
    title: "Behaviour Prediction Neural Network (BPNN) toolkit",
    year: 2023,
    description:
      "The BPNN is a neurobehavioural analysis deep learning tool developed at the Meletis Lab, Karolinska Institutet, as part of my Master Thesis titled 'Direct Behaviour Prediction from Miniscope Calcium Imaging Using Convolutional Neural Networks.'",
    url_1: "/bpnn",
    url_2: "https://github.com/konkalaitzidis/bpnn",
    button_1_description: "View BPNN Toolkit",
    button_2_description: "GitHub Repository",
    tags: "Python, TensorFlow, Keras",
  }
];
