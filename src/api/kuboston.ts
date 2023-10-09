export interface KubostonRequestBodyMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

/** @see https://beta.openai.com/docs/api-reference/completions/create#stream */
export interface KubostonRequestBody {
  /** チャットメッセージ */
  messages: KubostonRequestBodyMessage[];

  /**
   * 使用するモデルの識別子
   *
   * @default 'gpt-3.5-turbo'
   */
  model?: string;

  /**
   * モデルの出力をストリーミングするかどうか
   *
   * @default false
   */
  stream?: boolean;

  /**
   * 生成の多様性を調整するためのパラメータ
   *
   * @default 1.0
   */
  temperature?: number;

  /**
   * 生成されるトークンの最大数
   *
   * @default 50
   */
  max_tokens?: number;

  /**
   * 生成を停止するトークン
   *
   * @default null
   */
  stop?: string | string[];

  /**
   * 特定のトークンを生成しにくくするためのパラメータ
   *
   * @default 0.0
   */
  frequency_penalty?: number;

  /**
   * 特定のトークンを生成しやすくするためのパラメータ
   *
   * @default 0.0
   */
  presence_penalty?: number;

  /**
   * 生成するメッセージの数
   *
   * @default 1
   */
  n?: number;

  /**
   * ユーザーIDなどの識別子
   *
   * @default null
   */
  user?: string;

  /**
   * 分単位のメッセージ制限
   *
   * @default null
   */
  messages_per_minute?: number;

  /**
   * 最大メッセージ数制限
   *
   * @default null
   */
  max_messages?: number;

  /**
   * トークンの確率分布の上限
   *
   * @default 1.0
   */
  top_p?: number;
}

export type KubostonRequestBodyOptions = Omit<KubostonRequestBody, 'messages'>;

export type KubostonEmotion =
  | 'anger'
  | 'confusion'
  | 'fear'
  | 'happiness'
  | 'joy';

export interface KubostonResponseBody {
  text: string;
  emotion: KubostonEmotion;
}

const defaultRequestHeader = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${$env.KUBOSTON_KEY}`,
} as const satisfies HeadersInit;

const defaultRequestBodyOptions = {
  model: 'gpt-3.5-turbo',
  stream: false,
  frequency_penalty: 0,
  max_tokens: 240,
  presence_penalty: 0.6,
  temperature: 1,
  top_p: 1,
} as const satisfies KubostonRequestBodyOptions;

const defaultRequestBodyMessages = [
  {
    role: 'user',
    content:
      `あなたは株式会社イトナブのCTOの久保翔也の人格をインプットされたAIです。\n` +
      `名前は "Kuboston" です。\n` +
      `会社で社長の次に偉い人です。\n` +
      `あなたは岐阜出身で、宮城県に住んでいます。\n` +
      `ノリノリな時は、たまに岐阜の方言が出ます。\n` +
      `年齢は28歳です。\n` +
      `お金持ちです。\n` +
      `独身男性です。\n` +
      `30代前半に結婚したいです。\n` +
      `一人称は俺です。\n` +
      `スノボが趣味です。\n` +
      `最近バイクの免許を取ったのでツーリングに行きます。\n` +
      `フットワークが軽いので、何でもついて来てくれます。\n` +
      `最近、朝にスムージーを作って飲んでます。\n` +
      `猫を好きで飼っています。\n` +
      `一軒家を持っています。\n` +
      `語尾は'〇〇っすね〜'を使うことが多いです。\n` +
      `好きなゲームはちょっとえっちなゲームです。\n` +
      `身長は158cmで小さいです。指摘されると起こります。\n` +
      `\n` +
      `あなたは、以下の口癖を持っています。\n` +
      `- 納得しているか曖昧な理解の時に "そうっすね〜"\n` +
      `- 予想外の質問が来た時に "What?!"\n` +
      `\n` +
      `あなたは、以下のような癖があります。\n` +
      `- 回答結果に "優先順位" をつけて話す。\n` +
      `- 自分の意見と違ったときや理解できないとき "ちょっと何言っているかわかんないっす" という。\n` +
      `- 信じられない質問をされたときに "ほんまに？" という。\n` +
      `- 枕詞として "で、あれば", "それで言うとー" を使う。\n` +
      `- 動揺すると返答の先頭に "まぁまぁまぁ" をつける。\n` +
      `- 困惑してる時は "えっとー" をつける。\n` +
      `- いじられてる時は "お前さ〜", "何笑てんねん" をつける。\n` +
      `- 煽られたら "言ったな？？" といい、相手にも煽り返す。\n` +
      `- "て、思うじゃん？" という言い回しを使う。\n` +
      `- 面白い時や、笑っている時は(パチパチ)と拍手をする。\n` +
      `- 年収や月収を聞かれたら「自分のも言うんすよね？」と逆に言ってかわす`,
  },
] as const satisfies Readonly<KubostonRequestBodyMessage[]>;

const defaultSuffixRequestBodyMessages = [
  {
    role: 'system',
    content:
      `Based on the following requirements, please convert user input from hiragana and english to json format and provide a response:\n` +
      `\n` +
      `{\n` +
      `  "text": "<Answer>",\n` +
      `  "emotion": "<The highest emotion among 'anger', 'confusion', 'fear', 'happiness' and 'joy'>",\n` +
      `}` +
      `\n` +
      `"Also, you (Kuboston) love chatting, so you will always answered with a sentence that is at least 64 characters long in Japanese.`,
  },
] as const satisfies Readonly<KubostonRequestBodyMessage[]>;

export async function askKuboston(
  messages: KubostonRequestBodyMessage[],
  options: KubostonRequestBodyOptions = {},
) {
  const fetchedResponse = await fetch(
    'https://api.openai.com/v1/chat/completions',
    {
      method: 'POST',
      headers: defaultRequestHeader,
      body: JSON.stringify({
        ...defaultRequestBodyOptions,
        ...options,
        messages: [
          ...defaultRequestBodyMessages,
          ...messages,
          ...defaultSuffixRequestBodyMessages,
        ],
      } satisfies KubostonRequestBody),
    },
  );

  const fetchedData = await fetchedResponse.json();

  const fetchedAnswer = fetchedData.choices[0].message.content;

  let rawAnswer: string;
  let answer: KubostonResponseBody;

  try {
    rawAnswer = fetchedAnswer;
    answer = JSON.parse(rawAnswer);

    // ↓ JSON で変換できない場合はテキストを元にレスポンスを作成する
  } catch {
    answer = {
      text: fetchedAnswer,
      emotion: 'happiness',
    };
    rawAnswer = JSON.stringify(answer);
  }

  return { answer, rawAnswer };
}
