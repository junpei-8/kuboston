import { kubostonStore } from '@/stores/kuboston';
import Chats from './Chats';
import Top from './Top';

export default function Body() {
  return <div>{kubostonStore.getHasQuestioned() ? <Chats /> : <Top />}</div>;
}
