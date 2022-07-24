/**
 * 申込み受付完了メールを送信する。
 * 
 * @param {Object[]} e 申込みフォームの回答結果
 */
function responsedForm(e) {
  const name = String(e.namedValues[Q_NAME]);
  const mail = String(e.namedValues[Q_MAIL]);
  const tel  = e.namedValues[Q_TEL];

  const message = createMessage(name, mail, tel);
  const subject = `保護者説明会へのお申し込みを承りました (Cafe de 寺子屋・${TERAKOYA})`;

  GmailApp.sendEmail(mail, subject, message, {from: MAIL});
}


/**
 * 申込み受付完了メールの本文を生成する。
 * 
 * @param {string} name 申込み者の名前
 * @param {string} mail 申込み者のメールアドレス
 * @param {string} tel 申込み者の電話番号
 * @return message 申込み受付完了メールの本文
 */
function createMessage(name, mail, tel) {
  let message = `${name} さま

保護者説明会へお申込みいただき、ありがとうございます。
以下の内容で承りました。当日はお待ちしております。

メールアドレス：${mail}
電話番号：${tel}

新型コロナの感染拡大状況によっては、延期またはオンラインで開催する場合がございます。
その場合は、ご回答いただいたメールアドレスにご連絡いたします。

当日も質疑応答の時間を設けておりますが、事前にご質問などございましたら、こちらのメールに返信する形でお気軽にお問い合わせくださいませ。

---

<保護者説明会 開催概要>
${OVERVIEW}

※こちらは自動送信メールです。

-- 
特定非営利活動法人Cafe de 寺子屋 
Mail : info@cafe-de-terakoya.or.jp 
TEL : 090-4113-1989（事務局） 
URL : https://cafe-de-terakoya.or.jp/`

  return message;
}
