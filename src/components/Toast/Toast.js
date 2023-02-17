import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, message }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { handleDismiss } = React.useContext(ToastContext);

  // NOTE: The classNames package could be helpful for this kind of situation
  // const variantStyles = classNames('Variant', {
  //   "notice": styles.notice,
  //   "warning": styles.warning,
  //   "success": styles.success,
  //   "error": styles.error
  // })

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => handleDismiss(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
