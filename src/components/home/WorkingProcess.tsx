import { ClipboardList, FileSearch, MessageSquareText, Send } from 'lucide-react';
import styles from './WorkingProcess.module.css';

const steps = [
  {
    icon: ClipboardList,
    title: 'Select a service',
    description: 'Choose the formation, tax, compliance, or account support that fits your need.',
  },
  {
    icon: Send,
    title: 'Submit required information',
    description: 'Share the relevant details and documents through the guided request process.',
  },
  {
    icon: FileSearch,
    title: 'Review and processing',
    description: 'We review the submission, clarify missing items, and support the next actions.',
  },
  {
    icon: MessageSquareText,
    title: 'Updates and completion support',
    description: 'Receive progress communication and practical guidance for follow-up steps.',
  },
];

export function WorkingProcess() {
  return (
    <section className={styles.section} aria-labelledby="working-process-title">
      <div className={styles.inner}>
        <div className={styles.panel}>
          <div className={styles.earthStage} aria-hidden="true">
            <div className={styles.earthSphere}>
              <video
                className={styles.earthVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/videos/rotating-earth.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className={styles.panelContent}>
            <header className={styles.heading}>
              <span className={styles.eyebrow}>
                <span aria-hidden="true">{'//'}</span> How it works
              </span>
              <h2 id="working-process-title">
                Our Proven <span>Work Process</span>
              </h2>
            </header>

            <ol className={styles.steps}>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className={styles.stepCard}>
                    <div className={styles.stepNode}>
                      <span className={styles.iconShell}>
                        <Icon aria-hidden="true" />
                      </span>
                      <span className={styles.stepNumber}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
