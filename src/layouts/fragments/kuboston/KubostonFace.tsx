import css from './Kuboston.css';
import { kubostonStatusStore } from './kuboston-status-store';

export default function KubostonFace() {
  return (
    <img
      class={css.face}
      alt={`Kuboston's "${kubostonStatusStore.get().emotion}" face`}
      src={kubostonStatusStore.get().face.src}
    />
  );
}
