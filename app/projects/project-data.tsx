export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Stereotactic Radiosurgery Brain Prognostic Index (SRSBPI)",
    year: 2024,
    description:
      "SRSBPI is a novel brain prognostic index for lung cancer patients with brain metastases, aiding in therapeutic strategies. Developed for the Department of Oncology-Pathology, Karolinska Institutet/Thoracic Oncology Center, Karolinska University Hospital.",
    url: "https://srs-bpi.org/",
  },
  {
    title: "Behaviour Prediction Neural Network (BPNN) toolkit",
    year: 2023,
    description:
      "The BPNN is a neurobehavioural analysis deep learning tool developed at the Meletis Lab, Karolinska Institutet, as part of my Master Thesis titled 'Direct Behaviour Prediction from Miniscope Calcium Imaging Using Convolutional Neural Networks.'",
    url: "/bpnn",
  },
  // {
  //   title: "Project Three",
  //   year: 2021,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
  //   url: "https://example.com/",
  // },
];
