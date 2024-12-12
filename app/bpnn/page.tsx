import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSc Thesis - BPNN",
  description: "Landing page for my MSc Thesis.",
};

export default function Thesis() {
  return (
    <section className="px-4 py-8 mx-auto max-w-4xl">
  
      <h1 className="mb-8 text-3xl font-bold tracking-tight">The Behavioural Prediction Neural Network (BPNN) toolkit</h1>
       {/* Cover Photo */}
      <div className="mb-8">
        <a href="/photos/cover_photo.png" target="_blank" rel="noopener noreferrer">
          <img
            src="/photos/cover_photo.png"
            alt="Cover Photo"
            className="w-full rounded-md shadow-md"
          />
        </a>
        <p className="text-center text-sm text-gray-500 mt-2">The BPNN analysis pipeline</p>
      </div>
      
      {/* Abstract Section */}
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <p className="text-sm text-gray-500"> 
            The BPNN was developed for the MSc Thesis "Direct Behaviour Prediction from Miniscope Calcium Imaging Using Convolutional Neural Networks" as part of the Health Informatics Master's Programme at the Karolinska Institute and Stockholm University.
        </p>
        <p className="text-sm text-gray-500">
            Keywords: <span className="font-semibold">Deep Learning</span>, <span className="font-semibold">Calcium Imaging</span>, <span className="font-semibold">Behavioural Analysis</span>
        </p>
      </div>

      <div className="mb-8">
        <p>
        To uncover neural dynamics underlying behavior we developed a Convolutional Neural Network (CNN) to analyze behavioral and neural imaging data 
        collected from cognitive experiments with mice. To read the full Thesis or view the code repository, please follow the links below.
        </p>
      </div>

      {/* Links */}
      <div className="mb-8">
        <a
          href="https://github.com/konkalaitzidis/bpnn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium"
        >
          View GitHub Repository
        </a>
        <a
          href="/konstantinos_kalaitzidis_MSc_thesis.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 ml-4 text-white bg-gray-600 hover:bg-gray-700 rounded-md font-medium"
        >
          View Full Thesis
        </a>
      </div>
        
      {/* Abstract */}
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <h2>Abstract</h2>
        <p>
          <strong>Background:</strong> Neurodegenerative diseases, including Parkinson's, continue to affect millions worldwide, driving neuroscience research to develop effective and personalized treatments. Researchers use neuroimaging techniques like calcium imaging in disease-relevant animal models to link neural activity with behavior.
        </p>
        <p>
          <strong>Aim:</strong> This thesis investigates the potential application of advanced deep learning techniques, such as convolutional neural networks, in improving calcium imaging analysis by reducing pre-processing requirements and directly arriving at behavioral correlations from animal neural activity.
        </p>
        <p>
          <strong>Methods:</strong> Previously collected calcium imaging datasets from behavioral assays of freely moving animals were repurposed and used to train a CNN-based tool called the BPNN (Behavioral Prediction Neural Network). The performance of the BPNN was compared and evaluated with current state-of-the-art methods applied in neuroscience research.
        </p>
        
        <div className="mb-8">
          <a href="/photos/BPNN_workflow.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/photos/BPNN_workflow.png"
              alt="Methods Visual"
              className="w-full rounded-md shadow-md"
            />
          </a>
            <p className="text-sm text-gray-500 mt-2 text-center">
            Illustration of the BPNN within a proposed behavioural analysis workflow.</p>
            <p className="text-sm text-gray-500 mt-2">
            <br />
            Note: Steps 1-2 relate to current processes of acquiring neural activity from calcium imaging. Steps 3-6 relate to the process involving the BPNN tool and how it processes neural data.
            <br />
            1. Injection of a virus responsible for expressing the GCaMP8 fluorescence indicator.
            <br />
            2. A. A mouse with an integrated miniscope for recording neural activity during behavioural assays.
            <br />
            B. An upward view of the Arrow Maze experiment (see Sec. 2.1.3.1) filmed by a camera while the mouse is performing the experiment.
            <br />
            3. Temporal alignment for calcium imaging frames (A) showing activated neurons with the behaviour annotation dataset (B).
            <br />
            4. Creating pairs of individual calcium imaging frames and the corresponding behaviour label at the specific time point during the experiment. This is used as the input dataset for the BPNN.
            <br />
            5. Split of the dataset into training and validation parts. The model is trained on the train set and evaluated on the validation set.
            <br />
            6. The BPNN produces an output in the form of a confusion matrix to demonstrate its ability to predict true labels from the dataset.
            </p>
        </div>
        <p>
          <strong>Results:</strong> Several experiments were performed to evaluate the BPNN's capacity to predict behavior compared to current methods. Despite issues related to overfitting, the BPNN produced similar or better results in predicting animal behavior, with an F1-score of 0.56 compared to the F1-score of 0.41 of an existing calcium imaging analysis tool concerning the same biological task.
        </p>
        <div className="mb-8">
        <a href="/photos/results.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/photos/results.png"
              alt="Results Visual"
              className="w-full rounded-md shadow-md"
            />
          </a>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Confusion matrix on the BPNNt when provided with one CI video as input with 6 behaviour labels.</p>
            <p className="text-sm text-gray-500 mt-2">
            <br />
            Note | A: This is the configuration of the BPNN that provides the best possible output out of all illustrated configurations. The confusion matrix allows us to visualise to what extent the model has been able to correctly predict mouse behaviour based on the provided data for validation. The F1-score per label has been added to demonstrate which behaviour classes the BPNNt is performing the best and for which ones the weakest.
            <br />
            B: The label class distribution from the calcium imaging dataset of Animal 3 and the experimental session from Day 11 is provided to give more context on how the percentage of each behaviour label (high or low representation) affects the performance (high or low F1-score) of the model.
            <br />
            </p>
        </div>
        <p>
          <strong>Conclusion:</strong> The best-performing configuration of the BPNN model demonstrated a limited yet plausible ability to establish links between neural activity and specific animal behaviors, indicating the potential applicability of CNNs in behavior prediction assignments. Further research is required to address current technical and biological limitations to reaffirm the postulations of this study.
        </p>
      </div>
      

      {/* Lab and Program Details */}
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <h2>Academic Information</h2>
        <p>
          This thesis was conducted under the supervision of Professor Konstantinos Meletis at the Karolinska Institute, Department of Neuroscience, 
          and Professor Panagiotis Papapetrou from the DSV Department at Stockholm University. Grade received: <strong>36/40</strong>. 
        </p>
      </div>

      {/* Future Directions
      <div className="prose prose-neutral dark:prose-invert mb-8">
        <h2>Future Directions</h2>
        <p>
          My work paves the way for further exploration of transfer learning techniques in neuroscience and the development of robust AI models 
          for analyzing neural and behavioral data.
        </p>
      </div> */}

      {/* Footer */}
      <footer className="prose prose-neutral dark:prose-invert">
        <p>
          For more information or inquiries about this work, feel free to <a href="/contact" className="text-blue-600 hover:underline">contact me</a>.
        </p>
      </footer>
    </section>
  );
}
