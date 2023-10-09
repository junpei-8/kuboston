import css from './Chats.css';

export default function Top() {
  return (
    <div class={css.top}>
      <h1 class={css.heading}>Kuboston</h1>
      <p class={css.description}>
        こんにちは、クボストンです。
        私は久保昇也の口調や表情、音声のデータを分析し久保昇也の完全なAI化に実現しました。
        クボストンに健康状態を教えてくれれば診断をしたりおしゃべりもでき
        実際に話しているかのような未来を感じとれます。
        さっそく久保昇也との会話をはじめましょう！
      </p>
    </div>
  );
}
