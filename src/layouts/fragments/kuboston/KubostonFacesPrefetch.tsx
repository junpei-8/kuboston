import { For } from 'solid-js';
import { kubostonStatusMap } from './kuboston-status-store';

export default function KubostonFacesPrefetch() {
  return (
    <div hidden>
      <For each={Object.values(kubostonStatusMap)}>
        {(status) => <img alt="" src={status.face.src} />}
      </For>
    </div>
  );
}
