import { kubostonStore } from '@/stores/kuboston';
import Chats from './Chats';
import ChatsCss from './Chats.css';
import Top from './Top';

export default function Body() {
  return (
    <div class={ChatsCss.container}>
      {kubostonStore.getHasQuestioned() ? <Chats /> : <Top />}
    </div>
  );
}
