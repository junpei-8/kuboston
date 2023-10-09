import type { VoidProps } from 'solid-js';
import { kubostonStore } from '@/stores/kuboston';
import type KubostonCss from './Kuboston.css';
import { kubostonStatusStore } from './kuboston-status-store';

type Props = VoidProps<{ css: typeof KubostonCss }>;
export default function KubostonFace(props: Props) {
  return (
    <div
      classList={{
        [props.css.face]: true,
        [props.css.smallFace]: kubostonStore.getHasQuestioned(),
      }}
    >
      <img
        class={props.css.faceImage}
        alt={`Kuboston's "${kubostonStatusStore.get().emotion}" face`}
        src={kubostonStatusStore.get().face.src}
      />
    </div>
  );
}
