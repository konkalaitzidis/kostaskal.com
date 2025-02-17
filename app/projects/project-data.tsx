export interface Project {
  title: string;
  year: number;
  description: string;
  url_1: string;
  url_2: string;
  button_1_description?: string;
  button_2_description?: string;
  tags: any;
}

export const projects: Project[] = [
  {
    title: "Stereotactic Radiosurgery Brain Prognostic Index (SRSBPI)",
    year: 2024,
    description:
      "SRSBPI is a novel brain prognostic index for lung cancer patients with brain metastases, aiding in therapeutic strategies. Developed for the Department of Oncology-Pathology, Karolinska Institutet/Thoracic Oncology Center, Karolinska University Hospital.",
    url_1: "https://srs-bpi.org/",
    url_2: "https://github.com/konkalaitzidis/srsbpi",
    button_1_description: "View SRSBPI",
    button_2_description: "View GitHub Repository",
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
    button_2_description: "View GitHub Repository",
    tags: "Python, TensorFlow, Keras",
  },
  // {
  //   title: "Project Three",
  //   year: 2021,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
  //   url_1: "https://example.com/",
  // },
];
